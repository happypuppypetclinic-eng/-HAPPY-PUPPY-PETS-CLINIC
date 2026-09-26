import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { clinicData } from '@/config/clinic';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Happy Puppy Pets Clinic | Veterinary Clinic in Ulwe, Navi Mumbai',
    template: '%s | Happy Puppy Pets Clinic',
  },
  description: 'Happy Puppy Pets Clinic provides veterinary consultation, pet health care and home visit services for pets and their families in Ulwe, Navi Mumbai.',
  keywords: 'veterinary clinic in Ulwe, pet clinic in Ulwe, veterinarian in Ulwe, pet care in Navi Mumbai, home visit veterinarian in Ulwe',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Happy Puppy Pets Clinic | Veterinary Clinic in Ulwe',
    description: 'Happy Puppy Pets Clinic provides veterinary consultation, pet health care and home visit services for pets in Ulwe, Navi Mumbai.',
    url: siteUrl,
    siteName: 'HAPPY PUPPY PETS CLINIC',
    images: [
      {
        url: '/images/seo/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Puppy Pets Clinic in Ulwe',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Puppy Pets Clinic | Veterinary Clinic in Ulwe',
    description: 'Professional veterinary consultation and pet health care in Ulwe, Navi Mumbai.',
    images: ['/images/seo/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org JSON-LD structured data for Local Veterinary Business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: clinicData.name,
    image: `${siteUrl}/images/seo/og-image.jpg`,
    url: siteUrl,
    telephone: clinicData.phone,
    email: clinicData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dream Home, Shop No. 1/2, Plot No. 158, Sector 19, Opp. Om Sai Hospital',
      addressLocality: 'Ulwe, Navi Mumbai',
      postalCode: '410206',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    areaServed: ['Ulwe', 'Navi Mumbai'],
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}