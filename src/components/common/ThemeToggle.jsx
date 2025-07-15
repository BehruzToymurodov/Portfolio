import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
	const { darkMode, toggleDarkMode } = useTheme()

	return (
		<button
			onClick={toggleDarkMode}
			className={styles.themeToggle}
			aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
			title={darkMode ? 'Light Mode' : 'Dark Mode'}
		>
			<div className={styles.iconWrapper}>
				{darkMode ? (
					<Sun className={styles.icon} />
				) : (
					<Moon className={styles.icon} />
				)}
			</div>
		</button>
	)
}

export default ThemeToggle
