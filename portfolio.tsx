import { LanguageProvider } from "./components/language-context"
import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { SkillsSection } from "./components/skills-section"
import { ProjectsSection } from "./components/projects-section"
import { ExperienceSection } from "./components/experience-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"
import { ScrollToTop } from "./components/scroll-to-top"

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  )
}
