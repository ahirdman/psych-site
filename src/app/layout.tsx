import type React from 'react';
import '@/app/globals.css';
import { StructuredData } from '@/components/structured-data';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://thielhultcrantz.com/'),
  title: {
    default: 'Tomas Thiel Hultcrantz - Psykoterapi Stockholm',
    template: '%s | Tomas Thiel Hultcrantz - Psykoterapi Stockholm',
  },
  description:
    'Professionell psykoterapi och psykologisk behandling i Stockholm. Specialiserad på individ- och parterapi. Kontakta mig för en första konsultation.',
  keywords: [
    'psykoterapi',
    'psykologisk behandling',
    'psykolog',
    'terapeut',
    'stockholm',
    'parterapi',
    'individualterapi',
    'handledning',
    'mental hälsa',
  ],
  authors: [{ name: 'Tomas Thiel Hultcrantz' }],
  creator: 'Tomas Thiel Hultcrantz',
  publisher: 'Tomas Thiel Hultcrantz',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://thielhultcrantz.com',
    title: 'Tomas Thiel Hultcrantz - Psykoterapi Stockholm',
    description:
      'Professionell psykoterapi och psykologisk behandling i Stockholm. Specialiserad på individ- och parterapi.',
    siteName: 'Tomas Thiel Hultcrantz - Psykoterapi',
    images: [
      {
        url: '/images/therapist.jpg',
        width: 1200,
        height: 630,
        alt: 'Tomas Thiel Hultcrantz - Psykoterapeut',
      },
    ],
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
  verification: {
    google: 'verification_string', // Replace with actual Google verification string when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://thielhultcrantz.com" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <StructuredData />
      </body>
    </html>
  );
}
