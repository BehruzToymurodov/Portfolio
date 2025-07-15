import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../ui/TestimonialCard'
import styles from './Testimonials.module.css'

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)
	const [visibleTestimonials, setVisibleTestimonials] = useState([])
	const sectionRef = useRef(null)
	const intervalRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// Trigger staggered animation
						testimonials.forEach((_, index) => {
							setTimeout(() => {
								setVisibleTestimonials(prev => [...prev, index])
							}, index * 200)
						})
					}
				})
			},
			{
				threshold: 0.2,
				rootMargin: '-50px',
			}
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (isAutoPlaying) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex(prev => (prev + 1) % testimonials.length)
			}, 5000)
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isAutoPlaying])

	const handlePrevious = () => {
		setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
		setIsAutoPlaying(false)
	}

	const handleNext = () => {
		setCurrentIndex(prev => (prev + 1) % testimonials.length)
		setIsAutoPlaying(false)
	}

	const handleDotClick = index => {
		setCurrentIndex(index)
		setIsAutoPlaying(false)
	}

	const handleMouseEnter = () => {
		setIsAutoPlaying(false)
	}

	const handleMouseLeave = () => {
		setIsAutoPlaying(true)
	}

	const getAverageRating = () => {
		const total = testimonials.reduce(
			(sum, testimonial) => sum + testimonial.rating,
			0
		)
		return (total / testimonials.length).toFixed(1)
	}

	return (
		<section
			id='testimonials'
			ref={sectionRef}
			className={`section ${styles.testimonials}`}
		>
			<div className='container'>
				{/* Section Header */}
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>Mijozlar Fikri</h2>
					<div className={styles.sectionDivider}></div>
					<p className={styles.sectionDescription}>
						Men bilan ishlagan mijozlar va hamkasblarning fikr-mulohazalari.
						Ularning baholashi mening professional faoliyatimning sifatini
						ko'rsatadi.
					</p>
				</div>

				{/* Trust Indicators */}
				<div className={styles.trustIndicators}>
					<div className={styles.trustItem}>
						<div className={styles.trustNumber}>100%</div>
						<div className={styles.trustLabel}>Mijoz Mamnuniyati</div>
					</div>
					<div className={styles.trustItem}>
						<div className={styles.trustNumber}>{getAverageRating()}</div>
						<div className={styles.trustLabel}>O'rtacha Baholash</div>
					</div>
					<div className={styles.trustItem}>
						<div className={styles.trustNumber}>{testimonials.length}+</div>
						<div className={styles.trustLabel}>Mamnun Mijozlar</div>
					</div>
					<div className={styles.trustItem}>
						<div className={styles.trustNumber}>15+</div>
						<div className={styles.trustLabel}>Loyihalar</div>
					</div>
				</div>

				{/* Featured Testimonial */}
				<div
					className={styles.featuredTestimonial}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div className={styles.featuredQuote}>
						<Quote className={styles.quoteIcon} />
					</div>

					<div className={styles.featuredContent}>
						<blockquote className={styles.featuredText}>
							{testimonials[currentIndex].text}
						</blockquote>

						<div className={styles.featuredAuthor}>
							<img
								src={testimonials[currentIndex].avatar}
								alt={testimonials[currentIndex].name}
								className={styles.featuredAvatar}
							/>
							<div className={styles.featuredAuthorInfo}>
								<h4 className={styles.featuredName}>
									{testimonials[currentIndex].name}
								</h4>
								<p className={styles.featuredRole}>
									{testimonials[currentIndex].role}
								</p>
								<p className={styles.featuredCompany}>
									{testimonials[currentIndex].company}
								</p>
								<div className={styles.featuredRating}>
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`${styles.ratingStar} ${
												i < testimonials[currentIndex].rating
													? styles.ratingStarFilled
													: ''
											}`}
										/>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Navigation */}
					<div className={styles.navigation}>
						<button
							onClick={handlePrevious}
							className={styles.navButton}
							aria-label='Previous testimonial'
						>
							<ChevronLeft className={styles.navIcon} />
						</button>
						<button
							onClick={handleNext}
							className={styles.navButton}
							aria-label='Next testimonial'
						>
							<ChevronRight className={styles.navIcon} />
						</button>
					</div>

					{/* Dots Indicator */}
					<div className={styles.dotsContainer}>
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => handleDotClick(index)}
								className={`${styles.dot} ${
									index === currentIndex ? styles.dotActive : ''
								}`}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>

					{/* Auto-play Progress */}
					<div className={styles.progressContainer}>
						<div
							className={`${styles.progressBar} ${
								isAutoPlaying ? styles.progressActive : ''
							}`}
							key={currentIndex}
						/>
					</div>
				</div>

				{/* All Testimonials Grid */}
				<div className={styles.testimonialsGrid}>
					<h3 className={styles.gridTitle}>Barcha Sharhlar</h3>
					<div className={styles.gridContainer}>
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={`${styles.testimonialWrapper} ${
									visibleTestimonials.includes(index)
										? styles.testimonialVisible
										: ''
								}`}
								style={{ '--testimonial-index': index }}
							>
								<TestimonialCard testimonial={testimonial} index={index} />
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className={styles.ctaSection}>
					<div className={styles.ctaContent}>
						<h3 className={styles.ctaTitle}>
							Siz ham mamnun mijozlarimiz qatoriga qo'shiling!
						</h3>
						<p className={styles.ctaText}>
							Keling, sizning loyihangizni muvaffaqiyatli amalga oshiraylik.
							Professional yondashuv va sifatli natija kafolati.
						</p>
						<button
							onClick={() =>
								document
									.getElementById('contact')
									.scrollIntoView({ behavior: 'smooth' })
							}
							className={styles.ctaButton}
						>
							<span>Loyiha Boshlash</span>
							<div className={styles.ctaButtonIcon}>→</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
