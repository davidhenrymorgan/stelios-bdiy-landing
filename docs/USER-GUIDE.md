# 📖 User Guide - Buddy's DIY Landing Page

## Table of Contents
1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Component Usage](#component-usage)
4. [Styling with Tailwind v4](#styling-with-tailwind-v4)
5. [Adding New Features](#adding-new-features)
6. [Common Tasks](#common-tasks)
7. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**:
```bash
git clone [repository-url]
cd bdiy-landing
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**:
Create a `.env.local` file:
```bash
# For future Convex integration
CONVEX_DEPLOYMENT=dev:your-deployment-id
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

# For Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. **Run the development server**:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
bdiy-landing/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles and Tailwind v4 config
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx    # Button component
│   │   ├── input.tsx     # Input component
│   │   └── card.tsx      # Card component
│   ├── hero-section.tsx      # Hero with email capture
│   ├── content-section.tsx   # Features showcase
│   ├── testimonials-section.tsx  # Social proof
│   ├── as-featured-section.tsx   # Brand logos
│   └── footer.tsx            # Site footer
├── public/               # Static assets
│   └── fonts/           # Local font files
├── docs/                # Documentation
└── lib/                 # Utility functions
    └── utils.ts        # Helper utilities
```

---

## Component Usage

### Creating a New Section

1. **Create the component file**:
```tsx
// components/new-section.tsx
export function NewSection() {
  return (
    <section className="px-4 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. **Import and add to page**:
```tsx
// app/page.tsx
import { NewSection } from "@/components/new-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewSection />  {/* Add here */}
      {/* Other sections */}
    </main>
  )
}
```

### Using UI Components

#### Button Component
```tsx
import { Button } from "@/components/ui/button"

// Primary button (default)
<Button>Click Me</Button>

// Secondary button
<Button variant="secondary">Learn More</Button>

// Large size
<Button size="lg">Get Started</Button>

// With loading state
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading...
</Button>
```

#### Input Component
```tsx
import { Input } from "@/components/ui/input"

<Input
  type="email"
  placeholder="Enter your email"
  className="custom-class"
/>
```

#### Card Component
```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

## Styling with Tailwind v4

### Understanding the Setup

This project uses **Tailwind CSS v4** with the new configuration approach:

1. **No tailwind.config.ts modifications needed** for theming
2. **All theme customization** is done in `app/globals.css`
3. **Uses OKLCH color space** for better color accuracy
4. **CSS variables** for dynamic theming

### Adding Custom Colors

Edit `app/globals.css`:

```css
:root {
  /* Add your custom color */
  --custom-color-500: oklch(0.60 0.20 180);
}

@theme inline {
  /* Register the color with Tailwind */
  --color-custom-500: var(--custom-color-500);
}
```

Use in components:
```tsx
<div className="bg-custom-500 text-white">
  Custom colored element
</div>
```

### Brand Color Classes

Available brand colors:
- `brand-50` through `brand-900` - Orange/red shop colors
- `accent-50` through `accent-900` - Blue mechanical colors
- `surface-50` through `surface-950` - Gray/neutral colors

```tsx
// Examples
<button className="bg-brand-500 hover:bg-brand-600">
  Primary Button
</button>

<div className="bg-accent-100 text-accent-900">
  Accent background
</div>

<div className="bg-surface-100 border-surface-300">
  Neutral card
</div>
```

### Custom Animations

Available animations:
- `animate-fade-in` - Fade with upward motion
- `animate-slide-up` - Slide from bottom
- `animate-scale-in` - Scale with fade
- `animate-shimmer` - Loading skeleton effect
- `animate-spin-slow` - Slow rotation

```tsx
<div className="animate-fade-in">
  Animated content
</div>
```

### Responsive Design

Use responsive prefixes:
```tsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

---

## Adding New Features

### Adding Email Capture (Convex Integration)

1. **Install Convex**:
```bash
npm install convex
npx convex dev
```

2. **Create schema** (`convex/schema.ts`):
```typescript
import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  emailSignups: defineTable({
    firstName: v.string(),
    email: v.string(),
    source: v.string(),
    signedUpAt: v.number(),
  })
})
```

3. **Create mutation** (`convex/emails.ts`):
```typescript
import { mutation } from "./_generated/server"
import { v } from "convex/values"

export const captureEmail = mutation({
  args: {
    firstName: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("emailSignups", {
      ...args,
      source: "landing_hero",
      signedUpAt: Date.now(),
    })
    return { success: true }
  },
})
```

4. **Update form component**:
```tsx
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"

export function EmailForm() {
  const captureEmail = useMutation(api.emails.captureEmail)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await captureEmail({ firstName, email })
    // Show success state
  }
}
```

### Adding Analytics

1. **Google Analytics 4**:
Add to `app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

2. **Track events**:
```tsx
const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Usage
trackEvent('form_submit', {
  form_location: 'hero_section'
})
```

### Adding New Components

1. **Install shadcn/ui component**:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add toast
```

2. **Customize for brand**:
Edit the imported component to use brand colors and styles.

---

## Common Tasks

### Updating Content

#### Change Hero Headline
Edit `components/hero-section.tsx`:
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
  Your New Headline Here
</h1>
```

#### Update Testimonials
Edit `components/testimonials-section.tsx`:
```tsx
const testimonials = [
  {
    id: 1,
    name: "New Person",
    role: "Car Flipper",
    content: "New testimonial text",
    // ...
  },
]
```

#### Modify Features
Edit `components/content-section.tsx`:
```tsx
const features = [
  {
    title: "New Feature",
    description: "Feature description",
    highlights: ["Point 1", "Point 2"],
    // ...
  },
]
```

### Deployment

#### Deploy to Vercel

1. **Push to GitHub**:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

2. **Import to Vercel**:
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Environment variables are automatically configured
- Deploy!

#### Custom Domain

In Vercel Dashboard:
1. Go to Settings → Domains
2. Add your domain (e.g., buddys-diy.com)
3. Update DNS records as instructed

### Performance Optimization

#### Check Performance
```bash
npm run build
# Check the output for bundle sizes
```

#### Run Lighthouse
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Target scores:
   - Performance: 95+
   - Accessibility: 100
   - Best Practices: 95+
   - SEO: 100

#### Optimize Images
- Convert to WebP format
- Use Next.js Image component
- Add blur placeholders
- Implement lazy loading

---

## Troubleshooting

### Common Issues

#### Colors Not Working
**Problem**: Custom colors not appearing
**Solution**: Make sure you've added both the CSS variable AND the theme registration:
```css
:root {
  --my-color: oklch(0.5 0.2 120);
}

@theme inline {
  --color-my: var(--my-color);
}
```

#### Build Errors
**Problem**: Build fails with type errors
**Solution**:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

#### Fonts Not Loading
**Problem**: Geist fonts not appearing
**Solution**: Check that font files exist in `public/fonts/` and are referenced correctly in `layout.tsx`

#### Form Not Submitting
**Problem**: Email form doesn't work
**Solution**:
1. Check browser console for errors
2. Verify Convex is running: `npx convex dev`
3. Check environment variables are set

### Development Tips

#### Hot Reload Not Working
```bash
# Restart dev server
npm run dev
```

#### Clear Next.js Cache
```bash
rm -rf .next
rm -rf node_modules/.cache
```

#### Update Dependencies
```bash
npm update
npm audit fix
```

### Getting Help

#### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Convex Documentation](https://docs.convex.dev)

#### Debug Mode
Add to `.env.local`:
```bash
NODE_ENV=development
DEBUG=*
```

#### Common Patterns

**Conditional Rendering**:
```tsx
{isLoading ? (
  <Spinner />
) : (
  <Content />
)}
```

**Error Handling**:
```tsx
try {
  await submitForm()
} catch (error) {
  console.error('Form submission failed:', error)
  setError('Please try again')
}
```

**Responsive Utilities**:
```tsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">
  Desktop only
</div>

// Different layouts per breakpoint
<div className="flex flex-col md:flex-row">
  Responsive flex
</div>
```

---

## Best Practices

### Code Quality
1. **Use TypeScript** for type safety
2. **Follow ESLint rules** for consistency
3. **Write semantic HTML** for accessibility
4. **Test on multiple devices** for responsiveness
5. **Optimize performance** with Lighthouse

### Git Workflow
```bash
# Feature branch
git checkout -b feature/new-feature

# Make changes
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/new-feature
```

### Component Guidelines
1. Keep components small and focused
2. Use composition over inheritance
3. Extract reusable logic to hooks
4. Add proper TypeScript types
5. Include accessibility attributes

### Performance Tips
1. Use dynamic imports for heavy components
2. Optimize images with WebP format
3. Implement proper caching strategies
4. Minimize JavaScript bundle size
5. Use CSS for animations when possible

---

## Next Steps

1. **Complete Phase 1**: Set up Convex and email capture
2. **Implement Analytics**: Add GA4 and event tracking
3. **Add Exit Intent**: Implement popup for leaving users
4. **A/B Testing**: Test different headlines and CTAs
5. **Launch**: Deploy to production domain

For detailed implementation instructions, refer to the [Implementation Guide](./IMPLEMENTATION-GUIDE.md).