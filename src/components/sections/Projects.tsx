'use client'

import type { Project } from '@/types'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Picture from '@public/test.jpeg'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Title from '../ui/Title'
import Card from '../ui/Card'
import { NavButton } from '../ui/Button'
import { projects } from '@/data'

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('ALL')

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

  const filterUniqueProjects = (projects: Project[]): Project[] => {
    const seen = new Set<string>()
    return projects.filter((project: Project) => {
      if (seen.has(project.title)) return false
      seen.add(project.title)
      return true
    })
  }

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

  const getGridClassName = (visibleProjectsCount: number): string => {
    if (!isLargeScreen) return 'grid grid-cols-1'
    
    switch (visibleProjectsCount) {
      case 1:
        return 'grid grid-cols-1 max-w-[320px] mx-auto'
      case 2:
        return 'grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-[664px] mx-auto' // (320px * 2 + 24px gap)
      default:
        return 'grid lg:grid-cols-3 grid-cols-1 gap-6'
    }
  }

  const filteredProjects = filterUniqueProjects(
    activeCategory === 'ALL' 
      ? projects 
      : projects.filter(project => project.category === activeCategory)
  )

  const visibleProjects = getVisibleProjects()

  return (
    <Section id="projects" className="bg-zinc-900 relative">
      <Title 
        title='PROJECTS'
        description='I have develop some projects that showcase various technologies and solutions'
      />

      <Container className="pt-16 lg:pt-24">
        <div className="mb-6 flex justify-center">
          <div className="flex gap-0 overflow-hidden rounded-full bg-zinc-800">
            {['ALL', 'DS', 'ML', 'WEB'].map((category, index, arr) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setStartIndex(0)
                }}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-red-500 text-white'
                    : 'text-gray-400 hover:bg-zinc-700'
                } ${index === 0 ? 'rounded-l-full' : ''} ${
                  index === arr.length - 1 ? 'rounded-r-full' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative px-12">
          <NavButton 
            handlePrevious={handlePrevious} 
            handleNext={handleNext} 
          />

          {/* Projects Grid */}
          <div className={getGridClassName(visibleProjects.length)}>
            {visibleProjects.map((project, index) => (
              <Card key={index} className="bg-zinc-900">
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
              </Card>
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