"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Github, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectModalProps {
  project: {
    title: string
    description: string
    longDescription: string
    image: string
    githubLink?: string
    liveLink?: string
    tags: string[]
    screenshots?: string[]
  } | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-card text-foreground rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={700}
              height={400}
              className="w-full h-auto rounded-lg mb-6 object-cover"
            />

            <h3 className="text-3xl font-bold text-primary mb-4">{project.title}</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{project.longDescription}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-foreground mb-3">Screenshots</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <Image
                      key={index}
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-6">
              {project.githubLink && (
                <Button asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.liveLink && (
                <Button variant="outline" asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <LinkIcon className="h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
