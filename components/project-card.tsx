"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, LinkIcon } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    githubLink?: string
    liveLink?: string
    tags: string[]
  }
  onViewDetails: () => void
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border border-border cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onViewDetails}
    >
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {project.githubLink && (
            <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
          {project.liveLink && (
            <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="h-5 w-5" />
                <span className="sr-only">Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
