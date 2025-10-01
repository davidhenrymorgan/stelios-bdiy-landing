export function ContentSection() {
  const features = [
    {
      title: "The Flipping Accelerator",
      subtitle: "Complete Course System",
      description: "Deep-dive video modules covering every aspect of profitable car flipping. From auction strategies to advanced bodywork techniques.",
      highlights: [
        "30+ hours of HD content",
        "Lifetime access & updates",
        "Proven negotiation tactics",
        "Legal & tax optimization"
      ],
      gradient: "from-primary to-primary/70"
    },
    {
      title: "The Pit Crew",
      subtitle: "Private Community",
      description: "Direct access to me and 500+ serious flippers. Get real-time deal analysis, troubleshooting help, and network with successful entrepreneurs.",
      highlights: [
        "Weekly Q&A sessions",
        "Deal review & feedback",
        "Supplier connections",
        "Regional market intel"
      ],
      gradient: "from-accent to-accent/70"
    },
    {
      title: "FlipCalc Pro",
      subtitle: "AI-Powered Tools",
      description: "Instantly analyze any potential flip's profitability. Factor in all hidden costs, market demand, and realistic timelines before you buy.",
      highlights: [
        "Real-time market data",
        "Profit margin calculator",
        "Cost breakdown analysis",
        "ROI projections"
      ],
      gradient: "from-secondary to-secondary/70"
    },
    {
      title: "Market Intelligence",
      subtitle: "Monthly Reports",
      description: "Data-driven insights on which vehicles are hot in your market. Know exactly what to buy, when to buy it, and how much to pay.",
      highlights: [
        "Regional trend analysis",
        "Seasonal opportunities",
        "Auction price guides",
        "Competition tracking"
      ],
      gradient: "from-primary to-accent"
    }
  ]

  return (
    <section className="relative px-4 py-24 lg:py-32">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Founder's message with premium styling */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 4a1 1 0 100 2v3a1 1 0 11-2 0v-3a1 1 0 011-1z"/>
            </svg>
            A Personal Note from Buddy
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            After 7 Years of Free Content,
            <span className="block text-primary mt-2">It's Time to Go Deeper</span>
          </h2>

          <div className="prose prose-lg max-w-2xl mx-auto text-muted-foreground">
            <p className="leading-relaxed">
              You've watched me flip hundreds of cars. You've seen the wins, the losses, and everything in between.
              But YouTube videos can only teach so much. The real money is in the details I can't share in a 20-minute video.
            </p>
            <p className="mt-4 font-medium text-foreground">
              This isn't about gatekeeping—it's about giving you the complete blueprint that took me from
              $30K/year to multiple six figures. No shortcuts. Just the full process.
            </p>
          </div>
        </div>

        {/* Premium feature cards */}
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scale Your Flipping Business
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`} />

                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        <span className="text-sm font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Success metrics */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold mb-8">The Numbers Don't Lie</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">$2.4M+</div>
              <div className="text-sm text-muted-foreground mt-1">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">847</div>
              <div className="text-sm text-muted-foreground mt-1">Cars Flipped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$8.7K</div>
              <div className="text-sm text-muted-foreground mt-1">Avg Profit/Flip</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">14</div>
              <div className="text-sm text-muted-foreground mt-1">Days Avg Turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}