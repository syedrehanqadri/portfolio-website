import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ThemeProvider } from "@/components/theme-provider"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Navbar />
      <HeroSection />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
