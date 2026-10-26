import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "STAR EGGS CENTRE | Wholesale & Retail White Egg Supplier in Adilabad, Telangana & Vidarbha",
  description:
    "STAR EGGS CENTRE is Adilabad's trusted wholesale and retail supplier specializing exclusively in fresh white eggs. Supplying farm-fresh white table eggs, 30-egg white crates, bulk commercial orders, and Eicher full-loaded egg supply across Telangana (Hyderabad, Warangal, Nizamabad, Karimnagar, Khammam, Mahbubnagar) and Maharashtra Vidarbha Corridors (Nagpur, Akola, Yavatmal, Arni, Wani).",
  keywords: [
    "Star Eggs Centre",
    "Star Eggs Adilabad",
    "Egg wholesale Telangana",
    "Egg wholesale Maharashtra Vidarbha",
    "Egg wholesale Nagpur",
    "Egg suppliers Adilabad",
    "Eicher full loaded eggs supply",
    "Abdul Nayeem Star Eggs",
    "Egg tray wholesale price Adilabad",
    "Fresh table eggs supplier",
    "Egg distribution Telangana",
  ],
  authors: [{ name: "STAR EGGS CENTRE" }, { name: "Abdul Nayeem" }],
  creator: "STAR EGGS CENTRE",
  publisher: "STAR EGGS CENTRE",
  metadataBase: new URL(siteConfig.website),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "STAR EGGS CENTRE | Wholesale & Retail Egg Supplier in Adilabad, Telangana & Vidarbha",
    description:
      "Fresh Eggs. Trusted Quality. Reliable Supply. Supplying households, retailers, hotels, and distributors across Telangana and Maharashtra Vidarbha Corridors.",
    url: siteConfig.website,
    siteName: "STAR EGGS CENTRE",
    images: [
      {
        url: "/images/business-card.jpeg",
        width: 1200,
        height: 630,
        alt: "STAR EGGS CENTRE Wholesale & Retail Egg Supplier",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR EGGS CENTRE | Wholesale & Retail Egg Supplier in Adilabad, Telangana & Vidarbha",
    description:
      "Fresh Eggs. Trusted Quality. Reliable Supply. Supplying households, retailers, and bulk buyers across Telangana and Vidarbha Corridors.",
    images: ["/images/business-card.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#104789",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "STAR EGGS CENTRE",
    image: `${siteConfig.website}/images/business-card.jpeg`,
    "@id": siteConfig.website,
    url: siteConfig.website,
    telephone: siteConfig.phoneNumbers.map((p) => `+${p.raw}`),
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: siteConfig.proprietor,
      jobTitle: "Proprietor",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.doorNo + ", " + siteConfig.address.locality,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.6641",
      longitude: "78.5320",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "21:30",
      },
    ],
    areaServed: [
      {
        "@type": "State",
        name: "Telangana",
      },
      {
        "@type": "AdministrativeArea",
        name: "Vidarbha, Maharashtra",
      },
      {
        "@type": "City",
        name: "Adilabad",
      },
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "City",
        name: "Nagpur",
      },
    ],
    priceRange: "₹₹",
    description:
      "Wholesale and retail egg supplier in Adilabad, Telangana offering fresh table eggs, 30-egg trays, commercial wholesale crates, and Eicher full-loaded egg supply across Telangana and Maharashtra Vidarbha Corridors.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-brand-dark antialiased selection:bg-brand-green selection:text-white">
        {children}
      </body>
    </html>
  );
}
