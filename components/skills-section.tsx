import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Award } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["C", "C++", "JavaScript", "Python"],
      color: "text-primary",
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
      color: "text-accent",
    },
    {
      title: "Databases & Tools",
      icon: <Database size={24} />,
      skills: ["MongoDB", "SQL", "Git/GitHub", "Socket.IO"],
      color: "text-secondary",
    },
    {
      title: "Core Subjects",
      icon: <Award size={24} />,
      skills: ["OOPs", "DSA", "DBMS", "OS", "Computer Networks"],
      color: "text-primary",
    },
  ]

  const certifications = [
    "Software Engineer Intern",
    "Cyber Security Ethical Hacking",
    "Amazon Web Services (AWS)",
    "150+ DSA Problems Solved on LeetCode",
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black mb-12 text-center text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex p-3 rounded-full bg-primary/10 ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  <h3
                    className="text-lg font-bold mb-4 text-card-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {category.title}
                  </h3>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-2 bg-muted rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3
              className="text-3xl font-bold mb-8 text-center text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Certifications & Achievements
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-card-foreground font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      {cert}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
