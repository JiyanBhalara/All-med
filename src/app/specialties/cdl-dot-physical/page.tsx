import type { Metadata } from "next";
import Link from "next/link";
import { SITE, LOCATIONS } from "@/lib/constants";
import {
  ChevronRight,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Truck,
  Eye,
  Ear,
  HeartPulse,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { ShieldMedical, HealthPattern } from "@/components/HealthIcons";

export const metadata: Metadata = {
  title: `CDL/DOT Physical Exam | ${SITE.name}`,
  description:
    "Federally required CDL/DOT physical exams for commercial drivers. Comprehensive exams including vision, hearing, blood pressure, and urinalysis screening.",
};

const EXAM_COMPONENTS = [
  { label: "Blood pressure and pulse", icon: HeartPulse },
  {
    label: "Vision testing (minimum 20/40 per eye, traffic light colors)",
    icon: Eye,
  },
  {
    label: "Hearing (whispered speech from 5+ feet)",
    icon: Ear,
  },
  { label: "Spinal / physical deformity evaluation", icon: Activity },
  { label: "Mouth, throat, breathing, and swallowing", icon: Activity },
  { label: "Neurological / reflex testing", icon: Activity },
  { label: "Heart and lung auscultation", icon: HeartPulse },
  { label: "Urinalysis screening", icon: Activity },
  { label: "Muscle strength", icon: Activity },
  {
    label: "Medical history (head / brain injuries)",
    icon: Activity,
  },
];

const DISQUALIFYING_FACTORS = [
  "Epilepsy history",
  "Vision / hearing impairment",
  "Diabetes",
  "Certain medications",
  "Alcoholism history",
  "Illegal narcotic use (automatic disqualification)",
];

export default function CDLDOTPhysicalPage() {
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
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" />
            <li className="font-medium text-foreground">CDL/DOT Physical Exam</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-brand-gradient text-white py-16 sm:py-20 overflow-hidden">
        <HealthPattern className="absolute inset-0 w-full h-full text-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <ShieldMedical className="h-4 w-4 text-secondary" />
              <span className="text-on-dark-soft font-medium">DOT Certified Medical Examiners</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              CDL/DOT Physical Exam
            </h1>
            <p className="mt-6 text-lg leading-8 text-on-dark-soft">
              All drivers complete a regular physical examination as federally
              required by the Department of Transportation to ensure safe operation of
              commercial vehicles.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Exam Components */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What the Exam Includes
              </h2>
              <p className="text-foreground/80 mb-8">
                The CDL/DOT physical is a comprehensive evaluation designed to ensure
                that commercial drivers can safely operate their vehicles. The exam
                covers the following areas:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {EXAM_COMPONENTS.map((component) => {
                  const Icon = component.icon;
                  return (
                    <div
                      key={component.label}
                      className="flex items-start gap-3 rounded-xl border border-border p-4"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light flex-shrink-0">
                        <Icon className="h-4.5 w-4.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80 pt-1.5">
                        {component.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Disqualifying Factors */}
            <section>
              <div className="rounded-xl border border-error/20 bg-primary-light p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xl font-bold text-foreground">
                      Disqualifying Factors
                    </h2>
                    <p className="mt-1 text-sm text-foreground/70">
                      The following conditions may prevent a driver from receiving CDL
                      certification:
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {DISQUALIFYING_FACTORS.map((factor) => (
                    <div key={factor} className="flex items-start gap-2.5">
                      <XCircle className="h-4.5 w-4.5 text-error flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* What to Expect */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>
                    The exam typically takes 30-45 minutes to complete. Bring any
                    corrective lenses, hearing aids, or a list of current medications.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>
                    Your medical examiner&apos;s certificate will be provided upon
                    successful completion of your exam.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>
                    Walk-ins are welcome 7 days a week at both of our locations. No
                    appointment necessary.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white text-center">
                <h2 className="text-2xl font-bold">Reserve Your Spot Today</h2>
                <p className="mt-3 text-on-dark-soft max-w-lg mx-auto">
                  Walk in or pre-register online to schedule your CDL/DOT physical
                  exam. Open 7 days a week with minimal wait times.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={SITE.preRegistration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg hover:bg-primary-light transition-colors"
                  >
                    Pre-Register Online
                  </a>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call {SITE.phone}
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0 space-y-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="rounded-xl border border-border p-6"
              >
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  {loc.name}
                </h3>
                <div className="space-y-4 text-sm text-muted">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <a
                      href={loc.phoneHref}
                      className="hover:text-primary transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      {loc.hours.map((h) => (
                        <p key={h.days}>
                          <span className="font-medium text-foreground">
                            {h.days}:
                          </span>{" "}
                          {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Get Directions
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </main>
  );
}
