// Contact.jsx - Yangilangan
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
import styles from './Contact.module.css'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)

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
		await new Promise(resolve => setTimeout(resolve, 2000))

		// Reset form and show success
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: '',
		})
		setIsSubmitting(false)
		setShowSuccess(true)

		// Hide success message after 5 seconds
		setTimeout(() => {
			setShowSuccess(false)
		}, 5000)
	}

	const contactInfo = [
		{
			icon: Mail,
			label: 'Email',
			value: 'tuymuradov.bekhruzz@gmail.com',
			href: 'mailto:tuymuradov.bekhruzz@gmail.com',
		},
		{
			icon: Phone,
			label: 'Telefon',
			value: '+998 91 887 06 77',
			href: 'tel:+998918870677',
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
			href: 'https://github.com/BehruzToymurodov',
		},
		{
			icon: Linkedin,
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/bekhruz-tuymuradov',
		},
		{
			icon: MessageCircle,
			label: 'Telegram',
			href: 'https://t.me/Bekhruz_Tuymuradov',
		},
	]

	return (
		<section id='contact' className={styles.contact}>
			<div className={styles.container}>
				{/* Section Header */}
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>
						<span className={styles.titleGradient}>Aloqa</span>
					</h2>
					<div className={styles.sectionDivider}></div>
					<p className={styles.sectionDescription}>
						Loyihangiz bo'yicha gaplashish yoki hamkorlik qilish uchun men bilan
						bog'laning. Har qanday savol yoki takliflaringizni tinglashga
						tayyorman.
					</p>
				</div>

				<div className={styles.contactGrid}>
					{/* Contact Information */}
					<div className={styles.contactInfo}>
						<div className={styles.infoHeader}>
							<h3 className={styles.infoTitle}>Keling, Birga Ishlaylik!</h3>
							<p className={styles.infoDescription}>
								Sizning loyihangizni hayotga tatbiq etish uchun men bilan
								bog'laning. Zamonaviy texnologiyalar yordamida sizning
								g'oyalaringizni professional web saytga aylantirishga tayyorman.
							</p>
						</div>

						{/* Contact Details */}
						<div className={styles.contactDetails}>
							{contactInfo.map((info, index) => {
								const IconComponent = info.icon
								return (
									<a
										key={index}
										href={info.href}
										className={styles.contactItem}
									>
										<div className={styles.contactIcon}>
											<IconComponent />
										</div>
										<div className={styles.contactText}>
											<div className={styles.contactLabel}>{info.label}</div>
											<div className={styles.contactValue}>{info.value}</div>
										</div>
									</a>
								)
							})}
						</div>

						{/* Social Links */}
						<div>
							<h4
								className={styles.infoTitle}
								style={{ fontSize: '1.25rem', marginBottom: '1rem' }}
							>
								Ijtimoiy Tarmoqlar
							</h4>
							<div className={styles.socialLinks}>
								{socialLinks.map((social, index) => {
									const IconComponent = social.icon
									return (
										<a
											key={index}
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											className={styles.socialLink}
											aria-label={social.label}
										>
											<IconComponent />
										</a>
									)
								})}
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className={styles.contactForm}>
						<h3 className={styles.formTitle}>Xabar Yuborish</h3>

						<form onSubmit={handleSubmit}>
							<div className={styles.formGrid}>
								<div className={styles.formGroup}>
									<label className={styles.formLabel}>Ismingiz *</label>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
										required
										className={styles.formInput}
										placeholder='Ismingizni kiriting'
									/>
								</div>

								<div className={styles.formGroup}>
									<label className={styles.formLabel}>Email *</label>
									<input
										type='email'
										name='email'
										value={formData.email}
										onChange={handleInputChange}
										required
										className={styles.formInput}
										placeholder='emailingiz@email.com'
									/>
								</div>

								<div className={`${styles.formGroup} ${styles.formGridFull}`}>
									<label className={styles.formLabel}>Mavzu</label>
									<input
										type='text'
										name='subject'
										value={formData.subject}
										onChange={handleInputChange}
										className={styles.formInput}
										placeholder='Xabar mavzusi'
									/>
								</div>

								<div className={`${styles.formGroup} ${styles.formGridFull}`}>
									<label className={styles.formLabel}>Xabar *</label>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										required
										className={styles.formTextarea}
										placeholder='Xabaringizni yozing...'
									></textarea>
								</div>
							</div>

							<button
								type='submit'
								disabled={isSubmitting}
								className={styles.submitButton}
							>
								<div className={styles.buttonContent}>
									{isSubmitting ? (
										<>
											<div className={styles.loadingSpinner}></div>
											<span>Yuborilmoqda...</span>
										</>
									) : (
										<>
											<Send size={18} />
											<span>Xabar Yuborish</span>
										</>
									)}
								</div>
							</button>

							{showSuccess && (
								<div className={styles.successMessage}>
									✅ Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob
									beraman.
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
