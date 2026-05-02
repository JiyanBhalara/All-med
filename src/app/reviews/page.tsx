"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  CheckCircle2,
  Star,
  Heart,
  ExternalLink,
  Copy,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { SITE, LOCATIONS } from "@/lib/constants";
import {
  reviewSchema,
  type ReviewInput,
  type LocationId,
} from "@/lib/schemas/review";
import StarRating from "@/components/StarRating";

type SubmittedReview = {
  rating: number;
  comment: string;
  locationId: LocationId;
  name: string;
};

function googleReviewUrl(placeId: string) {
  return `https://search.google.com/local/writereview?placeid=${placeId}`;
}

export default function ReviewsPage() {
  return (
    <Suspense fallback={<ReviewPageShell />}>
      <ReviewPageInner />
    </Suspense>
  );
}

function ReviewPageShell() {
  return (
    <section className="bg-brand-gradient-r py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Share Your Experience</h1>
      </div>
    </section>
  );
}

function ReviewPageInner() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location");
  const locationLocked =
    locationParam === "jamaica" || locationParam === "hicksville";
  const initialLocation: LocationId = locationLocked
    ? (locationParam as LocationId)
    : "jamaica";

  const [submitted, setSubmitted] = useState<SubmittedReview | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ReviewInput>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      locationId: initialLocation,
      name: "",
      email: "",
      comment: "",
      hp: "",
    },
  });

  const comment = watch("comment") ?? "";
  const rating = watch("rating");
  const locationId = watch("locationId");

  useEffect(() => {
    setValue("locationId", initialLocation);
  }, [initialLocation, setValue]);

  const onSubmit = async (data: ReviewInput) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: null }));
        throw new Error(error ?? "Something went wrong. Please try again.");
      }
      setSubmitted({
        rating: data.rating,
        comment: data.comment,
        locationId: data.locationId,
        name: data.name,
      });
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const handleCopyAndOpen = async () => {
    if (!submitted) return;
    const place = LOCATIONS.find((l) => l.id === submitted.locationId);
    if (!place) return;
    try {
      await navigator.clipboard.writeText(submitted.comment);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard may fail in some browsers; still open Google
    }
    window.open(googleReviewUrl(place.googlePlaceId), "_blank", "noopener");
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-gradient-r py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4 text-sm font-medium">
            <Heart className="w-4 h-4" />
            We&apos;d love your feedback
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Share Your Experience
          </h1>
          <p className="text-lg text-on-dark-soft">
            Your feedback helps us serve our community better and helps others
            find quality care.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            submitted.rating >= 4 ? (
              <HighRatingThankYou
                review={submitted}
                copied={copied}
                onShare={handleCopyAndOpen}
              />
            ) : (
              <LowRatingThankYou review={submitted} />
            )
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 bg-white border border-border rounded-3xl p-6 md:p-10 shadow-sm"
              noValidate
            >
              {/* Location — locked when arriving from a per-location QR link */}
              {locationLocked ? (
                <LockedLocationBadge locationId={locationId as LocationId} />
              ) : (
                <fieldset>
                  <legend className="block text-base font-semibold mb-3">
                    Which location did you visit?
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {LOCATIONS.map((loc) => {
                      const selected = locationId === loc.id;
                      return (
                        <label
                          key={loc.id}
                          className={`flex flex-col cursor-pointer rounded-xl border-2 px-4 py-3 transition-all ${
                            selected
                              ? "border-primary bg-primary-light/40"
                              : "border-border hover:border-primary/40 hover:bg-muted-light"
                          }`}
                        >
                          <input
                            type="radio"
                            value={loc.id}
                            {...register("locationId")}
                            className="sr-only"
                          />
                          <span className="font-semibold">{loc.shortName}</span>
                          <span className="text-sm text-muted">
                            {loc.address}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.locationId && (
                    <p className="mt-2 text-sm text-error">
                      {errors.locationId.message}
                    </p>
                  )}
                </fieldset>
              )}
              {/* Hidden input so the locked location still posts with the form */}
              {locationLocked && (
                <input type="hidden" {...register("locationId")} />
              )}

              {/* Star Rating */}
              <div className="border-t border-border pt-8">
                <p className="block text-base font-semibold mb-4 text-center">
                  How would you rate your visit?
                </p>
                <Controller
                  name="rating"
                  control={control}
                  render={({ field }) => (
                    <StarRating
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.rating && (
                  <p className="mt-2 text-sm text-error text-center">
                    Please select a rating
                  </p>
                )}
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5 border-t border-border pt-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Your Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    placeholder="First and last name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email{" "}
                    <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">
                      {errors.email.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-muted">
                    Only if you&apos;d like us to follow up.
                  </p>
                </div>
              </div>

              {/* Comment */}
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-semibold mb-2"
                >
                  Tell us about your experience{" "}
                  <span className="text-error">*</span>
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  {...register("comment")}
                  maxLength={2000}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                  placeholder="What stood out about your visit? How did our team treat you?"
                />
                <div className="flex justify-between mt-1">
                  {errors.comment ? (
                    <p className="text-sm text-error">
                      {errors.comment.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <p className="text-xs text-muted ml-auto">
                    {comment.length} / 2000
                  </p>
                </div>
              </div>

              {/* Honeypot â€” hidden field for bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="hp">Leave this field empty</label>
                <input
                  id="hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("hp")}
                />
              </div>

              {submitError && (
                <div className="rounded-lg bg-urgent-light border border-urgent/30 px-4 py-3 text-sm text-urgent">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !rating}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>

              <p className="text-xs text-muted text-center">
                Please don&apos;t include personal medical details. By
                submitting, you agree we may follow up at the email provided.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function HighRatingThankYou({
  review,
  copied,
  onShare,
}: {
  review: SubmittedReview;
  copied: boolean;
  onShare: () => void;
}) {
  const place = LOCATIONS.find((l) => l.id === review.locationId);
  return (
    <div className="bg-white border border-border rounded-3xl p-6 md:p-10 shadow-sm text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light mb-5">
        <CheckCircle2 className="w-9 h-9 text-secondary" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Thank you, {review.name.split(" ")[0]}!
      </h2>
      <p className="text-muted mb-6 max-w-md mx-auto">
        We really appreciate you sharing your experience.
      </p>

      <div className="flex justify-center gap-1 mb-6">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-7 h-7 fill-accent text-accent"
            strokeWidth={1.5}
          />
        ))}
      </div>

      <div className="bg-muted-light rounded-2xl p-5 text-left mb-6">
        <p className="text-sm text-foreground whitespace-pre-wrap">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      <div className="bg-primary-light/50 border border-primary/20 rounded-2xl p-5 mb-5 text-left">
        <p className="font-semibold mb-2 flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" />
          Would you share this on Google?
        </p>
        <p className="text-sm text-muted mb-4">
          It really helps other patients find us. We&apos;ll copy your review
          to your clipboard â€” just paste it on Google.
        </p>
        <button
          type="button"
          onClick={onShare}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
        >
          {copied ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Copied! Opening Googleâ€¦
            </>
          ) : (
            <>
              <ExternalLink className="w-5 h-5" />
              Copy & Share on Google
            </>
          )}
        </button>
        {place && (
          <p className="text-xs text-muted mt-3 text-center">
            Reviewing: {place.shortName}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(review.comment).catch(() => {});
        }}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
      >
        <Copy className="w-4 h-4" />
        Just copy review text
      </button>
    </div>
  );
}

function LowRatingThankYou({ review }: { review: SubmittedReview }) {
  return (
    <div className="bg-white border border-border rounded-3xl p-6 md:p-10 shadow-sm text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-5">
        <MessageCircle className="w-9 h-9 text-primary" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Thank you for your honesty, {review.name.split(" ")[0]}.
      </h2>
      <p className="text-muted mb-6 max-w-md mx-auto">
        We take every concern seriously. Your feedback has been sent directly
        to our team and a manager will personally review it.
      </p>

      <div className="bg-muted-light rounded-2xl p-5 mb-6 text-left">
        <p className="text-sm font-semibold mb-2">What happens next?</p>
        <ul className="text-sm text-muted space-y-2 list-disc pl-5">
          <li>A manager will review your feedback within 1 business day.</li>
          <li>
            If you provided your email, we&apos;ll reach out to make things
            right.
          </li>
          <li>For urgent concerns, please call us directly.</li>
        </ul>
      </div>

      <a
        href={SITE.phoneHref}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
      >
        <Phone className="w-5 h-5" />
        Call us at {SITE.phone}
      </a>
    </div>
  );
}

function LockedLocationBadge({ locationId }: { locationId: LocationId }) {
  const place = LOCATIONS.find((l) => l.id === locationId);
  if (!place) return null;
  return (
    <div className="flex items-center gap-3 rounded-xl bg-primary-light/50 border border-primary/20 px-4 py-3">
      <MapPin className="w-5 h-5 text-primary shrink-0" />
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-primary font-semibold">
          You&apos;re reviewing
        </p>
        <p className="font-semibold truncate">{place.name}</p>
        <p className="text-sm text-muted truncate">{place.address}</p>
      </div>
    </div>
  );
}
