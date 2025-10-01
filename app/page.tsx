import { HeroSection } from "@/components/hero-section"
import { AsFeaturedSection } from "@/components/as-featured-section"
import { ContentSection } from "@/components/content-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AsFeaturedSection />
      <ContentSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}