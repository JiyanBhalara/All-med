import Link from "next/link";
import {
  Stethoscope,
  ClipboardCheck,
  Heart,
  Syringe,
  FlaskConical,
  Baby,
  ShieldCheck,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  CalendarCheck,
  ExternalLink,
  CheckCircle,
  BadgeCheck,
  AlertTriangle,
  Activity,
} from "lucide-react";
import { SITE, LOCATIONS, INSURANCE_PROVIDERS } from "@/lib/constants";
import HeroSection from "@/components/HeroSection";
import { MedicalCross, HeartPulse, ShieldMedical, HeartbeatLine } from "@/components/HealthIcons";

const services = [
  {
    icon: Stethoscope,
    title: "Urgent Care",
    description: "Physicals, Blood Tests, Diabetes Management, IV Hydration, Infections",
    color: "bg-primary-light text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "Specialty Exams",
    description: "Immigration Medical, CDL/DOT Physical, TLC Medical Exam",
    color: "bg-secondary-light text-secondary",
  },
  {
    icon: Heart,
    title: "Women's Health",
    description: "Birth control, HPV, Pregnancy evaluation, UTI treatment",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Flu shots, Hepatitis, Travel medicine, MMR, Tetanus",
    color: "bg-accent-light text-accent-dark",
  },
  {
    icon: FlaskConical,
    title: "Lab & Diagnostics",
    description: "Blood tests, Digital X-rays, STD/HIV screening, Urinalysis",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Child care, School physicals, Immunizations, Sick visits",
    color: "bg-teal-50 text-teal-600",
  },
];

const specialtyExams = [
  {
    title: "Immigration Medical Exam",
    badge: "USCIS Certified",
    subtitle: "USCIS Certified Civil Surgeons",
    price: "Prices starting at $199",
    href: "/specialties/immigration-medical",
    icon: ShieldCheck,
  },
  {
    title: "CDL/DOT Physical Exam",
    badge: "DOT Approved",
    subtitle: "DOT Certified Medical Examiners",
    price: null,
    href: "/specialties/cdl-dot-physical",
    icon: ClipboardCheck,
  },
  {
    title: "TLC Medical Exam",
    badge: "TLC Ready",
    subtitle: "NYC Taxi & Limousine Commission",
    price: null,
    href: "/specialties/tlc-medical-exam",
    icon: Activity,
  },
];

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "50,000+", label: "Patients Served" },
  { icon: ShieldCheck, value: "Board Certified", label: "Doctors" },
  { icon: Clock, value: "Open 7 Days", label: "A Week" },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        preRegistrationUrl={SITE.preRegistration}
        phoneHref={SITE.phoneHref}
        phone={SITE.phone}
      />

      {/* 2. COVID-19 Alert Banner */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-3 text-amber-800">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm sm:text-base font-medium text-center">
            COVID-19 and Antibody Testing Available Now &mdash; Inquire Within
          </p>
        </div>
      </div>

      {/* 3. Services Grid */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <MedicalCross className="h-3.5 w-3.5" />
              Comprehensive Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Medical Services
            </h2>
            <p className="mt-3 text-muted text-base sm:text-lg">
              Saving you time, money, and treating our patients like family
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, color }) => (
              <Link
                key={title}
                href="/services"
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Specialty Exams */}
      <section className="py-16 sm:py-20 bg-muted-light relative overflow-hidden">
        {/* Subtle health pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]">
          <MedicalCross className="w-full h-full text-primary" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary-light text-secondary-dark rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <ShieldMedical className="h-4 w-4" />
              Certified Examiners
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Specialty Medical Exams
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialtyExams.map(({ title, badge, subtitle, price, href, icon: SpecIcon }) => (
              <Link
                key={title}
                href={href}
                className="group relative flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {badge}
                  </span>
                  <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                    <SpecIcon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted">{subtitle}</p>
                {price && (
                  <p className="mt-3 text-base font-bold text-secondary">
                    {price}
                  </p>
                )}

                <span className="mt-auto pt-6 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn More
                  <ExternalLink className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trust Strip / Why Choose Us */}
      <section className="relative bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 overflow-hidden">
        {/* Heartbeat line background */}
        <div className="absolute inset-0 flex items-center opacity-10">
          <HeartbeatLine className="w-full h-16 text-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why Patients Choose All Med
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <p className="text-2xl sm:text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-blue-100">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Locations */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <MapPin className="h-4 w-4" />
              Convenient Locations
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Visit Our Locations
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video w-full">
                  <iframe
                    title={`Map of ${loc.name}`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <MedicalCross className="h-4 w-4 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {loc.name}
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm text-muted">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-secondary" />
                      <a href={loc.phoneHref} className="hover:text-primary font-medium transition-colors">
                        {loc.phone}
                      </a>
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="mt-4 bg-muted-light rounded-xl p-4">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Hours
                    </p>
                    <ul className="space-y-1">
                      {loc.hours.map((h) => (
                        <li key={h.days} className="flex justify-between text-sm text-muted">
                          <span>{h.days}</span>
                          <span className="font-medium text-foreground">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <ul className="mt-4 space-y-1.5">
                    {loc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle className="h-4 w-4 shrink-0 text-secondary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Insurance */}
      <section className="py-16 sm:py-20 bg-muted-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent-light text-accent-dark rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <ShieldCheck className="h-4 w-4" />
              Insurance Accepted
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              We Accept Most Insurance Plans
            </h2>
            <p className="mt-3 text-muted text-base sm:text-lg">
              We accept most insurance, Medicaid, and Medicare plans.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {INSURANCE_PROVIDERS.map((provider) => (
              <span
                key={provider}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-medium text-foreground shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
              >
                <CheckCircle className="h-4 w-4 text-secondary" />
                {provider}
              </span>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-muted">
            Don&apos;t see your insurance? Call us at{" "}
            <a href={SITE.phoneHref} className="font-semibold text-primary hover:underline">
              {SITE.phone}
            </a>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/insurance"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View full insurance information
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="relative bg-gradient-to-br from-[#003d5c] via-primary-dark to-primary py-16 sm:py-20 overflow-hidden">
        {/* Health pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <MedicalCross className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-10 right-10">
            <HeartPulse className="w-24 h-24 text-white" />
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <HeartPulse className="h-12 w-12 mx-auto mb-4 text-secondary animate-heartbeat" />
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Get the Care You Need?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            No appointment necessary. Simply walk in or reserve your spot
            online.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE.preRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-secondary/30 transition-all hover:bg-secondary-dark hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-5 w-5" />
              Reserve Your Spot
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-primary hover:border-white hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Call Now: {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
