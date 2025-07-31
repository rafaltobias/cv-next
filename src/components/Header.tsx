"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navigation = [
  { name: "O mnie", href: "#about" },
  { name: "Umiejętności", href: "#skills" },
  { name: "Projekty", href: "#projects" },
  { name: "Kontakt", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between">
          {/* Left - Brand */}
          <Link 
            href="/" 
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors flex-shrink-0"
          >
            Rafał Adamczyk
          </Link>

          {/* Center - Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right - Social Links & Mobile Menu */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Social Links */}
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <Link href="https://github.com/rafaltobias" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <Link href="mailto:rafaladamczyk333@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  <Link 
                    href="/" 
                    className="text-lg font-bold text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Rafał Adamczyk
                  </Link>
                  
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/rafaltobias" target="_blank">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="mailto:rafaladamczyk333@gmail.com">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
