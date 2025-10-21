"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const partners = [
  { name: "AXA", logo: "/partners/axa.png" },
  { name: "AGC Assurances", logo: "/partners/agc.png" },
  { name: "AREA Assurances", logo: "/partners/area.png" },
  { name: "SCOMA Cameroun", logo: "/partners/scoma.png" },
  { name: "Atlantique Assurances", logo: "/partners/atlantique.png" },
  { name: "Chanas Assurances", logo: "/partners/chanas.png" },
  { name: "Cigna", logo: "/partners/cigna.png" },
  { name: "MSH International", logo: "/partners/msh.png" },
  { name: "NSIA", logo: "/partners/nsia.png" },
  { name: "PASS 24", logo: "/partners/pass24.png" },
  { name: "Prudential Beneficial", logo: "/partners/prudential.png" },
  { name: "Royal Onyx Insurance", logo: "/partners/royal-onyx.png" },
  { name: "Saar", logo: "/partners/saar.png" },
  { name: "Sanlam", logo: "/partners/sanlam.png" },
  { name: "Willis Towers Watson", logo: "/partners/willis.png" },
  { name: "Zenithe Assurances", logo: "/partners/zenithe.png" },
  { name: "Activa Assurances", logo: "/partners/activa.png" },
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout | null = null

    const startAutoScroll = () => {
      let scrollLeft = 0
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.offsetWidth
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollLeft += 1
          if (scrollLeft >= maxScroll) {
            scrollLeft = 0
          }
          scrollContainer.scrollLeft = scrollLeft
        }
      }, 30)

      scrollContainer.addEventListener("mouseenter", () => {
        if (scrollInterval) {
          clearInterval(scrollInterval)
          scrollInterval = null
        }
      })
      scrollContainer.addEventListener("mouseleave", startAutoScroll)

      return () => {
        if (scrollInterval) {
          clearInterval(scrollInterval)
        }
      }
    }

    startAutoScroll()

    return () => {
      const scrollContainer = scrollRef.current
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", () => {
          if (scrollInterval) {
            clearInterval(scrollInterval)
            scrollInterval = null
          }
        })
        scrollContainer.removeEventListener("mouseleave", startAutoScroll)
      }
    }
  }, [])

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos Partenaires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec les plus grandes compagnies d'assurance pour vous offrir les meilleures solutions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div ref={scrollRef} className="flex gap-12 animate-scroll hover:pause-animation">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 flex flex-col items-center gap-4 group"
              >
                <div className="relative w-40 h-28 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-xl">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
                <p className="text-center font-medium text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
