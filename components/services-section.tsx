import { Card, CardContent } from "@/components/ui/card"
import {
  FileSearch,
  FileSignature,
  Laptop,
  Users,
  TrendingUp,
  DollarSign,
  Ambulance,
  Home,
  HeartPulse,
} from "lucide-react"

const services = [
  {
    icon: FileSearch,
    title: "Recherche de conventions",
    description: "Recherche et négociation de conventions avec les compagnies d'assurance.",
  },
  {
    icon: FileSignature,
    title: "Signature de conventions",
    description: "Procédure complète de signature des conventions avec les assurances et entreprises.",
  },
  {
    icon: Laptop,
    title: "Logiciel de travail",
    description: "Mise en place d'un logiciel complet de gestion du service assurance.",
  },
  {
    icon: Users,
    title: "Gestion du tiers payant",
    description: "Accueil du patient, traitement de bon de prise en charge, émission des factures et dépôt.",
  },
  {
    icon: TrendingUp,
    title: "Recrutement & fidélisation",
    description: "Booster la croissance des hôpitaux par le recrutement et la fidélisation des patients assurés.",
  },
  {
    icon: DollarSign,
    title: "Suivi & recouvrement",
    description: "Suivi, paiement et recouvrement des prestations assurances et entreprises.",
  },
  {
    icon: Ambulance,
    title: "Service de transport",
    description: "Transport des patients avec ambulance médicalisée ou véhicules ordinaires.",
  },
  {
    icon: Home,
    title: "Soins à domicile",
    description: "Consultations, prélèvement, rendu des résultats à domicile.",
  },
  {
    icon: HeartPulse,
    title: "Service de gériatrie",
    description: "Soins spécialisés pour les personnes âgées.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Nos Services</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Des solutions complètes pour faciliter l'accès aux soins et développer l'assurance santé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
