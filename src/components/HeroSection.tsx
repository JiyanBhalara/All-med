"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  CreditCard,
  Timer,
  Phone,
  CalendarCheck,
} from "lucide-react";
import { HealthPattern, HeartbeatLine, MedicalCross } from "./HealthIcons";

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
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003d5c] via-primary-dark to-primary text-white">
      {/* Health pattern background */}
      <HealthPattern className="absolute inset-0 w-full h-full text-white" />

      {/* Decorative medical circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-white/5" />
        <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full border border-white/5" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/5" />
        {/* Floating medical cross */}
        <div className="absolute top-20 right-[15%] hidden lg:block animate-float">
          <MedicalCross className="w-8 h-8 text-white/10" />
        </div>
        <div className="absolute bottom-32 right-[30%] hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
          <MedicalCross className="w-5 h-5 text-white/8" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
            </span>
            <span className="text-blue-100 font-medium">Walk-In Clinic &mdash; No Appointment Needed</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-tight tracking-tight"
          >
            Immigration Medical, CDL/DOT Physicals &amp; TLC Medical Exams
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl font-semibold text-blue-100"
          >
            No Appointment Necessary. Open 7 Days a Week.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-blue-100/80 max-w-2xl leading-relaxed"
          >
            Your Trusted Urgent Care Provider. Immediate Care When You Need It
            Most. Walk-Ins Welcomed.
          </motion.p>

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
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-secondary/30 transition-all hover:bg-secondary-dark hover:shadow-xl hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-5 w-5" />
              Reserve Your Spot
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-primary hover:border-white hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Call Now: {phone}
            </a>
          </motion.div>
        </div>

        {/* Heartbeat line divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 mb-2"
        >
          <HeartbeatLine className="w-full h-8 text-secondary/40" />
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {trustIndicators.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm font-medium text-blue-50">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
