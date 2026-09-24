import type { Metadata, Viewport } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gardenawaterlinepros.com'),
  title: {
    default: 'Gardena Water Service Line Repair & Replacement | 24/7 Local Dispatch',
    template: '%s | Gardena Water Line Pros'
  },
  description: 'Need water service line repair in Gardena, CA? Connect with vetted local plumbing specialists for trenchless water line replacement, leak detection & emergency main repairs. Call (310) 817-5933.',
  icons: {
    icon: '/images/favicon.svg'
  },
  openGraph: {
    siteName: 'Gardena Water Line Pros',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gardenawaterlinepros.com/',
    images: [
      {
        url: '/images/water-line-diagram.svg',
        width: 800,
        height: 420,
        alt: 'Gardena Water Line Pros'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gardena Water Service Line Repair & Replacement',
    description: 'Emergency water main repair and trenchless water line replacement in Gardena, CA. Connect with licensed local plumbing specialists.'
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
