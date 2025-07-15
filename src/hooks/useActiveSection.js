import { useEffect, useState } from 'react'

export const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState('home')

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				'home',
				'about',
				'projects',
				'skills',
				'experience',
				'testimonials',
				'contact',
			]
			const scrollPosition = window.scrollY + 100

			sections.forEach(section => {
				const element = document.getElementById(section)
				if (element) {
					const offsetTop = element.offsetTop
					const offsetHeight = element.offsetHeight

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section)
					}
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Initial check

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return activeSection
}
