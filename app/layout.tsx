import type { Metadata, Viewport } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';

export const metadata: Metadata = {
  metadataBase: new URL('http://fixwaterca.online'),
  title: {
    default: 'Gardena Water Service Line Repair & Replacement | 24/7 Local Dispatch',
    template: '%s | Gardena Water Line Pros'
  },
  description: 'Need water service line repair in Gardena, CA? Connect with vetted local plumbing specialists for trenchless water line replacement, leak detection & emergency main repairs. Call (310) 817-5933.',
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
    apple: '/images/favicon.svg'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    siteName: 'Gardena Water Line Pros',
    type: 'website',
    locale: 'en_US',
    url: 'http://fixwaterca.online/',
    title: 'Gardena Water Service Line Repair & Replacement',
    description: 'Connect with licensed South Bay plumbing contractors for underground water line repair, leak detection, and trenchless pipe replacement in Gardena, CA.',
    images: [
      {
        url: '/images/water-line-diagram.svg',
        width: 800,
        height: 420,
        alt: 'Gardena Water Line Pros - Private vs Utility Responsibility'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gardena Water Service Line Repair & Replacement',
    description: 'Emergency water main repair and trenchless water line replacement in Gardena, CA. Connect with licensed local plumbing specialists.',
    images: ['/images/water-line-diagram.svg']
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Gardena',
    'geo.position': '33.8883;-118.3090',
    'ICBM': '33.8883, -118.3090'
  }
};

export const viewport: Viewport = {
  themeColor: '#0F2C59',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TopBar />
        <Header />
        <div id="main-content-wrapper" style={{ flex: 1 }}>
          {children}
        </div>
        <StickyMobileBar />
        <Footer />
      </body>
    </html>
  );
}
