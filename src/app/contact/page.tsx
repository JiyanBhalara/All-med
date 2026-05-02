"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SITE, LOCATIONS } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertTriangle,
  FileText,
  ExternalLink,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // In production, this would send to an API route
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-brand-gradient-r py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-on-dark-soft max-w-2xl mx-auto">
            Have a question? We&apos;re here to help. Reach out to us by phone,
            visit us in person, or send us a message below.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 bg-accent-light border border-accent/30 rounded-xl p-4 mb-8">
                <AlertTriangle className="w-5 h-5 text-accent-dark shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  <strong>Important:</strong> Please do not share any personal
                  medical information through this form. For medical inquiries,
                  please call us directly or visit one of our locations.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 bg-secondary-light rounded-2xl">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted max-w-md mx-auto">
                    Thank you for reaching out. We&apos;ll get back to you as
                    soon as possible. For immediate assistance, please call us at{" "}
                    <a
                      href={SITE.phoneHref}
                      className="text-primary font-semibold hover:underline"
                    >
                      {SITE.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2"
                      >
                        Name <span className="text-error">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2"
                      >
                        Phone{" "}
                        <span className="text-muted font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Message <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-error">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-primary-light rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 text-primary hover:underline font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE.phone}
                  </a>
                  <div className="flex items-center gap-3 text-muted">
                    <Clock className="w-5 h-5" />
                    Open 7 Days a Week
                  </div>
                </div>
              </div>

              {/* Patient Resources */}
              <div className="bg-muted-light rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Patient Resources</h3>
                <div className="space-y-3">
                  <a
                    href={SITE.preRegistration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    New Patient Pre-Registration
                  </a>
                  <a
                    href="/forms/patient-demographic-form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    Patient Demographics Form (PDF)
                  </a>
                </div>
              </div>

              {/* Locations */}
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="bg-white border border-border rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold mb-3">{loc.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2 text-muted">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>
                        {loc.address}, {loc.city}, {loc.state} {loc.zip}
                      </span>
                    </div>
                    <a
                      href={loc.phoneHref}
                      className="flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      {loc.phone}
                    </a>
                    <div className="pt-2 border-t border-border space-y-1">
                      {loc.hours.map((h) => (
                        <div key={h.days} className="flex justify-between">
                          <span className="text-muted">{h.days}</span>
                          <span className="font-medium">{h.time}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/locations/${loc.id}`}
                      className="text-primary font-medium hover:underline inline-block mt-2"
                    >
                      View Location &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
