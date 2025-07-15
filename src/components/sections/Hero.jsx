import { ArrowDown, Download } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { scrollToSection } from '../../utils/scrollUtils'

const Hero = () => {
	const { darkMode } = useTheme()

	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center section-padding'
		>
			<div className='container'>
				<div className='max-w-4xl mx-auto text-center'>
					{/* Profile Image */}
					<div className='mb-8 animate-fade-in'>
						<img
							src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
							alt="Behruz To'ymurodov"
							className='w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-primary-500 shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>

					{/* Main Heading */}
					<h1
						className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up ${
							darkMode ? 'text-white' : 'text-gray-900'
						}`}
					>
						<span className='block'>Frontend</span>
						<span className='text-gradient'>Developer</span>
					</h1>

					{/* Subtitle */}
					<p
						className={`text-xl md:text-2xl mb-8 animate-slide-up animation-delay-200 ${
							darkMode ? 'text-gray-300' : 'text-gray-600'
						}`}
					>
						Zamonaviy va interaktiv web saytlar yaratuvchi
					</p>

					{/* Description */}
					<div
						className={`text-lg mb-8 animate-slide-up animation-delay-400 ${
							darkMode ? 'text-gray-400' : 'text-gray-700'
						}`}
					>
						<p className='mb-2'>6 oy ish tajribasiga ega</p>
						<p className='mb-2'>KEMA FUTURE jamoasida frontend dasturchi</p>
						<p>Turli xil vizitka saytlarni yaratish bo'yicha tajriba</p>
					</div>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-600'>
						<button
							onClick={() => scrollToSection('projects')}
							className='btn-primary flex items-center justify-center space-x-2 group'
						>
							<span>Loyihalarimni Ko'rish</span>
							<ArrowDown className='w-5 h-5 group-hover:translate-y-1 transition-transform' />
						</button>

						<button
							onClick={() => scrollToSection('contact')}
							className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
								darkMode
									? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
									: 'btn-secondary'
							}`}
						>
							<span>Aloqa</span>
						</button>

						<a
							href='#'
							download
							className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
								darkMode
									? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
									: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
							}`}
						>
							<Download className='w-5 h-5' />
							<span>CV Yuklab Olish</span>
						</a>
					</div>

					{/* Scroll Indicator */}
					<div className='animate-bounce'>
						<button
							onClick={() => scrollToSection('about')}
							className={`mx-auto block ${
								darkMode ? 'text-gray-400' : 'text-gray-500'
							}`}
						>
							<ArrowDown className='w-6 h-6' />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
