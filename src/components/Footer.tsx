import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Award, CalendarCheck } from "lucide-react";
import { TwitterIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";
import { MedicalCross, HeartPulse, ShieldMedical } from "./HealthIcons";
import { SITE, LOCATIONS } from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Medical Services", href: "/services" },
  { label: "Immigration Medical", href: "/specialties/immigration-medical" },
  { label: "CDL/DOT Physical", href: "/specialties/cdl-dot-physical" },
  { label: "TLC Medical Exam", href: "/specialties/tlc-medical-exam" },
  { label: "Insurance", href: "/insurance" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#191919] text-white overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-brand-bar" />

      {/* Decorative background pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      {/* Trust badges strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/85">
            <div className="flex items-center gap-2">
              <ShieldMedical className="h-5 w-5 text-primary" />
              <span className="font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              <span className="font-medium">Board Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">USCIS Authorized</span>
            </div>
            <div className="flex items-center gap-2">
              <MedicalCross className="h-4 w-4 text-accent" />
              <span className="font-medium">DOT Certified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/30">
                <MedicalCross className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                All Med <br className="sm:hidden" />Urgent Care
              </h3>
            </div>
            <p className="text-sm text-white/75 leading-relaxed mb-4">
              Providing compassionate, high-quality urgent care to the communities
              of Queens and Long Island. Walk-ins welcome 7 days a week.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <HeartPulse className="h-4 w-4 text-primary" />
              <span className="italic">{SITE.tagline}</span>
            </div>

            {/* CTA */}
            <a
              href={SITE.preRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/30 hover:bg-primary-dark transition-colors"
            >
              <CalendarCheck className="h-4 w-4" />
              Reserve Your Spot
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
              <span className="h-px w-6 bg-primary" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
              <span className="h-px w-6 bg-primary" />
              Locations
            </h3>
            <div className="space-y-5">
              {LOCATIONS.map((loc) => (
                <div key={loc.id}>
                  <p className="text-sm font-bold text-white mb-1.5">
                    {loc.name}
                  </p>
                  <div className="flex items-start gap-2 text-sm text-white/75">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 text-sm text-white/75">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <a
                      href={loc.phoneHref}
                      className="hover:text-primary transition-colors font-medium"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
              <span className="h-px w-6 bg-primary" />
              Connect With Us
            </h3>
            <div className="space-y-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-sm text-white/75 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-white/75 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                {SITE.email}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 hover:bg-primary hover:text-white transition-all"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 hover:bg-primary hover:text-white transition-all"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 hover:bg-primary hover:text-white transition-all"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>

            {/* Emergency note */}
            <div className="mt-6 bg-primary/10 border border-primary/30 rounded-lg p-3">
              <p className="text-xs text-white/85 leading-relaxed">
                <strong className="text-white">Emergency?</strong> If you are experiencing a life-threatening emergency, call <strong className="text-accent">911</strong> immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row">
          <p className="flex items-center gap-1.5">
            &copy; 2026 All Med Urgent Care. All rights reserved.
          </p>
          <p>
            Designed By{" "}
            <span className="font-semibold text-white/80">
              A4PROFESSIONAL INC
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/accessibility" className="hover:text-primary transition-colors">
              Accessibility
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/hipaa-notice" className="hover:text-primary transition-colors">
              HIPAA Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
