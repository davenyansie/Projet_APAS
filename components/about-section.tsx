import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="apropos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Circular Image */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-8 border-cyan-500/20 shadow-2xl relative">
              <img
                src="/home-healthcare-service.jpg"
                alt="APAS Healthcare Services"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute bottom-10 right-10 w-24 h-24 opacity-30">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-cyan-500" />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyan-500">Nous Prenons Soin de Vous</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              L'Agence APAS s'est donné pour mission fondamentale d'agir comme un relais stratégique pour faciliter
              l'accès aux soins médicaux par la promotion et la mise en place effective de mécanismes d'assurance santé
              au sein des structures médicales en Afrique.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold text-cyan-500 mb-2">9+</div>
                <div className="text-muted-foreground">Années d'Expérience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-500 mb-2">17</div>
                <div className="text-muted-foreground">Partenaires Assureurs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Reversed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-24">
          {/* Content First */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyan-500">
              Excellence & Professionnalisme
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nous offrons des services complets pour faciliter l'accès aux soins et développer l'assurance santé dans
              les structures médicales africaines.
            </p>

            <div className="space-y-4">
              {[
                "Recherche et signature de conventions",
                "Gestion complète du tiers payant",
                "Suivi et recouvrement des prestations",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Circular Image */}
          <div className="relative order-first lg:order-last">
            <div className="w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl relative">
              <img
                src="/medical-training-seminar.jpg"
                alt="APAS Professional Services"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute top-10 left-10 w-24 h-24 opacity-30">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
