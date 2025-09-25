"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Smartphone, Globe, Shield, Database, TrendingUp } from "lucide-react"

export function ServicesSection() {
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

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Full-Stack Development",
      description: "Building robust and scalable web applications from frontend to backend.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile App Development",
      description: "Crafting intuitive and high-performance mobile applications for various platforms.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Creating modern, responsive, and engaging websites tailored to your needs.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Cybersecurity Consulting",
      description: "Providing expert advice and solutions to protect your digital assets.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database Management",
      description: "Designing, implementing, and optimizing databases for efficient data handling.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Digital Marketing Strategy",
      description: "Developing effective strategies to enhance your online presence and reach.",
    },
  ]

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
