import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Key, Wrench, Users } from "lucide-react"

const features = [
  {
    icon: Key,
    title: "Exclusive Access",
    description: "Be the first to see what I've been working on behind the scenes.",
  },
  {
    icon: Wrench,
    title: "Built with a DIY Spirit",
    description: "A new tool/product designed with the same practical, no-nonsense approach you see on the channel.",
  },
  {
    icon: Users,
    title: "Shape the Future",
    description: "Your feedback will be crucial in building this from the ground up, together.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sign Up?</h2>
          <p className="text-muted-foreground text-lg">
            Be part of something built for the community, by the community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
