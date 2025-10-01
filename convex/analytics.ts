import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Track analytics event
export const trackEvent = mutation({
  args: {
    eventName: v.string(),
    eventCategory: v.string(),
    eventLabel: v.optional(v.string()),
    eventValue: v.optional(v.number()),
    sessionId: v.optional(v.string()),
    userId: v.optional(v.string()),
    page: v.string(),
    referrer: v.optional(v.string()),
    utmParams: v.optional(v.object({
      campaign: v.optional(v.string()),
      source: v.optional(v.string()),
      medium: v.optional(v.string()),
      content: v.optional(v.string()),
      term: v.optional(v.string()),
    })),
    userAgent: v.optional(v.string()),
    screenResolution: v.optional(v.string()),
    properties: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("analyticsEvents", {
      ...args,
      timestamp: Date.now(),
    });
  },
});

// Get event counts (for admin dashboard)
export const getEventCounts = query({
  args: {
    startDate: v.optional(v.number()),
    endDate: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Fetch events with optional date filtering
    const events = args.startDate
      ? await ctx.db
          .query("analyticsEvents")
          .withIndex("by_timestamp", (q) =>
            q.gte("timestamp", args.startDate!)
          )
          .collect()
      : await ctx.db.query("analyticsEvents").collect();

    // Filter by end date if provided
    const filteredEvents = args.endDate
      ? events.filter((e) => e.timestamp <= args.endDate!)
      : events;

    // Count events by name
    const counts = filteredEvents.reduce((acc, event) => {
      acc[event.eventName] = (acc[event.eventName] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return counts;
  },
});
