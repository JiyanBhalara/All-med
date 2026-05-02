import { z } from "zod";

export const LOCATION_IDS = ["jamaica", "hicksville"] as const;
export type LocationId = (typeof LOCATION_IDS)[number];

export const reviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  locationId: z.enum(LOCATION_IDS),
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(120)
    .optional()
    .or(z.literal("")),
  comment: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(2000, "Review is too long (max 2000 characters)"),
  hp: z.string().max(0).optional().or(z.literal("")),
});

export type ReviewInput = z.infer<typeof reviewSchema>;
