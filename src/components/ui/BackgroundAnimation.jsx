// src/components/ui/BackgroundAnimation.jsx - Optimized
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const BackgroundAnimation = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const updateMousePosition = e => {
			setMousePosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', updateMousePosition)
		return () => window.removeEventListener('mousemove', updateMousePosition)
	}, [])

	// Simplified particle animation for better performance
	const particleVariants = {
		animate: {
			y: [-15, -25, -15],
			x: [-8, 8, -8],
			opacity: [0, 0.6, 0],
			scale: [0, 1, 0],
			transition: {
				duration: 6,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
	}

	// Grid animation
	const gridVariants = {
		animate: {
			backgroundPosition: ['0px 0px', '40px 40px'],
			transition: {
				duration: 25,
				repeat: Infinity,
				ease: 'linear',
			},
		},
	}

	// Orb animation
	const orbVariants = {
		animate: {
			y: [0, -20, 0],
			x: [0, 10, 0],
			rotate: [0, 90, 180],
			scale: [1, 1.05, 1],
			transition: {
				duration: 10,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
	}

	// Mouse follower (sekinroq)
	const mouseFollowerVariants = {
		animate: {
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			transition: {
				type: 'spring',
				damping: 50,
				stiffness: 100,
			},
		},
	}

	return (
		<div
			className='fixed inset-0 pointer-events-none overflow-hidden'
			style={{ zIndex: 1 }}
		>
			{/* Animated Grid Background - kamroq opacity */}
			<motion.div
				className='absolute inset-0'
				style={{
					backgroundImage: `
						linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
						linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
					`,
					backgroundSize: '40px 40px',
				}}
				variants={gridVariants}
				animate='animate'
			/>

			{/* Mouse Follower - kamroq opacity */}
			<motion.div
				className='absolute w-32 h-32 rounded-full pointer-events-none'
				style={{
					background:
						'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
					filter: 'blur(30px)',
				}}
				variants={mouseFollowerVariants}
				animate='animate'
			/>

			{/* Floating Particles - kamroq soni */}
			{[...Array(8)].map((_, i) => (
				<motion.div
					key={i}
					className='absolute w-1.5 h-1.5 rounded-full'
					style={{
						background: `linear-gradient(45deg, 
							${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'}, 
							${i % 3 === 0 ? '#1d4ed8' : i % 3 === 1 ? '#7c3aed' : '#db2777'})`,
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}}
					variants={particleVariants}
					animate='animate'
					transition={{
						...particleVariants.animate.transition,
						delay: i * 0.8,
					}}
				/>
			))}

			{/* Gradient Orbs - kamroq opacity */}
			<motion.div
				className='absolute w-80 h-80 rounded-full'
				style={{
					background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
					filter: 'blur(120px)',
					opacity: 0.08,
					top: '15%',
					left: '5%',
				}}
				variants={orbVariants}
				animate='animate'
			/>

			<motion.div
				className='absolute w-64 h-64 rounded-full'
				style={{
					background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
					filter: 'blur(100px)',
					opacity: 0.06,
					top: '65%',
					right: '15%',
				}}
				variants={orbVariants}
				animate='animate'
				transition={{
					...orbVariants.animate.transition,
					delay: 3,
				}}
			/>

			<motion.div
				className='absolute w-48 h-48 rounded-full'
				style={{
					background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
					filter: 'blur(80px)',
					opacity: 0.05,
					bottom: '25%',
					left: '65%',
				}}
				variants={orbVariants}
				animate='animate'
				transition={{
					...orbVariants.animate.transition,
					delay: 6,
				}}
			/>

			{/* Geometric Shapes - kamroq soni */}
			{[...Array(4)].map((_, i) => (
				<motion.div
					key={`shape-${i}`}
					className='absolute'
					style={{
						width: `${15 + i * 8}px`,
						height: `${15 + i * 8}px`,
						background: `linear-gradient(45deg, 
							${i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}, 
							${i % 2 === 0 ? '#1d4ed8' : '#7c3aed'})`,
						borderRadius: i % 3 === 0 ? '50%' : '20%',
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						opacity: 0.05,
					}}
					animate={{
						rotate: [0, 360],
						scale: [1, 1.1, 1],
						opacity: [0.05, 0.15, 0.05],
					}}
					transition={{
						duration: 15 + i * 3,
						repeat: Infinity,
						ease: 'linear',
						delay: i * 1,
					}}
				/>
			))}

			{/* Floating Lines - kamroq soni */}
			{[...Array(3)].map((_, i) => (
				<motion.div
					key={`line-${i}`}
					className='absolute'
					style={{
						width: '150px',
						height: '1px',
						background:
							'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						transformOrigin: 'center',
					}}
					animate={{
						rotate: [0, 180, 360],
						x: [-30, 30, -30],
						opacity: [0, 0.3, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: i * 3,
					}}
				/>
			))}

			{/* Pulsing Dots - kamroq soni */}
			{[...Array(6)].map((_, i) => (
				<motion.div
					key={`dot-${i}`}
					className='absolute w-0.5 h-0.5 rounded-full'
					style={{
						background: '#3b82f6',
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						opacity: 0.4,
					}}
					animate={{
						scale: [0, 1, 0],
						opacity: [0, 0.4, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: i * 0.5,
					}}
				/>
			))}

			{/* Aurora Effect - juda kam opacity */}
			<motion.div
				className='absolute inset-0'
				style={{
					background: `
						radial-gradient(ellipse at 25% 60%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
						radial-gradient(ellipse at 75% 30%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
						radial-gradient(ellipse at 50% 80%, rgba(236, 72, 153, 0.02) 0%, transparent 50%)
					`,
				}}
				animate={{
					opacity: [0.3, 0.6, 0.3],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
		</div>
	)
}

export default BackgroundAnimation
