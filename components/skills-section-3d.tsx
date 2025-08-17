"use client"

import { useState, useEffect, useRef } from "react"

export function SkillsSection3D() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Python", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "C++", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "C", level: 75, color: "from-gray-400 to-gray-600" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React.js", level: 88, color: "from-cyan-400 to-cyan-600" },
        { name: "Node.js", level: 82, color: "from-green-400 to-green-600" },
        { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "MongoDB", level: 78, color: "from-emerald-400 to-emerald-600" },
      ],
    },
    {
      title: "Core Subjects",
      skills: [
        { name: "Data Structures", level: 85, color: "from-primary to-secondary" },
        { name: "Algorithms", level: 80, color: "from-secondary to-accent" },
        { name: "DBMS", level: 82, color: "from-accent to-primary" },
        { name: "Operating Systems", level: 78, color: "from-primary to-accent" },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              setTimeout(() => {
                setAnimatedSkills((prev) => ({ ...prev, [skill.name]: skill.level }))
              }, Math.random() * 1000)
            })
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 neon-text text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full neon-glow"></div>
        </div>

        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl font-bold text-center text-secondary mb-8 neon-text">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Software Engineer Intern",
              "Cyber Security Ethical Hacking",
              "AWS Certified",
              "150+ LeetCode Problems",
            ].map((cert, index) => (
              <div
                key={index}
                className="glass-strong px-6 py-3 rounded-full border border-accent/30 hover:border-accent transition-all duration-300 neon-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="text-accent font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass-strong p-6 rounded-2xl hover:glass transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-primary mb-6 neon-text text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-accent text-sm font-bold">{animatedSkills[skill.name] || 0}%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out neon-glow`}
                        style={{
                          width: `${animatedSkills[skill.name] || 0}%`,
                          transitionDelay: `${skillIndex * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
