"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Github, Mail, MapPin, Calendar, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Hero() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rafaladamczyk333@gmail.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch {
      console.log("Failed to copy email")
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 pt-16 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 w-full">
            {/* Avatar */}
            <Avatar className="w-32 h-32 border-4 border-primary/20 animate-scale-in hover-glow animate-float">
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                RA
              </AvatarFallback>
            </Avatar>

            {/* Main Heading */}
            <div className="space-y-4 animate-fade-in-up delay-200">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Rafał <span className="text-primary gradient-text">Adamczyk</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light">
                Student Informatyki & Python Developer
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 animate-fade-in-up delay-300">
              <Badge variant="secondary" className="flex items-center gap-1 hover-lift">
                <MapPin className="w-3 h-3" />
                Wrocław, Polska
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1 hover-lift">
                <Calendar className="w-3 h-3" />
                Dostępny do pracy
              </Badge>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up delay-400">
              Pasjonat technologii z doświadczeniem w tworzeniu aplikacji internetowych. 
              Specjalizuję się w React, Node.js, Python i systemach bazodanowych. 
              Zawsze gotów na nowe wyzwania i naukę najnowszych technologii.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-500">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="hover-lift gradient-primary text-white border-0">
                Zobacz Moje Projekty
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" size="lg" asChild className="hover-lift">
                  <Link href="https://github.com/rafaltobias" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" onClick={copyEmail} className="hover-lift">
                  {emailCopied ? <Check className="w-4 h-4 mr-2" /> : <Mail className="w-4 h-4 mr-2" />}
                  {emailCopied ? "Skopiowano!" : "Kontakt"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-fade-in-up delay-600">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="rounded-full hover-glow animate-pulse-custom"
        >
          <ChevronDown className="w-5 h-5" />
          <span className="sr-only">Przewiń w dół</span>
        </Button>
      </div>
    </section>
  )
}
