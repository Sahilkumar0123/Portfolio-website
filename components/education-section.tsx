import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Netaji Subhash Engineering College",
      period: "2022 – 2026",
      grade: "CGPA: 7.05",
      description:
        "Comprehensive study of computer science fundamentals, software engineering, and emerging technologies.",
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Mathurasini Mahavidya",
      period: "2021",
      grade: "64%",
      description: "Focused on science stream with mathematics and computer science.",
    },
    {
      degree: "CBSE (Class X)",
      institution: "DAV Public School Daudnagar",
      period: "2019",
      grade: "70%",
      description: "Strong foundation in mathematics, science, and computer applications.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black mb-12 text-center text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <GraduationCap size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3
                          className="text-xl font-bold text-card-foreground"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span style={{ fontFamily: "var(--font-body)" }}>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-primary font-semibold mb-2" style={{ fontFamily: "var(--font-body)" }}>
                        {edu.institution}
                      </p>

                      <p className="text-accent font-medium mb-3" style={{ fontFamily: "var(--font-body)" }}>
                        {edu.grade}
                      </p>

                      <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
