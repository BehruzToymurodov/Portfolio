export const scrollToSection = sectionId => {
	const element = document.getElementById(sectionId)
	if (element) {
		const offsetTop = element.offsetTop - 80 // Account for fixed header
		window.scrollTo({
			top: offsetTop,
			behavior: 'smooth',
		})
	}
}

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export const isElementInView = (element, offset = 100) => {
	if (!element) return false

	const rect = element.getBoundingClientRect()
	const windowHeight = window.innerHeight

	return rect.top < windowHeight - offset && rect.bottom > offset
}
