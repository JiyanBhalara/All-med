import Link from "next/link";
import { SITE } from "@/lib/constants";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | All Med Urgent Care",
  description: "Terms of Service for All Med Urgent Care website.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <div className="flex items-center gap-3">
            <FileText className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-lg">
          <p className="text-muted">Last Updated: April 2026</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-muted leading-relaxed">
            By accessing and using the All Med Urgent Care website (allmedurgentcare.net),
            you accept and agree to be bound by these Terms of Service. If you do not agree
            to these terms, please do not use this website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Services Description</h2>
          <p className="text-muted leading-relaxed">
            This website provides general information about All Med Urgent Care&apos;s medical
            services, locations, hours, insurance acceptance, and contact information.
            It also provides access to patient pre-registration through third-party services.
            This website is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Medical Disclaimer</h2>
          <p className="text-muted leading-relaxed">
            The content on this website is for informational purposes only and does not constitute
            medical advice. Always seek the advice of a qualified healthcare provider with any
            questions regarding a medical condition. Never disregard professional medical advice or
            delay in seeking it because of something you have read on this website. If you are
            experiencing a medical emergency, call 911 immediately.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-muted leading-relaxed">
            All Med Urgent Care shall not be liable for any damages arising from the use of
            this website or the information contained herein. We make no warranties or
            representations about the accuracy or completeness of this website&apos;s content.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">External Links</h2>
          <p className="text-muted leading-relaxed">
            This website may contain links to third-party websites, including USCIS, patient
            registration portals, and mapping services. We are not responsible for the content
            or privacy practices of these external sites.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
          <p className="text-muted leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting to this website. Your continued use of the website
            after changes are posted constitutes your acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <p className="text-muted leading-relaxed">
            For questions about these Terms of Service, contact us at:<br />
            Phone: <a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phone}</a><br />
            Or visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
