'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Container from '../ui/Container'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black">
      <Container>
        <div className="flex justify-between h-16 items-center">
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
            <motion.button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'} md:hidden fixed top-16 left-0 w-full bg-black bg-opacity-80 shadow-lg transform transition-all duration-300`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="#home" className="text-gray-400 hover:text-white transition-colors" onClick={toggleMobileMenu}>Home</Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors" onClick={toggleMobileMenu}>About</Link>
            <Link href="#skills" className="text-gray-400 hover:text-white transition-colors" onClick={toggleMobileMenu}>Skills</Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors" onClick={toggleMobileMenu}>Projects</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors" onClick={toggleMobileMenu}>Contact</Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}
