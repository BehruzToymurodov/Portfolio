import {
	Github,
	Linkedin,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	Send,
} from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

const Contact = () => {
	const { darkMode } = useTheme()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000))

		// Reset form
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: '',
		})
		setIsSubmitting(false)

		alert('Xabar muvaffaqiyatli yuborildi!')
	}

	const contactInfo = [
		{
			icon: Mail,
			label: 'Email',
			value: 'behruz@email.com',
			href: 'mailto:behruz@email.com',
		},
		{
			icon: Phone,
			label: 'Telefon',
			value: '+998 90 123 45 67',
			href: 'tel:+998901234567',
		},
		{
			icon: MapPin,
			label: 'Joylashuv',
			value: "Toshkent, O'zbekiston",
			href: '#',
		},
	]

	const socialLinks = [
		{
			icon: Github,
			label: 'GitHub',
			href: 'https://github.com/behruz',
			color: 'hover:text-gray-900',
		},
		{
			icon: Linkedin,
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/behruz',
			color: 'hover:text-blue-600',
		},
		{
			icon: MessageCircle, // Telegram o'rniga MessageCircle ishlatamiz
			label: 'Telegram',
			href: 'https://t.me/behruz',
			color: 'hover:text-blue-500',
		},
	]

	return (
		<section
			id='contact'
			className={`section-padding ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
		>
			<div className='container'>
				<div className='max-w-6xl mx-auto'>
					{/* Section Title */}
					<div className='text-center mb-16'>
						<h2
							className={`text-4xl md:text-5xl font-bold mb-4 ${
								darkMode ? 'text-white' : 'text-gray-900'
							}`}
						>
							Aloqa
						</h2>
						<div className='w-24 h-1 bg-primary-600 mx-auto mb-6'></div>
						<p
							className={`text-lg ${
								darkMode ? 'text-gray-300' : 'text-gray-600'
							} max-w-2xl mx-auto`}
						>
							Loyihangiz bo'yicha gaplashish yoki hamkorlik qilish uchun men
							bilan bog'laning. Har qanday savol yoki takliflaringizni
							tinglashga tayyorman.
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-12'>
						{/* Contact Information */}
						<div className='space-y-8'>
							<div>
								<h3
									className={`text-2xl font-semibold mb-6 ${
										darkMode ? 'text-white' : 'text-gray-900'
									}`}
								>
									Keling, Birga Ishlaylik!
								</h3>
								<p
									className={`text-lg mb-8 leading-relaxed ${
										darkMode ? 'text-gray-300' : 'text-gray-600'
									}`}
								>
									Sizning loyihangizni hayotga tatbiq etish uchun men bilan
									bog'laning. Zamonaviy texnologiyalar yordamida sizning
									g'oyalaringizni professional web saytga aylantirishga
									tayyorman.
								</p>
							</div>

							{/* Contact Details */}
							<div className='space-y-4'>
								{contactInfo.map((info, index) => {
									const IconComponent = info.icon
									return (
										<a
											key={index}
											href={info.href}
											className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
												darkMode
													? 'hover:bg-gray-800 text-gray-300 hover:text-white'
													: 'hover:bg-white hover:shadow-sm text-gray-600 hover:text-gray-900'
											}`}
										>
											<div className='p-3 bg-primary-100 dark:bg-primary-900 rounded-lg'>
												<IconComponent className='w-5 h-5 text-primary-600 dark:text-primary-400' />
											</div>
											<div>
												<div
													className={`text-sm font-medium ${
														darkMode ? 'text-gray-400' : 'text-gray-500'
													}`}
												>
													{info.label}
												</div>
												<div className='text-lg font-semibold'>
													{info.value}
												</div>
											</div>
										</a>
									)
								})}
							</div>

							{/* Social Links */}
							<div>
								<h4
									className={`text-lg font-semibold mb-4 ${
										darkMode ? 'text-white' : 'text-gray-900'
									}`}
								>
									Ijtimoiy Tarmoqlar
								</h4>
								<div className='flex space-x-4'>
									{socialLinks.map((social, index) => {
										const IconComponent = social.icon
										return (
											<a
												key={index}
												href={social.href}
												target='_blank'
												rel='noopener noreferrer'
												className={`p-3 rounded-lg transition-all duration-300 ${
													darkMode
														? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
														: 'bg-white text-gray-500 hover:text-gray-900 hover:shadow-md'
												} ${social.color}`}
												aria-label={social.label}
											>
												<IconComponent className='w-5 h-5' />
											</a>
										)
									})}
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className={`card`}>
							<h3
								className={`text-xl font-semibold mb-6 ${
									darkMode ? 'text-white' : 'text-gray-900'
								}`}
							>
								Xabar Yuborish
							</h3>

							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid md:grid-cols-2 gap-4'>
									<div>
										<label
											className={`block text-sm font-medium mb-2 ${
												darkMode ? 'text-gray-300' : 'text-gray-700'
											}`}
										>
											Ismingiz *
										</label>
										<input
											type='text'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
											required
											className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
												darkMode
													? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
													: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
											}`}
											placeholder='Ismingizni kiriting'
										/>
									</div>

									<div>
										<label
											className={`block text-sm font-medium mb-2 ${
												darkMode ? 'text-gray-300' : 'text-gray-700'
											}`}
										>
											Email *
										</label>
										<input
											type='email'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
											required
											className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
												darkMode
													? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
													: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
											}`}
											placeholder='emailingiz@email.com'
										/>
									</div>
								</div>

								<div>
									<label
										className={`block text-sm font-medium mb-2 ${
											darkMode ? 'text-gray-300' : 'text-gray-700'
										}`}
									>
										Mavzu
									</label>
									<input
										type='text'
										name='subject'
										value={formData.subject}
										onChange={handleInputChange}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
											darkMode
												? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
												: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
										}`}
										placeholder='Xabar mavzusi'
									/>
								</div>

								<div>
									<label
										className={`block text-sm font-medium mb-2 ${
											darkMode ? 'text-gray-300' : 'text-gray-700'
										}`}
									>
										Xabar *
									</label>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={5}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none ${
											darkMode
												? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
												: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
										}`}
										placeholder='Xabaringizni yozing...'
									></textarea>
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className={`w-full btn-primary flex items-center justify-center space-x-2 ${
										isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
									}`}
								>
									{isSubmitting ? (
										<>
											<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
											<span>Yuborilmoqda...</span>
										</>
									) : (
										<>
											<Send className='w-5 h-5' />
											<span>Xabar Yuborish</span>
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
