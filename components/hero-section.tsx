import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
            Assurance Santé & Excellence
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Facilitez l'accès aux <span className="text-accent">soins médicaux</span> en Afrique
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            L'Agence de Promotion pour l'Assurance Santé (APAS) agit comme un relais stratégique pour développer
            l'assurance santé en milieu médical.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Découvrir nos services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 lg:mt-24 relative">
          <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img src="/modern-office-tech.png" alt="APAS - Assurance Santé" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
