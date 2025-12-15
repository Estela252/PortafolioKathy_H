"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLanguage } from "./language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-black via-purple-950 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t("nav.portfolio")}</h3>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-600 hover:text-purple-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-500 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t("footer.links")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-purple-600 transition-colors">
                  {t("nav.inicio")}
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-gray-300 hover:text-purple-600 transition-colors">
                  {t("nav.sobre-mi")}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-300 hover:text-purple-600 transition-colors">
                  {t("nav.proyectos")}
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-purple-600 transition-colors">
                  {t("nav.contacto")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t("footer.services")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Desarrollo Web</li>
              <li>Aplicaciones Móviles</li>
              <li>Consultoría Técnica</li>
              <li>Optimización de Performance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            {t("footer.copyright")} <Heart className="h-4 w-4 text-purple-700 mx-2" /> {t("footer.by")}
          </p>
        </div>
      </div>
    </footer>
  )
}
