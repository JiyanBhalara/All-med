import Link from "next/link";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Medical Topics Blog | All Med Urgent Care",
  description:
    "Read health tips and medical articles from All Med Urgent Care. Stay informed about urgent care, preventive health, and common medical conditions.",
};

const BLOG_POSTS = [
  {
    title: "What Is Social Distancing?",
    date: "March 20, 2020",
    excerpt:
      "Learn about coronavirus prevention through social distancing practices. Most NYC cases involved young men aged 18-49, making awareness critical for all age groups.",
    category: "COVID-19",
  },
  {
    title: "About Heart Disease",
    date: "March 16, 2020",
    excerpt:
      "One in four people die every year from cardiovascular disease. Heart conditions often present as 'the silent killer' with delayed symptoms that can go unnoticed.",
    category: "Heart Health",
  },
  {
    title: "Coronavirus Prevention",
    date: "February 9, 2020",
    excerpt:
      "Understanding COVID-19 spread and preventive measures including proper handwashing techniques, face mask usage, and safe food handling practices.",
    category: "COVID-19",
  },
  {
    title: "The Dangers of Osteoporosis and Bone Loss",
    date: "May 15, 2019",
    excerpt:
      "Osteoporosis occurs when bone loss is higher than bone growth. Learn how diet and medications serve as important preventive factors against this condition.",
    category: "Bone Health",
  },
  {
    title: "What is the Flu?",
    date: "May 5, 2019",
    excerpt:
      "The flu is different from the common cold. It is a respiratory illness spread primarily through airborne transmission that requires proper medical attention.",
    category: "Respiratory",
  },
  {
    title: "Kidney Stones – Effects & Symptoms",
    date: "May 1, 2019",
    excerpt:
      "Kidney stones cause painful stone formation and can lead to severe pain, urinary changes, and fever. Learn about symptoms, causes, and when to seek care.",
    category: "Kidney Health",
  },
  {
    title: "Gallstones",
    date: "April 28, 2019",
    excerpt:
      "Small bile duct stones are often linked to high cholesterol and obesity. Understanding the risk factors and symptoms can help with early detection and treatment.",
    category: "Digestive Health",
  },
  {
    title: "Measles – Symptoms & Effects",
    date: "April 19, 2019",
    excerpt:
      "Measles is extremely contagious. Reports show that 1 out of 4 adults infected end up hospitalized. Vaccination remains the best prevention method.",
    category: "Infectious Disease",
  },
  {
    title: "Colon Cancer",
    date: "April 15, 2019",
    excerpt:
      "Early polyp detection is crucial in preventing colon cancer. Without screening, cancer can spread to organs like the liver. Regular checkups save lives.",
    category: "Cancer Awareness",
  },
  {
    title: "Symptoms of Ulcers",
    date: "April 12, 2019",
    excerpt:
      "Peptic ulcers come in two types: gastric and duodenal. Stomach pain is the primary symptom. Learn about causes, risk factors, and treatment options.",
    category: "Digestive Health",
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#003d5c] via-primary-dark to-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Medical Topics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medical Topics Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Stay informed with health tips, medical articles, and important
            health information from our board certified physicians.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Category Banner */}
                <div className="h-32 bg-gradient-to-br from-primary-light to-blue-100 flex items-center justify-center p-6">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h2 className="text-lg font-bold mb-3 text-foreground leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Have Health Concerns? Visit Us Today
          </h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            Don&apos;t wait when it comes to your health. Our board certified
            doctors are available 7 days a week with no appointment necessary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted-light transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
