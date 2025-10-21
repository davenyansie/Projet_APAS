"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="text-2xl lg:text-3xl font-bold tracking-tight">
            APAS<span className="text-accent">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-sm font-medium hover:text-accent transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="#apropos" className="text-sm font-medium hover:text-accent transition-colors">
              À propos
            </a>
            <a href="#atouts" className="text-sm font-medium hover:text-accent transition-colors">
              Atouts
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#accueil"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#apropos"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a
                href="#atouts"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Atouts
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Nous contacter
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
