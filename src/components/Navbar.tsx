'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Container from './ui/Container'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={"fixed top-0 w-full z-50 transition-all duration-300 bg-black"}>
      <Container>
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            &lt;Ariel Sulton /&gt;
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black shadow-lg">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link 
                href="#home" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link 
                href="#skills" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                Skills
              </Link>
              <Link 
                href="#projects" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}