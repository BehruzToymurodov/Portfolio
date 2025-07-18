// Experience.jsx - Stacking Cards with Scroll Animation
import { useEffect, useRef } from 'react'
import { experiences } from '../../data/experience'
import ExperienceCard from '../ui/ExperienceCard'
import styles from './Experience.module.css'

const Experience = () => {
	const cardsRef = useRef(null)
	const cardRefs = useRef([])

	useEffect(() => {
		const cards = cardRefs.current
		const cardsWrapper = cardsRef.current

		if (!cardsWrapper || cards.length === 0) return

		const numCards = cards.length

		// Set up initial styles for stacking effect
		cards.forEach((card, index) => {
			if (!card) return

			const index0 = index
			const index1 = index0 + 1

			// Set padding top for stacking effect
			card.style.paddingTop = `calc(${index1} * var(--card-top-offset))`
		})

		// Scroll animation handler
		const handleScroll = () => {
			const rect = cardsWrapper.getBoundingClientRect()
			const containerHeight = cardsWrapper.offsetHeight

			cards.forEach((card, index) => {
				if (!card) return

				const index0 = index
				const index1 = index0 + 1
				const reverseIndex0 = numCards - index1

				// Calculate scroll progress for this card
				const startOffset = (index0 / numCards) * containerHeight
				const endOffset = (index1 / numCards) * containerHeight

				const scrollProgress = Math.max(
					0,
					Math.min(1, (-rect.top - startOffset) / (endOffset - startOffset))
				)

				// Apply scale transformation
				const scale = 1 - 0.1 * reverseIndex0 * scrollProgress
				card.style.transform = `scale(${Math.max(0.7, scale)})`
			})
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Initial call

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<section id='experience' className={styles.experience}>
			{/* Header */}
			<header className={styles.header}>
				<div className={styles.headerContent}>
					<h1 className={styles.title}>
						<span className={styles.titleGradient}>Ish Tajribasi</span>
					</h1>
					<div className={styles.titleDivider}></div>
				</div>
			</header>

			{/* Main Cards Section */}
			<main className={styles.main}>
				<ul ref={cardsRef} id='cards' className={styles.cards}>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={experience.id}
							ref={el => (cardRefs.current[index] = el)}
							experience={experience}
							index={index}
						/>
					))}
				</ul>
			</main>

			{/* Footer Content */}
			<aside className={styles.footer}>
				<p>
					Mening professional rivojlanish yo'lim har bir bosqichda yangi
					ko'nikmalar va tajribalar bilan boyimoqda. Har bir ish joyi menga
					o'ziga xos qiymatli darslar berdi va men bu tajribalarni keyingi
					loyihalarda qo'llash imkoniyatiga ega bo'ldim.
				</p>

				<p>
					Frontend development sohasida doimiy o'rganish va rivojlanish jarayoni
					davom etmoqda. Zamonaviy texnologiyalar va eng yaxshi amaliyotlarni
					o'rganish orqali yuqori sifatli va foydalanuvchi-do'st veb-ilovalar
					yaratishga intilaman.
				</p>
			</aside>
		</section>
	)
}

export default Experience
