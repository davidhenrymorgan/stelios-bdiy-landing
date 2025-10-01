import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestColorsPage() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Brand Color System Test</h1>
          <p className="text-surface-600">Buddy's DIY - Shop Heritage Theme</p>
        </div>

        {/* Brand Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Brand Colors (Shop Orange)</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-20 w-full bg-brand-50 rounded-lg border border-surface-200" />
              <p className="text-xs text-center font-mono">brand-50</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-brand-100 rounded-lg" />
              <p className="text-xs text-center font-mono">brand-100</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-brand-300 rounded-lg" />
              <p className="text-xs text-center font-mono">brand-300</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-brand-500 rounded-lg shadow-brand-glow" />
              <p className="text-xs text-center font-mono font-bold">brand-500 (Primary)</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-brand-700 rounded-lg" />
              <p className="text-xs text-center font-mono">brand-700</p>
            </div>
          </div>
        </section>

        {/* Accent Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Accent Colors (Mechanical Blue)</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-20 w-full bg-accent-50 rounded-lg border border-surface-200" />
              <p className="text-xs text-center font-mono">accent-50</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-accent-100 rounded-lg" />
              <p className="text-xs text-center font-mono">accent-100</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-accent-300 rounded-lg" />
              <p className="text-xs text-center font-mono">accent-300</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-accent-500 rounded-lg shadow-accent-glow" />
              <p className="text-xs text-center font-mono font-bold">accent-500 (Accent)</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-accent-700 rounded-lg" />
              <p className="text-xs text-center font-mono">accent-700</p>
            </div>
          </div>
        </section>

        {/* Surface Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Surface Colors (Carbon Fiber)</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="h-20 w-full bg-surface-50 rounded-lg border border-surface-200" />
              <p className="text-xs text-center font-mono">surface-50</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-surface-200 rounded-lg" />
              <p className="text-xs text-center font-mono">surface-200</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-surface-500 rounded-lg" />
              <p className="text-xs text-center font-mono text-white">surface-500</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-surface-700 rounded-lg" />
              <p className="text-xs text-center font-mono text-white">surface-700</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 w-full bg-surface-900 rounded-lg" />
              <p className="text-xs text-center font-mono text-white">surface-900</p>
            </div>
          </div>
        </section>

        {/* Button Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default (Brand)</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <h3 className="text-xl font-semibold mt-8">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>

          <h3 className="text-xl font-semibold mt-8">Button States</h3>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="accent" disabled>Disabled Accent</Button>
          </div>
        </section>

        {/* Input Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Input Component</h2>
          <div className="max-w-md space-y-4">
            <Input placeholder="Default input" />
            <Input placeholder="Email input" type="email" />
            <Input placeholder="Focus to see brand ring" />
            <Input placeholder="Disabled input" disabled />
          </div>
        </section>

        {/* Card Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Card Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Hover to see lift effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-surface-600">This card has a hover effect with brand border glow.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Second Card</CardTitle>
                <CardDescription>With brand colors</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Call to Action</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third Card</CardTitle>
                <CardDescription>Test card</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="accent" className="w-full">Accent Button</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Semantic Colors */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Semantic Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-success/10 border border-success/20 text-success p-4 rounded-lg">
              ✓ Success Message
            </div>
            <div className="bg-warning/10 border border-warning/20 text-warning p-4 rounded-lg">
              ⚠ Warning Message
            </div>
            <div className="bg-error/10 border border-error/20 text-error p-4 rounded-lg">
              ✗ Error Message
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Shadow System</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-brand-sm">
              <p className="text-sm font-mono">shadow-brand-sm</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-brand">
              <p className="text-sm font-mono">shadow-brand</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-brand-lg">
              <p className="text-sm font-mono">shadow-brand-lg</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-brand-glow">
              <p className="text-sm font-mono">shadow-brand-glow</p>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-surface-200 animate-fade-in">
              <p className="text-sm font-mono">animate-fade-in</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-surface-200 animate-slide-up">
              <p className="text-sm font-mono">animate-slide-up</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-surface-200 animate-scale-in">
              <p className="text-sm font-mono">animate-scale-in</p>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Gradient Utilities</h2>
          <div className="space-y-4">
            <div className="h-20 gradient-brand rounded-lg flex items-center justify-center text-white font-semibold">
              gradient-brand
            </div>
            <div className="h-20 gradient-accent rounded-lg flex items-center justify-center text-white font-semibold">
              gradient-accent
            </div>
            <h1 className="text-5xl font-bold gradient-text">
              Gradient Text
            </h1>
          </div>
        </section>
      </div>
    </div>
  )
}
