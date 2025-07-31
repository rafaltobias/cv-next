"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Analytics Dashboard',
      description: 'Dashboard analityczny z interaktywnymi wykresami i real-time data visualization.',
      longDescription: 'Zaawansowany dashboard analityczny umożliwiający monitorowanie danych w czasie rzeczywistym z interaktywnymi wykresami i wizualizacjami.',
      technologies: ['React', 'Python', 'PostgreSQL'],
      category: 'Web Apps',
      status: 'Ukończony',
      github: 'https://github.com/rafaltobias',
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: 'Analytics Dashboard v2',
      description: 'Dashboard analityczny stworzony z wykorzystaniem Node.js i interaktywnymi wykresami Plotly.js.',
      longDescription: 'Druga wersja dashboardu analitycznego zbudowana w Node.js z zaawansowanymi wykresami Plotly.js i ulepszonymi funkcjami wizualizacji danych.',
      technologies: ['Node.js', 'Express', 'HTML', 'Tailwind', 'Plotly.js'],
      category: 'Web Apps',
      status: 'Ukończony',
      github: 'https://github.com/rafaltobias',
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'Aplikacja mobilna pokazująca pogodę z mapami interaktywnymi.',
      longDescription: 'Kompleksowa aplikacja mobilna do sprawdzania pogody z interaktywnymi mapami meteorologicznymi, powiadomieniami push o ostrzeżeniach pogodowych.',
      technologies: ['Java', 'Android SDK', 'Weather API'],
      category: 'Mobile',
      status: 'W trakcie',
      github: 'https://github.com/rafaltobias',
      demo: null,
      featured: false
    },
    {
      id: 4,
      title: 'Newsletter App',
      description: 'Aplikacja do zarządzania newsletterami z panelem administracyjnym i systemem wysyłania emaili.',
      longDescription: 'System zarządzania newsletterami z zaawansowanym panelem administracyjnym, segmentacją użytkowników i automatyzacją wysyłki emaili.',
      technologies: ['React', 'Python', 'Flask', 'PostgreSQL'],
      category: 'Web Apps',
      status: 'W trakcie',
      github: 'https://github.com/rafaltobias',
      demo: null,
      featured: true
    },
    {
      id: 5,
      title: 'ML Predykcja Cen Giełdowych',
      description: 'System uczenia maszynowego do przewidywania cen akcji z wykorzystaniem analizy technicznej i sentiment analysis.',
      longDescription: 'Zaawansowany system machine learning do przewidywania cen akcji wykorzystujący analizę techniczną, sentiment analysis i deep learning.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      category: 'Machine Learning',
      status: 'Ukończony',
      github: 'https://github.com/rafaltobias',
      demo: null,
      featured: true
    }
  ]

  const categories = ['Wszystkie', 'Web Apps', 'Mobile', 'Machine Learning']
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie')
  
  const filteredProjects = selectedCategory === 'Wszystkie' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Moje <span className="text-primary">Projekty</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wybrane projekty, które najlepiej pokazują moje umiejętności i doświadczenie
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex flex-col gap-1">
                      <Badge variant={project.status === "Ukończony" ? "default" : "outline"} className="text-xs">
                        {project.status}
                      </Badge>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                        <Link href={project.github} target="_blank">
                          <Github className="w-3 h-3" />
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Chcesz zobaczyć więcej?</h3>
                <p className="text-muted-foreground mb-4">
                  Wszystkie moje projekty są dostępne na GitHub. Zapraszam do przejrzenia kodu i współpracy!
                </p>
                <Button asChild>
                  <Link href="https://github.com/rafaltobias" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    Odwiedź mój GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
