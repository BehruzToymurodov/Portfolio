import { useEffect, useRef, useState } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import styles from './Projects.module.css'

const Projects = () => {
	const [filter, setFilter] = useState('All')
	const [visibleProjects, setVisibleProjects] = useState([])
	const sectionRef = useRef(null)
	const projectRefs = useRef([])

	const categories = [
		'All',
		'Web Application',
		'Landing Page',
		'Educational Platform',
		'Corporate Website',
	]

	const filteredProjects =
		filter === 'All'
			? projects
			: projects.filter(project => project.category === filter)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const projectIndex = parseInt(entry.target.dataset.index)
						setVisibleProjects(prev => {
							if (!prev.includes(projectIndex)) {
								return [...prev, projectIndex].sort((a, b) => a - b)
							}
							return prev
						})
					}
				})
			},
			{
				threshold: 0.1,
				rootMargin: '-50px',
			}
		)

		projectRefs.current.forEach(ref => {
			if (ref) observer.observe(ref)
		})

		return () => observer.disconnect()
	}, [filteredProjects])

	const handleFilterChange = category => {
		setFilter(category)
		setVisibleProjects([]) // Reset visibility for new filtering
	}

	return (
		<section
			id='projects'
			ref={sectionRef}
			className={`section ${styles.projects}`}
		>
			<div className='container'>
				{/* Section Header */}
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>Mening Loyihalarim</h2>
					<div className={styles.sectionDivider}></div>
					<p className={styles.sectionDescription}>
						Men yaratgan va ishtirok etgan loyihalarning bir qismi. Har bir
						loyiha o'ziga xos texnologiyalar va yondashuvlar bilan amalga
						oshirilgan.
					</p>
				</div>

				{/* Filter Buttons */}
				<div className={styles.filterContainer}>
					{categories.map(category => (
						<button
							key={category}
							onClick={() => handleFilterChange(category)}
							className={`${styles.filterButton} ${
								filter === category ? styles.filterButtonActive : ''
							}`}
						>
							{category === 'All' ? 'Barchasi' : category}
						</button>
					))}
				</div>

				{/* Projects Count */}
				<div className={styles.projectsCount}>
					<span className={styles.countNumber}>{filteredProjects.length}</span>
					<span className={styles.countText}>ta loyiha topildi</span>
				</div>

				{/* Projects Grid */}
				<div className={styles.projectsGrid}>
					{filteredProjects.map((project, index) => (
						<div
							key={`${project.id}-${filter}`}
							ref={el => (projectRefs.current[index] = el)}
							data-index={index}
							className={`${styles.projectWrapper} ${
								visibleProjects.includes(index) ? styles.projectVisible : ''
							}`}
							style={{ '--animation-delay': `${index * 100}ms` }}
						>
							<ProjectCard project={project} index={index} />
						</div>
					))}
				</div>

				{/* No Projects Message */}
				{filteredProjects.length === 0 && (
					<div className={styles.noProjects}>
						<div className={styles.noProjectsIcon}>🔍</div>
						<h3 className={styles.noProjectsTitle}>Loyihalar topilmadi</h3>
						<p className={styles.noProjectsText}>
							Tanlangan kategoriyada loyihalar mavjud emas. Boshqa kategoriyani
							tanlang.
						</p>
					</div>
				)}

				{/* View All Button */}
				<div className={styles.viewAllContainer}>
					<button className={styles.viewAllButton}>
						<span>Barcha Loyihalarni Ko'rish</span>
						<div className={styles.buttonArrow}>→</div>
					</button>
					<p className={styles.viewAllText}>
						GitHub profilimda ko'proq loyihalarni ko'ring
					</p>
				</div>
			</div>
		</section>
	)
}

export default Projects
