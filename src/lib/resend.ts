import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export const resend = apiKey ? new Resend(apiKey) : null;

export const REVIEW_NOTIFY_FROM =
  process.env.REVIEW_NOTIFY_FROM ?? "reviews@allmedurgentcare.net";

export const REVIEW_NOTIFY_TO = (
  process.env.REVIEW_NOTIFY_TO ?? "info@allmedurgentcare.net"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
