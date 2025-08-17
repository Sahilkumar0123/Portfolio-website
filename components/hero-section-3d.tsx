"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection3D() {
  const [text, setText] = useState("")
  const fullText = "Hi, I'm Sahil Kumar – B.Tech IT Graduate & Web Developer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 float">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-4 neon-text text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            {text}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting the future of web development with cutting-edge technologies, AI integration, and immersive user
            experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="glass-strong hover:glass neon-glow bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent transition-all duration-300 text-lg px-8 py-4"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="glass-strong border-primary/50 hover:border-accent text-primary hover:text-accent transition-all duration-300 text-lg px-8 py-4"
          >
            Contact Me
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "150+", label: "DSA Problems" },
            { number: "3+", label: "Major Projects" },
            { number: "5+", label: "Certifications" },
            { number: "7.05", label: "CGPA" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl text-center hover:glass-strong transition-all duration-300 float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary neon-text">{stat.number}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 neon-glow"></div>
        </div>
      </div>
    </section>
  )
}
