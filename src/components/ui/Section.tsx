import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  includeNavbar?: boolean // Add option to include navbar height
}

export default function Section({ 
  id, 
  className = '', 
  children,
  includeNavbar = true // Default to true to maintain min-h-screen with navbar
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`${includeNavbar ? 'min-h-[calc(100vh-4rem)] scroll-mt-16' : 'min-h-screen scroll-mt-0'} flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  )
}