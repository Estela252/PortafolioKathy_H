"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    "nav.inicio": "Inicio",
    "nav.sobre-mi": "Sobre Mí",
    "nav.habilidades": "Habilidades",
    "nav.proyectos": "Proyectos",
    "nav.experiencia": "Experiencia",
    "nav.contacto": "Contacto",
    "nav.portfolio": "Mi Portafolio",

    // Hero Section
    "hero.greeting": "Hola, soy",
    "hero.description":
      "Diseñador UX/UI especializado en crear experiencias digitales intuitivas y hermosas. Transformo ideas en interfaces que los usuarios aman.",
    "hero.contact": "Contáctame",
    "hero.download": "Descargar CV",

    // About Section
    "about.title": "Sobre Mí",
    "about.subtitle": "Mi enfoque en el diseño centrado en el usuario",
    "about.description1":
      "Soy un diseñador UX/UI apasionado por resolver problemas complejos a través del diseño centrado en el usuario. Con más de 5 años de experiencia, he trabajado con startups y empresas Fortune 500 para crear experiencias digitales que generan impacto.",
    "about.description2":
      "Mi proceso de diseño combina investigación rigurosa, prototipado ágil y validación con usuarios reales. Creo que el mejor diseño es aquel que es invisible para el usuario porque funciona de manera tan intuitiva y fluida.",
    "about.projects": "Proyectos Completados",
    "about.experience": "Años de Experiencia",

    // Skills Section
    "skills.title": "Habilidades de Diseño",
    "skills.subtitle": "Herramientas y metodologías que utilizo para crear experiencias de usuario excepcionales",
    "skills.ui": "UI Design",
    "skills.ui.desc": "Diseño visual de interfaces modernas y atractivas",
    "skills.ux": "UX Research",
    "skills.ux.desc": "Investigación de usuarios y validación de ideas",
    "skills.ideation": "Ideación",
    "skills.ideation.desc": "Generación y concepto de soluciones innovadoras",
    "skills.prototyping": "Prototipado",
    "skills.prototyping.desc": "Creación de prototipos interactivos y de alta fidelidad",
    "skills.analytics": "Analytics",
    "skills.analytics.desc": "Análisis de datos y métricas de UX",
    "skills.frontend": "Front-end Basics",
    "skills.frontend.desc": "Conocimientos básicos de desarrollo web",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Selección de mis trabajos de diseño más recientes y significativos",
    "projects.view": "Ver Caso de Estudio",

    // Experience Section
    "experience.title": "Experiencia y Educación",
    "experience.subtitle": "Mi trayectoria profesional y formación académica",

    // Contact Section
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!",
    "contact.info": "Información de Contacto",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.why": "¿Por qué trabajar conmigo?",
    "contact.why.fast": "Respuesta rápida en menos de 24 horas",
    "contact.why.clean": "Diseños limpios y bien documentados",
    "contact.why.communication": "Comunicación constante durante el proyecto",
    "contact.why.support": "Soporte post-entrega incluido",
    "contact.form": "Envíame un Mensaje",
    "contact.name": "Nombre",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.placeholder.name": "Tu nombre",
    "contact.placeholder.email": "tu@email.com",
    "contact.placeholder.subject": "Asunto del mensaje",
    "contact.placeholder.message": "Cuéntame sobre tu proyecto...",

    // Footer
    "footer.copyright": "Hecho con",
    "footer.by": "por Tu Nombre © 2025",
  },
  en: {
    // Navigation
    "nav.inicio": "Home",
    "nav.sobre-mi": "About Me",
    "nav.habilidades": "Skills",
    "nav.proyectos": "Projects",
    "nav.experiencia": "Experience",
    "nav.contacto": "Contact",
    "nav.portfolio": "My Portfolio",

    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.description":
      "UX/UI Designer specializing in creating intuitive and beautiful digital experiences. I transform ideas into interfaces users love.",
    "hero.contact": "Contact Me",
    "hero.download": "Download CV",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "My approach to user-centered design",
    "about.description1":
      "I'm a passionate UX/UI designer solving complex problems through user-centered design. With over 5 years of experience, I've worked with startups and Fortune 500 companies to create impactful digital experiences.",
    "about.description2":
      "My design process combines rigorous research, agile prototyping, and validation with real users. I believe the best design is the one that's invisible to users because it works so intuitively and seamlessly.",
    "about.projects": "Completed Projects",
    "about.experience": "Years of Experience",

    // Skills Section
    "skills.title": "Design Skills",
    "skills.subtitle": "Tools and methodologies I use to create exceptional user experiences",
    "skills.ui": "UI Design",
    "skills.ui.desc": "Design of modern and attractive interfaces",
    "skills.ux": "UX Research",
    "skills.ux.desc": "User research and idea validation",
    "skills.ideation": "Ideation",
    "skills.ideation.desc": "Generation and concept of innovative solutions",
    "skills.prototyping": "Prototyping",
    "skills.prototyping.desc": "Creation of interactive and high-fidelity prototypes",
    "skills.analytics": "Analytics",
    "skills.analytics.desc": "Analysis of UX data and metrics",
    "skills.frontend": "Front-end Basics",
    "skills.frontend.desc": "Basic knowledge of web development",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Selection of my most recent and significant design work",
    "projects.view": "View Case Study",

    // Experience Section
    "experience.title": "Experience & Education",
    "experience.subtitle": "My professional journey and academic background",

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk and make it happen!",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.why": "Why work with me?",
    "contact.why.fast": "Quick response in less than 24 hours",
    "contact.why.clean": "Clean and well-documented designs",
    "contact.why.communication": "Constant communication during the project",
    "contact.why.support": "Post-delivery support included",
    "contact.form": "Send me a Message",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.placeholder.name": "Your name",
    "contact.placeholder.email": "your@email.com",
    "contact.placeholder.subject": "Message subject",
    "contact.placeholder.message": "Tell me about your project...",

    // Footer
    "footer.copyright": "Made with",
    "footer.by": "by Your Name © 2025",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
