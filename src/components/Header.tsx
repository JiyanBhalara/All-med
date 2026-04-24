"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Clock,
  Menu,
  X,
  ChevronDown,
  CalendarCheck,
} from "lucide-react";
import { TwitterIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";
import { MedicalCross } from "./HealthIcons";
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
          className="flex w-full items-center justify-between px-4 py-3 text-foreground hover:bg-primary-light transition-colors"
        >
          <span className="font-medium">{link.label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="bg-muted-light">
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
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        {link.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-border bg-white py-2 shadow-xl"
        >
          {link.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-muted hover:bg-primary-light hover:text-primary transition-colors"
            >
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
      setScrolled(window.scrollY > 40);
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
    <header>
      {/* Top Bar — health-themed gradient */}
      <div className="hidden md:block bg-gradient-to-r from-foreground via-[#1f3347] to-foreground text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">{SITE.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
              </span>
              <span className="font-medium text-secondary">Open 7 Days a Week</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-accent">
              <MedicalCross className="h-3 w-3" />
              <span className="text-xs font-medium">Board Certified Physicians</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-secondary transition-colors">
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-secondary transition-colors">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary transition-colors">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-40 bg-white border-b transition-all duration-300 ${
          scrolled ? "shadow-lg border-border" : "shadow-none border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="All Med Urgent Care"
              width={220}
              height={60}
              priority
              className="h-11 sm:h-13 w-auto object-contain"
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
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary-light"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={SITE.preRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-secondary text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-secondary-dark transition-colors"
            >
              <CalendarCheck className="h-4 w-4" />
              Reserve Your Spot
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-lg p-2 text-foreground hover:bg-muted-light transition-colors"
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
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 z-35 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-primary-light">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="All Med Urgent Care"
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg p-1.5 hover:bg-white transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-65px)]">
          <div className="divide-y divide-border/50">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <DropdownMenu key={link.label} link={link} mobile />
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 font-medium text-foreground hover:bg-primary-light transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile CTA */}
          <div className="p-4 space-y-3">
            <a
              href={SITE.preRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary-dark transition-colors"
            >
              <CalendarCheck className="h-4 w-4" />
              Reserve Your Spot
            </a>
            <a
              href={SITE.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phone}
            </a>
          </div>

          {/* Mobile Social */}
          <div className="border-t border-border px-4 py-4">
            <div className="flex items-center gap-4">
              <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted hover:text-primary transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted hover:text-primary transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-primary transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
