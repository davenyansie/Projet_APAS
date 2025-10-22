import { Building2, MapPin, Phone, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const hospitals = [
  {
    name: "Hôpital Central de Yaoundé",
    location: "Yaoundé, Cameroun",
    phone: "+237 222 23 40 20",
    services: ["Consultations", "Chirurgie", "Maternité", "Urgences"],
    image: "/modern-hospital.png",
  },
  {
    name: "Clinique des Spécialités",
    location: "Douala, Cameroun",
    phone: "+237 233 42 56 78",
    services: ["Cardiologie", "Pédiatrie", "Radiologie", "Laboratoire"],
    image: "/medical-clinic-exterior.png",
  },
  {
    name: "Centre Médical d'Arrondissement",
    location: "Bafoussam, Cameroun",
    phone: "+237 233 44 12 34",
    services: ["Médecine générale", "Soins infirmiers", "Pharmacie", "Vaccination"],
    image: "/community-health-center.jpg",
  },
  {
    name: "Polyclinique Moderne",
    location: "Yaoundé, Cameroun",
    phone: "+237 222 21 45 67",
    services: ["Imagerie médicale", "Analyses", "Consultations spécialisées", "Kinésithérapie"],
    image: "/polyclinic-building.jpg",
  },
  {
    name: "Hôpital Régional de Garoua",
    location: "Garoua, Cameroun",
    phone: "+237 222 27 30 45",
    services: ["Chirurgie", "Médecine interne", "Gynécologie", "Pédiatrie"],
    image: "/regional-hospital.jpg",
  },
  {
    name: "Centre Hospitalier Universitaire",
    location: "Yaoundé, Cameroun",
    phone: "+237 222 23 10 11",
    services: ["Toutes spécialités", "Recherche", "Formation", "Urgences 24/7"],
    image: "/university-hospital.jpg",
  },
]

export function HospitalsSection() {
  return (
    <section id="hopitaux" className="py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance text-accent">
            Hôpitaux Bénéficiant Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les établissements de santé partenaires qui profitent de notre expertise en gestion d'assurance
            santé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.map((hospital, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={hospital.image || "/placeholder.svg"}
                  alt={hospital.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Building2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-balance">{hospital.name}</h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{hospital.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{hospital.phone}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Services disponibles :</p>
                  {hospital.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
