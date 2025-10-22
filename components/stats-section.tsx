"use client"

import { useEffect, useRef, useState } from "react"

export function StatsSection() {
  const stats = [
    { value: 9, suffix: "+", label: "Années d'expérience" },
    { value: 100, suffix: "+", label: "Hôpitaux partenaires" },
    { value: 50, suffix: "K+", label: "Patients assurés" },
    { value: 98, suffix: "%", label: "Taux de satisfaction" },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach((stat, index) => {
      let currentStep = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        currentStep++
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.min(Math.round(increment * currentStep), stat.value)
          return newCounts
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
