'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Picture from '@public/test.jpeg'
import Container from '../ui/Container'
import Section from '../ui/Section'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('ALL')

  const projects = [
    {
      title: 'E-commerce Platform',
      date: 'December 2023',
      image: '/project1.jpg',
      link: 'https://github.com/ArielSulton/',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
      description: 'E-commerce platform with real-time inventory management and payment integration',
      category: 'WEB'
    },
    {
      title: 'Real-time Chat App',
      date: 'November 2023',
      image: '/project2.jpg',
      link: 'https://github.com/ArielSulton/',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.IO'],
      description: 'Real-time chat application with group messaging and file sharing capabilities',
      category: 'WEB'
    },
    {
      title: 'Delivery Tracking',
      date: 'October 2023',
      image: '/project3.jpg',
      link: 'https://github.com/ArielSulton/',
      technologies: ['React Native', 'Firebase', 'Redux', 'Maps API'],
      description: 'Mobile delivery tracking app with real-time location updates',
      category: 'WEB'
    },
    {
      title: 'ERP System',
      date: 'September 2023',
      image: '/project4.jpg',
      link: 'https://github.com/ArielSulton/',
      technologies: ['Angular', 'TypeScript', 'NestJS', 'PostgreSQL'],
      description: 'Enterprise resource planning system for inventory management',
      category: 'DS'
    },
    {
      title: 'Document Management',
      date: 'August 2023',
      image: '/project5.jpg',
      link: 'https://github.com/ArielSulton/',
      technologies: ['Django', 'React', 'AWS', 'Docker'],
      description: 'Cloud-based document management system with OCR capabilities',
      category: 'ML'
    },
    {
      title: 'Fitness Tracker',
      date: 'July 2023',
      image: '/project6.jpg',
      link: 'https://github.com/ArielSulton/',
      technologies: ['Flutter', 'Firebase', 'GetX', 'ML Kit'],
      description: 'Cross-platform fitness tracking app with ML-powered pose detection',
      category: 'ML'
    }
  ]

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handlePrevious = () => {
    const step = isLargeScreen ? getVisibleCount() : 1
    setStartIndex(prev => {
      const newIndex = prev - step
      return newIndex < 0 ? filteredProjects.length - Math.abs(newIndex % filteredProjects.length) : newIndex
    })
  }

  const handleNext = () => {
    const step = isLargeScreen ? getVisibleCount() : 1
    setStartIndex(prev => (prev + step) % filteredProjects.length)
  }

  const getVisibleCount = () => {
    const visibleCount = isLargeScreen ? Math.min(filteredProjects.length, 3) : 1
    return visibleCount
  }

  const filterUniqueProjects = (projects) => {
    const seen = new Set()
    return projects.filter(project => {
      if (seen.has(project.title)) return false
      seen.add(project.title)
      return true
    })
  }

  const filteredProjects = filterUniqueProjects(
    activeCategory === 'ALL' 
      ? projects 
      : projects.filter(project => project.category === activeCategory)
  )

  const getVisibleProjects = () => {
    const count = getVisibleCount()
    const visibleProjects = []

    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % filteredProjects.length
      const positiveIndex = index < 0 ? filteredProjects.length + index : index
      visibleProjects.push(filteredProjects[positiveIndex])
    }

    return visibleProjects
  }

  

  return (
    <Section id="projects" className="bg-zinc-900 relative">
      <div className="absolute top-8 lg:top-16 w-full px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="mb-2 lg:mb-4 text-3xl font-bold text-center text-white">PROJECTS</h2>
        <p className="text-center text-gray-400">Here are some of my projects that showcase various technologies and solutions</p>
      </div>

      <Container className="pt-16 lg:pt-24">
        <div className="mb-6 flex justify-center gap-4">
          {['ALL', 'DS', 'ML', 'WEB'].map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setStartIndex(0)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative px-12">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800/50 p-2 rounded-full hover:bg-zinc-700/50 transition-colors"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800/50 p-2 rounded-full hover:bg-zinc-700/50 transition-colors"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center">
            {getVisibleProjects().map((project, index) => (
              <div key={index} className="group relative p-[1px] rounded-xl min-h-[320px] w-full max-w-[320px] lg:max-w-full shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-red-500">
                <div className="bg-zinc-900 p-6 rounded-xl h-full w-full flex flex-col">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-[16/9] bg-zinc-900 mb-4"
                  >
                    <Image
                      src={Picture}
                      alt="Project preview"
                      className="w-full h-full object-cover rounded-lg transition-all hover:scale-[1.025] cursor-pointer"
                    />
                  </a>

                  <div className="flex flex-wrap gap-2 content-start">
                    {project.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex} 
                        className="flex items-center gap-1 px-2 py-1 rounded-lg bg-zinc-700/50 transition-all hover:scale-105 cursor-pointer"
                      >
                        <span className="text-xs font-medium text-white">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 border-t border-zinc-700 pt-2">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mb-2 text-sm text-gray-500">{project.date}</p>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: Math.ceil(filteredProjects.length / getVisibleCount()) }, (_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i * getVisibleCount())}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(startIndex / getVisibleCount()) === i 
                    ? 'bg-white' 
                    : 'bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
