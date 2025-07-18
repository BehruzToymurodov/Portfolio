import { useEffect, useState } from 'react'
import styles from './SkillCard.module.css'

const SkillCard = ({ skill, index, isVisible }) => {
	const [animatedLevel, setAnimatedLevel] = useState(0)
	const [isHovered, setIsHovered] = useState(false)

	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				setAnimatedLevel(skill.level)
			}, index * 100 + 300)

			return () => clearTimeout(timer)
		}
	}, [skill.level, index, isVisible])

	const getProgressColor = level => {
		if (level >= 95) return styles.expertLevel
		if (level >= 85) return styles.advancedLevel
		if (level >= 70) return styles.intermediateLevel
		return styles.beginnerLevel
	}

	const getLevelText = level => {
		if (level >= 95) return 'Expert'
		if (level >= 85) return 'Advanced'
		if (level >= 70) return 'Intermediate'
		return 'Beginner'
	}

	const getLevelDescription = level => {
		if (level >= 95) return "Professional daraja, boshqalarga o'rgatish"
		if (level >= 85) return 'Yuqori daraja, murakkab loyihalarda ishlash'
		if (level >= 70) return "O'rtacha daraja, asosiy vazifalarni bajarish"
		return "Boshlang'ich daraja, o'rganish jarayonida"
	}

	return (
		<div
			className={`${styles.skillCard} ${getProgressColor(skill.level)}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Skill Header */}
			<div className={styles.skillHeader}>
				<div className={styles.skillIcon}>
					<img src={skill.icon} alt={skill.name} className={styles.iconImage} />
				</div>
				<div className={styles.skillInfo}>
					<h3 className={styles.skillName}>{skill.name}</h3>
					<span className={styles.skillCategory}>{skill.category}</span>
				</div>
				<div className={styles.skillLevel}>
					<div className={styles.levelNumber}>{skill.level}%</div>
					<div className={styles.levelText}>{getLevelText(skill.level)}</div>
				</div>
			</div>

			{/* Progress Bar Container */}
			<div className={styles.progressContainer}>
				<div className={styles.progressTrack}>
					<div
						className={styles.progressBar}
						style={{
							width: `${animatedLevel}%`,
							transition: `width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
								index * 100
							}ms`,
						}}
					>
						<div className={styles.progressGlow}></div>
					</div>
				</div>

				{/* Progress Markers */}
				<div className={styles.progressMarkers}>
					<div
						className={`${styles.marker} ${
							animatedLevel >= 25 ? styles.markerActive : ''
						}`}
					>
						25%
					</div>
					<div
						className={`${styles.marker} ${
							animatedLevel >= 50 ? styles.markerActive : ''
						}`}
					>
						50%
					</div>
					<div
						className={`${styles.marker} ${
							animatedLevel >= 75 ? styles.markerActive : ''
						}`}
					>
						75%
					</div>
					<div
						className={`${styles.marker} ${
							animatedLevel >= 100 ? styles.markerActive : ''
						}`}
					>
						100%
					</div>
				</div>
			</div>

			{/* Skill Description */}
			<div
				className={`${styles.skillDescription} ${
					isHovered ? styles.descriptionVisible : ''
				}`}
			>
				<p className={styles.descriptionText}>
					{skill.description || getLevelDescription(skill.level)}
				</p>
			</div>

			{/* Hover Effects */}
			<div className={styles.cardEffects}>
				<div className={styles.shimmerEffect}></div>
				<div className={styles.glowEffect}></div>
			</div>

			{/* Skill Index */}
			<div className={styles.skillIndex}>
				{String(index + 1).padStart(2, '0')}
			</div>
		</div>
	)
}

export default SkillCard
