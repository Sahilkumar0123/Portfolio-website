"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection3D() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 neon-text text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full neon-glow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`glass-strong p-8 rounded-2xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 neon-text">Career Objective</h3>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Highly motivated and detail-oriented B.Tech IT graduate with strong problem-solving, programming, and web
              development skills. Seeking an entry-level software development role to contribute effectively and grow as
              a professional in cutting-edge technologies.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Passionate about creating immersive digital experiences using modern frameworks, AI integration, and
              innovative design patterns that push the boundaries of web development.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold text-secondary mb-8 neon-text">Education Timeline</h3>
            <div className="space-y-6">
              {[
                {
                  year: "2022-2026",
                  title: "B.Tech in Information Technology",
                  institution: "Netaji Subhash Engineering College",
                  grade: "CGPA: 7.05",
                  color: "from-primary to-secondary",
                },
                {
                  year: "2021",
                  title: "Intermediate (XII)",
                  institution: "Mathurasini Mahavidya",
                  grade: "64%",
                  color: "from-secondary to-accent",
                },
                {
                  year: "2019",
                  title: "CBSE (X)",
                  institution: "DAV Public School Daudnagar",
                  grade: "70%",
                  color: "from-accent to-primary",
                },
              ].map((edu, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} neon-glow mt-2 group-hover:scale-125 transition-transform duration-300`}
                  ></div>
                  <div className="glass p-4 rounded-xl flex-1 hover:glass-strong transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{edu.title}</h4>
                      <span className="text-sm text-primary font-medium">{edu.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                    <p className="text-accent text-sm font-medium">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
