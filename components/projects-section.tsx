"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: "Smart Attendance System",
      description:
        "Developed an automated attendance management system using Python and MySQL. Improved accuracy and reduced manual effort by integrating database operations. Designed a simple GUI for teachers to manage student records.",
      longDescription:
        "This project involved the development of a comprehensive Smart Attendance System. The core functionality was built using Python for the backend logic and MySQL for robust database management. The system significantly improved attendance accuracy and reduced manual effort through automated processes. A user-friendly graphical user interface (GUI) was designed to allow teachers to easily manage student records, mark attendance, and generate reports. Key features included student registration, attendance marking, report generation, and data persistence.",
      image: "/smart-attendance-system.jpg",
      githubLink: "#",
      liveLink: "#",
      tags: ["Python", "MySQL", "GUI", "Database Management"],
      screenshots: ["/smart-attendance-system-screenshot-1.jpg", "/smart-attendance-system-screenshot-2.jpg"],
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and deployed a responsive personal portfolio to showcase skills and projects. Implemented interactive UI using JavaScript for smooth navigation. Focused on mobile-first design and cross-browser compatibility.",
      longDescription:
        "This project is a personal portfolio website designed to effectively showcase my skills, projects, and professional experience. It features a responsive design, ensuring optimal viewing across various devices, and was built with a mobile-first approach. Interactive UI elements, implemented using JavaScript, provide smooth navigation and an engaging user experience. The website is also optimized for cross-browser compatibility, ensuring a consistent look and feel across different web browsers. It serves as a dynamic resume and a platform to highlight my capabilities as a full-stack developer.",
      image: "/portfolio-website-showcase.png",
      githubLink: "#",
      liveLink: "#",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      screenshots: ["/portfolio-website-screenshot-1.jpg", "/portfolio-website-screenshot-2.jpg"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onViewDetails={() => setSelectedProject(project)} />
          ))}
        </motion.div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
