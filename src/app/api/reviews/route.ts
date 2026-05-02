import { NextRequest } from "next/server";
import { reviewSchema } from "@/lib/schemas/review";
import { LOCATIONS } from "@/lib/constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = reviewSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  // Honeypot — silently accept but discard
  if (parsed.data.hp && parsed.data.hp.length > 0) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const { rating, locationId, name, email, comment } = parsed.data;
  const location = LOCATIONS.find((l) => l.id === locationId);
  const isLowRating = rating <= 3;

  // Console-only for now. Backend persistence + email will be added later.
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const tag = isLowRating
    ? "PRIVATE — needs response"
    : "Routed to Google";
  console.log(
    [
      "",
      "═══════════════════════════════════════════════════════",
      `  NEW REVIEW  [${tag}]`,
      "═══════════════════════════════════════════════════════",
      `  ${stars}  (${rating}/5)`,
      `  Location : ${location?.name ?? locationId}`,
      `  Name     : ${name}`,
      `  Email    : ${email || "(not provided)"}`,
      `  When     : ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}`,
      "  ---",
      ...comment.split("\n").map((line) => `  ${line}`),
      "═══════════════════════════════════════════════════════",
      "",
    ].join("\n")
  );

  return Response.json({ ok: true }, { status: 200 });
}
