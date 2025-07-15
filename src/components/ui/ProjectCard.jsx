import { ExternalLink, Eye, Github, Star, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project, index }) => {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const handleImageLoad = () => {
		setImageLoaded(true)
	}

	const handleCardClick = () => {
		if (project.url) {
			window.open(project.url, '_blank', 'noopener,noreferrer')
		}
	}

	return (
		<div
			className={`${styles.projectCard} ${
				project.featured ? styles.featuredCard : ''
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Featured Badge */}
			{project.featured && (
				<div className={styles.featuredBadge}>
					<Star className={styles.featuredIcon} />
					<span>Featured</span>
				</div>
			)}

			{/* Project Image */}
			<div className={styles.imageContainer}>
				<div
					className={`${styles.imagePlaceholder} ${
						imageLoaded ? styles.imageLoaded : ''
					}`}
				>
					<div className={styles.loadingSpinner}></div>
				</div>
				<img
					src={project.image}
					alt={project.title}
					className={`${styles.projectImage} ${
						imageLoaded ? styles.imageVisible : ''
					}`}
					onLoad={handleImageLoad}
					loading='lazy'
				/>

				{/* Image Overlay */}
				<div
					className={`${styles.imageOverlay} ${
						isHovered ? styles.overlayVisible : ''
					}`}
				>
					<div className={styles.overlayButtons}>
						<button
							className={styles.overlayButton}
							onClick={e => {
								e.stopPropagation()
								window.open(project.url, '_blank', 'noopener,noreferrer')
							}}
							aria-label='View Project'
						>
							<Eye className={styles.overlayIcon} />
						</button>
						<button
							className={styles.overlayButton}
							onClick={e => {
								e.stopPropagation()
								window.open(project.github, '_blank', 'noopener,noreferrer')
							}}
							aria-label='View Source Code'
						>
							<Github className={styles.overlayIcon} />
						</button>
					</div>
				</div>

				{/* Category Tag */}
				<div className={styles.categoryTag}>{project.category}</div>
			</div>

			{/* Project Content */}
			<div className={styles.projectContent}>
				{/* Header */}
				<div className={styles.projectHeader}>
					<h3 className={styles.projectTitle}>{project.title}</h3>
					<div className={styles.projectLinks}>
						<a
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.projectLink}
							aria-label='View Project'
						>
							<ExternalLink className={styles.linkIcon} />
						</a>
						<a
							href={project.github}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.projectLink}
							aria-label='View Source'
						>
							<Github className={styles.linkIcon} />
						</a>
					</div>
				</div>

				{/* Description */}
				<p className={styles.projectDescription}>{project.description}</p>

				{/* Technologies */}
				<div className={styles.technologies}>
					{project.tech.map((tech, techIndex) => (
						<span
							key={techIndex}
							className={styles.techBadge}
							style={{ '--tech-index': techIndex }}
						>
							{tech}
						</span>
					))}
				</div>

				{/* Metrics */}
				<div className={styles.projectMetrics}>
					{Object.entries(project.metrics).map(([key, value], metricIndex) => (
						<div key={key} className={styles.metric}>
							<div className={styles.metricIcon}>
								{key.includes('performance') && (
									<TrendingUp className={styles.metricIconSvg} />
								)}
								{key.includes('satisfaction') && (
									<Star className={styles.metricIconSvg} />
								)}
								{key.includes('time') && (
									<Eye className={styles.metricIconSvg} />
								)}
								{key.includes('optimization') && (
									<TrendingUp className={styles.metricIconSvg} />
								)}
								{key.includes('engagement') && (
									<Eye className={styles.metricIconSvg} />
								)}
								{key.includes('conversion') && (
									<TrendingUp className={styles.metricIconSvg} />
								)}
								{key.includes('retention') && (
									<Star className={styles.metricIconSvg} />
								)}
							</div>
							<div className={styles.metricValue}>{value}</div>
							<div className={styles.metricLabel}>
								{key === 'performance'
									? 'Ishlash'
									: key === 'userSatisfaction'
									? 'Baholash'
									: key === 'loadTime'
									? 'Yuklash'
									: key === 'mobileOptimization'
									? 'Mobil'
									: key === 'engagement'
									? 'Faollik'
									: key === 'conversionRate'
									? 'Konversiya'
									: key === 'userRetention'
									? 'Qaytish'
									: key}
							</div>
						</div>
					))}
				</div>

				{/* Project Number */}
				<div className={styles.projectNumber}>
					{String(index + 1).padStart(2, '0')}
				</div>
			</div>

			{/* Hover Effect Background */}
			<div className={styles.hoverBackground}></div>
		</div>
	)
}

export default ProjectCard
