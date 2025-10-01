"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add email submission logic
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">The Next Chapter for DIYers.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            For years, we've built and flipped cars together. Now, I'm building something new, just for my most
            dedicated supporters. Get on the list to be the first to know.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              {isSubmitted ? "Thanks!" : "Notify Me"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-3">Join 772,000+ subscribers already in the community</p>
        </div>
      </div>
    </section>
  )
}
