import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Linguify - Language Learning Platform",
      description:
        "Full-stack language learning platform with real-time chatting, calling, onboarding, and notifications. Built with modern web technologies for seamless user experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      image: "/language-learning-app.png",
      github: "https://github.com/Sahilkumar0123",
      demo: "#",
    },
    {
      title: "AI Resume Screener",
      description:
        "Machine learning-powered resume screening system that achieved 85% accuracy in candidate evaluation. Uses NLP and TensorFlow for intelligent resume analysis.",
      technologies: ["Python", "Flask", "NLP", "TensorFlow", "Machine Learning"],
      image: "/ai-resume-dashboard.png",
      github: "https://github.com/Sahilkumar0123",
      demo: "#",
    },
    {
      title: "E-commerce Website",
      description:
        "Responsive shopping website with advanced filtering, search functionality, and smooth user experience. Features modern design and optimized performance.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/ecommerce-showcase.png",
      github: "https://github.com/Sahilkumar0123",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black mb-12 text-center text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle
                    className="text-xl font-bold text-card-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span style={{ fontFamily: "var(--font-body)" }}>Code</span>
                      </a>
                    </Button>
                    <Button size="sm" className="flex items-center gap-2 bg-primary hover:bg-primary/90" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        <span style={{ fontFamily: "var(--font-body)" }}>Demo</span>
                      </a>
                    </Button>
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
