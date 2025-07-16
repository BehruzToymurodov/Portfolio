import { useEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState(() => {
		try {
			// Check localStorage first
			const savedTheme = localStorage.getItem('portfolio-theme')
			if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
				return savedTheme
			}

			// Check system preference
			if (
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			) {
				return 'dark'
			}

			return 'light'
		} catch (error) {
			console.warn('LocalStorage not available, using default theme')
			return 'light'
		}
	})

	useEffect(() => {
		try {
			// Save to localStorage
			localStorage.setItem('portfolio-theme', theme)
		} catch (error) {
			console.warn('Could not save theme to localStorage')
		}

		// Apply theme to document
		document.documentElement.setAttribute('data-theme', theme)

		// Update document class for compatibility
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	useEffect(() => {
		try {
			// Listen for system theme changes
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

			const handleChange = e => {
				// Only update if user hasn't manually set a preference
				const savedTheme = localStorage.getItem('portfolio-theme')
				if (!savedTheme) {
					setTheme(e.matches ? 'dark' : 'light')
				}
			}

			// Add event listener
			if (mediaQuery.addEventListener) {
				mediaQuery.addEventListener('change', handleChange)
			} else {
				// Fallback for older browsers
				mediaQuery.addListener(handleChange)
			}

			return () => {
				if (mediaQuery.removeEventListener) {
					mediaQuery.removeEventListener('change', handleChange)
				} else {
					mediaQuery.removeListener(handleChange)
				}
			}
		} catch (error) {
			console.warn('Could not listen for system theme changes')
		}
	}, [])

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	const setLightTheme = () => {
		setTheme('light')
	}

	const setDarkTheme = () => {
		setTheme('dark')
	}

	return {
		theme,
		darkMode: theme === 'dark', // Compatibility with old code
		isDark: theme === 'dark',
		isLight: theme === 'light',
		toggleTheme,
		toggleDarkMode: toggleTheme, // Compatibility with old code
		setLightTheme,
		setDarkTheme,
	}
}
