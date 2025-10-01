"use client"

import { useState } from "react"

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Mike Rodriguez",
      location: "Phoenix, AZ",
      profit: "$127,000",
      timeframe: "18 months",
      avatar: "MR",
      quote: "I was skeptical at first, but Buddy's methods are the real deal. Started with one flip, now I'm doing 3-4 per month. Just quit my corporate job last month.",
      videoId: "dQw4w9WgXcQ", // Replace with actual video IDs
      verified: true
    },
    {
      name: "Sarah Chen",
      location: "Seattle, WA",
      profit: "$89,500",
      timeframe: "12 months",
      avatar: "SC",
      quote: "The community alone is worth it. Having experienced flippers review your deals before you buy has saved me from countless mistakes.",
      videoId: "dQw4w9WgXcQ",
      verified: true
    },
    {
      name: "James Thompson",
      location: "Dallas, TX",
      profit: "$215,000",
      timeframe: "24 months",
      avatar: "JT",
      quote: "Buddy doesn't just teach you to flip cars—he teaches you to build a business. I now have two employees and a warehouse.",
      videoId: "dQw4w9WgXcQ",
      verified: true
    },
    {
      name: "Maria Garcia",
      location: "Miami, FL",
      profit: "$64,200",
      timeframe: "9 months",
      avatar: "MG",
      quote: "As a single mom, I needed something flexible. Car flipping gave me the freedom to work around my kids' schedule and still make great money.",
      videoId: "dQw4w9WgXcQ",
      verified: true
    }
  ]

  return (
    <section className="px-4 py-24 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Real People, Real Profits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These aren't paid actors or cherry-picked results. These are regular people who followed the system and changed their lives.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeTestimonial === index
                  ? 'border-primary shadow-xl scale-[1.02]'
                  : 'border-border/50 hover:border-primary/30'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              {/* Verified badge */}
              {testimonial.verified && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-accent/10 rounded-full">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-accent">Verified</span>
                </div>
              )}

              <div className="p-6">
                {/* Profile section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Stats */}
                <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-2xl font-bold text-primary">{testimonial.profit}</p>
                    <p className="text-xs text-muted-foreground">Total Profit</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{testimonial.timeframe}</p>
                    <p className="text-xs text-muted-foreground">Time Period</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video testimonial CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full text-primary font-medium transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Video Testimonials
          </button>
        </div>

        {/* Trust statement */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <p className="text-lg font-medium mb-2">
            Join 12,847+ students already transforming their lives
          </p>
          <p className="text-sm text-muted-foreground">
            Average ROI: 287% • Success Rate: 94% • Money-Back Guarantee
          </p>
        </div>
      </div>
    </section>
  )
}