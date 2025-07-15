import Footer from './components/common/Footer'
import Header from './components/common/Header'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import { useTheme } from './hooks/useTheme'

function App() {
	const { darkMode } = useTheme()

	return (
		<div
			className={`min-h-screen transition-colors duration-300 ${
				darkMode ? 'dark' : ''
			}`}
		>
			<div className='bg-gray-50 dark:bg-gray-900'>
				<Header />
				<main>
					<Hero />
					<About />
					<Experience />
					<Projects />
					<Skills />
					{/* <Testimonials /> */}
					<Contact />
				</main>
				<Footer />
			</div>
		</div>
	)
}

export default App
