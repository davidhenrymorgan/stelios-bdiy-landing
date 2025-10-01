export function ContentSection() {
  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Founder's Note */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Note from Buddy...
          </h2>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p>
              When I started this channel, I was just a guy in a body shop. I never imagined it would
              grow into this incredible community of 772,000 people. I've read every comment and DM.
              You guys have inspired me, and now I want to build the tools that take the guesswork
              out of flipping cars.
            </p>
            <p className="mt-4">
              This isn't about 'selling out'—it's about giving you the resources I wish I had when
              I was grinding in that shop.
            </p>
          </div>
        </div>

        {/* The Blueprint */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Here's What I'm Building...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pro-Level Courses */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/20 transition-colors">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Pro-Level Courses</h3>
              <p className="text-muted-foreground leading-relaxed">
                The 'full process' on steroids. Deep dives into negotiation tactics, handling title issues,
                advanced bodywork, and maximizing profit margins.
              </p>
            </div>

            {/* The Pit Crew */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/20 transition-colors">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">The Pit Crew (Private Community)</h3>
              <p className="text-muted-foreground leading-relaxed">
                A BS-free space to ask me and other experienced flippers questions directly.
                Real problems, real solutions, no fluff.
              </p>
            </div>

            {/* AI Deal Calculator */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/20 transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">AI Deal Calculator</h3>
              <p className="text-muted-foreground leading-relaxed">
                Instantly analyze a potential flip's profit margin before you buy.
                Never overpay again.
              </p>
            </div>

            {/* Market Intel Reports */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary/20 transition-colors">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Market Intel Reports</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exclusive insights on which cars are hot (and which aren't) in your area,
                updated monthly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}