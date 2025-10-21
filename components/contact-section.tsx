"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Facebook } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Parlons de vos besoins en assurance santé et découvrez comment nous pouvons vous accompagner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez vos besoins..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-card-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">apasafrica@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Je_nyom@apas.cm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-card-foreground">Téléphone</h3>
                    <p className="text-sm text-muted-foreground">+237 699 079 054</p>
                    <p className="text-sm text-muted-foreground">+237 651 962 252</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-card-foreground">Adresse</h3>
                    <p className="text-sm text-muted-foreground">
                      Kenedy, Yaoundé
                      <br />
                      Cameroun
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Facebook className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-card-foreground">Facebook</h3>
                    <a
                      href="https://www.facebook.com/apas.africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      @apas.africa
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
