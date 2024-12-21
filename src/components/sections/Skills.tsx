'use client'

import { useState, useEffect } from 'react'
import { Code, Box, Database, FileCode, FileType2, Palette, Boxes, Server, Brain, Cloud, Terminal, GitBranch, Settings, Camera, BarChart, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '../ui/Container'
import Section from '../ui/Section'

export default function Skills() {
  const [startIndex, setStartIndex] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const categories = [
    {
      key: 'frontend',
      name: 'Frontend',
      skills: [
        { name: 'React JS', icon: Code },
        { name: 'Redux', icon: Database },
        { name: 'Next JS', icon: Boxes },
        { name: 'HTML', icon: FileCode },
        { name: 'CSS', icon: Palette },
        { name: 'JavaScript', icon: FileType2 },
        { name: 'Bootstrap', icon: Box },
        { name: 'Material UI', icon: Palette },
        { name: 'Flutter', icon: Code },
      ]
    },
    {
      key: 'backend',
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'Express', icon: Box },
        { name: 'PostgreSQL', icon: Database },
        { name: 'MongoDB', icon: Database },
        { name: 'Python', icon: Code },
        { name: 'Django', icon: Box },
        { name: 'GraphQL', icon: GitBranch },
        { name: 'REST API', icon: Cloud },
      ]
    },
    {
      key: 'data_science',
      name: 'Data Science',
      skills: [
        { name: 'Python', icon: Code },
        { name: 'Pandas', icon: BarChart },
        { name: 'NumPy', icon: Brain },
        { name: 'TensorFlow', icon: Brain },
        { name: 'Scikit-learn', icon: Brain },
        { name: 'Jupyter', icon: FileCode },
        { name: 'R', icon: BarChart },
      ]
    },
    {
      key: 'computer_vision',
      name: 'Computer Vision',
      skills: [
        { name: 'OpenCV', icon: Camera },
        { name: 'PyTorch', icon: Brain },
        { name: 'TensorFlow', icon: Brain },
        { name: 'Image', icon: Camera },
        { name: 'Deep Learning', icon: Brain },
      ]
    },
    {
      key: 'other',
      name: 'Others',
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'Docker', icon: Box },
        { name: 'Linux', icon: Terminal },
        { name: 'AWS', icon: Cloud },
        { name: 'CI/CD', icon: Settings },
        { name: 'Agile', icon: Globe },
      ]
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
    const step = isLargeScreen ? 3 : 1
    setStartIndex(prev => {
      const newIndex = prev - step
      return newIndex < 0 ? categories.length + newIndex : newIndex
    })
  }

  const handleNext = () => {
    const step = isLargeScreen ? 3 : 1
    setStartIndex(prev => (prev + step >= categories.length ? 0 : prev + step))
  }

  const getVisibleCategories = () => {
    const count = isLargeScreen ? 3 : 1
    const visibleCategories = []
  
    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % categories.length
      const positiveIndex = index < 0 ? categories.length + index : index
      visibleCategories.push(categories[positiveIndex])
    }
  
    return visibleCategories
  }

  return (
    <Section id="skills" className="bg-black relative">
      <div className="absolute top-8 lg:top-16 mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className='mb-2 lg:mb-4 text-3xl font-bold text-center text-white'>SKILLS</h2>
        <p className='text-center text-gray-400'>Here are some of my skills on which I have studied and practiced for the past 2 years</p>
      </div>
      
      <Container className="pt-16 lg:pt-24">
        <div className="relative px-12">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800/50 p-2 rounded-full hover:bg-zinc-700/50 transition-colors"
            aria-label="Previous categories"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800/50 p-2 rounded-full hover:bg-zinc-700/50 transition-colors"
            aria-label="Next categories"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Categories Grid */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center">
            {getVisibleCategories().map((category, index) => (
              <div key={index} className="group relative p-[1px] rounded-xl min-h-[320px] w-full max-w-[320px] shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-red-500">
                <div className="bg-black p-6 rounded-xl h-full w-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-zinc-700 pb-4">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 flex-grow content-start lg:grid-cols-none lg:flex lg:flex-wrap lg:justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black transition-all border border-zinc-700 hover:scale-105 cursor-pointer">
                        <skill.icon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-400 truncate lg:overflow-visible lg:text-clip lg:whitespace-normal">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: Math.ceil(categories.length / (isLargeScreen ? 3 : 1)) }, (_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i * (isLargeScreen ? 3 : 1))}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(startIndex / (isLargeScreen ? 3 : 1)) === i 
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