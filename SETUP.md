# 🚀 Buddy's DIY Landing Page - Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm package manager (comes with Node.js)

## 1. Install Dependencies

The dependencies (convex and canvas-confetti) are already declared in package.json. Run:

```bash
npm install
```

## 2. Initialize Convex

Run the Convex development server:

```bash
npx convex dev
```

This will:
- Prompt you to create a Convex account (or login)
- Create a new Convex project
- Generate your `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL`
- Create a `.env.local` file with your credentials

## 3. Configure Environment Variables

Your `.env.local` should now contain:

```bash
CONVEX_DEPLOYMENT=dev:xxxxx
NEXT_PUBLIC_CONVEX_URL=https://xxxxx.convex.cloud
```

Optional: Add Google Analytics

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 4. Start Development Server

In a new terminal (keep Convex running), start Next.js:

```bash
npm run dev
```

Your app should now be running at `http://localhost:3000`

## 5. Test Email Capture

1. Open `http://localhost:3000`
2. Fill out the email form with test data
3. Submit the form
4. You should see:
   - Loading state with spinner
   - Confetti animation on success
   - Success message "Welcome to the Pit Crew! 🎉"
   - Form resets after 5 seconds

## 6. View Data in Convex Dashboard

Visit your Convex dashboard at `https://dashboard.convex.dev`

- Navigate to your project
- Click "Data" tab
- View the `emailSignups` table with captured emails
- View the `analyticsEvents` table with tracked events

## Troubleshooting

### Installation errors

If you encounter errors during installation:

```bash
# Clear everything and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Convex connection errors

- Ensure `npx convex dev` is running in a separate terminal
- Check that `.env.local` has correct `NEXT_PUBLIC_CONVEX_URL`
- Restart both Convex and Next.js dev servers

### Form not submitting

- Open browser console to check for errors
- Verify Convex is connected (no red errors in console)
- Check network tab for failed API calls

## Next Steps

1. **Phase 2**: Update color system to "Shop Heritage" brand colors
2. **Phase 3**: Add animations and exit intent popup
3. **Phase 4**: SEO optimization and performance tuning
4. **Phase 5**: YouTube integration and social proof
5. **Phase 6**: Admin dashboard for viewing signups

## Production Deployment

1. Deploy to Vercel: `vercel --prod`
2. Set production Convex deployment: `npx convex deploy --cmd 'npm run build'`
3. Add production environment variables in Vercel dashboard
4. Update domain in Convex dashboard settings

## Support

If you encounter issues, check:
- [Convex Documentation](https://docs.convex.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- Project README for additional guidance
