"use client"

import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRef, useEffect } from "react"

const news = [
  {
    date: "15 Octobre 2025",
    title: "Nouveau partenariat avec 5 hôpitaux de Yaoundé",
    description:
      "APAS élargit son réseau avec la signature de conventions avec 5 nouveaux établissements hospitaliers dans la région de Yaoundé.",
    image: "/hospital-partnership-signing.jpg",
  },
  {
    date: "8 Octobre 2025",
    title: "Lancement du service de soins à domicile",
    description:
      "Notre nouveau service de soins à domicile est maintenant disponible pour tous nos patients assurés avec consultations et prélèvements.",
    image: "/home-healthcare-service.jpg",
  },
  {
    date: "1 Octobre 2025",
    title: "Formation du personnel hospitalier",
    description:
      "Plus de 50 professionnels de santé formés aux procédures de gestion d'assurance santé lors de notre dernier séminaire.",
    image: "/medical-training-seminar.jpg",
  },
  {
    date: "25 Septembre 2025",
    title: "Extension du réseau d'ambulances",
    description:
      "Acquisition de 3 nouvelles ambulances médicalisées pour améliorer notre service de transport médical d'urgence.",
    image: "/hospital-partnership-signing.jpg",
  },
  {
    date: "18 Septembre 2025",
    title: "Nouveau logiciel de gestion",
    description:
      "Mise à jour majeure de notre logiciel de gestion hospitalière avec de nouvelles fonctionnalités pour optimiser le tiers payant.",
    image: "/medical-training-seminar.jpg",
  },
]

export function NewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scroll = () => {
      scrollAmount += 0.5
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }

    const interval = setInterval(scroll, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="actualites" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance text-accent">
            Nos Actualités
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez informés des dernières nouvelles et développements de l'Agence APAS
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div ref={scrollRef} className="flex gap-6 animate-scroll pause-animation py-4">
            {[...news, ...news].map((item, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[380px] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-card"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3 font-medium">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-balance line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{item.description}</p>
                  <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80 font-semibold">
                    Lire plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
