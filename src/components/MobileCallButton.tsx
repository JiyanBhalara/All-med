"use client";

import { Phone } from "lucide-react";

export default function MobileCallButton() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      <a
        href="tel:7186590400"
        className="relative flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary/40 ring-2 ring-white/40 hover:bg-primary-dark transition-colors"
        aria-label="Call Now"
      >
        <Phone className="h-5 w-5" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
