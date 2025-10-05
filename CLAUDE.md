# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Buddy's DIY Landing Page** - a Next.js 14 + Convex backend landing page for a car flipping education business. The project captures email signups with analytics tracking and features a premium automotive-themed design system.

**Tech Stack:**
- Next.js 14.2.16 (App Router)
- Convex (real-time backend & database)
- TypeScript (strict mode)
- Tailwind CSS v4 (OKLCH color space)
- shadcn/ui components (New York style)

**Brand Assets:**
- Main logo: `/Users/david/workspace/stelios/bdiy-logo.svg` (source file outside repo)
- To use in project: Copy to `public/` directory when needed

## Development Commands

### Essential Workflow
```bash
# Install dependencies
npm install

# Start Convex backend (MUST run in separate terminal, keep running)
npx convex dev

# Start Next.js dev server (run in separate terminal)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

### Important Notes
- **Always run `npx convex dev` first** in a separate terminal before starting Next.js
- Convex dev server must stay running for database/mutations to work
- First-time setup: `npx convex dev` creates `.env.local` with `NEXT_PUBLIC_CONVEX_URL` and `CONVEX_DEPLOYMENT`

## Architecture

### Directory Structure
```
app/                    # Next.js App Router
  ├── globals.css       # Tailwind v4 + OKLCH brand colors
  ├── layout.tsx        # Root layout with providers
  └── page.tsx          # Landing page composition

components/             # React components
  ├── ui/              # shadcn/ui primitives (button, card, input)
  ├── hero-section.tsx # Email capture form + Convex integration
  ├── content-section.tsx
  ├── testimonials-section.tsx
  ├── as-featured-section.tsx
  ├── footer.tsx
  └── convex-client-provider.tsx  # Wraps app with ConvexProvider

convex/                # Backend functions & schema
  ├── schema.ts        # Database tables: emailSignups, analyticsEvents
  ├── emails.ts        # Mutations: captureEmail, queries: getSignupCount
  └── analytics.ts     # Mutation: trackEvent

lib/
  ├── analytics.ts     # UTM params, session tracking, GA integration
  └── utils.ts         # cn() utility for Tailwind class merging

styles/
  └── tw-animate-css/  # Additional Tailwind animations
```

### Key Patterns

**Convex Integration:**
- All forms use `useMutation(api.convex_file.functionName)` from `convex/react`
- Database queries use `useQuery(api.convex_file.functionName)`
- Root layout wrapped with `<ConvexClientProvider>` to enable Convex hooks
- Schema defines tables with indexes for performance

**Email Capture Flow:**
1. User fills form in [hero-section.tsx](components/hero-section.tsx)
2. `useMutation(api.emails.captureEmail)` called with UTM params from `getUTMParams()`
3. [convex/emails.ts](convex/emails.ts) validates email, checks for duplicates, inserts to database
4. Success triggers confetti animation (canvas-confetti library)
5. Analytics event tracked via [convex/analytics.ts](convex/analytics.ts)

**Color System (OKLCH):**
- Primary: Shop Tool Orange `oklch(0.65 0.20 40)`
- Accent: Engine Metal Blue `oklch(0.55 0.15 250)`
- Surface grays use Carbon Fiber theme
- All colors defined in [app/globals.css](app/globals.css) as CSS variables
- Dark mode variants included

**Component Conventions:**
- Use shadcn/ui components from `components/ui/` for consistency
- Import path aliases: `@/components`, `@/lib`, `@/convex`
- All interactive elements have proper ARIA labels
- Forms reset after 5 seconds on success

## Implementation Phases

The project follows a phased rollout documented in [IMPLEMENTATION-STATUS.md](IMPLEMENTATION-STATUS.md):

- ✅ **Phase 1 (COMPLETE):** Convex backend + email capture + analytics
- ✅ **Phase 2 (COMPLETE):** Brand color system transformation
- ⏳ **Phase 3 (PENDING):** Framer Motion animations + exit intent popup
- ⏳ **Phase 4 (PENDING):** SEO optimization (meta tags, sitemap, performance)
- ⏳ **Phase 5 (PENDING):** YouTube preview + testimonial carousel
- ⏳ **Phase 6 (PENDING):** Admin dashboard with Clerk auth

**When adding features, check IMPLEMENTATION-STATUS.md first to understand current phase and priorities.**

## Convex-Specific Workflows

### Adding a New Database Table
1. Update [convex/schema.ts](convex/schema.ts) with `defineTable()`
2. Add indexes for common query patterns
3. Run `npx convex dev` (auto-syncs schema to cloud)
4. Create corresponding mutation/query functions in `convex/` directory

### Creating a Mutation
```typescript
// convex/myMutations.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const myMutation = mutation({
  args: {
    field: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("tableName", {
      field: args.field,
      createdAt: Date.now(),
    });
  },
});
```

### Using in Components
```typescript
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const mutation = useMutation(api.myMutations.myMutation);
await mutation({ field: "value" });
```

## Important Constraints

**DO NOT:**
- Modify `next.config.mjs` - build errors/TS errors are intentionally ignored for rapid iteration
- Change Tailwind v4 config without testing - using new `@tailwindcss/postcss` plugin
- Remove Convex provider from layout - breaks all mutations/queries
- Commit `.env.local` - contains sensitive Convex deployment URLs

**DO:**
- Test email form after any Convex schema changes
- Run both `npx convex dev` and `npm run dev` when developing
- Use OKLCH color space for new colors (matches brand system)
- Check browser console for Convex connection errors (red errors indicate backend disconnected)

## Deployment

**Vercel Setup:**
1. Deploy via `vercel --prod`
2. Add environment variables in Vercel dashboard:
   - `CONVEX_DEPLOYMENT` (from `.env.local`)
   - `NEXT_PUBLIC_CONVEX_URL` (from `.env.local`)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
3. Convex automatically deploys with `npx convex deploy --cmd 'npm run build'`

**Branch Strategy (from vercel.json):**
- Auto-deploy: `main`, `feat/*`, `fix/*` branches
- Preview deployments for all feature branches

## Common Troubleshooting

**"Convex not connected" errors:**
- Ensure `npx convex dev` is running
- Check `.env.local` has `NEXT_PUBLIC_CONVEX_URL`
- Restart both terminals

**Form submission fails silently:**
- Open browser console for Convex errors
- Verify schema matches mutation args in `convex/emails.ts`
- Check network tab for 400/500 responses

**Tailwind classes not applying:**
- Tailwind v4 uses `@tailwindcss/postcss` - check [postcss.config.mjs](postcss.config.mjs)
- CSS variables must be defined in [app/globals.css](app/globals.css)
- Run `npm run dev` restart if new classes added

**Build fails on Vercel:**
- Check `next.config.mjs` has `typescript.ignoreBuildErrors: true`
- Ensure Convex env vars set in Vercel dashboard
- Review [docs/PHASE-2-COMPLETE.md](docs/PHASE-2-COMPLETE.md) for known build issues

## Analytics & Tracking

**Analytics Events (tracked to Convex):**
- `page_view` - User lands on page
- `email_capture_attempt` - Form submitted
- `email_capture_success` - Email saved to database
- `email_capture_error` - Validation/server error
- `email_capture_duplicate` - User already subscribed

**UTM Parameters:**
All signups automatically capture `utm_campaign`, `utm_source`, `utm_medium`, `utm_content`, `utm_term` via [lib/analytics.ts](lib/analytics.ts) `getUTMParams()`.

**Viewing Data:**
- Convex Dashboard: https://dashboard.convex.dev
- Navigate to project → Data tab
- Tables: `emailSignups`, `analyticsEvents`

## Code Style

- Use TypeScript for all new files
- Prefer `const` over `let`
- Use async/await over `.then()` chains
- Import components with `@/` aliases
- Keep components under 300 lines (extract subcomponents)
- Use `cn()` from `lib/utils.ts` for conditional Tailwind classes

## Testing Strategy

**Manual Testing Checklist:**
1. Fill email form with valid/invalid emails
2. Test duplicate email submission
3. Verify confetti animation fires
4. Check Convex dashboard for new entries
5. Test on mobile viewport (responsive design)
6. Verify dark mode toggle works

**No automated tests yet** - Phase 4 will add Lighthouse audits and E2E tests.
