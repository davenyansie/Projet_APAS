import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Dr. Marie Kouam",
    role: "Directrice, Hôpital Central de Yaoundé",
    content:
      "Grâce à APAS, nous avons pu mettre en place un système d'assurance efficace qui a considérablement amélioré l'accès aux soins pour nos patients. Leur accompagnement est exceptionnel.",
    rating: 5,
    image: "/female-doctor-portrait.png",
  },
  {
    name: "Jean-Paul Mbida",
    role: "Administrateur, Clinique des Spécialités",
    content:
      "L'équipe APAS a transformé notre gestion des assurances. Le logiciel qu'ils ont installé et la formation du personnel ont été d'une grande valeur pour notre établissement.",
    rating: 5,
    image: "/male-hospital-administrator.jpg",
  },
  {
    name: "Dr. Françoise Ngo Balla",
    role: "Chef de Service, Centre Médical d'Arrondissement",
    content:
      "Professionnalisme, intégrité et excellence caractérisent le travail d'APAS. Nos patients assurés bénéficient maintenant d'un service rapide et efficace.",
    rating: 5,
    image: "/female-medical-chief-portrait.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="commentaires" className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance text-accent">
            Commentaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que nos partenaires hospitaliers disent de nos services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-accent/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
