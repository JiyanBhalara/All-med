import Link from "next/link";
import { INSURANCE_PROVIDERS, SITE, LOCATIONS } from "@/lib/constants";
import {
  Phone,
  Shield,
  CheckCircle,
  ArrowRight,
  ClipboardList,
  Stethoscope,
  Baby,
  FlaskConical,
  Syringe,
  Thermometer,
  CalendarCheck,
} from "lucide-react";
import { ShieldMedical, HealthPattern } from "@/components/HealthIcons";

export const metadata = {
  title: "Insurance Plans | All Med Urgent Care",
  description:
    "We accept most insurance, Medicaid, and Medicare plans at All Med Urgent Care in Jamaica Queens and Hicksville NY.",
};

const SERVICES_COVERED = [
  { icon: ClipboardList, label: "Immigration Medical" },
  { icon: Baby, label: "Pregnancy Testing" },
  { icon: Stethoscope, label: "Child Pediatrics" },
  { icon: FlaskConical, label: "Blood Tests & X-rays" },
  { icon: Syringe, label: "Immunizations" },
  { icon: Thermometer, label: "Flu, Coughs & Cold" },
];

export default function InsurancePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 md:py-24 overflow-hidden">
        <HealthPattern className="absolute inset-0 w-full h-full text-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <ShieldMedical className="w-4 h-4 text-secondary" />
            <span>Most Insurance Accepted</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insurance Plans
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We accept most insurance, Medicaid, and Medicare plans. If you
            can&apos;t find your insurance on our list, give us a call and
            we&apos;ll provide coverage answers fast.
          </p>
        </div>
      </section>

      {/* Insurance Providers Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Accepted Insurance Providers
          </h2>
          <p className="text-muted text-center mb-12 max-w-xl mx-auto">
            We work with a wide range of insurance companies to ensure you
            receive the care you need.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {INSURANCE_PROVIDERS.map((provider) => (
              <div
                key={provider}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-white hover:shadow-md hover:border-primary/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {provider}
                </span>
              </div>
            ))}
          </div>

          {/* Call CTA */}
          <div className="mt-12 text-center bg-primary-light rounded-2xl p-8">
            <p className="text-lg font-semibold text-foreground mb-2">
              Don&apos;t see your insurance on our list?
            </p>
            <p className="text-muted mb-4">
              Give us a call and we&apos;ll provide coverage answers fast.
            </p>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Covered */}
      <section className="py-16 bg-muted-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Services Covered by Insurance
          </h2>
          <p className="text-muted text-center mb-12 max-w-xl mx-auto">
            Our wide range of medical services are covered by most accepted
            insurance plans.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {SERVICES_COVERED.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Patient Registration */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              New Patient?
            </h2>
            <p className="text-lg text-green-100 mb-6 max-w-xl mx-auto">
              Save time by pre-registering online before your visit. Have your
              insurance card ready.
            </p>
            <a
              href={SITE.preRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-secondary-dark px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Pre-Register Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-muted-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Visit Us Today
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border"
              >
                <h3 className="text-xl font-bold mb-3">{loc.name}</h3>
                <p className="text-muted mb-1">
                  {loc.address}, {loc.city}, {loc.state} {loc.zip}
                </p>
                <a
                  href={loc.phoneHref}
                  className="text-primary font-semibold hover:underline"
                >
                  {loc.phone}
                </a>
                <div className="mt-4 space-y-1">
                  {loc.hours.map((h) => (
                    <div key={h.days} className="flex justify-between text-sm">
                      <span className="text-muted">{h.days}</span>
                      <span className="font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/locations/${loc.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                >
                  View Location Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
