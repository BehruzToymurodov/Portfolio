import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../hooks/useTheme'
import { scrollToSection } from '../../utils/scrollUtils'
import styles from './Header.module.css'

const Header = () => {
	const activeSection = useActiveSection()
	const { theme, toggleTheme } = useTheme()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navigationItems = [
		{ id: 'home', label: 'Bosh sahifa' },
		{ id: 'about', label: 'Haqida' },
		{ id: 'projects', label: 'Loyihalar' },
		{ id: 'skills', label: "Ko'nikmalar" },
		{ id: 'experience', label: 'Tajriba' },
		{ id: 'contact', label: 'Aloqa' },
	]

	const handleNavClick = sectionId => {
		scrollToSection(sectionId)
		setIsMenuOpen(false)
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerContent}>
					{/* Logo */}
					<div className={styles.logo}>
						<button
							onClick={() => handleNavClick('home')}
							className={styles.logoButton}
						>
							<img src={logo} alt='' />
						</button>
					</div>

					{/* Desktop Navigation */}
					<nav className={styles.desktopNav}>
						{navigationItems.map(item => (
							<button
								key={item.id}
								onClick={() => handleNavClick(item.id)}
								className={`${styles.navLink} ${
									activeSection === item.id ? styles.navLinkActive : ''
								}`}
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* Controls */}
					<div className={styles.headerControls}>
						{/* Theme Toggle */}
						<button
							onClick={toggleTheme}
							className={styles.themeToggle}
							aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
						>
							{theme === 'dark' ? (
								<Sun className={styles.themeIcon} />
							) : (
								<Moon className={styles.themeIcon} />
							)}
						</button>

						{/* Mobile Menu Button */}
						<button
							onClick={toggleMenu}
							className={styles.mobileMenuButton}
							aria-label='Toggle menu'
						>
							{isMenuOpen ? (
								<X className={styles.menuIcon} />
							) : (
								<Menu className={styles.menuIcon} />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`${styles.mobileNav} ${
						isMenuOpen ? styles.mobileNavOpen : ''
					}`}
				>
					<nav className={styles.mobileNavContent}>
						{navigationItems.map(item => (
							<button
								key={item.id}
								onClick={() => handleNavClick(item.id)}
								className={`${styles.mobileNavLink} ${
									activeSection === item.id ? styles.mobileNavLinkActive : ''
								}`}
							>
								{item.label}
							</button>
						))}
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
