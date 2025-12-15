"use client"

import { useState } from "react"
import { Menu, X, Home, User, Code, FolderOpen, Briefcase, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: "#inicio", label: t("nav.inicio"), icon: <Home className="h-4 w-4" /> },
    { href: "#sobre-mi", label: t("nav.sobre-mi"), icon: <User className="h-4 w-4" /> },
    { href: "#habilidades", label: t("nav.habilidades"), icon: <Code className="h-4 w-4" /> },
    { href: "#proyectos", label: t("nav.proyectos"), icon: <FolderOpen className="h-4 w-4" /> },
    { href: "#experiencia", label: t("nav.experiencia"), icon: <Briefcase className="h-4 w-4" /> },
    { href: "#contacto", label: t("nav.contacto"), icon: <Mail className="h-4 w-4" /> },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-purple-900 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-purple-900 rounded-lg flex items-center justify-center shadow-lg shadow-purple-700/30">
              <img src="/placeholder.svg?height=40&width=40" alt="Logo Personal" className="w-8 h-8 rounded-md" />
            </div>
            <div className="text-2xl font-bold text-white">{t("nav.portfolio")}</div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-6 bg-gray-900/50 px-6 py-3 rounded-full border border-purple-900">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-950/30"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-white hover:text-purple-600 hover:bg-purple-950/30"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>

            {/* Mobile Navigation Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-purple-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-purple-900">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-3 text-gray-300 hover:text-purple-600 hover:bg-purple-950/30 rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
