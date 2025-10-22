import { Card, CardContent } from "@/components/ui/card"
import { FileSearch, Users, TrendingUp } from "lucide-react"

const services = [
  {
    icon: FileSearch,
    title: "Conventions d'Assurance",
    description: "Recherche et signature de conventions avec les compagnies d'assurance et entreprises.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Gestion du Tiers Payant",
    description: "Accueil, traitement des bons de prise en charge et gestion complète des dossiers patients.",
    color: "bg-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Développement & Suivi",
    description: "Recrutement de patients assurés, suivi et recouvrement des prestations.",
    color: "bg-primary/80",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative -mt-20 z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`${service.color} text-white border-0 rounded-none hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <CardContent className="p-8 lg:p-10">
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                  <div className="mt-4 text-white/80 hover:text-white transition-colors">→</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
