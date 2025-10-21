import { Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              APAS<span className="text-accent">.</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Agence de Promotion pour l'Assurance Santé - Votre partenaire de confiance pour faciliter l'accès aux
              soins en Afrique.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Conventions assurances
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Gestion tiers payant
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Transport patients
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Soins à domicile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">À propos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#apropos" className="hover:text-primary-foreground transition-colors">
                  Notre mission
                </a>
              </li>
              <li>
                <a href="#apropos" className="hover:text-primary-foreground transition-colors">
                  Notre vision
                </a>
              </li>
              <li>
                <a href="#atouts" className="hover:text-primary-foreground transition-colors">
                  Nos atouts
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+237 699 079 054</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>apasafrica@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Kenedy, Yaoundé</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.facebook.com/apas.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} APAS - Agence de Promotion pour l'Assurance Santé. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
