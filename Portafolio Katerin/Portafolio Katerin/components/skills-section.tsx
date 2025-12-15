"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, Users, Lightbulb, Zap, BarChart3, Code } from "lucide-react"
import { useLanguage } from "./language-context"

export function SkillsSection() {
  const { t, language } = useLanguage()

  const skills = [
    {
      icon: <Palette className="h-8 w-8" />,
      titleKey: "skills.ui",
      descKey: "skills.ui.desc",
      technologies: ["Figma", "Adobe XD", "Protopie", "Design Systems", "Atomic Design", "Visual Design"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      titleKey: "skills.ux",
      descKey: "skills.ux.desc",
      technologies: ["User Research", "Entrevistas", "Focus Groups", "Surveys", "Usability Testing", "A/B Testing"],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      titleKey: "skills.ideation",
      descKey: "skills.ideation.desc",
      technologies: [
        "Brainstorming",
        "Design Thinking",
        "Wireframing",
        "User Journeys",
        "Storyboarding",
        "Information Architecture",
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      titleKey: "skills.prototyping",
      descKey: "skills.prototyping.desc",
      technologies: [
        "Interactive Prototypes",
        "Figma Prototypes",
        "Animation",
        "Interaction Design",
        "Micro-interactions",
        "Motion Design",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      titleKey: "skills.analytics",
      descKey: "skills.analytics.desc",
      technologies: ["Google Analytics", "Mixpanel", "Hotjar", "Heatmaps", "User Behavior", "KPI Tracking"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      titleKey: "skills.frontend",
      descKey: "skills.frontend.desc",
      technologies: ["HTML5", "CSS3", "JavaScript", "React Basics", "Responsive Design", "Accessibility (A11y)"],
    },
  ]

  return (
    <section id="habilidades" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("skills.title")}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("skills.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-purple-700 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-700/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="text-purple-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{t(skill.titleKey)}</h3>
                <p className="text-gray-300 mb-4">{t(skill.descKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-800 text-white text-sm rounded-full">
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
