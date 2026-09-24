import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Moneta Gardena Water Line Repair & Trenchless Replacement',
  description: 'Water service line repair and trenchless pipe replacement in Moneta, Gardena CA. Fast dispatch for leak detection & galvanized pipe upgrades. Call (310) 817-5933.',
  alternates: {
    canonical: 'https://www.gardenawaterlinepros.com/moneta/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "https://www.gardenawaterlinepros.com/moneta/#place",
      "name": "Moneta, Gardena, CA",
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
      "@id": "https://www.gardenawaterlinepros.com/moneta/#breadcrumbs",
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
          "name": "Moneta",
          "item": "https://www.gardenawaterlinepros.com/moneta/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.gardenawaterlinepros.com/moneta/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do Moneta properties often need full water line replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moneta is one of the earliest settled communities in the South Bay. Many residential and commercial properties feature original galvanized steel water mains that are now 60 to 80 years old, suffering from severe internal rust restriction and brittle underground joints."
          }
        },
        {
          "@type": "Question",
          "name": "Can contractors replace a water line under a commercial parking lot or driveway in Moneta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Contractors utilize horizontal directional boring and pipe pulling to install continuous Type K copper or PEX-a piping directly beneath asphalt or concrete surfaces without disruptive open-cut trenching."
          }
        }
      ]
    }
  ]
};

export default function MonetaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Moneta" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Moneta &bull; 90247 &amp; 90248</span>
                  <span className="hero-badge">South Gardena Plumbing</span>
                  <span className="hero-badge">Trenchless Pipe Pulling</span>
                </div>
                <h1>Moneta Gardena Water Line Repair &amp; Replacement</h1>
                <p className="hero-subhead">
                  Experiencing water pressure issues or a subterranean pipe leak in historic Moneta? We connect residential and commercial property owners with licensed South Bay contractors for non-invasive trenchless line renewal, acoustic leak detection, and emergency main repairs.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>CALL MONETA DISPATCH: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Immediate Local Connection &bull; Free Phone Estimate</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Moneta Services Overview</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Trenchless Renewal:</strong> Pipe pulling under Western &amp; Redondo Beach Blvd</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Galvanized Upgrades:</strong> Replace corroded mid-century lines</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Acoustic Diagnostics:</strong> Pinpoint subterranean fractures</li>
                  <li><span className="check-icon">&#10003;</span> <strong>24/7 Rapid Response:</strong> Urgent containment for burst mains</li>
                </ul>
                <div className="referral-notice">
                  <strong>Local Dispatch:</strong> Matching Moneta property owners with licensed California C-36 plumbing contractors.
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
                  Water Line Infrastructure in Moneta, Gardena
                </h2>
                <p className="direct-answer-text">
                  Originating as a bustling agricultural and commercial township before incorporating with Gardena in 1930, <strong>Moneta</strong> spans the southern corridor of Gardena centered around Western Avenue, Redondo Beach Boulevard, and 166th to 182nd Streets. Due to the area&apos;s rich history, Moneta contains a diverse mix of mid-century single-family homes, multi-unit apartment complexes, and commercial businesses. Many properties continue to rely on aging galvanized water service lines connected to Golden State Water meters, resulting in high failure rates from corrosion, soil movement, and heavy water demand.
                </p>
              </div>
            </div>
          </section>

          {/* Neighborhood Challenges */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Moneta Context</span>
                <h2>Subterranean Water Line Challenges in Moneta</h2>
                <p className="section-lead">
                  Why Moneta property owners encounter specific water supply pipe failures:
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Aging Galvanized Lines in Historic Subdivisions</h3>
                  <p>
                    Because Moneta was developed over multiple decades, many private water service lines installed between 1940 and 1965 have severely degraded. Rust tuberculation creates narrow choke points inside the pipe, causing whole-house pressure drops.
                  </p>
                  <p>
                    Upgrading to seamless Type K copper or PEX-a through <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> restores optimal water volume and removes metallic odors from your water supply.
                  </p>
                  <h3>Protecting Paved Parking &amp; Concrete Walkways</h3>
                  <p>
                    In both residential driveways and commercial store fronts along Western Avenue, digging trenches is costly and disruptive. Utilizing <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link> allows contractors to pull new lines underneath pavement without stopping business operations or tearing up parking stalls.
                  </p>
                </div>

                <div>
                  <h3>Underground Acoustic Leak Locating</h3>
                  <p>
                    Subterranean water leaks can silently erode soil beneath foundations. If you notice unusual water bill spikes from Golden State Water or hear hissing inside walls, schedule non-invasive <Link href="/underground-water-leak-detection/">underground water leak detection</Link> to map the leak precisely before digging.
                  </p>
                  <p>
                    For complete supply line modernization, explore our <Link href="/water-meter-to-house-replacement/">meter-to-house water line replacement</Link> services. Learn more about our comprehensive <Link href="/">water service line repair in Gardena</Link> coverage.
                  </p>

                  <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--color-primary-dark)' }}>City Permitting &amp; Inspection</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                      Contractors handle all necessary plumbing permits with the City of Gardena Community Development Department, ensuring every installation meets strict California Building Standards.
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
                <span className="section-tag">Moneta Solutions</span>
                <h2>Water Line Services for Moneta Homes &amp; Businesses</h2>
              </div>

              <div className="grid-3">
                <div className="card">
                  <h3><Link href="/trenchless-water-line-replacement/" style={{ color: 'inherit', textDecoration: 'none' }}>Trenchless Replacement</Link></h3>
                  <p>
                    Bore or pull continuous, corrosion-proof water pipes underneath Moneta driveways and landscaping.
                  </p>
                  <Link href="/trenchless-water-line-replacement/" className="card-link">Trenchless Guide &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/low-water-pressure-repair/" style={{ color: 'inherit', textDecoration: 'none' }}>Low Pressure Diagnostics</Link></h3>
                  <p>
                    Diagnose failed pressure regulator valves (PRV) and internal pipe bottlenecks across South Gardena.
                  </p>
                  <Link href="/low-water-pressure-repair/" className="card-link">Pressure Repair &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/emergency-water-main-repair/" style={{ color: 'inherit', textDecoration: 'none' }}>Emergency Main Repair</Link></h3>
                  <p>
                    24/7 rapid emergency containment for ruptured underground water mains and broken shut-off valves.
                  </p>
                  <Link href="/emergency-water-main-repair/" className="card-link">Emergency Help &rarr;</Link>
                </div>
              </div>

              <div style={{ marginTop: '2rem', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                <h3 style={{ marginTop: 0, fontSize: '1.15rem' }}>Serving Surrounding Gardena Areas</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  We also dispatch licensed plumbing contractors to adjacent communities including <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/hollypark/">Hollypark</Link>, <Link href="/el-camino-village/">El Camino Village</Link>, and <Link href="/downtown-gardena/">Downtown Gardena</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Moneta FAQs</span>
                <h2>Frequently Asked Questions in Moneta</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">Why do Moneta properties often need full water line replacement?</summary>
                  <div className="faq-answer">
                    <p>
                      Moneta is one of the earliest settled communities in the South Bay. Many residential and commercial properties feature original galvanized steel water mains that are now 60 to 80 years old, suffering from severe internal rust restriction and brittle underground joints.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">What pipe material is recommended for Moneta soil?</summary>
                  <div className="faq-answer">
                    <p>
                      High-grade seamless PEX-a and Type K soft copper are the most durable options. Both materials resist acidic minerals in South Bay soils and carry lifespans exceeding 50 years.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">How fast can an emergency crew respond in Moneta?</summary>
                  <div className="faq-answer">
                    <p>
                      Because our network partners operate locally throughout Gardena and the South Bay, emergency crews are dispatched immediately upon calling <a href="tel:3108175933"><strong>(310) 817-5933</strong></a>.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Protect Your Moneta Property With Expert Water Line Care</h2>
              <p>
                Connect with an experienced local water line contractor for fast diagnostics and upfront pricing.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL MONETA DISPATCH: (310) 817-5933</span>
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
