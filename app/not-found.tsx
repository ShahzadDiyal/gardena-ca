import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Gardena Water Line Pros',
  description: 'The page you are looking for does not exist. Call (310) 817-5933 for 24/7 water line repair dispatch in Gardena, CA.',
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="section" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="section-tag" style={{ background: '#FEE2E2', color: '#DC2626' }}>Error 404</span>
          <h1 style={{ fontSize: '2.75rem', marginTop: '0.5rem' }}>Page Not Found</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            The page you are looking for has been moved or does not exist. If you are experiencing an urgent water main issue, please call our 24/7 helpline immediately.
          </p>

          <a href="tel:3108175933" className="btn-cta-large" style={{ display: 'inline-flex', maxWidth: '400px', margin: '0 auto 2.5rem' }}>
            <span>CALL 24/7 DISPATCH: (310) 817-5933</span>
            <span className="btn-cta-subtext">Immediate Local Assistance</span>
          </a>

          <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'left', boxShadow: 'var(--shadow-sm)' }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>Popular Pages &amp; Services:</h2>
            <div className="grid-2" style={{ gap: '1rem' }}>
              <ul style={{ marginBottom: 0 }}>
                <li><Link href="/">Gardena Homepage</Link></li>
                <li><Link href="/trenchless-water-line-replacement/">Trenchless Replacement</Link></li>
                <li><Link href="/underground-water-leak-detection/">Underground Leak Detection</Link></li>
                <li><Link href="/emergency-water-main-repair/">Emergency Main Repair</Link></li>
              </ul>
              <ul style={{ marginBottom: 0 }}>
                <li><Link href="/galvanized-pipe-replacement/">Galvanized Pipe Upgrades</Link></li>
                <li><Link href="/low-water-pressure-repair/">Low Water Pressure Repair</Link></li>
                <li><Link href="/strawberry-park/">Strawberry Park Area</Link></li>
                <li><Link href="/contact/">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
