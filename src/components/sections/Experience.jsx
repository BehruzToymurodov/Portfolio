import { Briefcase, Calendar, GraduationCap, MapPin, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { experiences } from '../../data/experience'
import styles from './Experience.module.css'

const Experience = () => {
	const [scrollProgress, setScrollProgress] = useState(0)
	const sectionRef = useRef(null)
	const stackRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current || !stackRef.current) return

			const sectionRect = sectionRef.current.getBoundingClientRect()
			const sectionHeight = sectionRef.current.offsetHeight
			const windowHeight = window.innerHeight

			// Section ko'rinadigan qismi
			const sectionTop = sectionRect.top
			const sectionBottom = sectionRect.bottom

			// Agar section ko'rinmasa
			if (sectionBottom < 0 || sectionTop > windowHeight) {
				setScrollProgress(sectionTop > windowHeight ? 0 : 100)
				return
			}

			// Section ichidagi scroll progress
			const scrollStart = sectionTop
			const scrollRange = sectionHeight - windowHeight
			const currentScroll = -scrollStart

			const progress = Math.max(
				0,
				Math.min(100, (currentScroll / scrollRange) * 100)
			)
			setScrollProgress(progress)
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Initial call

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const getTypeIcon = type => {
		switch (type) {
			case 'full-time':
				return Briefcase
			case 'freelance':
				return Users
			case 'education':
				return GraduationCap
			default:
				return Briefcase
		}
	}

	const getTypeColor = type => {
		switch (type) {
			case 'full-time':
				return 'blue'
			case 'freelance':
				return 'green'
			case 'education':
				return 'purple'
			default:
				return 'blue'
		}
	}

	const getCardTransform = index => {
		const totalCards = experiences.length
		const cardProgress = Math.max(
			0,
			Math.min(100, (scrollProgress - index * 20) / 20)
		)

		// Dastlabki pozitsiya - barcha kartalar ustma-ust
		const initialY = index * 8 // Har bir karta 8px pastda
		const initialScale = 1 - index * 0.02 // Har birisi ozgina kichikroq
		const initialRotate = index * 1 // Ozgina burilish

		// Animatsiya davomida harakat
		const moveY = -(cardProgress * 120) // Yuqoriga harakat
		const scaleChange = cardProgress * 0.02 // Scale kattalashtirish
		const rotateChange = -(cardProgress * index * 1) // Burilishni kamaytirish

		return {
			transform: `
        translateY(${initialY + moveY}px) 
        scale(${initialScale + scaleChange}) 
        rotate(${initialRotate + rotateChange}deg)
      `,
			zIndex: totalCards - index + Math.floor(cardProgress / 20),
			opacity: Math.max(0.3, 1 - index * 0.1 + cardProgress * 0.01),
		}
	}

	return (
		<section
			id='experience'
			ref={sectionRef}
			className={`${styles.experience}`}
		>
			<div className='container'>
				{/* Section Header */}
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>Ish Tajribasi</h2>
					<div className={styles.sectionDivider}></div>
					<p className={styles.sectionDescription}>
						Mening professional rivojlanish yo'li va har bir bosqichda erishgan
						natijalarim
					</p>
				</div>

				{/* Card Stack Container */}
				<div className={styles.stackContainer}>
					<div ref={stackRef} className={styles.cardStack}>
						{experiences.map((experience, index) => {
							const TypeIcon = getTypeIcon(experience.type)
							const typeColor = getTypeColor(experience.type)
							const cardStyle = getCardTransform(index)

							return (
								<div
									key={experience.id}
									className={styles.experienceCard}
									style={cardStyle}
								>
									<div className={styles.cardContent}>
										{/* Card Header */}
										<div className={styles.cardHeader}>
											<div className={styles.cardHeaderLeft}>
												<div
													className={`${styles.typeIcon} ${
														styles[`icon${typeColor}`]
													}`}
												>
													<TypeIcon className={styles.icon} />
												</div>
												<div className={styles.titleWrapper}>
													<h3 className={styles.role}>{experience.role}</h3>
													<p className={styles.company}>{experience.company}</p>
												</div>
											</div>

											<div className={styles.cardHeaderRight}>
												{experience.current && (
													<span className={styles.currentBadge}>Hozirda</span>
												)}
												<div className={styles.meta}>
													<div className={styles.metaItem}>
														<Calendar className={styles.metaIcon} />
														<span>{experience.period}</span>
													</div>
													{experience.location && (
														<div className={styles.metaItem}>
															<MapPin className={styles.metaIcon} />
															<span>{experience.location}</span>
														</div>
													)}
												</div>
											</div>
										</div>

										{/* Description */}
										<p className={styles.description}>
											{experience.description}
										</p>

										{/* Technologies */}
										{experience.technologies && (
											<div className={styles.technologies}>
												{experience.technologies.map((tech, techIndex) => (
													<span key={techIndex} className={styles.techBadge}>
														{tech}
													</span>
												))}
											</div>
										)}

										{/* Card Footer */}
										<div className={styles.cardFooter}>
											<div className={styles.cardNumber}>
												{String(index + 1).padStart(2, '0')}
											</div>
											<div className={styles.experienceIcon}>
												{experience.icon}
											</div>
										</div>
									</div>

									{/* Card Shadow */}
									<div className={styles.cardShadow}></div>
								</div>
							)
						})}
					</div>
				</div>

				{/* Progress Indicator */}
				<div className={styles.progressIndicator}>
					<div
						className={styles.progressBar}
						style={{ width: `${scrollProgress}%` }}
					></div>
				</div>

				{/* Summary Stats */}
				<div className={styles.summaryStats}>
					<div className={styles.statCard}>
						<div className={styles.statNumber}>6+</div>
						<div className={styles.statLabel}>Oy Tajriba</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statNumber}>{experiences.length}</div>
						<div className={styles.statLabel}>Ish Joylari</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statNumber}>10+</div>
						<div className={styles.statLabel}>Loyihalar</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statNumber}>8+</div>
						<div className={styles.statLabel}>Texnologiyalar</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
