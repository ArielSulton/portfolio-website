import type { SectionProps } from "@/types"

export default function Section({ 
  id, 
  className = '', 
  children,
  includeNavbar = true
}: SectionProps) {
  return (
    <section id={id} className={`${includeNavbar ? 'min-h-[calc(100vh-4rem)] scroll-mt-16' : 'min-h-screen scroll-mt-0'} flex items-center justify-center ${className}`}>
      {children}
    </section>
  )
}