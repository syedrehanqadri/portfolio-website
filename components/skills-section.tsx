"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, GitBranch, Server, Users } from "lucide-react"
import { SkillProgressBar } from "./skill-progress-bar" // Import SkillProgressBar

export function SkillsSection() {
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

  const skills = {
    "Frontend Development": [
      { name: "HTML5", proficiency: 90 },
      { name: "CSS3", proficiency: 85 },
      { name: "JavaScript (ES6+)", proficiency: 90 },
      { name: "Bootstrap", proficiency: 80 },
      { name: "React.js", proficiency: 85 },
      { name: "Next.js", proficiency: 80 },
    ],
    "Backend Development": [
      { name: "Node.js", proficiency: 80 },
      { name: "Express.js", proficiency: 75 },
      { name: "REST API design & integration", proficiency: 85 },
      { name: "Python", proficiency: 70 },
      { name: "PHP", proficiency: 65 },
      { name: "Web3.js", proficiency: 60 },
    ],
    Databases: [
      { name: "MySQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "SQLite", proficiency: 70 },
      { name: "Firebase", proficiency: 65 },
    ],
    "Other Tools & Platforms": [
      { name: "Git & GitHub (version control)", proficiency: 90 },
      { name: "Postman (API testing)", proficiency: 85 },
      { name: "Visual Studio Code", proficiency: 95 },
      { name: "NPM", proficiency: 85 },
    ],
    "Core Competencies": [
      { name: "Problem-solving & Debugging", proficiency: 90 },
      { name: "Agile/Scrum familiarity", proficiency: 80 },
      { name: "Collaboration & Teamwork", proficiency: 85 },
      { name: "Cybersecurity", proficiency: 70 },
    ],
  }

  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend Development":
        return <Code className="h-6 w-6 text-primary" />
      case "Backend Development":
        return <Server className="h-6 w-6 text-primary" />
      case "Databases":
        return <Database className="h-6 w-6 text-primary" />
      case "Other Tools & Platforms":
        return <GitBranch className="h-6 w-6 text-primary" />
      case "Core Competencies":
        return <Users className="h-6 w-6 text-primary" />
      default:
        return <Code className="h-6 w-6 text-primary" />
    }
  }

  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4">
                {getIcon(category)}
                <h3 className="text-xl font-semibold text-foreground ml-3">{category}</h3>
              </div>
              <div className="space-y-4">
                {skillList.map((skill, skillIndex) => (
                  <SkillProgressBar key={skillIndex} skill={skill.name} percentage={skill.proficiency} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
