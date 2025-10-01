# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 landing page application built with TypeScript, React 19, Tailwind CSS v4, and shadcn/ui components. The project serves as a modern, responsive landing page with a component-based architecture.

## Common Development Commands

```bash
# Install dependencies
npm install

# Run development server (port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Code Architecture

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Language**: TypeScript with strict mode enabled
- **React Version**: React 19

### Project Structure
- **app/**: Next.js App Router pages and layouts
  - Root layout configures Geist fonts and global styles
  - Main page composes landing sections
- **components/**: React components organized by feature
  - **ui/**: shadcn/ui base components (Button, Input, Card, etc.)
  - Landing page sections (HeroSection, ValueProposition, AboutSection, Footer)
- **lib/**: Utility functions
  - `utils.ts`: Contains `cn()` utility for className merging with clsx and tailwind-merge

### Key Patterns

#### Component Development
- Use `"use client"` directive for client-side interactive components
- Components use shadcn/ui primitives from `@/components/ui/`
- Style with Tailwind utility classes and the `cn()` utility function
- Component variants managed with class-variance-authority (CVA)

#### Styling System
- CSS variables define theme colors (configured in globals.css)
- Tailwind config extends with custom design tokens
- Component styles use semantic color variables (primary, secondary, muted, etc.)

#### Path Aliases
- `@/` maps to project root
- Common imports:
  - `@/components/ui/` for UI components
  - `@/lib/utils` for the cn() utility
  - `@/components/` for feature components

### Development Workflow

When creating new UI components:
1. Use shadcn/ui CLI or follow existing component patterns in `components/ui/`
2. Apply consistent variant patterns using CVA
3. Ensure proper TypeScript types and React.forwardRef when needed
4. Use semantic Tailwind classes with theme variables

When building features:
1. Create feature components in `components/`
2. Compose UI using shadcn/ui primitives
3. Keep components focused and single-purpose
4. Use TypeScript strictly for type safety

### Configuration Notes
- Tailwind CSS v4 with PostCSS configuration
- TypeScript configured with strict mode and bundler module resolution
- Path aliases configured via tsconfig.json
- shadcn/ui configured with New York style and Lucide icons