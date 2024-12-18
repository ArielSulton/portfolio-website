import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    github: "https://github.com",
    link: "https://demo.com"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using DALL-E API",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    tags: ["React", "OpenAI", "Tailwind CSS"],
    github: "https://github.com"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop",
    tags: ["React", "Firebase", "Material-UI"],
    link: "https://demo.com"
  }
];