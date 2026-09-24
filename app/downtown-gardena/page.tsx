import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Downtown Gardena Water Line Repair & Trenchless Replacement',
  description: 'Commercial and residential water service line repair in Downtown Gardena, CA. Fast local dispatch for trenchless pipe replacement & leak detection. Call (310) 817-5933.',
  alternates: {
    canonical: 'http://fixwaterca.online/downtown-gardena/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "http://fixwaterca.online/downtown-gardena/#place",
      "name": "Downtown Gardena, CA",
      "containedInPlace": {
        "@type": "City",
        "name": "Gardena",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "http://fixwaterca.online/downtown-gardena/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "http://fixwaterca.online/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Downtown Gardena",
          "item": "http://fixwaterca.online/downtown-gardena/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "http://fixwaterca.online/downtown-gardena/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can contractors replace a water service line for a commercial business on Gardena Blvd without closing the store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Contractors utilize trenchless directional boring to pull new high-capacity water lines beneath commercial sidewalks and parking stalls, minimizing business disruption and keeping customer entrances open."
          }
        },
        {
          "@type": "Question",
          "name": "What causes low water pressure in Downtown Gardena buildings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Low water pressure in Downtown Gardena is frequently caused by failing commercial pressure regulator valves (PRV) or internal corrosion inside older galvanized service lines that struggle to supply modern high-demand fixtures."
          }
        }
      ]
    }
  ]
};

export default function DowntownGardenaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Downtown Gardena" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Downtown Gardena &bull; 90247</span>
                  <span className="hero-badge">Commercial &amp; Residential</span>
                  <span className="hero-badge">Trenchless Solutions</span>
                </div>
                <h1>Downtown Gardena Water Line Repair &amp; Replacement</h1>
                <p className="hero-subhead">
                  Need reliable water service line repair for your Downtown Gardena business, multi-family property, or residence? We connect you with licensed South Bay plumbing contractors specializing in high-capacity supply line installations, acoustic leak detection, and rapid emergency repairs.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>CALL DOWNTOWN DISPATCH: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Immediate Local Dispatch &bull; Upfront Written Quotes</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Downtown Gardena Services</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Commercial Directional Boring:</strong> Pull pipes beneath parking lots</li>
                  <li><span className="check-icon">&#10003;</span> <strong>High-Flow Supply Lines:</strong> 1&quot; to 2&quot; copper and PEX-a installations</li>
                  <li><span className="check-icon">&#10003;</span> <strong>PRV &amp; Pressure Diagnostics:</strong> Fix building-wide pressure loss</li>
                  <li><span className="check-icon">&#10003;</span> <strong>24/7 Emergency Dispatch:</strong> Burst main containment</li>
                </ul>
                <div className="referral-notice">
                  <strong>Local Dispatch:</strong> Matching Downtown Gardena property owners with licensed California C-36 plumbing contractors.
                </div>
              </div>
            </div>
          </section>

          {/* Community Context */}
          <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
            <div className="container">
              <div className="direct-answer-box">
                <h2>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0284C7" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  Water Supply Infrastructure in Downtown Gardena
                </h2>
                <p className="direct-answer-text">
                  <strong>Downtown Gardena</strong> serves as the civic and commercial core of the city, centered along historic Gardena Boulevard, Vermont Avenue, and Western Avenue near the Gardena City Hall and Nakaoka Community Center. The area features a vibrant mixture of multi-family residences, retail establishments, and popular dining spots. With some commercial buildings and residences dating back over half a century, private water supply lines from Golden State Water meters often experience significant corrosion, flow restrictions, and stress from high continuous water demand.
                </p>
              </div>
            </div>
          </section>

          {/* Downtown Challenges */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Urban &amp; Commercial Focus</span>
                <h2>Water Service Line Challenges in Downtown Gardena</h2>
                <p className="section-lead">
                  Why Downtown Gardena property owners and businesses require specialized pipe solutions:
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Minimizing Disruption to Retail &amp; Restaurants</h3>
                  <p>
                    In a busy commercial district like Gardena Boulevard, digging an open trench across customer walkways, sidewalks, or parking lots can shut down business operations.
                  </p>
                  <p>
                    Contractors in our network utilize <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link> and horizontal directional boring to install new heavy-duty water lines beneath paved surfaces with zero surface trenching.
                  </p>
                  <h3>High Water Demand &amp; Pressure Regulator Failures</h3>
                  <p>
                    Multi-unit apartment buildings and commercial kitchens require high, steady flow rates. When municipal supply lines narrow from internal rust or commercial pressure regulators fail, water volume collapses.
                  </p>
                  <p>
                    Discover how our specialists diagnose and resolve <Link href="/low-water-pressure-repair/">low water pressure in Gardena</Link>.
                  </p>
                </div>

                <div>
                  <h3>Acoustic Leak Detection Under Concrete Slabs</h3>
                  <p>
                    Underground water leaks beneath commercial slabs or paved parking stalls can cause costly structural settling. Non-destructive <Link href="/underground-water-leak-detection/">underground water leak detection</Link> identifies exact breach points without exploratory excavation.
                  </p>
                  <p>
                    For older properties needing full pipe modernizations, learn about our <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> and whole-line <Link href="/water-meter-to-house-replacement/">meter-to-house pipe replacement</Link> services. Discover complete citywide support on our <Link href="/">water service line repair in Gardena</Link> homepage.
                  </p>

                  <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--color-primary-dark)' }}>City Permitting &amp; Safety Compliance</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                      Contractors manage all required City of Gardena Community Development plumbing permits and DigAlert 811 utility mark-outs, ensuring all work complies with California commercial and residential plumbing standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Services</span>
                <h2>Water Line Solutions for Downtown Gardena</h2>
              </div>

              <div className="grid-3">
                <div className="card">
                  <h3><Link href="/trenchless-water-line-replacement/" style={{ color: 'inherit', textDecoration: 'none' }}>Trenchless Installation</Link></h3>
                  <p>
                    Install continuous PEX-a or copper piping beneath commercial parking lots and walkways without trenching.
                  </p>
                  <Link href="/trenchless-water-line-replacement/" className="card-link">Trenchless Guide &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/emergency-water-main-repair/" style={{ color: 'inherit', textDecoration: 'none' }}>24/7 Emergency Repair</Link></h3>
                  <p>
                    Urgent containment and repair for burst commercial supply lines, geysers, and broken shut-off valves.
                  </p>
                  <Link href="/emergency-water-main-repair/" className="card-link">Emergency Help &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/underground-water-leak-detection/" style={{ color: 'inherit', textDecoration: 'none' }}>Acoustic Leak Locating</Link></h3>
                  <p>
                    Pinpoint subterranean leaks under paved surfaces using electronic correlation and sonic listening discs.
                  </p>
                  <Link href="/underground-water-leak-detection/" className="card-link">Leak Detection &rarr;</Link>
                </div>
              </div>

              <div style={{ marginTop: '2rem', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                <h3 style={{ marginTop: 0, fontSize: '1.15rem' }}>Serving Surrounding South Bay Communities</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  We also dispatch licensed plumbing contractors to adjacent Gardena communities including <Link href="/moneta/">Moneta</Link>, <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/hollypark/">Hollypark</Link>, and <Link href="/el-camino-village/">El Camino Village</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Downtown FAQs</span>
                <h2>Frequently Asked Questions in Downtown Gardena</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">Can contractors replace a water service line for a commercial business without closing the store?</summary>
                  <div className="faq-answer">
                    <p>
                      Yes. Contractors utilize trenchless directional boring to pull new high-capacity water lines beneath commercial sidewalks and parking stalls, minimizing business disruption and keeping customer entrances open.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">What pipe materials are installed for commercial properties?</summary>
                  <div className="faq-answer">
                    <p>
                      Contractors install commercial-grade Type K seamless copper tubing or high-density PEX-a piping up to 2 inches in diameter, ensuring maximum flow volume and long-term corrosion resistance.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">How fast can an emergency crew be dispatched in Downtown Gardena?</summary>
                  <div className="faq-answer">
                    <p>
                      Emergency calls are dispatched immediately upon calling <a href="tel:3108175933"><strong>(310) 817-5933</strong></a>, routing you to on-call plumbing specialists ready for rapid site arrival.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Need Commercial or Residential Water Line Service in Downtown Gardena?</h2>
              <p>
                Connect with an experienced local plumbing contractor for fast diagnostics and upfront written estimates.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL DOWNTOWN DISPATCH: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Serving Gardena, CA &amp; South Bay</span>
                </a>
                <Link href="/contact/" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '2px solid #FFFFFF', padding: '1rem 1.75rem', borderRadius: 'var(--radius-md)', fontWeight: 700, textDecoration: 'none' }}>
                  Contact Online &rarr;
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
