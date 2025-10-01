import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Email signups from landing page
  emailSignups: defineTable({
    firstName: v.string(),
    email: v.string(),
    source: v.string(), // "landing_hero", "exit_popup", "footer_cta"

    // UTM tracking for attribution
    utmParams: v.optional(v.object({
      campaign: v.optional(v.string()),
      source: v.optional(v.string()),
      medium: v.optional(v.string()),
      content: v.optional(v.string()),
      term: v.optional(v.string()),
    })),

    // User context
    referrer: v.optional(v.string()),
    userAgent: v.optional(v.string()),

    // Status tracking
    verified: v.boolean(),
    verificationEmailSentAt: v.optional(v.number()),
    verifiedAt: v.optional(v.number()),

    // Timestamps
    signedUpAt: v.number(),
    updatedAt: v.number(),

    // Engagement tracking
    clickedLinks: v.optional(v.array(v.object({
      url: v.string(),
      clickedAt: v.number(),
    }))),

    // Tags for segmentation
    tags: v.optional(v.array(v.string())),

    // Notes for manual review
    notes: v.optional(v.string()),
  })
    .index("by_email", ["email"])
    .index("by_source", ["source"])
    .index("by_date", ["signedUpAt"])
    .index("by_verified", ["verified"])
    .searchIndex("search_emails", {
      searchField: "email",
      filterFields: ["verified", "source"],
    }),

  // Analytics events for detailed tracking
  analyticsEvents: defineTable({
    eventName: v.string(), // "page_view", "email_capture_attempt", "form_field_focus"
    eventCategory: v.string(), // "engagement", "conversion", "navigation"
    eventLabel: v.optional(v.string()),
    eventValue: v.optional(v.number()),

    // Session tracking
    sessionId: v.optional(v.string()),
    userId: v.optional(v.string()), // If user is identified

    // Context
    page: v.string(),
    referrer: v.optional(v.string()),
    utmParams: v.optional(v.object({
      campaign: v.optional(v.string()),
      source: v.optional(v.string()),
      medium: v.optional(v.string()),
      content: v.optional(v.string()),
      term: v.optional(v.string()),
    })),

    // Device info
    userAgent: v.optional(v.string()),
    screenResolution: v.optional(v.string()),

    // Custom properties for each event
    properties: v.optional(v.any()),

    timestamp: v.number(),
  })
    .index("by_event_name", ["eventName"])
    .index("by_timestamp", ["timestamp"])
    .index("by_session", ["sessionId"])
    .index("by_event_category", ["eventCategory"]),
});
