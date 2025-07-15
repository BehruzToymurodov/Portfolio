import { ExternalLink, Quote, Star } from 'lucide-react'
import { useState } from 'react'
import styles from './TestimonialCard.module.css'

const TestimonialCard = ({ testimonial, index }) => {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const handleImageLoad = () => {
		setImageLoaded(true)
	}

	const renderStars = rating => {
		return [...Array(5)].map((_, i) => (
			<Star
				key={i}
				className={`${styles.star} ${
					i < rating ? styles.starFilled : styles.starEmpty
				}`}
			/>
		))
	}

	return (
		<div
			className={styles.testimonialCard}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Quote Icon */}
			<div className={styles.quoteContainer}>
				<Quote className={styles.quoteIcon} />
			</div>

			{/* Rating */}
			<div className={styles.rating}>
				<div className={styles.stars}>{renderStars(testimonial.rating)}</div>
				<span className={styles.ratingText}>
					{testimonial.rating}.0 dan 5.0
				</span>
			</div>

			{/* Testimonial Text */}
			<blockquote className={styles.testimonialText}>
				"{testimonial.text}"
			</blockquote>

			{/* Author Section */}
			<div className={styles.authorSection}>
				<div className={styles.authorImageContainer}>
					<div
						className={`${styles.imagePlaceholder} ${
							imageLoaded ? styles.imageLoaded : ''
						}`}
					>
						<div className={styles.loadingSpinner}></div>
					</div>
					<img
						src={testimonial.avatar}
						alt={testimonial.name}
						className={`${styles.authorImage} ${
							imageLoaded ? styles.imageVisible : ''
						}`}
						onLoad={handleImageLoad}
						loading='lazy'
					/>
					<div className={styles.imageFrame}></div>
				</div>

				<div className={styles.authorInfo}>
					<h4 className={styles.authorName}>{testimonial.name}</h4>
					<p className={styles.authorRole}>{testimonial.role}</p>
					{testimonial.company && (
						<p className={styles.authorCompany}>{testimonial.company}</p>
					)}
				</div>

				{/* Hover Action */}
				<div
					className={`${styles.hoverAction} ${
						isHovered ? styles.hoverActionVisible : ''
					}`}
				>
					<button className={styles.viewProfile} aria-label='View profile'>
						<ExternalLink className={styles.viewProfileIcon} />
					</button>
				</div>
			</div>

			{/* Card Effects */}
			<div className={styles.cardEffects}>
				<div className={styles.shimmerEffect}></div>
				<div className={styles.glowEffect}></div>
			</div>

			{/* Testimonial Index */}
			<div className={styles.testimonialIndex}>
				{String(index + 1).padStart(2, '0')}
			</div>

			{/* Verified Badge */}
			<div className={styles.verifiedBadge}>
				<div className={styles.verifiedIcon}>✓</div>
				<span className={styles.verifiedText}>Verified</span>
			</div>
		</div>
	)
}

export default TestimonialCard
