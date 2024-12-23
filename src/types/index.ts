import { ReactNode } from 'react'

{/* @/components/sections */}

export interface Project {
  title: string
  date: string
  image: string
  link: string
  technologies: string[]
  description: string
  category: string
}

export interface ChatMessage {
  text: string
  isUser: boolean
}

{/* @/components/ui */}

export interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  includeNavbar?: boolean
}

export interface ContainerProps {
  children: ReactNode
  className?: string
}

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export interface TitleProps {
  title?: string
  description?: string
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface GradientButtonProps {
  content?: string;
  onClick?: () => void;
  className?: string;
  classSpanName?: string;
}

export interface NavButton {
  handlePrevious?: () => void;
  handleNext?: () => void;
}