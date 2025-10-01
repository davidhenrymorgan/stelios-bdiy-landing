export function AsFeaturedSection() {
  const mediaOutlets = [
    { name: "YouTube", subscribers: "772K+" },
    { name: "Motor Trend", type: "Featured" },
    { name: "Car & Driver", type: "Mentioned" },
    { name: "Entrepreneur", type: "Interview" },
    { name: "Forbes", type: "Quoted" },
  ]

  return (
    <section className="px-4 py-16 border-y border-border/50 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            As Featured In
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {mediaOutlets.map((outlet, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 transition-all duration-200 hover:scale-105"
              >
                <div className="text-2xl font-bold text-muted-foreground/60 group-hover:text-foreground transition-colors">
                  {outlet.name}
                </div>
                {outlet.subscribers && (
                  <span className="text-xs text-primary font-medium">
                    {outlet.subscribers}
                  </span>
                )}
                {outlet.type && (
                  <span className="text-xs text-muted-foreground">
                    {outlet.type}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* YouTube specific callout */}
          <div className="mt-12 inline-flex items-center gap-4 px-6 py-3 bg-card rounded-full border border-border/50">
            <svg
              className="w-8 h-8 text-destructive"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <div className="text-left">
              <div className="font-semibold">Buddy's DIY</div>
              <div className="text-sm text-muted-foreground">772,000 Subscribers • 100M+ Views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}