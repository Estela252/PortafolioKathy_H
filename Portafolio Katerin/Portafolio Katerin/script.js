// =====================
// VARIABLES GLOBALES
// =====================

let currentLanguage = "es"
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

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.description":
      "Diseñador UX/UI especializado en crear experiencias digitales intuitivas y hermosas. Transformo ideas en interfaces que los usuarios aman.",
    "hero.contact": "Contáctame",
    "hero.download": "Descargar CV",

    // About
    "about.title": "Sobre Mí",
    "about.subtitle": "Mi enfoque en el diseño centrado en el usuario",
    "about.description1":
      "Soy un diseñador UX/UI apasionado por resolver problemas complejos a través del diseño centrado en el usuario. Con más de 5 años de experiencia, he trabajado con startups y empresas Fortune 500 para crear experiencias digitales que generan impacto.",
    "about.description2":
      "Mi proceso de diseño combina investigación rigurosa, prototipado ágil y validación con usuarios reales. Creo que el mejor diseño es aquel que es invisible para el usuario porque funciona de manera tan intuitiva y fluida.",
    "about.projects": "Proyectos Completados",
    "about.experience": "Años de Experiencia",

    // Skills
    "skills.title": "Habilidades de Diseño",
    "skills.subtitle": "Herramientas y metodologías que utilizo para crear experiencias de usuario excepcionales",
    "skills.ui": "UI Design",
    "skills.ux": "UX Research",
    "skills.ideation": "Ideación",
    "skills.prototyping": "Prototipado",
    "skills.analytics": "Analytics",
    "skills.frontend": "Front-end Basics",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Selección de mis trabajos de diseño más recientes y significativos",
    "projects.view": "Ver Caso de Estudio",

    // Experience
    "experience.title": "Experiencia y Educación",
    "experience.subtitle": "Mi trayectoria profesional y formación académica",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!",
    "contact.info": "Información de Contacto",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.why": "¿Por qué trabajar conmigo?",
    "contact.form": "Envíame un Mensaje",
    "contact.name": "Nombre",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

    // Footer
    "footer.copyright": "Hecho con ❤️ por Tu Nombre © 2025",
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

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.description":
      "UX/UI Designer specializing in creating intuitive and beautiful digital experiences. I transform ideas into interfaces users love.",
    "hero.contact": "Contact Me",
    "hero.download": "Download CV",

    // About
    "about.title": "About Me",
    "about.subtitle": "My approach to user-centered design",
    "about.description1":
      "I'm a passionate UX/UI designer solving complex problems through user-centered design. With over 5 years of experience, I've worked with startups and Fortune 500 companies to create impactful digital experiences.",
    "about.description2":
      "My design process combines rigorous research, agile prototyping, and validation with real users. I believe the best design is the one that's invisible to users because it works so intuitively and seamlessly.",
    "about.projects": "Completed Projects",
    "about.experience": "Years of Experience",

    // Skills
    "skills.title": "Design Skills",
    "skills.subtitle": "Tools and methodologies I use to create exceptional user experiences",
    "skills.ui": "UI Design",
    "skills.ux": "UX Research",
    "skills.ideation": "Ideation",
    "skills.prototyping": "Prototyping",
    "skills.analytics": "Analytics",
    "skills.frontend": "Front-end Basics",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Selection of my most recent and significant design work",
    "projects.view": "View Case Study",

    // Experience
    "experience.title": "Experience & Education",
    "experience.subtitle": "My professional journey and academic background",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk and make it happen!",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.why": "Why work with me?",
    "contact.form": "Send me a Message",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Footer
    "footer.copyright": "Made with ❤️ by Your Name © 2025",
  },
}

// =====================
// FUNCIONES DE IDIOMA
// =====================

function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es"
  updateLanguage()
  document.querySelector(".lang-text").textContent = currentLanguage.toUpperCase()
}

function updateLanguage() {
  const elements = document.querySelectorAll("[data-es][data-en]")
  elements.forEach((element) => {
    const text = currentLanguage === "es" ? element.dataset.es : element.dataset.en
    element.textContent = text
  })

  // Actualizar placeholders
  document.querySelectorAll("[data-es][data-en]").forEach((element) => {
    if (element.placeholder) {
      element.placeholder = currentLanguage === "es" ? element.dataset.es : element.dataset.en
    }
  })
}

// =====================
// FUNCIONES DE NAVEGACIÓN
// =====================

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.toggle("active")
}

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll(".mobile-item").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("active")
  })
})

// Mostrar el menú desktop en pantallas grandes
function handleResize() {
  if (window.innerWidth > 768) {
    document.querySelector(".nav-menu").classList.add("active")
  } else {
    document.querySelector(".nav-menu").classList.remove("active")
  }
}

window.addEventListener("resize", handleResize)
handleResize()

// =====================
// SCROLL TO TOP
// =====================

const scrollToTopBtn = document.getElementById("scrollToTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("active")
  } else {
    scrollToTopBtn.classList.remove("active")
  }
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// =====================
// FORMULARIO DE CONTACTO
// =====================

function handleFormSubmit(event) {
  event.preventDefault()
  const message =
    currentLanguage === "es" ? "¡Mensaje enviado! Te contactaré pronto." : "Message sent! I'll contact you soon."
  alert(message)
  event.target.reset()
}

// =====================
// INICIALIZACIÓN
// =====================

document.addEventListener("DOMContentLoaded", () => {
  updateLanguage()
})
