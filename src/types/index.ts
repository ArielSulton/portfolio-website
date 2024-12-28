import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

{/* @/app/api/chatbot */}

export type ChatMessage = {
  message: string
}

export type ChatResponse = {
  response: string
  error?: string
  source?: 'custom' | 'ai'
}

{/* @/components/sections */}

export interface Project {
  title: string
  date: string
  image: StaticImageData
  link: string
  technologies: string[]
  description: string
  categories: string[]
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'error';
  content: string;
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