"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background via-background to-background/95 backdrop-blur-lg border-b-2 border-accent/20 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Image
                src="/apas-logo.jpeg"
                alt="APAS Logo"
                width={55}
                height={55}
                className="rounded-full ring-2 ring-accent/30 group-hover:ring-accent transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold tracking-tight">
              <span className="text-accent group-hover:text-accent/80 transition-colors duration-300">APAS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#accueil"
              className="text-sm font-semibold hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="text-sm font-semibold hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
            >
              Services
            </a>
            <a
              href="#apropos"
              className="text-sm font-semibold hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
            >
              À propos
            </a>
            <a
              href="#atouts"
              className="text-sm font-semibold hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
            >
              Atouts
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-accent" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#accueil"
                className="text-sm font-medium hover:text-accent transition-colors py-2 px-4 hover:bg-accent/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-sm font-medium hover:text-accent transition-colors py-2 px-4 hover:bg-accent/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#apropos"
                className="text-sm font-medium hover:text-accent transition-colors py-2 px-4 hover:bg-accent/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a
                href="#atouts"
                className="text-sm font-medium hover:text-accent transition-colors py-2 px-4 hover:bg-accent/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Atouts
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-accent transition-colors py-2 px-4 hover:bg-accent/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button asChild className="bg-accent text-white hover:bg-accent/90 w-full">
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
