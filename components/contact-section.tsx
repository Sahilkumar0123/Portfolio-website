"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "ks2423072@gmail.com",
      href: "mailto:ks2423072@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91-6200557548",
      href: "tel:+916200557548",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Kolkata, West Bengal – 711103",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/Sahilkumar0123",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sahil-kumar-062sky",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black mb-12 text-center text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
                  I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
                  discuss a potential collaboration, or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <a
                        href={info.href}
                        className="flex items-center gap-4 text-card-foreground hover:text-primary transition-colors duration-200"
                      >
                        <div className="p-2 rounded-full bg-primary/10 text-primary">{info.icon}</div>
                        <div>
                          <p className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                            {info.label}
                          </p>
                          <p className="text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h4
                  className="text-lg font-semibold mb-4 text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-border"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle
                  className="text-2xl font-bold text-card-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-card-foreground"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input border-border focus:ring-primary focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-card-foreground"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input border-border focus:ring-primary focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-input border-border focus:ring-primary focus:border-primary"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-input border-border focus:ring-primary focus:border-primary resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
