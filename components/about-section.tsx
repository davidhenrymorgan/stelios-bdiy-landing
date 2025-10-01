import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <Image src="/professional-portrait-of-automotive-diy-creator-in.jpg" alt="Buddy in his workshop" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">From a Small Garage to 700k+ Strong</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey has always been about sharing what I know and learning along the way. This next step is no
                different. I'm excited to bring you along for the ride.
              </p>
              <p>
                This isn't just a business—it's the next evolution of our community. Every car we've flipped, every
                repair we've tackled together has led to this moment.
              </p>
              <p className="font-semibold text-foreground">Let's build something great, together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
