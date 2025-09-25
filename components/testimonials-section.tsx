"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Syed is an exceptional developer with a keen eye for detail. His full-stack expertise brought our vision to life seamlessly.",
      author: "Client A",
      title: "CEO, Tech Solutions Inc.",
    },
    {
      quote: "Working with Syed was a pleasure. He delivered a high-quality mobile app that exceeded our expectations.",
      author: "Client B",
      title: "Project Manager, Innovate Corp.",
    },
    {
      quote:
        "His problem-solving skills are top-notch. Syed tackled complex challenges with ease and delivered outstanding results.",
      author: "Client C",
      title: "CTO, Global Ventures",
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          What Clients Say
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="relative h-64 flex items-center justify-center"
            initial="enter"
            animate="center"
            exit="exit"
            variants={carouselVariants}
            key={currentIndex}
            custom={currentIndex}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Card className="w-full h-full flex flex-col justify-center items-center p-6 text-center bg-card shadow-lg border border-border">
              <CardContent className="p-0">
                <p className="text-lg md:text-xl italic text-muted-foreground mb-4">
                  "{testimonials[currentIndex].quote}"
                </p>
                <p className="text-foreground font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].title}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
