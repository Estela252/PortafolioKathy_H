"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useLanguage } from "./language-context"

export function ProjectsSection() {
  const { t, language } = useLanguage()

  const projects = [
    {
      title: language === "es" ? "Plataforma de E-learning" : "E-learning Platform",
      description:
        language === "es"
          ? "Rediseño completo de plataforma educativa con enfoque en usabilidad. Aumentó la retención de usuarios en 45% mediante investigación y iteración."
          : "Complete redesign of educational platform focused on usability. Increased user retention by 45% through research and iteration.",
      image: "/e-learning-platform-interface-design.jpg",
      technologies: ["Figma", "User Research", "Prototyping", "UI/UX"],
      caseStudyUrl: "#",
    },
    {
      title: language === "es" ? "App de Finanzas Personales" : "Personal Finance App",
      description:
        language === "es"
          ? "Diseño desde cero de aplicación móvil para gestión financiera. Simplificamos datos complejos en visualizaciones intuitivas."
          : "From-scratch design of mobile application for financial management. Simplified complex data into intuitive visualizations.",
      image: "/finance-app-mobile.png",
      technologies: ["Mobile Design", "Wireframing", "Analytics", "UI Design"],
      caseStudyUrl: "#",
    },
    {
      title: language === "es" ? "Sistema de Diseño B2B" : "B2B Design System",
      description:
        language === "es"
          ? "Desarrollo de design system completo para plataforma empresarial. Mejoramos consistencia y reducimos tiempo de desarrollo."
          : "Development of complete design system for enterprise platform. Improved consistency and reduced development time.",
      image: "/design-system-components.png",
      technologies: ["Design Systems", "Component Library", "Documentation", "Figma"],
      caseStudyUrl: "#",
    },
    {
      title: language === "es" ? "Marketplace de Servicios" : "Services Marketplace",
      description:
        language === "es"
          ? "Rediseño de experiencia completa incluyendo flujo de discovery, booking y pagos. Mejoró conversiones en 60%."
          : "Complete experience redesign including discovery flow, booking, and payments. Improved conversions by 60%.",
      image: "/marketplace-platform-design.jpg",
      technologies: ["UX Strategy", "Information Architecture", "Prototyping", "User Testing"],
      caseStudyUrl: "#",
    },
    {
      title: language === "es" ? "App de Salud Mental" : "Mental Health App",
      description:
        language === "es"
          ? "Diseño de aplicación móvil sensible que ayuda a usuarios en bienestar mental. Enfoque en accesibilidad e inclusión."
          : "Design of sensitive mobile application supporting user mental wellness. Focus on accessibility and inclusion.",
      image: "/mental-health-app-interface.png",
      technologies: ["Mobile App", "Accessibility", "Empathy", "UI Design"],
      caseStudyUrl: "#",
    },
    {
      title: language === "es" ? "Dashboard Analítico" : "Analytics Dashboard",
      description:
        language === "es"
          ? "Rediseño de dashboard complejo para startups tech. Información clara, decisiones rápidas."
          : "Complete redesign of complex dashboard for tech startups. Clear information, quick decisions.",
      image: "/analytics-dashboard.png",
      technologies: ["Data Visualization", "UX Research", "Dashboard Design", "UI/UX"],
      caseStudyUrl: "#",
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-b from-gray-900 to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("projects.title")}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("projects.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg hover:shadow-purple-700/30 transition-shadow duration-300 bg-gray-800 border-purple-700 hover:border-purple-600"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <Button size="sm" className="bg-purple-800 hover:bg-purple-900 text-white" asChild>
                    <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      {t("projects.view")}
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-900 text-white text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
