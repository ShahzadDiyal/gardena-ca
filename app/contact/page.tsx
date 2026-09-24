import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Gardena Water Line Pros | 24/7 Dispatch Hotline & Form',
  description: 'Contact Gardena Water Line Pros for fast water service line repair, leak detection & trenchless replacement in Gardena, CA. Call (310) 817-5933 for 24/7 dispatch.',
  alternates: {
    canonical: 'https://www.gardenawaterlinepros.com/contact/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.gardenawaterlinepros.com/contact/#webpage",
      "url": "https://www.gardenawaterlinepros.com/contact/",
      "name": "Contact Gardena Water Line Pros",
      "description": "Contact and emergency dispatch page for water service line repair in Gardena, CA.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Gardena Water Line Pros",
        "url": "https://www.gardenawaterlinepros.com/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.gardenawaterlinepros.com/contact/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.gardenawaterlinepros.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact Us",
          "item": "https://www.gardenawaterlinepros.com/contact/"
        }
      ]
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Contact Us" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Direct Dispatch Hotline</span>
                  <span className="hero-badge">24/7 Availability</span>
                  <span className="hero-badge">Gardena &amp; South Bay</span>
                </div>
                <h1>Contact Gardena Water Line Pros</h1>
                <p className="hero-subhead">
                  Need immediate assistance with an active underground water main leak, low household water pressure, or a scheduled trenchless pipe replacement? Call our local helpline or submit an online request below.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>CALL DISPATCH: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Immediate Call Routing &bull; Free Phone Consultations</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Dispatch Information</h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                  <strong>Phone Hotline:</strong> <a href="tel:3108175933" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0284C7' }}>(310) 817-5933</a><br />
                  <strong>Operating Hours:</strong> 24 Hours / 7 Days a Week<br />
                  <strong>Service Coverage:</strong> Gardena, CA (90247, 90248, 90249) and surrounding South Bay communities
                </p>
                <div className="referral-notice" style={{ marginBottom: 0 }}>
                  <strong>Dispatch Process:</strong> Calls and form submissions are immediately connected with licensed independent plumbing contractors operating locally in Gardena.
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form & Dispatch Details */}
          <section className="section">
            <div className="container">
              <div className="contact-grid">
                {/* Form */}
                <div className="contact-card">
                  <h2 style={{ marginTop: 0, fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>Request a Water Line Evaluation</h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                    Fill out the form below to connect with a licensed Gardena water line contractor for non-emergency consultations. For urgent emergencies, please call directly.
                  </p>
                  <LeadForm />
                </div>

                {/* What Happens Next & Coverage */}
                <div>
                  <h2>What Happens After You Contact Us?</h2>
                  <p>
                    Whether you call our hotline at <a href="tel:3108175933"><strong>(310) 817-5933</strong></a> or submit the dispatch form, our system routes your inquiry to an on-call, licensed plumbing contractor in Gardena with the specific equipment required for your project.
                  </p>

                  <div className="process-grid" style={{ gridTemplateColumns: '1fr', gap: '1rem', marginTop: '1.25rem' }}>
                    <div className="process-step" style={{ padding: '1.25rem' }}>
                      <div className="step-num" style={{ fontSize: '1.5rem' }}>01</div>
                      <h3 style={{ fontSize: '1.05rem' }}>Direct Contractor Contact</h3>
                      <p style={{ fontSize: '0.875rem' }}>A local specialist contacts you to discuss your symptoms and confirm an on-site inspection time.</p>
                    </div>
                    <div className="process-step" style={{ padding: '1.25rem' }}>
                      <div className="step-num" style={{ fontSize: '1.5rem' }}>02</div>
                      <h3 style={{ fontSize: '1.05rem' }}>On-Site Diagnostic</h3>
                      <p style={{ fontSize: '0.875rem' }}>Technicians inspect your Golden State Water meter, test dynamic pressure, and locate subterranean leaks.</p>
                    </div>
                    <div className="process-step" style={{ padding: '1.25rem' }}>
                      <div className="step-num" style={{ fontSize: '1.5rem' }}>03</div>
                      <h3 style={{ fontSize: '1.05rem' }}>Upfront Written Estimate</h3>
                      <p style={{ fontSize: '0.875rem' }}>You receive an itemized quote with trenchless and spot-repair options before any digging begins.</p>
                    </div>
                  </div>

                  <div style={{ background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                    <h3 style={{ marginTop: 0, fontSize: '1.1rem', color: 'var(--color-primary-dark)' }}>Explore Related Services</h3>
                    <ul style={{ marginBottom: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      <li><Link href="/trenchless-water-line-replacement/">Trenchless Water Line Replacement</Link></li>
                      <li><Link href="/underground-water-leak-detection/">Underground Leak Detection</Link></li>
                      <li><Link href="/emergency-water-main-repair/">Emergency Water Main Repair</Link></li>
                      <li><Link href="/galvanized-pipe-replacement/">Galvanized Pipe Upgrades</Link></li>
                      <li><Link href="/">Gardena Water Line Authority Page</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhood Directory */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Gardena Coverage</span>
                <h2>Areas We Connect in Gardena, California</h2>
              </div>

              <div className="grid-3">
                <div className="card">
                  <h3><Link href="/strawberry-park/" style={{ color: 'inherit', textDecoration: 'none' }}>Strawberry Park</Link></h3>
                  <p>West-central Gardena residential core (90247, 90249).</p>
                  <Link href="/strawberry-park/" className="card-link">View Details &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/hollypark/" style={{ color: 'inherit', textDecoration: 'none' }}>Hollypark</Link></h3>
                  <p>North Gardena single-family neighborhoods (90249).</p>
                  <Link href="/hollypark/" className="card-link">View Details &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/moneta/" style={{ color: 'inherit', textDecoration: 'none' }}>Moneta</Link></h3>
                  <p>South Gardena commercial and residential district (90247, 90248).</p>
                  <Link href="/moneta/" className="card-link">View Details &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/el-camino-village/" style={{ color: 'inherit', textDecoration: 'none' }}>El Camino Village</Link></h3>
                  <p>West Gardena residential tracts (90249).</p>
                  <Link href="/el-camino-village/" className="card-link">View Details &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/downtown-gardena/" style={{ color: 'inherit', textDecoration: 'none' }}>Downtown Gardena</Link></h3>
                  <p>Gardena Boulevard commercial and multi-family core (90247).</p>
                  <Link href="/downtown-gardena/" className="card-link">View Details &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/about/" style={{ color: 'inherit', textDecoration: 'none' }}>About Our Network</Link></h3>
                  <p>Learn how our dispatch referral model functions.</p>
                  <Link href="/about/" className="card-link">About Us &rarr;</Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
