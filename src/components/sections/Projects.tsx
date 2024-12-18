'use client'

import { useState } from 'react'
import Image from 'next/image'
import Picture from '@public/vercel.svg'
import Container from '../ui/Container'
import Section from '../ui/Section'

interface Project {
  title: string
  description: string
  image: string
}

export default function Projects() {
  const [projects] = useState<Project[]>(
    Array(6).fill({
      title: 'Project',
      description: 'Changes every 5 seconds...',
      image: Picture,
    })
  )

  return (
    <Section id="projects" className="bg-zinc-900">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">PROJECTS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-zinc-800 text-white px-6 py-2 rounded-lg hover:bg-zinc-700 transition-colors">
            See Detail
          </button>
        </div>
      </Container>
    </Section>
  )
}