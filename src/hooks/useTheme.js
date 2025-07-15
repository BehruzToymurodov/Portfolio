import { useEffect, useState } from 'react'

export const useTheme = () => {
	const [darkMode, setDarkMode] = useState(() => {
		try {
			const saved = localStorage.getItem('portfolio-theme')
			return saved ? JSON.parse(saved) : false
		} catch (error) {
			console.warn('LocalStorage not available, using default theme')
			return false
		}
	})

	useEffect(() => {
		try {
			localStorage.setItem('portfolio-theme', JSON.stringify(darkMode))
		} catch (error) {
			console.warn('Could not save theme to localStorage')
		}

		if (darkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode])

	const toggleDarkMode = () => {
		setDarkMode(prev => !prev)
	}

	return { darkMode, toggleDarkMode }
}
