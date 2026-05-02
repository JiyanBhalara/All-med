"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  CalendarCheck,
  Clock,
  MapPin,
} from "lucide-react";
import { TwitterIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";
import { SITE, NAV_LINKS } from "@/lib/constants";

type NavLink = (typeof NAV_LINKS)[number];

function DropdownMenu({
  link,
  mobile = false,
}: {
  link: NavLink;
  mobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobile) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobile]);

  if (!("children" in link) || !link.children) return null;

  if (mobile) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-5 py-3.5 text-foreground hover:bg-primary-light hover:text-primary transition-colors"
        >
          <span className="font-semibold">{link.label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="bg-muted-light border-l-2 border-primary">
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-8 py-2.5 text-sm text-muted hover:text-primary hover:bg-white transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
      >
        {link.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full z-50 mt-2 w-60 rounded-xl border border-border bg-white py-2 shadow-2xl shadow-foreground/10 ring-1 ring-foreground/5"
        >
          {link.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-muted hover:bg-primary-light hover:text-primary transition-colors"
            >
              <span className="h-1 w-1 rounded-full bg-primary/40" />
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 80) return true;
        if (prev && y < 40) return false;
        return prev;
      });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 ease-in-out ${
        scrolled ? "shadow-lg shadow-foreground/10" : ""
      }`}
    >
      {/* Top utility strip — brand red */}
      <div
        className={`bg-brand-bar text-white text-xs sm:text-sm overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="hidden md:flex items-center gap-5">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="font-semibold">{SITE.phone}</span>
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Open 7 Days a Week
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Jamaica &bull; Hicksville
            </span>
          </div>
          <a href={SITE.phoneHref} className="md:hidden inline-flex items-center gap-1.5 font-semibold">
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-white/80 font-medium">No Appointment Necessary</span>
            <div className="flex items-center gap-2.5">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors">
                <TwitterIcon className="h-3.5 w-3.5" />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`border-b transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-border"
            : "bg-white border-border/60"
        }`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 ease-in-out ${scrolled ? "py-2" : "py-3"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="All Med Urgent Care"
              width={220}
              height={60}
              priority
              className={`w-auto object-contain transition-all duration-300 ease-in-out ${
                scrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
              }`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <DropdownMenu key={link.label} link={link} />
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <a
              href={SITE.preRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary text-white px-5 py-2.5 text-sm font-semibold shadow-md shadow-primary/20 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              <CalendarCheck className="h-4 w-4" />
              Reserve Your Spot
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-lg p-2 text-foreground hover:bg-primary-light hover:text-primary transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 z-[60] h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-brand-bar">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="bg-white rounded-lg px-3 py-1.5">
            <Image
              src="/logo.png"
              alt="All Med Urgent Care"
              width={180}
              height={48}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg p-1.5 text-white hover:bg-white/15 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-65px)]">
          <div className="divide-y divide-border/60">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <DropdownMenu key={link.label} link={link} mobile />
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-5 py-3.5 font-semibold text-foreground hover:bg-primary-light hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile CTA */}
          <div className="p-4 space-y-3 bg-muted-light">
            <a
              href={SITE.preRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-dark transition-colors"
            >
              <CalendarCheck className="h-4 w-4" />
              Reserve Your Spot
            </a>
            <a
              href={SITE.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary bg-white px-5 py-3 text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phone}
            </a>
          </div>

          {/* Mobile Social */}
          <div className="border-t border-border px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all">
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all">
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
