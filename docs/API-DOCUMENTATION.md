# 🔧 API Documentation - Buddy's DIY Landing Page

## Overview

The Buddy's DIY landing page is a high-performance Next.js application built with TypeScript, React 18, and Tailwind CSS v4. This document provides comprehensive API and component documentation for developers.

## 📦 Component API Reference

### HeroSection
`components/hero-section.tsx`

**Purpose**: Primary landing section with email capture form and value propositions.

```typescript
export function HeroSection(): JSX.Element
```

**Props**: None (self-contained component)

**State Management**:
- `firstName: string` - User's first name input
- `email: string` - User's email address input
- `isSubmitted: boolean` - Form submission state

**Features**:
- Premium gradient background with pattern overlay
- Trust indicators (772K+ subscribers, 100M+ views, 7+ years)
- Two-field email capture form
- Animated success state
- Responsive design with fluid typography
- Social proof section
- Scroll indicator animation

**CSS Classes**:
- Uses Tailwind v4 with OKLCH color space
- Primary button: `bg-primary hover:bg-primary/90`
- Form inputs: `h-12 text-base bg-background/70`

**Events**:
- `handleSubmit(e: React.FormEvent)` - Form submission handler

---

### ContentSection
`components/content-section.tsx`

**Purpose**: Feature showcase with 4 main product offerings.

```typescript
export function ContentSection(): JSX.Element
```

**Features Array Structure**:
```typescript
interface Feature {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  gradient: string
}
```

**Key Components**:
1. **The Flipping Accelerator** - Complete course system
2. **The Pit Crew** - Private community access
3. **FlipCalc Pro** - AI-powered analysis tools
4. **Market Intelligence** - Monthly market reports

**Visual Elements**:
- Gradient accent bars
- Hover effect overlays
- Icon-based highlight lists
- Success metrics grid (revenue, cars flipped, avg profit, turnaround)

---

### TestimonialsSection
`components/testimonials-section.tsx`

**Purpose**: Social proof through curated testimonials.

```typescript
export function TestimonialsSection(): JSX.Element
```

**Testimonial Structure**:
```typescript
interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  highlight: string
  avatar: string
}
```

**Features**:
- Staggered card layout
- Responsive grid (1 column mobile, 3 columns desktop)
- Avatar images with fallback
- Highlighted key phrases
- Star rating display

---

### AsFeaturedSection
`components/as-featured-section.tsx`

**Purpose**: Brand credibility through featured platforms.

```typescript
export function AsFeaturedSection(): JSX.Element
```

**Features**:
- Grayscale brand logos with hover effect
- Responsive grid layout
- Smooth opacity transitions
- Centered alignment with proper spacing

---

### Footer
`components/footer.tsx`

**Purpose**: Site footer with links and branding.

```typescript
export function Footer(): JSX.Element
```

**Sections**:
- Copyright notice
- YouTube channel link
- Social media links
- Legal/privacy links (placeholder)

---

## 🎨 UI Components

### Button
`components/ui/button.tsx`

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}
```

**Variants**:
- `default`: Primary brand color with shadow
- `destructive`: Red/error state
- `outline`: Border only, transparent background
- `secondary`: Muted background
- `ghost`: Minimal styling, hover state only
- `link`: Text link appearance

---

### Input
`components/ui/input.tsx`

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
```

**Features**:
- Full width by default
- Focus ring with brand color
- Disabled state styling
- ARIA support for accessibility

---

### Card
`components/ui/card.tsx`

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
```

**Sub-components**:
- `CardHeader`: Top section with title/description
- `CardTitle`: Main heading
- `CardDescription`: Subtitle text
- `CardContent`: Main body content
- `CardFooter`: Bottom actions/metadata

---

## 🌐 Page Structure

### Root Layout
`app/layout.tsx`

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element
```

**Features**:
- Geist font configuration (Sans & Mono)
- Dark/light mode support via ThemeProvider
- Global CSS imports
- Metadata configuration

**Metadata**:
```typescript
{
  title: "Buddy's DIY - Master Car Flipping",
  description: "Join 772,000+ learning professional car flipping",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png"
  }
}
```

---

### Home Page
`app/page.tsx`

```typescript
export default function Home(): JSX.Element
```

**Component Composition**:
1. HeroSection
2. AsFeaturedSection
3. ContentSection
4. TestimonialsSection
5. Footer

**Layout**:
- Full viewport sections
- Smooth scroll behavior
- Responsive breakpoints

---

## 🎨 Theming System

### CSS Variables
`app/globals.css`

**Color System** (OKLCH Color Space):

```css
/* Brand Colors */
--brand-500: oklch(0.60 0.20 25)  /* Primary Orange */
--accent-500: oklch(0.55 0.15 250) /* Mechanical Blue */

/* Surface Colors */
--surface-100: oklch(0.97 0 0)  /* Light gray */
--surface-900: oklch(0.14 0 0)  /* Dark gray */

/* Semantic Colors */
--success: oklch(0.65 0.17 145)
--warning: oklch(0.75 0.15 85)
--error: oklch(0.58 0.22 25)
```

**Typography Scale**:
```css
--font-size-display-xl: clamp(3rem, 8vw, 5rem)
--font-size-heading-xl: clamp(1.75rem, 3vw, 2.25rem)
--font-size-body-lg: 1.125rem
```

**Animation Keyframes**:
- `fade-in`: Opacity with Y translation
- `slide-up`: Bottom to top movement
- `scale-in`: Scale with opacity
- `shimmer`: Loading skeleton effect

---

## 🔄 State Management

### Form State Pattern
```typescript
const [firstName, setFirstName] = useState("")
const [email, setEmail] = useState("")
const [isSubmitted, setIsSubmitted] = useState(false)

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Validation
  // API call
  // Success handling
}
```

### Loading States
- Button disabled during submission
- Success message with auto-dismiss
- Error handling with user feedback

---

## 📱 Responsive Design

### Breakpoints
```typescript
{
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px' // Large screens
}
```

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (min 44x44px)

---

## ♿ Accessibility

### ARIA Labels
```tsx
<input
  aria-label="First Name"
  aria-required="true"
  aria-invalid={hasError}
/>
```

### Keyboard Navigation
- Tab order follows visual hierarchy
- Focus indicators on all interactive elements
- Escape key closes modals/popups

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images

---

## 🚀 Performance Optimizations

### Image Optimization
- Next.js Image component with WebP
- Lazy loading below fold
- Blur placeholders for LCP

### Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting
- Minimal initial bundle

### Font Loading
```typescript
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
```

---

## 🧪 Testing Considerations

### Component Testing
```typescript
// Example test structure
describe('HeroSection', () => {
  it('renders trust indicators', () => {})
  it('handles form submission', () => {})
  it('shows success state', () => {})
  it('validates email format', () => {})
})
```

### E2E Test Scenarios
1. Complete email signup flow
2. Responsive design verification
3. Navigation and scroll behavior
4. Form validation errors
5. Success state animations

---

## 📝 Development Guidelines

### Component Best Practices
1. Use TypeScript for type safety
2. Keep components pure and predictable
3. Extract reusable logic to hooks
4. Implement proper error boundaries
5. Add loading and error states

### CSS Guidelines
1. Use Tailwind utility classes
2. Extend theme via CSS variables
3. Avoid inline styles
4. Maintain consistent spacing
5. Test across browsers

### Performance Checklist
- [ ] Lighthouse score 95+
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total Blocking Time < 200ms

---

## 🔗 External Dependencies

### Core Dependencies
- `next`: 15.1.3
- `react`: 18.3.1
- `tailwindcss`: 4.0.0

### UI Libraries
- `class-variance-authority`: Button variants
- `clsx`: Class name utilities
- `tailwind-merge`: Class merging

### Development
- `typescript`: 5.x
- `eslint`: Code linting
- `prettier`: Code formatting

---

## 📚 Further Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [React 18 Features](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)