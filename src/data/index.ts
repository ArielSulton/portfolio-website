import { Github, Linkedin, Instagram, Mail, Code, Box, Database, FileCode, FileType2, Palette, Boxes, Server, Brain, Cloud, Terminal, GitBranch, Settings, Camera, BarChart, Globe } from 'lucide-react'

{ /* @/components/sections/Hero.tsx */ }

export const roles = [
  'Data Science Student',
  'Computer Vision Engineer',
  'Frontend Developer'
]

export const socialLinks = [
  { 
    Icon: Github, 
    href: "https://github.com/ArielSulton",
    ariaLabel: "GitHub Profile"
  },
  { 
    Icon: Linkedin, 
    href: "https://linkedin.com/in/arielsulton",
    ariaLabel: "LinkedIn Profile"
  },
  { 
    Icon: Instagram, 
    href: "https://instagram.com/arielsulton",
    ariaLabel: "Instagram Profile"
  },
  { 
    Icon: Mail, 
    href: "mailto:arieltree123@gmail.com",
    ariaLabel: "Send Email"
  }
]

{ /* @/components/sections/Skills.tsx */ }

export const categories = [
  {
    key: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'React JS', icon: Code },
      { name: 'Redux', icon: Database },
      { name: 'Next JS', icon: Boxes },
      { name: 'HTML', icon: FileCode },
      { name: 'CSS', icon: Palette },
      { name: 'JavaScript', icon: FileType2 },
      { name: 'Bootstrap', icon: Box },
      { name: 'Material UI', icon: Palette },
      { name: 'Flutter', icon: Code },
    ]
  },
  {
    key: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Box },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Python', icon: Code },
      { name: 'Django', icon: Box },
      { name: 'GraphQL', icon: GitBranch },
      { name: 'REST API', icon: Cloud },
    ]
  },
  {
    key: 'data_science',
    name: 'Data Science',
    skills: [
      { name: 'Python', icon: Code },
      { name: 'Pandas', icon: BarChart },
      { name: 'NumPy', icon: Brain },
      { name: 'TensorFlow', icon: Brain },
      { name: 'Scikit-learn', icon: Brain },
      { name: 'Jupyter', icon: FileCode },
      { name: 'R', icon: BarChart },
    ]
  },
  {
    key: 'computer_vision',
    name: 'Computer Vision',
    skills: [
      { name: 'OpenCV', icon: Camera },
      { name: 'PyTorch', icon: Brain },
      { name: 'TensorFlow', icon: Brain },
      { name: 'Image', icon: Camera },
      { name: 'Deep Learning', icon: Brain },
    ]
  },
  {
    key: 'other',
    name: 'Others',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Docker', icon: Box },
      { name: 'Linux', icon: Terminal },
      { name: 'AWS', icon: Cloud },
      { name: 'CI/CD', icon: Settings },
      { name: 'Agile', icon: Globe },
    ]
  }
]

{ /* @/components/sections/Projects.tsx */ }

export const projects = [
  {
    title: 'E-commerce Platform',
    date: 'December 2023',
    image: '/project1.jpg',
    link: 'https://github.com/ArielSulton/',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    description: 'E-commerce platform with real-time inventory management and payment integration',
    category: 'WEB'
  },
  {
    title: 'Real-time Chat App',
    date: 'November 2023',
    image: '/project2.jpg',
    link: 'https://github.com/ArielSulton/',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.IO'],
    description: 'Real-time chat application with group messaging and file sharing capabilities',
    category: 'WEB'
  },
  {
    title: 'Delivery Tracking',
    date: 'October 2023',
    image: '/project3.jpg',
    link: 'https://github.com/ArielSulton/',
    technologies: ['React Native', 'Firebase', 'Redux', 'Maps API'],
    description: 'Mobile delivery tracking app with real-time location updates',
    category: 'WEB'
  },
  {
    title: 'ERP System',
    date: 'September 2023',
    image: '/project4.jpg',
    link: 'https://github.com/ArielSulton/',
    technologies: ['Angular', 'TypeScript', 'NestJS', 'PostgreSQL'],
    description: 'Enterprise resource planning system for inventory management',
    category: 'DS'
  },
  {
    title: 'Document Management',
    date: 'August 2023',
    image: '/project5.jpg',
    link: 'https://github.com/ArielSulton/',
    technologies: ['Django', 'React', 'AWS', 'Docker'],
    description: 'Cloud-based document management system with OCR capabilities',
    category: 'ML'
  },
  {
    title: 'Fitness Tracker',
    date: 'July 2023',
    image: '/project6.jpg',
    link: 'https://github.com/ArielSulton/',
    technologies: ['Flutter', 'Firebase', 'GetX', 'ML Kit'],
    description: 'Cross-platform fitness tracking app with ML-powered pose detection',
    category: 'ML'
  }
]