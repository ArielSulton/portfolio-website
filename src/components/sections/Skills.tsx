'use client'

import { useState, useEffect } from 'react'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Title from '../ui/Title'
import Card from '../ui/Card'
import { NavButton } from '../ui/Button'
import { categories } from '@/data'

export default function Skills() {
  const [startIndex, setStartIndex] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

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
      <Title 
        title='SKILLS'
        description='Here are some of my skills on which I have studied and practiced for the past 2 years'
      />
      
      <Container className="pt-16 lg:pt-24">
        <div className="relative px-12">
          <NavButton 
            handlePrevious={handlePrevious} 
            handleNext={handleNext} 
          />

          {/* Skill Categories Grid */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center">
            {getVisibleCategories().map((category, index) => (
              <Card key={index} className="bg-black">
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
              </Card>
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