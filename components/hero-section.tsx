"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add email submission logic
    console.log("Form submitted:", { firstName, email })
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 lg:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Greeting */}
        <div className="text-3xl md:text-4xl font-medium text-foreground">
          What's going on Everybuddy! 👋
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            After 772,000 Subscribers, I'm Finally Building Something{" "}
            <span className="text-primary italic">For</span> You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For years, you've asked for more—more guides, more tools, and a way to get my direct help.
            I'm building it now, the right way. No shortcuts, just the full process.
            Get on the waitlist to be first to know.
          </p>
        </div>

        {/* Email Form */}
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="flex-1 h-12 text-base bg-background"
                aria-label="First Name"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base bg-background"
                aria-label="Email Address"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
            >
              {isSubmitted ? "Thanks! You're on the list" : "Keep Me Updated"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            Join 772,000+ subscribers already in the community
          </p>
        </div>
      </div>
    </section>
  )
}