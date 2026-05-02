"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  CreditCard,
  Timer,
  Phone,
  CalendarCheck,
} from "lucide-react";
import { HeartbeatLine, MedicalCross } from "./HealthIcons";

const POSTERS = [
  "/posters/slider-1.jpg",
  "/posters/Slide-3.jpg",
];

const trustIndicators = [
  { icon: ShieldCheck, label: "Board Certified Doctors" },
  { icon: Clock, label: "Open 7 Days" },
  { icon: CreditCard, label: "Most Insurance Accepted" },
  { icon: Timer, label: "Minimal Wait Times" },
];

interface HeroSectionProps {
  preRegistrationUrl: string;
  phoneHref: string;
  phone: string;
}

export default function HeroSection({
  preRegistrationUrl,
  phoneHref,
  phone,
}: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % POSTERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden text-white isolate bg-[#0a2a5e]">

      {/* Poster slides — near-full opacity so images are the dominant visual */}
      {POSTERS.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay: only dark enough on the left half for text legibility;
          right half is nearly clear so the full photo shows through */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,42,94,0.88) 0%, rgba(10,42,94,0.72) 35%, rgba(10,42,94,0.30) 60%, rgba(10,42,94,0.05) 100%)",
        }}
      />

      {/* Subtle decorative circles */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-white/10" />
        <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full border border-white/8" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/10" />
        <div className="absolute top-20 right-[15%] hidden lg:block animate-float">
          <MedicalCross className="w-8 h-8 text-white/20" />
        </div>
        <div className="absolute bottom-32 right-[30%] hidden lg:block animate-float" style={{ animationDelay: "1.5s" }}>
          <MedicalCross className="w-5 h-5 text-white/15" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-white font-medium">Walk-In Clinic &mdash; No Appointment Needed</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-tight tracking-tight text-white drop-shadow-md"
          >
            Immigration Medical, CDL/DOT Physicals &amp;{" "}
            <span className="text-accent">TLC Medical Exams</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl font-semibold text-white drop-shadow"
          >
            No Appointment Necessary. Open 7 Days a Week.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed drop-shadow"
          >
            Your Trusted Urgent Care Provider. Immediate Care When You Need It
            Most. Walk-Ins Welcomed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={preRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-black/25 transition-all hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <CalendarCheck className="h-5 w-5" />
              Reserve Your Spot
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/60 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-secondary hover:border-white hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Call Now: {phone}
            </a>
          </motion.div>
        </div>

        {/* Heartbeat line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 mb-2"
        >
          <HeartbeatLine className="w-full h-8 text-white/40" />
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {trustIndicators.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl bg-white/15 backdrop-blur-sm px-4 py-3 border border-white/25 hover:bg-white/22 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/80 shadow-sm">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-white leading-tight">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
