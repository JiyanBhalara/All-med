import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Accessibility } from "lucide-react";

export const metadata = {
  title: "Accessibility Statement | All Med Urgent Care",
  description: "Accessibility statement for All Med Urgent Care website. WCAG 2.1 AA compliance.",
};

export default function AccessibilityPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Accessibility</span>
          </nav>
          <div className="flex items-center gap-3">
            <Accessibility className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Accessibility Statement</h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-lg">

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
          <p className="text-muted leading-relaxed">
            All Med Urgent Care is committed to ensuring that our website is accessible to all
            visitors, including those with disabilities. We strive to provide an inclusive digital
            experience that allows all users to access information about our medical services,
            locations, and resources.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Standards</h2>
          <p className="text-muted leading-relaxed">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            standards. These guidelines are developed by the World Wide Web Consortium (W3C) and
            are widely recognized as the benchmark for web accessibility.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Accessibility Features</h2>
          <ul className="list-disc pl-6 text-muted space-y-2">
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>Alt text on all meaningful images</li>
            <li>Sufficient color contrast ratios for text readability</li>
            <li>Keyboard navigable interface</li>
            <li>Responsive design that adapts to different screen sizes and devices</li>
            <li>Clear and descriptive link text</li>
            <li>Form labels and error messages for all input fields</li>
            <li>ARIA attributes where appropriate</li>
            <li>Skip navigation links for screen reader users</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Ongoing Efforts</h2>
          <p className="text-muted leading-relaxed">
            We regularly review our website to identify and resolve accessibility issues.
            Our team conducts periodic audits using automated tools and manual testing to
            ensure continued compliance with accessibility standards.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Feedback</h2>
          <p className="text-muted leading-relaxed">
            We welcome your feedback on the accessibility of our website. If you encounter
            any barriers or have suggestions for improvement, please contact us:<br /><br />
            Phone: <a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phone}</a><br />
            Visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>
            <br /><br />
            We will make reasonable efforts to address your concerns and improve accessibility.
          </p>
        </div>
      </section>
    </div>
  );
}
