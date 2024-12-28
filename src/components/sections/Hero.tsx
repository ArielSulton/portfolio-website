'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Picture from '@public/avatar/s-avatar.png'
import Container from '../ui/Container'
import Section from '../ui/Section'
import { GradientButton } from '../ui/Button'
import { roles, socialLinks } from '@/data'

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="home" className="bg-black" includeNavbar={false}>
      <Container>
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 h-screen">
          <div className="flex flex-col justify-center items-center lg:items-start p-8 lg:p-0 row-start-1 lg:col-start-1 text-white">
            <p className="text-gray-400 text-center mb-2 lg:mb-4">Hi There!</p>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">I&apos;m Ariel Sulton</h1>
            <p className="mb-4 lg:mb-6">
              <TypeAnimation
                sequence={[
                  ...roles.flatMap((role) => [
                    role,
                    1000, // Pause for 1 second
                    '',
                    500   // Pause before next role
                  ])
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent"
              />
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="text-gray-400 hover:text-white transition-colors duration-300 mb-4 lg:mb-6"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <GradientButton 
              content='About Me' 
              onClick={scrollToAbout} 
              className='relative px-4 py-2' 
              classSpanName='bg-black' 
            />
          </div>

          <div className="flex justify-center items-end row-start-2 lg:row-start-1 lg:col-span-2 pt-0 lg:pt-24">
            <Image
              src={Picture}
              alt="Profile"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}