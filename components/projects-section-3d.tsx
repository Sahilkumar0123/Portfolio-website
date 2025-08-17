"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection3D() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Modern e-commerce platform with responsive design, shopping cart functionality, and secure payment integration.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-primary to-secondary",
      github: "https://github.com/Sahilkumar0123",
    },
    {
      title: "AI Resume Screener",
      description:
        "Intelligent resume screening system using NLP and machine learning to match candidates with job requirements.",
      tech: ["Python", "Flask", "NLP", "TensorFlow"],
      gradient: "from-secondary to-accent",
      github: "https://github.com/Sahilkumar0123",
    },
    {
      title: "Linguify Platform",
      description:
        "Real-time language learning platform with interactive chat, progress tracking, and gamification elements.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Tailwind"],
      gradient: "from-accent to-primary",
      github: "https://github.com/Sahilkumar0123",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 neon-text text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full neon-glow"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group perspective-1000 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`relative preserve-3d transition-transform duration-700 ${
                  hoveredProject === index ? "rotate-y-180" : ""
                }`}
              >
                <div className="glass-strong p-6 rounded-2xl backface-hidden h-80 flex flex-col justify-between hover:glass transition-all duration-300">
                  <div>
                    <div
                      className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 neon-glow opacity-80`}
                    ></div>
                    <h3 className="text-xl font-bold text-foreground mb-3 neon-text">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 glass-strong p-6 rounded-2xl backface-hidden rotate-y-180 h-80 flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4 neon-text">{project.title}</h3>
                  <p className="text-foreground mb-6 leading-relaxed">
                    Explore the code and see how this project was built with modern technologies and best practices.
                  </p>
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent neon-glow"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-background bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
