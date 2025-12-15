"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"
import { useLanguage } from "./language-context"

export function ExperienceSection() {
  const { language } = useLanguage()

  const experiences = [
    {
      type: "work",
      title: language === "es" ? "Diseñador UX/UI Senior" : "Senior UX/UI Designer",
      company: "Tech Innovations Labs",
      period: language === "es" ? "2022 - Presente" : "2022 - Present",
      description:
        language === "es"
          ? "Lidero el equipo de diseño en la creación de experiencias para millones de usuarios. Establecí el design system y mentorizo diseñadores junior."
          : "Leading design team creating experiences for millions of users. Established design system and mentoring junior designers.",
    },
    {
      type: "work",
      title: language === "es" ? "Diseñador de Producto" : "Product Designer",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description:
        language === "es"
          ? "Diseñé productos para startups y empresas Fortune 500. Realicé investigación de usuarios, wireframing, prototyping y validación."
          : "Designed products for startups and Fortune 500 companies. Conducted user research, wireframing, prototyping, and validation.",
    },
    {
      type: "work",
      title: language === "es" ? "Diseñador UX" : "UX Designer",
      company: "Creative Studio Inc.",
      period: "2019 - 2020",
      description:
        language === "es"
          ? "Diseño de interfaces para aplicaciones web y móvil. Colaboración con desarrolladores para asegurar implementación perfecta."
          : "Design of interfaces for web and mobile applications. Collaboration with developers to ensure perfect implementation.",
    },
    {
      type: "education",
      title: language === "es" ? "Máster en UX/UI Design" : "Master's in UX/UI Design",
      company: language === "es" ? "Universidad de Diseño Digital" : "Digital Design University",
      period: "2018 - 2019",
      description:
        language === "es"
          ? "Especialización en diseño centrado en el usuario, investigación y prototipado interactivo."
          : "Specialization in user-centered design, research, and interactive prototyping.",
    },
  ]

  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-purple-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === "es" ? "Experiencia y Educación" : "Experience & Education"}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {language === "es"
              ? "Mi trayectoria profesional y formación académica"
              : "My professional journey and academic background"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-700"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center text-white mr-8 shadow-lg shadow-purple-700/50">
                    {exp.type === "work" ? <Briefcase className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}
                  </div>

                  <Card className="flex-1 bg-gray-800 border-purple-700">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <span className="text-purple-600 font-medium">{exp.period}</span>
                      </div>
                      <h4 className="text-lg text-gray-300 mb-3">{exp.company}</h4>
                      <p className="text-gray-300">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
