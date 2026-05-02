import type { Metadata } from "next";
import Link from "next/link";
import { SITE, LOCATIONS } from "@/lib/constants";
import {
  Stethoscope,
  FileCheck,
  Bandage,
  Activity,
  Heart,
  Thermometer,
  Syringe,
  ShieldCheck,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  AlertTriangle,
  CalendarCheck,
} from "lucide-react";
import { MedicalCross, HeartPulse, HealthPattern } from "@/components/HealthIcons";

export const metadata: Metadata = {
  title: `Our Medical Services | ${SITE.name}`,
  description:
    "Comprehensive urgent care services including emergency medicine, specialty exams, minor injuries, screenings, women's health, vaccinations, and more.",
};

const SERVICE_CATEGORIES = [
  {
    title: "Emergency Medicine",
    icon: Stethoscope,
    accent: "primary",
    services: [
      "Annual physicals",
      "Immunizations",
      "Vaccinations",
      "Wounds",
      "Lacerations",
      "Sprains",
      "Strains",
      "IV hydration",
      "Urinary tract infections",
      "Stomach flu",
      "Cough / Cold / Flu",
      "Sore throat",
      "Strep throat",
      "STD/HIV screening",
      "Pink eye",
      "Rashes",
      "Abscess",
      "Bronchitis",
      "Wheezing",
      "Asthma attacks",
      "Migraines",
      "Headaches",
      "Ear infections",
      "Nausea",
      "Diarrhea",
      "Vomiting",
    ],
  },
  {
    title: "Specialty Exams",
    icon: FileCheck,
    accent: "secondary",
    services: [
      "Immigration medical exams",
      "Full physical exams",
      "TLC Medical certification",
      "CDL Medical certification",
      "Employment medical exams",
      "Flu shots",
    ],
  },
  {
    title: "Minor Injuries",
    icon: Bandage,
    accent: "accent",
    services: [
      "Bug bites / stings",
      "Minor burns",
      "Cuts",
      "Blisters",
      "Wounds",
      "Splinter removal",
      "Sprains",
      "Strains",
      "Joint pain",
      "Suture and staple removal",
      "Tick bites",
    ],
  },
  {
    title: "Screenings & Monitoring",
    icon: Activity,
    accent: "secondary",
    services: [
      "A1c checks",
      "Health screenings (basic / comprehensive)",
      "Cholesterol screening",
      "Diabetes monitoring / screening / management",
      "Blood pressure management",
    ],
  },
  {
    title: "Women's Health",
    icon: Heart,
    accent: "primary",
    services: [
      "Birth control care",
      "HPV evaluation",
      "Pregnancy evaluation",
      "Urinary tract / bladder infections",
      "Yeast infections",
      "Gynecology services",
    ],
  },
  {
    title: "Minor Illnesses",
    icon: Thermometer,
    accent: "accent",
    services: [
      "Allergies",
      "Bronchitis",
      "Coughs",
      "Earaches",
      "Flu-like symptoms",
      "Gout",
      "Indigestion",
      "Heartburn",
      "Mononucleosis",
      "Mouth conditions",
      "Nausea, vomiting, diarrhea",
      "Pink eye",
      "Styes",
      "Sinus infections",
      "Sore / strep throat",
      "Zika",
    ],
  },
  {
    title: "Vaccinations",
    icon: Syringe,
    accent: "secondary",
    services: [
      "Hepatitis A / B",
      "Influenza",
      "Japanese encephalitis",
      "Malaria",
      "Meningitis",
      "MMR",
      "Polio",
      "Tetanus",
      "Diphtheria",
      "Twinrix",
      "Typhoid",
      "Yellow fever",
      "Quadrivalent flu shots",
      "Traveler vaccinations",
    ],
  },
  {
    title: "Skin Conditions",
    icon: ShieldCheck,
    accent: "primary",
    services: [
      "Acne",
      "Athlete's foot",
      "Chicken pox",
      "Dermatitis",
      "Rash / skin irritation",
      "Swimmer's itch",
      "Hair loss",
      "Impetigo",
      "Lice",
      "Psoriasis",
      "Poison ivy / oak",
      "Wart evaluation",
      "Ringworm",
      "Rosacea",
      "Scabies",
      "Shingles",
      "Sunburn",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav className="bg-muted-light border-b border-border" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" />
            <li className="font-medium text-foreground">Medical Services</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-brand-gradient text-white py-16 sm:py-20 overflow-hidden">
        <HealthPattern className="absolute inset-0 w-full h-full text-white" />
        <div className="absolute top-10 right-10 hidden lg:block opacity-10">
          <HeartPulse className="w-32 h-32" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <MedicalCross className="h-3.5 w-3.5 text-secondary" />
              <span className="text-on-dark-soft font-medium">Comprehensive Urgent Care</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Our Medical Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-on-dark-soft">
              All Med Urgent Care is the perfect solution for non-life threatening
              emergencies. We have Board Certified Doctors. No appointment necessary.
              We serve the community&apos;s medical needs on a walk-in basis as a low
              cost alternative to the emergency room with minimal wait times.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
            {SERVICE_CATEGORIES.map((category) => {
              const Icon = category.icon;
              const accentClasses = {
                primary: { card: "hover:border-primary/40", iconWrap: "bg-primary-light text-primary", topBar: "bg-primary", bullet: "bg-primary/50" },
                secondary: { card: "hover:border-secondary/40", iconWrap: "bg-secondary-light text-secondary", topBar: "bg-secondary", bullet: "bg-secondary/50" },
                accent: { card: "hover:border-accent/50", iconWrap: "bg-accent-light text-accent-dark", topBar: "bg-accent", bullet: "bg-accent-dark/50" },
              }[category.accent as "primary" | "secondary" | "accent"];
              return (
                <div
                  key={category.title}
                  className={`group relative rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all overflow-hidden ${accentClasses.card}`}
                >
                  <span className={`absolute top-0 left-0 right-0 h-1 ${accentClasses.topBar}`} />
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentClasses.iconWrap}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {category.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${accentClasses.bullet}`} />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* X-ray Note */}
          <div className="mt-12 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent-light p-5">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-accent-dark mt-0.5" />
            <p className="text-sm text-foreground">
              X-ray service may not be available during all hrs of operation at
              designated convenient care Location.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Exams CTA */}
      <section className="bg-muted-light py-12 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Specialty Exams
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Immigration Medical Exam",
                href: "/specialties/immigration-medical",
                desc: "Certified I-693 exams for green card applications",
              },
              {
                title: "CDL/DOT Physical",
                href: "/specialties/cdl-dot-physical",
                desc: "Federally required physicals for commercial drivers",
              },
              {
                title: "TLC Medical Exam",
                href: "/specialties/tlc-medical-exam",
                desc: "Medical certification for NYC TLC-licensed drivers",
              },
            ].map((exam) => (
              <Link
                key={exam.href}
                href={exam.href}
                className="group rounded-xl border border-border bg-white p-6 transition hover:border-primary hover:shadow-lg"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exam.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{exam.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-brand-gradient p-8 sm:p-12 text-white text-center overflow-hidden">
            <HealthPattern className="absolute inset-0 w-full h-full text-white" />
            <div className="relative">
              <HeartPulse className="h-10 w-10 mx-auto mb-4 text-secondary animate-heartbeat" />
              <h2 className="text-2xl font-bold sm:text-3xl">
                Ready to Get the Care You Need?
              </h2>
              <p className="mt-4 text-on-dark-soft max-w-2xl mx-auto">
                Walk in to any of our locations or call us to learn more. No appointment
                necessary. Open 7 days a week.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={SITE.preRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 hover:bg-secondary-dark transition-all hover:-translate-y-0.5"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Reserve Your Spot
                </a>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-primary transition-all hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="rounded-xl border border-border p-6"
              >
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  {loc.name}
                </h3>
                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <a href={loc.phoneHref} className="hover:text-primary transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      {loc.hours.map((h) => (
                        <p key={h.days}>
                          <span className="font-medium text-foreground">{h.days}:</span>{" "}
                          {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
