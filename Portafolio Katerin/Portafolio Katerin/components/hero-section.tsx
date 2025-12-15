"use client"

import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"

export function HeroSection() {
  const { t, language } = useLanguage()

  const content = {
    es: {
      greeting: "Hola, soy",
      description:
        "Diseñador UX/UI especializado en crear experiencias digitales intuitivas y hermosas. Transformo ideas en interfaces que los usuarios aman.",
      contact: "Contáctame",
      download: "Descargar CV",
    },
    en: {
      greeting: "Hi, I'm",
      description:
        "UX/UI Designer specializing in creating intuitive and beautiful digital experiences. I transform ideas into interfaces users love.",
      contact: "Contact Me",
      download: "Download CV",
    },
  }

  const current = language === "es" ? content.es : content.en

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/ux-ui-designer-portfolio.jpg"
              alt="Foto de perfil"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-purple-600 shadow-lg shadow-purple-700/50"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {current.greeting} <span className="text-purple-600">Tu Nombre</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">{current.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white border-purple-700 border-2">
              <Mail className="mr-2 h-5 w-5" />
              {current.contact}
            </Button>
            <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white border-purple-700 border-2">
              <Download className="mr-2 h-5 w-5" />
              {current.download}
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
