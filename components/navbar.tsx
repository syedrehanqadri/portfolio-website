"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { setTheme } = useTheme()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="text-2xl font-bold text-primary" prefetch={false}>
          Syed Rehan Qadri
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <motion.a
            href="#about"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            prefetch={false}
          >
            About
          </motion.a>
          <motion.a
            href="#skills"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            prefetch={false}
          >
            Skills
          </motion.a>
          <motion.a
            href="#projects"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            prefetch={false}
          >
            Projects
          </motion.a>
          <motion.a
            href="#services"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            prefetch={false}
          >
            Services
          </motion.a>
          <motion.a
            href="#testimonials"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            prefetch={false}
          >
            Testimonials
          </motion.a>
          <motion.a
            href="#contact"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            prefetch={false}
          >
            Contact
          </motion.a>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.nav>
  )
}
