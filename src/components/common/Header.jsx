import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { scrollToSection } from '../../utils/scrollUtils'
import styles from './Header.module.css'
import ThemeToggle from './ThemeToggle'

const Header = () => {
	const activeSection = useActiveSection()
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
		<nav className={styles.nav}>
			<div className='container'>
				<div className={styles.navContainer}>
					{/* Logo */}
					<div className={styles.logo}>
						<button
							onClick={() => handleNavClick('home')}
							className={styles.logoButton}
						>
							Behruz T.
						</button>
					</div>

					{/* Desktop Navigation */}
					<div className={styles.desktopNav}>
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
					</div>

					{/* Controls */}
					<div className={styles.controls}>
						<ThemeToggle />

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
					<div className={styles.mobileNavContent}>
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
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
