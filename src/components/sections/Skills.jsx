import { useEffect, useRef, useState } from 'react'
import { skillCategories, skills } from '../../data/skills'
import SkillCard from '../ui/SkillCard'
import styles from './Skills.module.css'

const Skills = () => {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [visibleSkills, setVisibleSkills] = useState([])
	const [animationTriggered, setAnimationTriggered] = useState(false)
	const sectionRef = useRef(null)
	const skillRefs = useRef([])

	const filteredSkills =
		selectedCategory === 'All'
			? skills
			: skills.filter(skill => skill.category === selectedCategory)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						if (entry.target === sectionRef.current && !animationTriggered) {
							setAnimationTriggered(true)
							// Trigger staggered animation for all skills
							filteredSkills.forEach((_, index) => {
								setTimeout(() => {
									setVisibleSkills(prev => [...prev, index])
								}, index * 150)
							})
						}
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
	}, [filteredSkills, animationTriggered])

	const handleCategoryChange = category => {
		setSelectedCategory(category)
		setVisibleSkills([])
		setAnimationTriggered(false)
	}

	const getSkillStats = () => {
		const totalSkills = skills.length
		const averageLevel = Math.round(
			skills.reduce((sum, skill) => sum + skill.level, 0) / totalSkills
		)
		const expertSkills = skills.filter(skill => skill.level >= 90).length
		const categoriesCount = skillCategories.length - 1 // Excluding 'All'

		return { totalSkills, averageLevel, expertSkills, categoriesCount }
	}

	const stats = getSkillStats()

	return (
		<section
			id='skills'
			ref={sectionRef}
			className={`section ${styles.skills}`}
		>
			<div className='container'>
				{/* Section Header */}
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>Ko'nikmalarim</h2>
					<div className={styles.sectionDivider}></div>
					<p className={styles.sectionDescription}>
						Men egalagan texnik ko'nikmalar va ularning darajasi. Har bir
						texnologiya bilan ishlash tajribam va bilim darajam ko'rsatilgan.
					</p>
				</div>

				{/* Skills Stats */}
				<div className={styles.skillsStats}>
					<div className={styles.statItem}>
						<div className={styles.statNumber}>{stats.totalSkills}+</div>
						<div className={styles.statLabel}>Texnologiyalar</div>
					</div>
					<div className={styles.statItem}>
						<div className={styles.statNumber}>{stats.averageLevel}%</div>
						<div className={styles.statLabel}>O'rtacha Daraja</div>
					</div>
					<div className={styles.statItem}>
						<div className={styles.statNumber}>{stats.expertSkills}</div>
						<div className={styles.statLabel}>Expert Daraja</div>
					</div>
					<div className={styles.statItem}>
						<div className={styles.statNumber}>{stats.categoriesCount}</div>
						<div className={styles.statLabel}>Kategoriyalar</div>
					</div>
				</div>

				{/* Category Filter */}
				<div className={styles.categoryFilter}>
					{skillCategories.map(category => (
						<button
							key={category}
							onClick={() => handleCategoryChange(category)}
							className={`${styles.categoryButton} ${
								selectedCategory === category ? styles.categoryButtonActive : ''
							}`}
						>
							{category === 'All' ? 'Barchasi' : category}
						</button>
					))}
				</div>

				{/* Skills Grid */}
				<div className={styles.skillsGrid}>
					{filteredSkills.map((skill, index) => (
						<div
							key={`${skill.id}-${selectedCategory}`}
							ref={el => (skillRefs.current[index] = el)}
							className={`${styles.skillWrapper} ${
								visibleSkills.includes(index) ? styles.skillVisible : ''
							}`}
							style={{ '--skill-index': index }}
						>
							<SkillCard
								skill={skill}
								index={index}
								isVisible={visibleSkills.includes(index)}
							/>
						</div>
					))}
				</div>

				{/* No Skills Message */}
				{filteredSkills.length === 0 && (
					<div className={styles.noSkills}>
						<div className={styles.noSkillsIcon}>🔍</div>
						<h3 className={styles.noSkillsTitle}>Ko'nikmalar topilmadi</h3>
						<p className={styles.noSkillsText}>
							Tanlangan kategoriyada ko'nikmalar mavjud emas.
						</p>
					</div>
				)}

				{/* Skills Progression */}
				<div className={styles.skillsProgression}>
					<h3 className={styles.progressionTitle}>Mening O'sish Yo'li</h3>
					<div className={styles.progressionContent}>
						<div className={styles.progressionItem}>
							<div className={styles.progressionIcon}>🌱</div>
							<div className={styles.progressionText}>
								<h4>Boshlang'ich (0-70%)</h4>
								<p>Asosiy tushunchalar va sintaksis</p>
							</div>
						</div>
						<div className={styles.progressionItem}>
							<div className={styles.progressionIcon}>🚀</div>
							<div className={styles.progressionText}>
								<h4>O'rtacha (70-85%)</h4>
								<p>Loyihalarda faol foydalanish</p>
							</div>
						</div>
						<div className={styles.progressionItem}>
							<div className={styles.progressionIcon}>⭐</div>
							<div className={styles.progressionText}>
								<h4>Yuqori (85-95%)</h4>
								<p>Professional daraja, boshqalarga o'rgatish</p>
							</div>
						</div>
						<div className={styles.progressionItem}>
							<div className={styles.progressionIcon}>👑</div>
							<div className={styles.progressionText}>
								<h4>Expert (95%+)</h4>
								<p>Chuqur bilim, optimization va best practices</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
