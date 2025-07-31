"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Server, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      icon: Server,
      description: "Technologie serwerowe i API",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express.js", level: 80, color: "bg-gray-600" },
        { name: "Python Flask", level: 75, color: "bg-yellow-500" },
      ]
    },
    {
      title: "Frontend",
      icon: Code2,
      description: "Interfejsy użytkownika",
      skills: [
        { name: "React", level: 80, color: "bg-blue-500" },
        { name: "Next.js", level: 70, color: "bg-black" },
        { name: "TypeScript", level: 75, color: "bg-blue-700" },
        { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Bazy Danych & Narzędzia",
      icon: Database,
      description: "Zarządzanie danymi i narzędzia deweloperskie",
      skills: [
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "MongoDB", level: 70, color: "bg-green-700" },
        { name: "Git", level: 85, color: "bg-red-500" },
      ]
    }
  ]

  const additionalSkills = [
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Responsyw Design",
    "JSON",
    "npm/yarn",
    "VS Code",
    "Linux/Unix",
    "Rozwiązywanie problemów",
    "Współpraca w zespole"
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Moje <span className="text-primary">Umiejętności</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zestaw technologii i narzędzi, z którymi pracuję na co dzień.
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      {category.title}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Dodatkowe Umiejętności
              </CardTitle>
              <CardDescription>
                Inne technologie i narzędzia, z którymi mam doświadczenie
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Goals */}
          <div className="mt-12 text-center">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Aktualnie Uczę Się</CardTitle>
                <CardDescription>
                  Technologie, które obecnie rozwijam i planuję dodać do mojego zestawu umiejętności
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
