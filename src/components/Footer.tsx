import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
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
    <footer className="bg-gradient-to-b from-foreground to-[#0f1b28] text-white">
      {/* Trust badges strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldMedical className="h-5 w-5 text-secondary" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              <span>Board Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-secondary" />
              <span>USCIS Authorized</span>
            </div>
            <div className="flex items-center gap-2">
              <MedicalCross className="h-4 w-4 text-accent" />
              <span>DOT Certified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <MedicalCross className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-bold text-white">
                All Med Urgent Care
              </h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Providing compassionate, high-quality urgent care to the communities
              of Queens and Long Island. Walk-ins welcome 7 days a week.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <HeartPulse className="h-4 w-4 text-secondary" />
              <span className="italic">{SITE.tagline}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MedicalCross className="h-3 w-3 text-secondary" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-secondary/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MedicalCross className="h-3 w-3 text-secondary" />
              Locations
            </h3>
            <div className="space-y-5">
              {LOCATIONS.map((loc) => (
                <div key={loc.id}>
                  <p className="text-sm font-semibold text-white mb-1.5">
                    {loc.name}
                  </p>
                  <div className="flex items-start gap-2 text-sm text-gray-300">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                    <span>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 text-sm text-gray-300">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-secondary" />
                    <a
                      href={loc.phoneHref}
                      className="hover:text-secondary transition-colors font-medium"
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
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MedicalCross className="h-3 w-3 text-secondary" />
              Connect With Us
            </h3>
            <div className="space-y-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4 text-secondary" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4 text-secondary" />
                {SITE.email}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-secondary hover:text-white transition-all"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-secondary hover:text-white transition-all"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-secondary hover:text-white transition-all"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>

            {/* Emergency note */}
            <div className="mt-6 bg-urgent/10 border border-urgent/20 rounded-lg p-3">
              <p className="text-xs text-red-300 leading-relaxed">
                <strong className="text-red-200">Emergency?</strong> If you are experiencing a life-threatening emergency, call <strong>911</strong> immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-gray-400 sm:flex-row">
          <p className="flex items-center gap-1.5">
            &copy; 2026 All Med Urgent Care. All rights reserved.
          </p>
          <p>
            Designed By{" "}
            <span className="font-semibold text-gray-300">
              A4PROFESSIONAL INC
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-secondary transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/accessibility" className="hover:text-secondary transition-colors">
              Accessibility
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/hipaa-notice" className="hover:text-secondary transition-colors">
              HIPAA Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
