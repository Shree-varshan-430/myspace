import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileContactBar from '@/components/layout/MobileContactBar';
import FloatingContactDock from '@/components/layout/FloatingContactDock';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.url),
  title: {
    default: siteConfig.meta.defaultTitle,
    template: siteConfig.meta.titleTemplate,
  },
  description: siteConfig.meta.description,
  keywords: [
    'construction company in Bangalore',
    'house construction company in Bangalore',
    'commercial construction company in Bangalore',
    'civil contractors in Bangalore',
    'interior design company in Bangalore',
    '3D elevation design Bangalore',
    '3D floor plan design Bangalore',
    'property valuation in Bangalore',
    'home builders Bangalore',
    'turnkey construction Bangalore',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.meta.url,
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.meta.ogImage,
        width: 1200,
        height: 630,
        alt: 'My Space Construction, Design & Valuation Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.description,
    images: [siteConfig.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness & Organization JSON-LD Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.meta.url,
    logo: `${siteConfig.meta.url}/logo.png`,
    image: siteConfig.meta.ogImage,
    description: siteConfig.meta.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9121',
      longitude: '77.6446',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, Bengaluru`,
    })),
    priceRange: '₹₹₹',
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-surface-ice text-slate-800 antialiased selection:bg-brand-blue selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContactDock />
        <MobileContactBar />
      </body>
    </html>
  );
}
