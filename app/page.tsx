import { ThreeBackground } from "@/components/three-background"
import { FuturisticHeader } from "@/components/futuristic-header"
import { HeroSection3D } from "@/components/hero-section-3d"
import { AboutSection3D } from "@/components/about-section-3d"
import { ProjectsSection3D } from "@/components/projects-section-3d"
import { SkillsSection3D } from "@/components/skills-section-3d"
import { ContactSection3D } from "@/components/contact-section-3d"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ThreeBackground />
      <FuturisticHeader />
      <HeroSection3D />
      <AboutSection3D />
      <ProjectsSection3D />
      <SkillsSection3D />
      <ContactSection3D />
    </main>
  )
}
