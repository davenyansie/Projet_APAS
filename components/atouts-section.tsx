import { Card, CardContent } from "@/components/ui/card"
import { Award, TrendingUp, Users, Laptop, Shield, CheckCircle2 } from "lucide-react"

const atouts = [
  {
    icon: Award,
    title: "Plus de 9 ans d'expérience",
    description: "Une expertise solide dans le domaine de l'assurance santé.",
  },
  {
    icon: TrendingUp,
    title: "Croissance des hôpitaux",
    description: "Participation active à la croissance de plusieurs hôpitaux partenaires.",
  },
  {
    icon: Users,
    title: "Personnel qualifié",
    description: "Une équipe dynamique et hautement qualifiée à votre service.",
  },
  {
    icon: Laptop,
    title: "Logiciel de pointe",
    description: "Mise à disposition d'un logiciel de pointe dans la gestion hospitalière.",
  },
  {
    icon: CheckCircle2,
    title: "Maîtrise des procédures",
    description: "Expertise complète des procédures de travail en assurance.",
  },
  {
    icon: Shield,
    title: "Intégrité totale",
    description: "Intégrité garantie de l'ensemble de notre équipe.",
  },
]

export function AtoutsSection() {
  return (
    <section id="atouts" className="py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance text-accent">
            Nos Atouts
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Ce qui fait de nous votre partenaire de confiance pour l'assurance santé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {atouts.map((atout, index) => {
            const Icon = atout.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{atout.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{atout.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
