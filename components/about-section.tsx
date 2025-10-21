import { CheckCircle2, Target, Eye, Award } from "lucide-react"

const values = [
  { icon: Award, text: "Transparence dans toutes nos actions" },
  { icon: CheckCircle2, text: "Confiance avec nos partenaires" },
  { icon: Target, text: "Intégrité dans nos transactions" },
  { icon: Eye, text: "Excellence et amélioration continue" },
]

export function AboutSection() {
  return (
    <section id="apropos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              Notre Mission & Vision
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L'Agence APAS s'est donné pour mission fondamentale d'agir comme un relais stratégique pour faciliter
                l'accès aux soins médicaux par la promotion et la mise en place effective de mécanismes d'assurance
                santé au sein des structures médicales.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Devenir un organisme de référence en matière de développement de l'assurance santé en milieu médical en
                Afrique.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-foreground">Nos Valeurs</h3>
            <div className="space-y-3">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{value.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src="/professional-team-collaboration.jpg"
                alt="Équipe APAS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
