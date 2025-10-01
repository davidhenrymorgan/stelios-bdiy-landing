import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContentSection />
      <Footer />
    </main>
  )
}