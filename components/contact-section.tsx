"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" })) // Clear error on change
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("[v0] Form submitted:", formData)
      // Here you would typically send the form data to a backend service
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" }) // Clear form
    } else {
      console.log("[v0] Form validation failed")
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {"Get In Touch"}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-start space-x-4 cursor-pointer"
            >
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">qadri.srk@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-start space-x-4 cursor-pointer"
            >
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-muted-foreground">9066566541</p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-start space-x-4 cursor-pointer"
            >
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-muted-foreground">Davanagere</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex space-x-6 pt-4">
              <motion.a
                href="https://www.linkedin.com/in/syed-rehan-qadri-63135b381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://github.com/syedrehanqadri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-8 w-8" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-lg shadow-lg bg-card">
              <div>
                <Label htmlFor="name" className="sr-only">
                  {"Name"}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-input text-foreground border-border focus:border-primary"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="sr-only">
                  {"Email"}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-input text-foreground border-border focus:border-primary"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}\
              </div>
              <div>
                <Label htmlFor="message" className="sr-only">
                  {"Message"}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-input text-foreground border-border focus:border-primary"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                >
                  {"Send Message"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
