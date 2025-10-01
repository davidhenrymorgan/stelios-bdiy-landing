# ⚡ Quick Start Guide

## 🚀 Setup (3 Commands)

```bash
# 1. Install dependencies
npm install

# 2. Start Convex (keep this running)
npx convex dev

# 3. In NEW terminal, start Next.js
npm run dev
```

Visit `http://localhost:3000` and test the email form!

---

## 🎯 What You Should See

1. Fill in First Name + Email
2. Click "Reserve My Spot"
3. See loading spinner
4. **CONFETTI** 🎉
5. Success message "Welcome to the Pit Crew!"
6. Form resets after 5 seconds

---

## 📊 View Your Data

Visit https://dashboard.convex.dev

- Click your project
- Go to "Data" tab
- See `emailSignups` table with captured emails
- See `analyticsEvents` table with tracking data

---

## 🐛 Troubleshooting

### Convex won't start
```bash
# Make sure you're logged in
npx convex dev
# Follow the login prompts
```

### Build errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json .next
npm install
```

### Form not working
- Check browser console for errors
- Ensure Convex dev server is running
- Check `.env.local` has `NEXT_PUBLIC_CONVEX_URL`

---

## 📝 Next Steps

Once everything works:
- **Phase 2**: Update brand colors to automotive theme
- **Phase 3**: Add animations and exit popup
- **Phase 4**: SEO optimization
- **Phase 5**: YouTube integration
- **Phase 6**: Admin dashboard

See [SETUP.md](SETUP.md) for detailed instructions.
