import Link from "next/link";
import { LOCATIONS, SITE } from "@/lib/constants";
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  Car,
  MapPinned,
  Users,
  ArrowRight,
  CheckCircle,
  CalendarCheck,
} from "lucide-react";
import { HealthPattern, MedicalCross } from "@/components/HealthIcons";

export const metadata = {
  title: "Hicksville Long Island Location | All Med Urgent Care",
  description:
    "Visit All Med Urgent Care at 55 W Old Country Road, Hicksville, NY 11801. Walk-in urgent care open 7 days a week. Call 718-659-0400.",
};

const SERVICES_AT_LOCATION = [
  "Urgent Care Walk-In",
  "Immigration Medical Exams (I-693)",
  "CDL/DOT Physical Exams",
  "TLC Medical Exams",
  "COVID-19 & Antibody Testing",
  "Blood Tests & Lab Work",
  "X-rays (select hours)",
  "Physicals (School, Sports, Work)",
  "Vaccinations & Immunizations",
  "Women's Health Services",
  "Pediatric Care",
  "STD/HIV Screening",
];

export default function HicksvillePage() {
  const location = LOCATIONS[1]; // Hicksville

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-brand-gradient-r py-16 md:py-24 overflow-hidden">
        <HealthPattern className="absolute inset-0 w-full h-full text-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <nav className="text-sm text-on-dark-muted mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Locations</span>
            <span className="mx-2">/</span>
            <span className="text-white">Hicksville, Long Island</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Med Urgent Care â€“ Hicksville, Long Island
          </h1>
          <p className="text-xl text-on-dark-soft max-w-2xl">
            Walk-in urgent care clinic serving Hicksville and the greater Long
            Island community. No appointment necessary. Open 7 days a week.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={SITE.preRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
            >
              Reserve Your Spot
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={location.phoneHref}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {location.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.mapQuery}`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of All Med Urgent Care ${location.name}`}
                />
              </div>

              {/* About */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  About Our Hicksville Location
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Our Hicksville location on Old Country Road provides
                  convenient urgent care services to residents of Hicksville,
                  Levittown, Plainview, Bethpage, and the broader Long Island
                  community. Easy parking is available on-site.
                </p>
                <p className="text-muted leading-relaxed">
                  With board certified doctors on staff, we provide immediate
                  medical care for non-life threatening emergencies as well as
                  specialty exams including immigration medical exams, CDL/DOT
                  physicals, and TLC medical exams. Walk-ins are always welcome â€“
                  no appointment necessary.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Services at This Location
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SERVICES_AT_LOCATION.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted mt-4 italic">
                  * X-ray service may not be available during all hours of
                  operation.
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-primary-light rounded-xl p-6 text-center">
                  <Car className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Easy Parking</h3>
                  <p className="text-sm text-muted">
                    Convenient on-site parking available for patients
                  </p>
                </div>
                <div className="bg-primary-light rounded-xl p-6 text-center">
                  <MapPinned className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Long Island</h3>
                  <p className="text-sm text-muted">
                    Convenient location serving all of Long Island
                  </p>
                </div>
                <div className="bg-primary-light rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Walk-Ins Welcome</h3>
                  <p className="text-sm text-muted">
                    Open 7 days a week, no appointment needed
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-bold mb-4">Location Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted text-sm">
                        {location.address}
                        <br />
                        {location.city}, {location.state} {location.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href={location.phoneHref}
                        className="text-primary hover:underline text-sm"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-2">Hours</p>
                      <div className="space-y-1">
                        {location.hours.map((h) => (
                          <div
                            key={h.days}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-muted">{h.days}</span>
                            <span className="font-medium ml-4">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Directions</p>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${location.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        Get Directions &rarr;
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <a
                    href={SITE.preRegistration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
                  >
                    Reserve Your Spot
                  </a>
                  <a
                    href={location.phoneHref}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
