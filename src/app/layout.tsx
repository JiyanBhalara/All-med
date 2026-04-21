import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "All Med Urgent Care | Board Certified Doctors – Walk-In Clinic | Jamaica & Hicksville NY",
  description:
    "All Med Urgent Care provides walk-in urgent care services 7 days a week in Jamaica, Queens and Hicksville, Long Island. Board certified doctors, no appointment needed. Immigration physicals, DOT/CDL exams, TLC medical exams, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
