"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react"

export function ContactSection3D() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ks2423072@gmail.com",
      href: "mailto:ks2423072@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6200557548",
      href: "tel:+916200557548",
      color: "text-secondary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sahilkumar0123",
      href: "https://github.com/Sahilkumar0123",
      color: "text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sahil-kumar-062sky",
      href: "https://linkedin.com/in/sahil-kumar-062sky",
      color: "text-primary",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 neon-text text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full neon-glow"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="glass-strong p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6 neon-text">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-4 p-4 glass rounded-xl hover:glass-strong transition-all duration-300 group"
                  >
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 ${info.color} group-hover:neon-glow transition-all duration-300`}
                    >
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-strong p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent neon-glow" />
                  <h3 className="text-xl font-bold text-accent neon-text">Location</h3>
                </div>
                <p className="text-foreground font-medium">Kolkata, West Bengal</p>
                <p className="text-muted-foreground">PIN: 711103, India</p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-secondary mb-6 neon-text">Send Message</h3>

              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass border-primary/30 focus:border-primary bg-transparent text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass border-primary/30 focus:border-primary bg-transparent text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="glass border-primary/30 focus:border-primary bg-transparent text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent neon-glow transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
