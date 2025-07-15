import { Github, Heart, Linkedin, Mail } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { scrollToTop } from '../../utils/scrollUtils'

const Footer = () => {
	const { darkMode } = useTheme()

	const socialLinks = [
		{
			icon: Github,
			href: '#',
			label: 'GitHub',
		},
		{
			icon: Linkedin,
			href: '#',
			label: 'LinkedIn',
		},
		{
			icon: Mail,
			href: 'mailto:behruz@email.com',
			label: 'Email',
		},
	]

	return (
		<footer
			className={`section-padding ${
				darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
			} border-t`}
		>
			<div className='container'>
				<div className='flex flex-col items-center space-y-6'>
					{/* Logo */}
					<button
						onClick={scrollToTop}
						className={`text-2xl font-bold transition-colors hover:text-primary-600 ${
							darkMode ? 'text-white' : 'text-gray-900'
						}`}
					>
						Behruz T.
					</button>

					{/* Social Links */}
					<div className='flex space-x-6'>
						{socialLinks.map((social, index) => {
							const IconComponent = social.icon
							return (
								<a
									key={index}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
										darkMode
											? 'text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600'
											: 'text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
									}`}
									aria-label={social.label}
								>
									<IconComponent className='w-5 h-5' />
								</a>
							)
						})}
					</div>

					{/* Copyright */}
					<div
						className={`text-center ${
							darkMode ? 'text-gray-400' : 'text-gray-600'
						}`}
					>
						<p className='flex items-center justify-center space-x-2'>
							<span>&copy; 2024 Behruz To'ymurodov.</span>
							<span>Ishlab chiqildi</span>
							<Heart className='w-4 h-4 text-red-500' />
							<span>bilan</span>
						</p>
						<p className='text-sm mt-2'>Barcha huquqlar himoyalangan.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
