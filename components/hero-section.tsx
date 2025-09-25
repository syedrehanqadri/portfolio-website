"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa" // Added FaGithub and FaLinkedin imports

export function HeroSection() {
  const name = "Syed Rehan Qadri"
  const tagline =
    "Passionate Full Stack Developer with expertise in designing, developing, and deploying scalable web applications."

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
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-background to-primary/10 overflow-hidden"
    >
      {/* Background animation/effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="30" fill="url(#gradient1)" className="animate-pulse-slow" />
          <circle cx="80" cy="70" r="40" fill="url(#gradient2)" className="animate-pulse-slow delay-1000" />
          <circle cx="50" cy="90" r="25" fill="url(#gradient1)" className="animate-pulse-slow delay-2000" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight mb-4 text-balance"
          variants={itemVariants}
        >
          Hello, I'm <span className="text-primary">{name}</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          variants={itemVariants}
        >
          {tagline}
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#projects">
              <Button size="lg" className="px-8 py-3 text-lg w-full sm:w-auto">
                View Projects
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-transparent w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/Rihan_cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 py-3 text-lg w-full sm:w-auto">
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-8">
          <motion.a
            href="https://github.com/syedrehanqadri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="h-8 w-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/syed-rehan-qadri-63135b381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="h-8 w-8" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
