import { Code, Monitor, Smartphone, Users } from 'lucide-react'
import styles from './About.module.css'

const About = () => {
	const highlights = [
		{
			icon: Monitor,
			title: 'Zamonaviy Texnologiyalar',
			description:
				"React, Vite, Tailwind CSS kabi eng so'nggi frontend texnologiyalar bilan ishlash",
			color: 'blue',
		},
		{
			icon: Smartphone,
			title: 'Responsive Dizayn',
			description:
				'Barcha qurilmalarda mukammal ishlash uchun mobile-first yondashuv',
			color: 'green',
		},
		{
			icon: Users,
			title: 'Jamoaviy Ish',
			description:
				'Insonlar bilan tez kelishib ketish va jamoada samarali ishlash qobiliyati',
			color: 'purple',
		},
		{
			icon: Code,
			title: "Tez O'rganish",
			description: "Yangi texnologiyalar va frameworklarni tez o'zlashtirish",
			color: 'orange',
		},
	]

	const stats = [
		{ number: '6+', label: 'Oy Tajriba' },
		{ number: '10+', label: 'Loyihalar' },
		{ number: '100%', label: 'Mamnuniyat' },
		{ number: '8+', label: 'Texnologiya' },
	]

	return (
		<section id='about' className={`section ${styles.about}`}>
			<div className='container'>
				{/* Section Header */}
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>Men Haqimda</h2>
					<div className={styles.sectionDivider}></div>
					<p className={styles.sectionDescription}>
						Mening professional rivojlanish yo'li va har bir bosqichda erishgan
						natijalarim
					</p>
				</div>

				<div className={`grid lg-grid-cols-2 ${styles.aboutGrid}`}>
					{/* Left Column - Text Content */}
					<div className={styles.textContent}>
						<h3 className={styles.name}>Behruz To'ymurodov</h3>

						<div className={styles.bio}>
							<p>
								Men 6 oy davomida professional frontend dasturchi sifatida
								faoliyat yuritaman. KEMA FUTURE jamoasida admin panellar
								yaratish va turli xil vizitka saytlarni ishlab chiqish bo'yicha
								keng tajribaga egaman.
							</p>

							<p>
								Insonlar bilan tez kelishib ketaman va jamoaviy ishda faol
								qatnashaman. Zamonaviy texnologiyalar bilan ishlash va yangi
								g'oyalarni hayotga tatbiq etish mening asosiy kuchli
								tomonlarimdir.
							</p>

							<p>
								Har bir loyihani foydalanuvchi tajribasini yaxshilash va biznes
								maqsadlarini amalga oshirish uchun ishlab chiqaman. Kod sifati
								va performance ga alohida e'tibor beraman.
							</p>
						</div>

						{/* Stats */}
						<div className={styles.stats}>
							{stats.map((stat, index) => (
								<div key={index} className={styles.statItem}>
									<div className={styles.statNumber}>{stat.number}</div>
									<div className={styles.statLabel}>{stat.label}</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Column - Highlights */}
					<div className={styles.highlights}>
						{highlights.map((highlight, index) => {
							const IconComponent = highlight.icon
							return (
								<div
									key={index}
									className={`card ${styles.highlightCard}`}
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<div className={styles.highlightHeader}>
										<div
											className={`${styles.iconWrapper} ${
												styles[`icon${highlight.color}`]
											}`}
										>
											<IconComponent className={styles.icon} />
										</div>
										<h4 className={styles.highlightTitle}>{highlight.title}</h4>
									</div>
									<p className={styles.highlightDescription}>
										{highlight.description}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
