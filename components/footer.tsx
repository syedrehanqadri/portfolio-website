"use client"

import { motion } from "framer-motion"
import { Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      className="bg-card text-muted-foreground py-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://www.linkedin.com/in/syed-rehan-qadri-63135b381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://github.com/syedrehanqadri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
        </div>
        <p className="text-sm">{"© 2025 Syed Rehan Qadri. All rights reserved."}</p>
      </div>
    </motion.footer>
  )
}
