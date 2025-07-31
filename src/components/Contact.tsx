"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Github, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rafaladamczyk333@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      console.log("Failed to copy email")
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rafaladamczyk333@gmail.com",
      href: "mailto:rafaladamczyk333@gmail.com",
      description: "Najszybszy sposób kontaktu",
      copyable: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rafaltobias",
      href: "https://github.com/rafaltobias",
      description: "Moje projekty i kod",
      copyable: false
    },
    {
      icon: MapPin,
      label: "Lokalizacja",
      value: "Wrocław, Polska",
      href: null,
      description: "Dostępny zdalnie i lokalnie",
      copyable: false
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-primary">Kontakt</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Masz projekt do zrealizowania lub pytania? Skontaktuj się ze mną! 
              Chętnie omówię możliwości współpracy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.label}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-lg font-medium">
                      {item.value}
                    </div>
                    
                    <div className="flex gap-2 justify-center">
                      {item.href && (
                        <Button asChild>
                          <Link 
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                          >
                            {item.label === "Email" ? "Wyślij Email" : `Odwiedź ${item.label}`}
                          </Link>
                        </Button>
                      )}
                      
                      {item.copyable && (
                        <Button 
                          variant="outline" 
                          onClick={copyEmail}
                          disabled={copied}
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Skopiowano!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Kopiuj
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dostępność</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    Dostępny
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Otwarty na nowe możliwości
                  </span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Projekty freelance</p>
                  <p>• Współpraca przy projektach open source</p>
                  <p>• Staże i pozycje junior developer</p>
                  <p>• Konsultacje techniczne</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferowane Technologie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Gotowy na współpracę?</h3>
                <p className="text-muted-foreground mb-4">
                  Napisz do mnie bezpośrednio lub sprawdź moje projekty na GitHub
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" asChild>
                    <Link href="mailto:rafaladamczyk333@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      rafaladamczyk333@gmail.com
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com/rafaltobias" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
