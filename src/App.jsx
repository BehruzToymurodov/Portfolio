// App.jsx - Testimonials siz va Blur Effects bilan
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import { useTheme } from './hooks/useTheme'
import './styles/components.css'
import './styles/global.css'
import './styles/variables.css'

function App() {
	const { darkMode } = useTheme()

	return (
		<div>
			<Header />

			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Experience />
				<Contact />
			</main>

			<Footer />
		</div>
	)
}

export default App
