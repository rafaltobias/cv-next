"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Github, Mail, Heart, ArrowUp, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rafaltobias",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:rafaladamczyk333@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: "O mnie", href: "#about" },
    { name: "Umiejętności", href: "#skills" },
    { name: "Projekty", href: "#projects" },
    { name: "Kontakt", href: "#contact" }
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                Rafał <span className="text-primary">Adamczyk</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Student informatyki z pasją do tworzenia nowoczesnych aplikacji internetowych. 
                Specjalizuję się w React, Node.js, Python i systemach internetowych.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  const isEmail = link.label === "Email"
                  
                  if (isEmail) {
                    return (
                      <Button
                        key={link.label}
                        variant="ghost"
                        size="icon"
                        onClick={copyEmail}
                        className="hover:bg-primary/10 hover:text-primary"
                      >
                        {emailCopied ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                        <span className="sr-only">{emailCopied ? "Email skopiowany" : "Kopiuj email"}</span>
                      </Button>
                    )
                  }
                  
                  return (
                    <Button
                      key={link.label}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:bg-primary/10 hover:text-primary"
                    >
                      <Link href={link.href} target="_blank">
                        <Icon className="w-4 h-4" />
                        <span className="sr-only">{link.label}</span>
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Szybkie Linki</h4>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Kontakt</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Wrocław, Polska</p>
                <button 
                  onClick={copyEmail}
                  className="block hover:text-foreground transition-colors text-left"
                >
                  {emailCopied ? "Skopiowano!" : "rafaladamczyk333@gmail.com"}
                </button>
                <p>Dostępny dla nowych projektów</p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="sr-only">Przewiń na górę</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
