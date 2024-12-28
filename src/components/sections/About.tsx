'use client'

import Image from 'next/image'
import { MapPin, Building } from 'lucide-react'
import Picture from '@public/avatar/s-color-avatar.png'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Title from '../ui/Title'
import { GradientButton } from '../ui/Button'

export default function About() {
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/files/cv-ats.pdf'
    link.download = '[CV_ATS]_Mochammad_Ariel_Sulton.pdf'
    link.click()
    link.remove()
  }

  return (
    <Section id="about" className="bg-zinc-900 relative">
      <Title 
        title='ABOUT'
        description='Let me introduce briefly about myself'
      />
      
      <Container className="pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          <div className="flex justify-center">
            <div className="relative inline-block w-52 md:w-64 lg:w-96">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-red-500 rounded-full opacity-100 transition duration-200"></div>
              <div className="relative bg-zinc-900 rounded-full p-1">
                <Image
                  src={Picture}
                  alt="About"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-white">
            <h3 className="text-xl font-semibold mb-4 lg:mb-6 text-white">About Me</h3>
            <p className="text-gray-400 text-center lg:text-left max-w-prose">Hi there! My name is Mochammad Ariel Sulton. I&apos;m an Undergraduate Student of Applied Data Science at Electronic Engineering Polytechnic Institute of Surabaya.</p>

            <div className="hidden lg:flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-500" size={24} />
                <span className="text-gray-400">Surabaya, East Java, Indonesia</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Building className="text-purple-500" size={24} />
                <span className="text-gray-400">Electronic Engineering Polytechnic Institute of Surabaya</span>
              </div>
            </div>

            <GradientButton 
              content='Download CV' 
              onClick={downloadCV} 
              className='relative px-4 py-2 mt-4 lg:mt-6' 
              classSpanName='bg-zinc-900' 
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}