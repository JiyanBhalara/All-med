import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Lock } from "lucide-react";

export const metadata = {
  title: "HIPAA Notice of Privacy Practices | All Med Urgent Care",
  description: "HIPAA Notice of Privacy Practices for All Med Urgent Care.",
};

export default function HipaaNoticePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">HIPAA Notice</span>
          </nav>
          <div className="flex items-center gap-3">
            <Lock className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Notice of Privacy Practices</h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-lg">
          <div className="bg-primary-light border border-primary/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-primary font-semibold">
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND
              DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
            </p>
          </div>

          <p className="text-muted">Effective Date: April 2026</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Duty</h2>
          <p className="text-muted leading-relaxed">
            All Med Urgent Care is required by law to maintain the privacy of your Protected
            Health Information (PHI), provide you with notice of our legal duties and privacy
            practices, and follow the terms of the notice currently in effect. We reserve the
            right to change our privacy practices and the terms of this notice at any time.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Uses and Disclosures of PHI</h2>
          <p className="text-muted leading-relaxed mb-4">
            We may use and disclose your health information for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-muted space-y-2">
            <li><strong>Treatment:</strong> We may use your health information to provide, coordinate, or manage your medical care and related services.</li>
            <li><strong>Payment:</strong> We may use and disclose your health information to obtain payment for services, including billing your insurance company.</li>
            <li><strong>Healthcare Operations:</strong> We may use and disclose your health information for operational activities such as quality improvement, staff training, and administrative purposes.</li>
            <li><strong>As Required by Law:</strong> We will disclose your health information when required to do so by federal, state, or local law.</li>
            <li><strong>Public Health Activities:</strong> We may disclose your health information for public health activities such as reporting diseases and vital statistics.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
          <ul className="list-disc pl-6 text-muted space-y-2">
            <li><strong>Right to Inspect and Copy:</strong> You have the right to inspect and obtain a copy of your health information maintained by our practice.</li>
            <li><strong>Right to Amend:</strong> You have the right to request that we amend your health information if you believe it is incorrect or incomplete.</li>
            <li><strong>Right to an Accounting of Disclosures:</strong> You have the right to request a list of disclosures we have made of your health information.</li>
            <li><strong>Right to Request Restrictions:</strong> You have the right to request a restriction on certain uses and disclosures of your health information.</li>
            <li><strong>Right to Request Confidential Communications:</strong> You have the right to request that we communicate with you about health matters in a certain way or at a certain location.</li>
            <li><strong>Right to a Copy of This Notice:</strong> You have the right to obtain a paper copy of this notice upon request.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Complaints</h2>
          <p className="text-muted leading-relaxed">
            If you believe your privacy rights have been violated, you may file a complaint
            with our practice or with the Secretary of the U.S. Department of Health and Human
            Services. You will not be penalized or retaliated against for filing a complaint.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Website Privacy</h2>
          <p className="text-muted leading-relaxed">
            This website (allmedurgentcare.net) does not collect, store, or transmit Protected
            Health Information. Patient registration, medical records, and health data are
            managed through HIPAA-compliant third-party systems with signed Business Associate
            Agreements. For our website privacy practices, please see our{" "}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
          <p className="text-muted leading-relaxed">
            For questions about this notice or to exercise your privacy rights, contact our Privacy Officer:<br /><br />
            <strong>All Med Urgent Care</strong><br />
            Phone: <a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phone}</a><br />
            115-20 Liberty Ave, Jamaica, NY 11419<br />
            55 W Old Country Road, Suite 1, Hicksville, NY 11801
          </p>
        </div>
      </section>
    </div>
  );
}
