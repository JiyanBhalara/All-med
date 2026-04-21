import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | All Med Urgent Care",
  description: "Privacy Policy for All Med Urgent Care website.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-lg">
          <p className="text-muted">Last Updated: April 2026</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information Collection</h2>
          <p className="text-muted leading-relaxed">
            All Med Urgent Care (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects limited information through this website.
            Our website contact form collects your name, email address, phone number (optional), and your message.
            We do not collect Protected Health Information (PHI) through this website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use of Information</h2>
          <p className="text-muted leading-relaxed">
            Information submitted through our contact form is used solely to respond to your inquiry.
            We do not sell, trade, or otherwise transfer your personal information to third parties.
            Your information may be used to improve our website and patient experience.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">HIPAA Compliance</h2>
          <p className="text-muted leading-relaxed">
            This website does not collect, store, or process Protected Health Information (PHI).
            All patient medical records and health information are managed through HIPAA-compliant
            systems including eClinicalWorks for electronic medical records. Online check-in and
            patient registration are handled by third-party HIPAA-compliant services with signed
            Business Associate Agreements (BAAs).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Cookies & Analytics</h2>
          <p className="text-muted leading-relaxed">
            We use Google Analytics to understand how visitors interact with our website.
            This service may use cookies to collect anonymous usage data. IP addresses are
            anonymized and no personally identifiable information is tracked. You can opt out
            of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
          <p className="text-muted leading-relaxed">
            Our website integrates with third-party services including Google Maps for location display,
            eClinicalWorks for patient pre-registration, and analytics tools. Each of these services has
            their own privacy policies. We encourage you to review those policies independently.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p className="text-muted leading-relaxed">
            We implement appropriate security measures to protect information submitted through
            our website. All data is transmitted over SSL-encrypted connections. However, no method
            of electronic transmission is 100% secure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
          <p className="text-muted leading-relaxed">
            You have the right to request information about the data we hold about you.
            You may request correction or deletion of your personal information at any time.
            For questions about your medical records or patient data, please refer to our{" "}
            <Link href="/hipaa-notice" className="text-primary hover:underline">
              HIPAA Notice of Privacy Practices
            </Link>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:<br />
            Phone: <a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phone}</a><br />
            Or visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
