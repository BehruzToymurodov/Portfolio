import { ChevronDown } from 'lucide-react'
import heroImage from '../../assets/hero_image.png'
import { useTheme } from '../../hooks/useTheme'
import { scrollToSection } from '../../utils/scrollUtils'
import styles from './Hero.module.css'

const Hero = () => {
	const { theme } = useTheme()

	return (
		<section id='home' className={styles.hero}>
			<div className='container'>
				<div className={styles.heroContent}>
					{/* Profile Section */}
					<div className={styles.profileSection}>
						<div className={styles.profileImageWrapper}>
							<img
								src={heroImage}
								alt="Behruz To'ymurodov"
								className={styles.profileImage}
							/>
						</div>
					</div>

					{/* Text Content */}
					<div className={styles.textContent}>
						<h1 className={styles.title}>
							<span className={styles.titleLine}>Behruz To'ymurodov</span>
							<span className={styles.titleGradient}>Frontend Developer</span>
						</h1>

						<p className={styles.subtitle}>
							<span className={styles.highlightText}>6 oy tajriba</span> bilan
							zamonaviy va interaktiv web saytlar yaratuvchi dasturchi. React,
							JavaScript va zamonaviy texnologiyalar yordamida sizning
							g'oyalaringizni hayotga tatbiq etaman.
						</p>

						{/* Stats */}
						<div className={styles.stats}>
							<div className={styles.statItem}>
								<div className={styles.statNumber}>6+</div>
								<div className={styles.statLabel}>Oy Tajriba</div>
							</div>
							<div className={styles.statItem}>
								<div className={styles.statNumber}>10+</div>
								<div className={styles.statLabel}>Loyihalar</div>
							</div>
							<div className={styles.statItem}>
								<div className={styles.statNumber}>8+</div>
								<div className={styles.statLabel}>Texnologiya</div>
							</div>
							<div className={styles.statItem}>
								<div className={styles.statNumber}>100%</div>
								<div className={styles.statLabel}>Mamnuniyat</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className={styles.actions}>
							<button
								onClick={() => scrollToSection('projects')}
								className='btn btn-primary btn-lg'
							>
								Loyihalarimni Ko'rish
							</button>

							<button
								onClick={() => scrollToSection('contact')}
								className='btn btn-outline btn-lg'
							>
								Aloqa Qilish
							</button>
						</div>
					</div>

					{/* Scroll Indicator */}
					<div className={styles.scrollIndicator}>
						<button
							onClick={() => scrollToSection('about')}
							className={styles.scrollButton}
							aria-label='Pastga scroll qiling'
						>
							<ChevronDown className={styles.scrollIcon} />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
