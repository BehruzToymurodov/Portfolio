// ExperienceCard.jsx - Individual Card Component
import { Briefcase, Calendar, GraduationCap, MapPin, Users } from 'lucide-react'
import { forwardRef } from 'react'
import albisonLogo from '../../assets/albison_dark.png'
import freelanceLogo from '../../assets/freelance_dark.png'
import kemaLogo from '../../assets/kema_dark.png'
import styles from './ExperienceCard.module.css'

const ExperienceCard = forwardRef(({ experience, index }, ref) => {
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

	const getCardImage = (type, index) => {
		const images = {
			'full-time': kemaLogo,
			freelance: freelanceLogo,
			education: albisonLogo,
		}
		return images[type] || images['full-time']
	}

	const TypeIcon = getTypeIcon(experience.type)
	const typeClass = getTypeClass(experience.type)
	const cardImage = getCardImage(experience.type, index)

	return (
		<li ref={ref} className={styles.card}>
			<div className={styles.cardContent}>
				{/* Text Content */}
				<div className={styles.textContent}>
					{/* Header with Icon */}
					<div className={styles.cardHeader}>
						<div className={`${styles.typeIcon} ${typeClass}`}>
							<TypeIcon />
						</div>
						<div className={styles.cardInfo}>
							<h3 className={styles.role}>{experience.role}</h3>
							<p className={styles.company}>{experience.company}</p>

							{/* Meta Info */}
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
						<span className={styles.cardNumber}>
							{String(index + 1).padStart(2, '0')}
						</span>
						<span className={styles.experienceIcon}>{experience.icon}</span>
					</div>
				</div>

				{/* Image */}
				<figure className={styles.imageContainer}>
					<img
						src={cardImage}
						alt={`${experience.role} da ${experience.company}`}
						className={styles.cardImage}
					/>
				</figure>
			</div>
		</li>
	)
})

ExperienceCard.displayName = 'ExperienceCard'

export default ExperienceCard
