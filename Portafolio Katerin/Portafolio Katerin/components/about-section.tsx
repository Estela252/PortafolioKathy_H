"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "./language-context"

export function AboutSection() {
  const { language } = useLanguage()

  const content = {
    es: {
      title: "Sobre Mí",
      subtitle: "Mi enfoque en el diseño centrado en el usuario",
      description1:
        "Soy un diseñador UX/UI apasionado por resolver problemas complejos a través del diseño centrado en el usuario. Con más de 5 años de experiencia, he trabajado con startups y empresas Fortune 500 para crear experiencias digitales que generan impacto.",
      description2:
        "Mi proceso de diseño combina investigación rigurosa, prototipado ágil y validación con usuarios reales. Creo que el mejor diseño es aquel que es invisible para el usuario porque funciona de manera tan intuitiva y fluida.",
      projects: "Proyectos Completados",
      experience: "Años de Experiencia",
    },
    en: {
      title: "About Me",
      subtitle: "My approach to user-centered design",
      description1:
        "I'm a passionate UX/UI designer solving complex problems through user-centered design. With over 5 years of experience, I've worked with startups and Fortune 500 companies to create impactful digital experiences.",
      description2:
        "My design process combines rigorous research, agile prototyping, and validation with real users. I believe the best design is the one that's invisible to users because it works so intuitively and seamlessly.",
      projects: "Completed Projects",
      experience: "Years of Experience",
    },
  }

  const current = language === "es" ? content.es : content.en

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-purple-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{current.title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{current.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/ux-designer-working-on-interface-design.jpg"
              alt={language === "es" ? "Trabajando" : "Working"}
              className="rounded-lg shadow-lg shadow-purple-700/30 w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">{current.description1}</p>

            <p className="text-lg text-gray-200 leading-relaxed">{current.description2}</p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="bg-gray-900 border-purple-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-300">{current.projects}</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-purple-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-300">{current.experience}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
