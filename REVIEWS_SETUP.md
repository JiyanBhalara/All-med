# Reviews System Setup

The `/reviews` page collects on-site reviews. Behavior depends on rating:

- **4–5 ⭐**: Logged to server console. Reviewer is prompted (with their text pre-copied) to repost on Google.
- **1–3 ⭐**: Logged to server console with `[PRIVATE]` tag. Reviewer sees a private apology screen with the practice phone number — no Google link is shown.

> **Backend persistence is currently disabled** — all reviews go to the server console only. To enable Supabase storage later, see *Section 2: Supabase setup* and re-add the insert block in `src/app/api/reviews/route.ts`.

> **Email notifications are currently disabled** — reviews are printed to the server console (visible in `npm run dev` terminal or Netlify function logs). To enable email notifications later, see *Section 3: Resend setup*.

> **Compliance note:** Showing a Google CTA only to high raters is borderline review-gating, which Google prohibits and the FTC flags. The current UX collects feedback from everyone, but only invites high raters to *additionally* share publicly. Anyone can still post on Google directly. This is the conservative interpretation.

## 1. Environment variables

Create `.env.local` in the project root:

```bash
# Supabase (storage)
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi... # service_role key, NOT anon

# Resend (email notifications) — NOT WIRED UP YET
# Currently reviews are logged to console. To enable email later,
# uncomment these and re-add the email block in src/app/api/reviews/route.ts
# RESEND_API_KEY=re_xxxxxxxxxxxx
# REVIEW_NOTIFY_FROM=reviews@allmedurgentcare.net
# REVIEW_NOTIFY_TO=manager@allmedurgentcare.net,front-desk@allmedurgentcare.net
```

> If keys are missing, the API still returns `200` so dev doesn't break — but reviews won't be saved or emailed. Check the server logs for `[reviews]` warnings.

For Netlify deploys, set the same vars under **Site settings → Environment variables**.

## 2. Supabase setup

1. Create a project at [supabase.com](https://supabase.com) (free tier is fine).
2. In the SQL editor, run:

```sql
create table if not exists public.reviews (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  rating          int not null check (rating between 1 and 5),
  location_id     text not null check (location_id in ('jamaica', 'hicksville')),
  name            text not null,
  email           text,
  comment         text not null,
  is_private      boolean not null default false,
  ip              text,
  user_agent      text
);

create index if not exists reviews_created_at_idx on public.reviews (created_at desc);
create index if not exists reviews_rating_idx     on public.reviews (rating);
create index if not exists reviews_location_idx   on public.reviews (location_id);

-- Lock down the table — only the server (service_role) writes/reads.
alter table public.reviews enable row level security;
-- No policies = no public access. service_role bypasses RLS.
```

3. Grab the **service_role** key from **Project Settings → API** (NOT the `anon` key — service_role bypasses RLS).
4. Browse incoming reviews in **Table Editor → reviews** in the Supabase dashboard.

## 3. Resend setup

1. Create an account at [resend.com](https://resend.com). Free tier: 3000 emails/month, 100/day.
2. Add and verify your sending domain (`allmedurgentcare.net`). Without verification you're limited to sending to the address that owns the Resend account.
3. Create an API key under **API Keys**.
4. Set:
   - `REVIEW_NOTIFY_FROM` to an address on the verified domain (e.g. `reviews@allmedurgentcare.net`).
   - `REVIEW_NOTIFY_TO` to a comma-separated list of staff emails who should be notified.

## 4. QR-code links per clinic

When the URL has a `?location=` query param matching a known location, the location selector is **hidden** and replaced with a small "You're reviewing: …" badge. This is the right URL to encode into a tabletop QR sign at each clinic — patients don't have to pick the location, and they can't accidentally pick the wrong one.

- Jamaica: `https://allmedurgentcare.net/reviews?location=jamaica`
- Hicksville: `https://allmedurgentcare.net/reviews?location=hicksville`

Visiting `/reviews` with no query param (or an unknown one) shows the full selector as a fallback.

## 5. What gets sent to Google

We **do not** post to Google. There is no API for that. After a 4-5 ⭐ submit:

1. The reviewer's comment is copied to their clipboard.
2. A new tab opens at `https://search.google.com/local/writereview?placeid=<PLACE_ID>`.
3. They paste & post on Google themselves.

Place IDs are hardcoded in [`src/lib/constants.ts`](src/lib/constants.ts) per location.

## 6. Spam protection

Currently in place:

- Honeypot field (`hp` — hidden, bots fill it, humans don't).
- Zod validation (length limits, email format, rating range).

If spam becomes a problem, easiest add-on is **Cloudflare Turnstile** (free):

1. Sign up at [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/).
2. Add site key + secret to `.env.local`.
3. Render `<Turnstile />` widget on the form, verify token in the route handler.

## 7. Testing

```bash
# Local dev
npm run dev
# Visit http://localhost:3000/reviews
```

Submit a 5-star review → should see "Copy & Share on Google" thank-you. **Not stored in DB** — only logged to console.
Submit a 2-star review → should see private apology screen. **Stored in Supabase** with `is_private=true`.

Check Supabase **Table Editor → reviews** to confirm 1-3 ⭐ rows landed.
Check the dev server console for the formatted log block on every submission.

Try `http://localhost:3000/reviews?location=hicksville` to verify the location selector is replaced with the locked badge.
