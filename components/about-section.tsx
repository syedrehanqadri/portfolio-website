"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedCounter } from "./animated-counter" // Import AnimatedCounter

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  const careerObjective =
    "Passionate Full Stack Developer with expertise in designing, developing, and deploying scalable web applications. Skilled in both frontend and backend development with proficiency in modern frameworks, databases, and APIs. Strong problem-solving mindset with hands-on experience in building real-world applications. Looking for a challenging role where I can contribute to impactful projects and grow as a software professional."

  const experience = [
    {
      title: "INPLANT TRAINING",
      company: "SIRINTEL TECHNOLOGIES PRIVATE LIMITED",
      date: "Sep 15th 2021",
      description: "Python, Arduino & Cybersecurity",
    },
  ]

  const education = [
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Jain Polytechnic, Davangere | Board of Technical Education, Bengaluru",
      year: "2025",
      grade: "51.08%",
    },
  ]

  const stats = [
    { label: "Years Experience", value: 3 },
    { label: "Projects Completed", value: 25 },
    { label: "Certifications", value: 5 },
  ]

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 className="text-2xl font-semibold text-primary mb-4" variants={itemVariants}>
            Career Objective
          </motion.h3>
          <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
            {careerObjective}
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="p-4 rounded-lg bg-secondary shadow-md">
                <AnimatedCounter from={0} to={stat.value} duration={2} />
                <p className="text-lg font-medium text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3 className="text-2xl font-semibold text-primary mb-6" variants={itemVariants}>
              Experience
            </motion.h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 group"
                  variants={timelineItemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-border group-last:h-6" />
                  <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-primary -translate-x-1/2 translate-y-1" />
                  <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">
                    {item.company} | {item.date}
                  </p>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.h3 className="text-2xl font-semibold text-primary mb-6" variants={itemVariants}>
              Education
            </motion.h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 group"
                  variants={timelineItemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-border group-last:h-6" />
                  <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-primary -translate-x-1/2 translate-y-1" />
                  <h4 className="text-xl font-semibold text-foreground">{item.degree}</h4>
                  <p className="text-muted-foreground">
                    {item.institution} | {item.year}
                  </p>
                  <p className="text-muted-foreground mt-2">Grade: {item.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
