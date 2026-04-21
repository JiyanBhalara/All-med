import type { Metadata } from "next";
import Link from "next/link";
import { SITE, LOCATIONS } from "@/lib/constants";
import {
  ChevronRight,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  FileText,
  ExternalLink,
  Shield,
  AlertTriangle,
  Globe,
  CalendarCheck,
} from "lucide-react";
import { MedicalCross, ShieldMedical, HealthPattern } from "@/components/HealthIcons";

export const metadata: Metadata = {
  title: `Immigration Medical Exam (I-693) | ${SITE.name}`,
  description:
    "Certified immigration medical exams (I-693) for green card applications. Designated Civil Surgeons, quick results, starting at $199. Open 7 days a week.",
};

const KEY_FEATURES = [
  "One stop shop for all of your tests & exams",
  "Designated Civil Surgeons who specialize in Immigration medical",
  "Quick and accurate results",
  "Located right next to the train and bus stop, close to the airport",
  "Open 7 days a week",
  "Prices starting at $199",
];

export default function ImmigrationMedicalPage() {
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
            <li className="font-medium text-foreground">Immigration Medical Exam</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003d5c] via-primary-dark to-primary text-white py-16 sm:py-20 overflow-hidden">
        <HealthPattern className="absolute inset-0 w-full h-full text-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <ShieldMedical className="h-4 w-4 text-secondary" />
              <span className="text-blue-100 font-medium">USCIS Certified Civil Surgeons</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Immigration Medical Exam
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Our physicians are certified to perform the immigration medical exams
              (I-693) for individuals interested in completing their green card.
            </p>
            <p className="mt-4 text-2xl font-bold text-secondary">
              Prices starting at $199
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Why Choose All Med for Your Immigration Exam?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {KEY_FEATURES.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-border p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Exam Process */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What Does the Exam Include?
              </h2>
              <div className="prose prose-sm max-w-none text-foreground/80 space-y-4">
                <p>
                  The immigration medical examination includes a thorough medical
                  history review and physical examination. Our designated civil
                  surgeons will conduct testing for communicable diseases including
                  tuberculosis, syphilis, and gonorrhea.
                </p>
                <p>
                  Upon completion of the exam, your physician will complete Form I-693
                  and seal it in an envelope for submission to USCIS as part of your
                  green card application.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Medical History Review",
                    desc: "Complete review of your medical history and current health",
                  },
                  {
                    step: "2",
                    title: "Physical Examination",
                    desc: "Comprehensive physical exam by a designated civil surgeon",
                  },
                  {
                    step: "3",
                    title: "Disease Testing",
                    desc: "Testing for tuberculosis, syphilis, and gonorrhea",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-xl bg-primary-light p-5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Important Note */}
            <section>
              <div className="rounded-xl border border-warning/30 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Important Note</h3>
                    <p className="mt-2 text-sm text-foreground/80">
                      Make sure you get a copy of the completed Form I-693 for your
                      personal records before the doctor seals the envelope. USCIS will
                      not accept the form if the envelope has been opened or altered.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Useful Links */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Useful Links
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="https://my.uscis.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border p-5 hover:border-primary hover:shadow-md transition"
                >
                  <Shield className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      USCIS Portal
                    </span>
                    <p className="text-xs text-muted">my.uscis.gov</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted" />
                </a>
                <a
                  href="https://www.uscis.gov/i-693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border p-5 hover:border-primary hover:shadow-md transition"
                >
                  <FileText className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Form I-693
                    </span>
                    <p className="text-xs text-muted">uscis.gov/i-693</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted" />
                </a>
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white text-center">
                <h2 className="text-2xl font-bold">Reserve Your Spot Today</h2>
                <p className="mt-3 text-blue-100 max-w-lg mx-auto">
                  Walk in or pre-register online to schedule your immigration medical
                  exam. Prices starting at $199.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={SITE.preRegistration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg hover:bg-blue-50 transition-colors"
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
                className="rounded-xl border border-border p-6 sticky top-6"
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
