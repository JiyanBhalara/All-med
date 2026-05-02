export const SITE = {
  name: "All Med Urgent Care",
  tagline: "Board Certified Doctors – Walk-In Clinic",
  phone: "718-659-0400",
  phoneHref: "tel:7186590400",
  email: "info@allmedurgentcare.net",
  social: {
    twitter: "https://twitter.com/allmedurgentca1",
    facebook: "https://www.facebook.com/allmedurgentcare",
    instagram: "https://www.instagram.com/allmedurgentcare",
  },
  preRegistration:
    "https://mycw55.eclinicalweb.com/portal6473/jsp/jspnew/preRegistration_new.jsp",
} as const;

export const LOCATIONS = [
  {
    id: "jamaica",
    name: "Jamaica, Queens",
    shortName: "Jamaica, NY",
    address: "115-20 Liberty Ave",
    city: "Jamaica",
    state: "NY",
    zip: "11419",
    phone: "718-659-0400",
    phoneHref: "tel:7186590400",
    mapQuery: "115-20+Liberty+Ave,+Jamaica,+NY+11419",
    googlePlaceId: "ChIJd_7TAE9nwokRs_8-D5PPJ-I",
    hours: [
      { days: "Monday - Friday", time: "9:00 AM – 6:30 PM" },
      { days: "Wednesday", time: "9:00 AM – 6:00 PM" },
      { days: "Saturday", time: "9:00 AM – 6:00 PM" },
      { days: "Sunday", time: "10:00 AM – 4:00 PM" },
    ],
    features: [
      "Located close to JFK Airport",
      "Right next to the train and bus stop",
      "Walk-ins welcome 7 days a week",
    ],
  },
  {
    id: "hicksville",
    name: "Hicksville, Long Island",
    shortName: "Hicksville, NY",
    address: "55 W Old Country Road, Suite 1",
    city: "Hicksville",
    state: "NY",
    zip: "11801",
    phone: "718-659-0400",
    phoneHref: "tel:7186590400",
    mapQuery: "55+W+Old+Country+Rd+Suite+1,+Hicksville,+NY+11801",
    googlePlaceId: "ChIJI2sKx3uBwokRfCkTl2UJ2Lk",
    hours: [
      { days: "Monday - Saturday", time: "9:00 AM – 6:30 PM" },
      { days: "Sunday", time: "10:00 AM – 3:00 PM" },
    ],
    features: [
      "Easy parking available",
      "Convenient Long Island location",
      "Walk-ins welcome 7 days a week",
    ],
  },
] as const;

export const INSURANCE_PROVIDERS = [
  "Metro Plus Plans",
  "Local 1199",
  "Medicare",
  "Elderplan / Homefirst",
  "United Healthcare Community Plan",
  "Aetna",
  "Emblem Health",
  "Empire Plans",
  "GHI",
  "Cigna",
  "Megna Care",
  "Empire Blue Cross Blue Shield",
  "Medicaid",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Medical Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Immigration Medical", href: "/specialties/immigration-medical" },
      { label: "CDL/DOT Physical", href: "/specialties/cdl-dot-physical" },
      { label: "TLC Medical Exam", href: "/specialties/tlc-medical-exam" },
    ],
  },
  { label: "Insurance", href: "/insurance" },
  {
    label: "Locations",
    href: "/locations/jamaica",
    children: [
      { label: "Jamaica, Queens", href: "/locations/jamaica" },
      { label: "Hicksville, NY", href: "/locations/hicksville" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;
