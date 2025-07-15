import { Briefcase, Calendar, GraduationCap, MapPin, Users } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

const ExperienceCard = ({ experience, index, isLeft }) => {
	const { darkMode } = useTheme()

	const getTypeIcon = type => {
		switch (type) {
			case 'full-time':
				return Briefcase
			case 'freelance':
				return Users
			case 'education':
				return GraduationCap
			default:
				return Briefcase
		}
	}

	const getTypeColor = type => {
		switch (type) {
			case 'full-time':
				return 'text-blue-500'
			case 'freelance':
				return 'text-green-500'
			case 'education':
				return 'text-purple-500'
			default:
				return 'text-blue-500'
		}
	}

	const TypeIcon = getTypeIcon(experience.type)

	return (
		<div
			className={`relative flex items-center ${
				isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
			} flex-col`}
		>
			{/* Timeline Node */}
			<div
				className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 ${
					experience.current
						? 'bg-primary-600 border-primary-200'
						: darkMode
						? 'bg-gray-700 border-gray-600'
						: 'bg-white border-gray-300'
				} flex items-center justify-center z-10`}
			>
				<TypeIcon
					className={`w-4 h-4 ${
						experience.current ? 'text-white' : getTypeColor(experience.type)
					}`}
				/>
			</div>

			{/* Card Content */}
			<div
				className={`w-full md:w-5/12 ml-16 md:ml-0 ${
					isLeft ? 'md:pr-8' : 'md:pl-8'
				}`}
			>
				<div
					className={`card card-hover animate-slide-up`}
					style={{ animationDelay: `${index * 150}ms` }}
				>
					{/* Header */}
					<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
						<div className='mb-2 md:mb-0'>
							<h3
								className={`text-xl font-semibold ${
									darkMode ? 'text-white' : 'text-gray-900'
								}`}
							>
								{experience.role}
							</h3>
							<p
								className={`text-lg font-medium ${
									darkMode ? 'text-primary-400' : 'text-primary-600'
								}`}
							>
								{experience.company}
							</p>
						</div>

						<div className='flex flex-col md:items-end space-y-1'>
							{experience.current && (
								<span className='px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full text-sm font-medium'>
									Hozirda
								</span>
							)}
							<div className='flex items-center space-x-4 text-sm'>
								<span
									className={`flex items-center space-x-1 ${
										darkMode ? 'text-gray-400' : 'text-gray-600'
									}`}
								>
									<Calendar className='w-4 h-4' />
									<span>{experience.period}</span>
								</span>
								{experience.location && (
									<span
										className={`flex items-center space-x-1 ${
											darkMode ? 'text-gray-400' : 'text-gray-600'
										}`}
									>
										<MapPin className='w-4 h-4' />
										<span>{experience.location}</span>
									</span>
								)}
							</div>
						</div>
					</div>

					{/* Description */}
					<p
						className={`mb-4 leading-relaxed ${
							darkMode ? 'text-gray-300' : 'text-gray-600'
						}`}
					>
						{experience.description}
					</p>

					{/* Technologies */}
					{experience.technologies && (
						<div className='flex flex-wrap gap-2'>
							{experience.technologies.map((tech, techIndex) => (
								<span
									key={techIndex}
									className={`px-3 py-1 rounded-full text-xs font-medium ${
										darkMode
											? 'bg-gray-700 text-gray-300'
											: 'bg-gray-100 text-gray-700'
									}`}
								>
									{tech}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ExperienceCard
