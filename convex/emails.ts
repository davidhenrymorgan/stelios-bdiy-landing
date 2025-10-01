import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Capture email signup
export const captureEmail = mutation({
  args: {
    firstName: v.string(),
    email: v.string(),
    source: v.optional(v.string()),
    utmParams: v.optional(v.object({
      campaign: v.optional(v.string()),
      source: v.optional(v.string()),
      medium: v.optional(v.string()),
      content: v.optional(v.string()),
      term: v.optional(v.string()),
    })),
    referrer: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(args.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        code: "INVALID_EMAIL",
      };
    }

    // Check for existing signup
    const existing = await ctx.db
      .query("emailSignups")
      .withIndex("by_email", (q) => q.eq("email", args.email.toLowerCase()))
      .first();

    if (existing) {
      return {
        success: false,
        message: "You're already on the list, Buddy! Check your inbox.",
        code: "ALREADY_SUBSCRIBED",
      };
    }

    // Insert new signup
    const signupId = await ctx.db.insert("emailSignups", {
      firstName: args.firstName.trim(),
      email: args.email.toLowerCase().trim(),
      source: args.source ?? "landing_hero",
      utmParams: args.utmParams,
      referrer: args.referrer,
      userAgent: args.userAgent,
      verified: false,
      signedUpAt: now,
      updatedAt: now,
    });

    return {
      success: true,
      message: "Welcome to the Pit Crew! 🎉 Check your email to confirm.",
      code: "SUCCESS",
      signupId,
    };
  },
});

// Get total signup count (for display)
export const getSignupCount = query({
  handler: async (ctx) => {
    const signups = await ctx.db.query("emailSignups").collect();
    return signups.length;
  },
});

// Get signups by source (for analytics)
export const getSignupsBySource = query({
  handler: async (ctx) => {
    const signups = await ctx.db.query("emailSignups").collect();

    const bySource = signups.reduce((acc, signup) => {
      const source = signup.source;
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return bySource;
  },
});

// Get recent signups (for admin dashboard - Phase 6)
export const getRecentSignups = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50;

    const signups = await ctx.db
      .query("emailSignups")
      .withIndex("by_date")
      .order("desc")
      .take(limit);

    return signups;
  },
});
