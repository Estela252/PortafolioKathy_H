"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useLanguage } from "./language-context"

export function ContactSection() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const successMsg =
      language === "es" ? "¡Mensaje enviado! Te contactaré pronto." : "Message sent! I'll contact you soon."
    alert(successMsg)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">{t("contact.info")}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-medium text-white">{t("contact.email")}</p>
                    <p className="text-gray-300">tu.email@ejemplo.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-medium text-white">{t("contact.phone")}</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-medium text-white">{t("contact.location")}</p>
                    <p className="text-gray-300">{language === "es" ? "Ciudad, País" : "City, Country"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-purple-950 p-8 rounded-lg shadow-lg shadow-purple-700/20">
              <h4 className="text-xl font-semibold text-white mb-4">{t("contact.why")}</h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  {t("contact.why.fast")}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  {t("contact.why.clean")}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  {t("contact.why.communication")}
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  {t("contact.why.support")}
                </li>
              </ul>
            </div>
          </div>

          <Card className="bg-gray-800 border-purple-700">
            <CardHeader>
              <CardTitle className="text-white">{t("contact.form")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {t("contact.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.placeholder.name")}
                      className="bg-gray-700 border-purple-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t("contact.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.placeholder.email")}
                      className="bg-gray-700 border-purple-700 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.subject")}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("contact.placeholder.subject")}
                    className="bg-gray-700 border-purple-700 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.placeholder.message")}
                    className="bg-gray-700 border-purple-700 text-white placeholder-gray-400"
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-800 hover:bg-purple-900 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
