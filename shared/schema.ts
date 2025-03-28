import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const waitlistUsers = pgTable("waitlist_users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  reason: text("reason").notNull(),
  agreeToTerms: text("agree_to_terms").notNull(), // storing as "true"
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWaitlistUserSchema = createInsertSchema(waitlistUsers)
  .omit({ id: true, createdAt: true })
  .extend({
    email: z.string().email("Please enter a valid email address"),
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    agreeToTerms: z.literal("true", {
      errorMap: () => ({ message: "You must agree to the terms and conditions" }),
    }),
  });

export type InsertWaitlistUser = z.infer<typeof insertWaitlistUserSchema>;
export type WaitlistUser = typeof waitlistUsers.$inferSelect;
