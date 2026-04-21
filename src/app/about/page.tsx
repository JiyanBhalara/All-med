import Link from "next/link";
import { LOCATIONS, SITE } from "@/lib/constants";
import {
  Heart,
  Shield,
  Clock,
  DollarSign,
  Users,
  Award,
  Stethoscope,
  MapPin,
  Phone,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import { MedicalCross, HeartPulse, HealthPattern, ShieldMedical } from "@/components/HealthIcons";

export const metadata = {
  title: "About Us | All Med Urgent Care",
  description:
    "Learn about All Med Urgent Care – Board Certified Doctors serving Jamaica Queens and Hicksville NY. Walk-in clinic open 7 days a week.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "We treat our patients like family, providing compassionate and personalized medical attention for every individual who walks through our doors.",
  },
  {
    icon: DollarSign,
    title: "Affordability",
    description:
      "As a low cost alternative to the emergency room, we accept most insurance plans, Medicaid, and Medicare, and offer transparent self-pay pricing.",
  },
  {
    icon: Clock,
    title: "Accessibility",
    description:
      "Open 7 days a week with no appointment necessary. Simply walk in and receive the care you need with minimal wait times.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Our board certified doctors bring years of experience and expertise to deliver accurate diagnoses and effective treatment plans.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Board Certified Physician",
    role: "Medical Director",
    specialty: "Emergency Medicine & Family Practice",
  },
  {
    name: "Board Certified Physician",
    role: "Attending Physician",
    specialty: "Internal Medicine",
  },
  {
    name: "USCIS Civil Surgeon",
    role: "Immigration Medical Specialist",
    specialty: "Immigration Medical Exams",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 md:py-24 overflow-hidden">
        <HealthPattern className="absolute inset-0 w-full h-full text-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <HeartPulse className="h-4 w-4 text-secondary" />
            <span className="text-blue-100 font-medium">Caring for Our Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About All Med Urgent Care
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Your trusted walk-in clinic with board certified doctors, serving
            the communities of Jamaica, Queens and Hicksville, Long Island.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <MedicalCross className="w-3.5 h-3.5" />
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality Medical Care When You Need It Most
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              All Med Urgent Care is the perfect solution for non-life
              threatening emergencies. We have Board Certified Doctors and serve
              the community&apos;s medical needs on a walk-in basis as a low
              cost alternative to the emergency room with minimal wait times.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              We are committed to saving you time, money, and treating our
              patients like family. Whether you need urgent care, a physical
              exam, immigration medical services, or specialty exams, our
              experienced medical team is here for you — no appointment
              necessary, 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 overflow-hidden">
        <HealthPattern className="absolute inset-0 w-full h-full text-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years of Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Patients Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold mb-2">2</div>
              <div className="text-blue-200">Convenient Locations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold mb-2">7</div>
              <div className="text-blue-200">Days a Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-muted-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted max-w-xl mx-auto">
              Everything we do is guided by our commitment to providing
              accessible, affordable, and high-quality medical care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Board Certified Physicians
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Our experienced medical team is dedicated to providing the highest
              quality of care to every patient.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm"
              >
                <div className="h-48 bg-gradient-to-br from-primary-light to-blue-100 flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-muted-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border"
              >
                <h3 className="text-xl font-bold mb-4">{loc.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-muted">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <a
                    href={loc.phoneHref}
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    {loc.phone}
                  </a>
                  <div className="flex items-center gap-2 text-muted">
                    <Clock className="w-4 h-4" />
                    Open 7 Days a Week
                  </div>
                </div>
                <Link
                  href={`/locations/${loc.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="relative bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary rounded-2xl p-8 md:p-12 text-white overflow-hidden">
            <HealthPattern className="absolute inset-0 w-full h-full text-white" />
            <div className="relative">
            <HeartPulse className="w-12 h-12 mx-auto mb-4 text-secondary animate-heartbeat" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get the Care You Need?
            </h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">
              No appointment necessary. Simply walk in or reserve your spot
              online. We&apos;re here for you 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE.preRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
              >
                Reserve Your Spot
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {SITE.phone}
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
