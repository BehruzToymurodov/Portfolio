// Experience.jsx - To'g'irlangan Navigation
import {
	Briefcase,
	Calendar,
	ChevronLeft,
	ChevronRight,
	GraduationCap,
	MapPin,
	Users,
} from 'lucide-react'
import { useState } from 'react'
import { experiences } from '../../data/experience'
import styles from './Experience.module.css'

const Experience = () => {
	const [activeCard, setActiveCard] = useState(0)

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

	const getTypeClass = type => {
		switch (type) {
			case 'full-time':
				return styles.iconWork
			case 'freelance':
				return styles.iconFreelance
			case 'education':
				return styles.iconEducation
			default:
				return styles.iconWork
		}
	}

	const nextCard = () => {
		setActiveCard(prev => (prev < experiences.length - 1 ? prev + 1 : prev))
	}

	const prevCard = () => {
		setActiveCard(prev => (prev > 0 ? prev - 1 : prev))
	}

	const goToCard = index => {
		setActiveCard(index)
	}

	const getCardClassName = index => {
		if (index === activeCard) {
			return `${styles.cardWrapper} ${styles[`cardActive${index + 1}`]}`
		}
		return styles.cardWrapper
	}

	return (
		<section id='experience' className={styles.experience}>
			<div className={styles.container}>
				{/* Section Header */}
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>
						<span className={styles.titleGradient}>Ish Tajribasi</span>
					</h2>
					<div className={styles.sectionDivider}></div>
					<p className={styles.sectionDescription}>
						Mening professional rivojlanish yo'li va har bir bosqichda erishgan
						natijalarim. Tugmalar orqali boshqa ishlarimni ko'ring.
					</p>
				</div>

				{/* Cards Container - Fixed Height */}
				<div className={styles.cardsContainer}>
					{experiences.map((experience, index) => {
						const TypeIcon = getTypeIcon(experience.type)
						const typeClass = getTypeClass(experience.type)

						return (
							<div
								key={experience.id}
								className={getCardClassName(index)}
								onClick={() => goToCard(index)}
							>
								<div className={styles.cardContent}>
									{/* Card Header */}
									<div className={styles.cardHeader}>
										<div className={`${styles.typeIcon} ${typeClass}`}>
											<TypeIcon />
										</div>
										<div className={styles.cardInfo}>
											<h3 className={styles.role}>{experience.role}</h3>
											<p className={styles.company}>{experience.company}</p>

											<div className={styles.meta}>
												<div className={styles.metaItem}>
													<Calendar />
													<span>{experience.period}</span>
												</div>
												{experience.location && (
													<div className={styles.metaItem}>
														<MapPin />
														<span>{experience.location}</span>
													</div>
												)}
												{experience.current && (
													<div className={styles.currentBadge}>Hozirda</div>
												)}
											</div>
										</div>
									</div>

									{/* Description */}
									<p className={styles.description}>{experience.description}</p>

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
							</div>
						)
					})}
				</div>

				{/* Navigation Controls */}
				<div className={styles.navigationControls}>
					<button
						className={styles.navButton}
						onClick={prevCard}
						disabled={activeCard === 0}
						aria-label='Oldingi ish'
					>
						<ChevronLeft />
					</button>

					<div className={styles.cardIndicator}>
						{experiences.map((_, index) => (
							<div
								key={index}
								className={`${styles.indicatorDot} ${
									index === activeCard ? 'active' : ''
								}`}
								onClick={() => goToCard(index)}
								title={`Ish ${index + 1}`}
							/>
						))}
					</div>

					<button
						className={styles.navButton}
						onClick={nextCard}
						disabled={activeCard === experiences.length - 1}
						aria-label='Keyingi ish'
					>
						<ChevronRight />
					</button>
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
						<div className={styles.statNumber}>15+</div>
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
