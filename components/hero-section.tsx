"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <img
            src="/young-indian-software-developer-headshot.png"
            alt="Sahil Kumar"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
          />
        </div>

        <h1
          className="text-5xl md:text-7xl font-black mb-6 text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Sahil Kumar
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4" style={{ fontFamily: "var(--font-body)" }}>
          B.Tech IT Graduate & Software Developer
        </p>

        <p
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Highly motivated and detail-oriented developer with strong problem-solving, programming, and web development
          skills. Seeking an entry-level software development role to contribute effectively and grow as a professional.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:ks2423072@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span style={{ fontFamily: "var(--font-body)" }}>ks2423072@gmail.com</span>
          </a>
          <a
            href="tel:+916200557548"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={20} />
            <span style={{ fontFamily: "var(--font-body)" }}>+91-6200557548</span>
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/Sahilkumar0123"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/sahil-kumar-062sky"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("projects")}
            style={{ fontFamily: "var(--font-body)" }}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={() => scrollToSection("contact")}
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
