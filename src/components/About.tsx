"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Briefcase, MapPin } from "lucide-react"

export default function About() {
  const experiences = [
    {
      title: "Studia Informatyczne",
      company: "Państwowa Akademia Nauk Stosowanych w Nysie",
      location: "Nysa",
      period: "2022 - obecnie",
      type: "Edukacja",
      icon: GraduationCap,
      description: "Kierunek: Informatyka. Specjalizacja systemy internetowe."
    }
  ]

  const interests = [
    "Rozwój aplikacji internetowych",
    "Sztuczna inteligencja",
    "Bazy danych",
    "Open Source",
    "Machine Learning"
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              O <span className="text-primary">Mnie</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poznaj mnie lepiej - moje doświadczenie, pasje i to, co mnie motywuje w świecie technologii.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Moja Historia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Jestem studentem informatyki z pasją do tworzenia nowoczesnych aplikacji internetowych. 
                    Moje zainteresowanie programowaniem rozpoczęło się w liceum.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Obecnie koncentruję się na rozwoju umiejętności backend developera, 
                    szczególnie w technologiach webowych takich jak React, Next.js, Node.js i Python Flask. 
                    Uwielbiam rozwiązywać złożone problemy i uczę się czegoś nowego każdego dnia.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Poza programowaniem interesuję się nowymi technologiami, sztuczną inteligencją
                    i piłką nożną.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Zainteresowania</CardTitle>
                  <CardDescription>
                    Obszary technologii, które mnie fascynują
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge key={interest} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Experience */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Doświadczenie & Edukacja
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => {
                      const Icon = exp.icon
                      return (
                        <div key={index} className="relative">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-sm">{exp.title}</h3>
                                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {exp.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                                <MapPin className="w-3 h-3" />
                                {exp.location} • {exp.period}
                              </div>
                              <p className="mt-2 text-sm text-muted-foreground">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cele na Przyszłość</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Ukończenie studiów informatycznych
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Zdobycie doświadczenia jako Backend Developer 
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Pogłębienie wiedzy z zakresu AI i Machine Learning
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
