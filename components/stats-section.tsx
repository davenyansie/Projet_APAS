export function StatsSection() {
  const stats = [
    { value: "9+", label: "Années d'expérience" },
    { value: "100+", label: "Hôpitaux partenaires" },
    { value: "50K+", label: "Patients assurés" },
    { value: "98%", label: "Taux de satisfaction" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
