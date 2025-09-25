"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SkillProgressBarProps {
  skill: string
  percentage: number
  delay?: number
}

export function SkillProgressBar({ skill, percentage, delay = 0 }: SkillProgressBarProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        delay: delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm font-medium text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-border rounded-full h-2.5">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          variants={progressBarVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </div>
    </div>
  )
}
