import type { Metadata } from "next";
import Link from "next/link";
import { SITE, LOCATIONS } from "@/lib/constants";
import {
  ChevronRight,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Car,
  CheckCircle,
  AlertTriangle,
  Users,
  Stethoscope,
  ClipboardList,
} from "lucide-react";
import { ShieldMedical, HealthPattern } from "@/components/HealthIcons";

export const metadata: Metadata = {
  title: `TLC Medical Exam | ${SITE.name}`,
  description:
    "TLC medical exams for NYC professional drivers including taxi, Uber, Lyft, and limousine drivers. Quick exams, walk-ins welcome, open 7 days a week.",
};

const ELIGIBLE_DRIVERS = [
  "Yellow / green / medallion taxi cab drivers",
  "Uber & Lyft drivers",
  "Limousine drivers",
];

const ASSESSMENT_ITEMS = [
  {
    title: "Vitals and Blood Pressure",
    desc: "Complete vital signs assessment including blood pressure measurement",
    icon: Stethoscope,
  },
  {
    title: "Reflex Testing",
    desc: "Neurological reflex evaluation to ensure safe vehicle operation",
    icon: ClipboardList,
  },
  {
    title: "Nose and Throat Examination",
    desc: "Thorough nose and throat examination",
    icon: Stethoscope,
  },
  {
    title: "Medical History Review",
    desc: "Review of personal, family, and medication history",
    icon: ClipboardList,
  },
];

export default function TLCMedicalExamPage() {
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
            <li className="font-medium text-foreground">TLC Medical Exam</li>
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
              <span className="text-on-dark-soft font-medium">TLC Ready &mdash; NYC Licensed</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              TLC Medical Exam
            </h1>
            <p className="mt-6 text-lg leading-8 text-on-dark-soft">
              TLC exam for professional NYC drivers seeking TLC licensure. An in-depth
              look at your health and medical history to determine any issues that
              might prevent you from operating a vehicle safely.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Eligible Drivers */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Who Needs a TLC Medical Exam?
              </h2>
              <p className="text-foreground/80 mb-6">
                The TLC medical exam is required for professional NYC drivers seeking
                TLC licensure. The following drivers are eligible:
              </p>
              <div className="rounded-xl border border-border p-6 bg-primary-light/50">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Eligible Drivers</h3>
                </div>
                <ul className="space-y-3">
                  {ELIGIBLE_DRIVERS.map((driver) => (
                    <li key={driver} className="flex items-center gap-3">
                      <CheckCircle className="h-4.5 w-4.5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{driver}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Assessment */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What the Assessment Includes
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {ASSESSMENT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Important Note */}
            <section>
              <div className="rounded-xl border border-warning/30 bg-accent-light p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Important Note</h3>
                    <p className="mt-2 text-sm text-foreground/80">
                      The date of your medical examination cannot be more than 90 days
                      before the date that you submit your TLC application.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What to Bring */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>
                    The exam includes a comprehensive assessment of your vitals, blood
                    pressure, reflexes, and a full nose and throat examination.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>
                    Your medical history will be reviewed in detail, including
                    personal, family, and medication history.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p>
                    Walk-ins are welcome 7 days a week. No appointment necessary. Bring
                    a valid photo ID and any current medications.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white text-center">
                <h2 className="text-2xl font-bold">Reserve Your Spot Today</h2>
                <p className="mt-3 text-on-dark-soft max-w-lg mx-auto">
                  Walk in or pre-register online to schedule your TLC medical exam.
                  Open 7 days a week with minimal wait times.
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
