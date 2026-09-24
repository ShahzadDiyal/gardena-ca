import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Hollypark Gardena Water Line Repair & Trenchless Replacement',
  description: 'Water service line repair and leak detection in Hollypark, Gardena CA. Fast local dispatch for trenchless pipe replacement & emergency repairs. Call (310) 817-5933.',
  alternates: {
    canonical: 'http://fixwaterca.online/hollypark/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "http://fixwaterca.online/hollypark/#place",
      "name": "Hollypark, Gardena, CA",
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
      "@id": "http://fixwaterca.online/hollypark/#breadcrumbs",
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
          "name": "Hollypark",
          "item": "http://fixwaterca.online/hollypark/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "http://fixwaterca.online/hollypark/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What causes underground water leaks in Hollypark, Gardena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Hollypark, underground leaks are primarily caused by aging galvanized water lines installed in the 1950s and 1960s, shifting clay soil around Rowley Park, and invasive root systems from mature neighborhood shade trees wrapping around buried pipes."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my Hollypark water line is leaking under the lawn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Signs include damp, spongy patches of grass near your driveway, an unexpected surge in your Golden State Water bill, low whole-house water pressure, and a spinning water meter leak indicator when all indoor fixtures are off."
          }
        }
      ]
    }
  ]
};

export default function HollyparkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Hollypark" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Hollypark &bull; North Gardena</span>
                  <span className="hero-badge">Trenchless Specialists</span>
                  <span className="hero-badge">24/7 Rapid Dispatch</span>
                </div>
                <h1>Hollypark Gardena Water Line Repair &amp; Replacement</h1>
                <p className="hero-subhead">
                  Protect your Hollypark property from underground water damage, high utility bills, and low water pressure. We connect you with certified South Bay plumbing specialists for precision acoustic leak detection, trenchless pipe pulling, and 24/7 emergency water main repairs.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>CALL HOLLYPARK DISPATCH: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Fast Local Arrival &bull; Upfront Written Estimates</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Hollypark Water Solutions</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Trenchless Pipe Pulling:</strong> Preserve driveways near Rowley Park</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Acoustic Leak Detection:</strong> Non-invasive subterranean diagnostics</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Corrosion Replacement:</strong> Seamless PEX-a and Type K copper lines</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Rapid Emergency Dispatch:</strong> Burst main line containment</li>
                </ul>
                <div className="referral-notice">
                  <strong>Local Dispatch:</strong> Matching Hollypark homeowners with licensed plumbing contractors equipped for trenchless water line installation.
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
                  Water Supply Infrastructure in Hollypark, Gardena
                </h2>
                <p className="direct-answer-text">
                  Located in North Gardena adjacent to <strong>Rowley Memorial Park</strong>, Rosecrans Avenue, and Van Ness Avenue, <strong>Hollypark</strong> is an established residential community characterized by quiet, tree-lined streets and well-kept single-family homes. Developed primarily in the 1950s, the subterranean plumbing across Hollypark features aging galvanized iron water service pipes that connect to Golden State Water Company curb meters. Over 60+ years, these buried pipes face severe internal scaling, galvanic corrosion, and root intrusion, resulting in hidden leaks beneath front lawns and concrete walkways.
                </p>
              </div>
            </div>
          </section>

          {/* Neighborhood Challenges */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Hollypark Insights</span>
                <h2>Why Water Lines Fail in Hollypark</h2>
                <p className="section-lead">
                  Specific environmental and structural factors affecting Hollypark homeowners:
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Mature Tree Root Encroachment</h3>
                  <p>
                    Hollypark is admired for its mature shade trees. However, deep root networks actively track underground moisture. When an aging galvanized pipe develops a microscopic weep hole, tree roots quickly surround and crush the pipe, accelerating catastrophic ruptures.
                  </p>
                  <p>
                    Deploying <Link href="/underground-water-leak-detection/">underground water leak detection</Link> allows technicians to pinpoint subterranean breaks under tree canopies without digging random trenches.
                  </p>
                  <h3>Protecting Paved Driveways with Trenchless Technology</h3>
                  <p>
                    Most Hollypark homes have dedicated concrete driveways leading to attached or detached garages. Traditional open trenching requires destroying these concrete slabs. With <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link>, contractors bore underneath the driveway, leaving your concrete completely untouched.
                  </p>
                </div>

                <div>
                  <h3>Restoring Household Water Pressure</h3>
                  <p>
                    If your Hollypark home suffers from weak shower spray when the dishwasher is running, internal rust accumulation in your main line is likely choking flow volume. Discover how our network resolves <Link href="/low-water-pressure-repair/">low water pressure in Gardena</Link>.
                  </p>
                  <p>
                    Upgrading the full line via <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> guarantees clean, safe, and pressurized water for decades. For broader city coverage, explore our complete <Link href="/">Gardena water service line repair</Link> dispatch network.
                  </p>

                  <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--color-primary-dark)' }}>Fast Emergency Dispatch</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                      If water is actively bubbling up onto your Hollypark lawn or driveway, call our helpline immediately at <a href="tel:3108175933"><strong>(310) 817-5933</strong></a> for 24/7 <Link href="/emergency-water-main-repair/">emergency water main repair</Link>.
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
                <span className="section-tag">Specialized Services</span>
                <h2>Water Line Solutions for Hollypark Residents</h2>
              </div>

              <div className="grid-3">
                <div className="card">
                  <h3><Link href="/trenchless-water-line-replacement/" style={{ color: 'inherit', textDecoration: 'none' }}>Trenchless Replacement</Link></h3>
                  <p>
                    Install continuous PEX-a or Type K copper without tearing up your lawn or concrete driveway.
                  </p>
                  <Link href="/trenchless-water-line-replacement/" className="card-link">Trenchless Guide &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/water-meter-to-house-replacement/" style={{ color: 'inherit', textDecoration: 'none' }}>Meter-to-House Renewal</Link></h3>
                  <p>
                    Complete private supply line replacement from the Golden State Water curb box to the house shutoff.
                  </p>
                  <Link href="/water-meter-to-house-replacement/" className="card-link">Full Replacement &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/underground-water-leak-detection/" style={{ color: 'inherit', textDecoration: 'none' }}>Acoustic Leak Detection</Link></h3>
                  <p>
                    Locate hidden subterranean leaks beneath soil and concrete slabs using non-destructive sound correlators.
                  </p>
                  <Link href="/underground-water-leak-detection/" className="card-link">Leak Detection &rarr;</Link>
                </div>
              </div>

              <div style={{ marginTop: '2rem', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                <h3 style={{ marginTop: 0, fontSize: '1.15rem' }}>Serving Surrounding Gardena Communities</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  We also dispatch licensed water line contractors to nearby neighborhoods including <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/moneta/">Moneta</Link>, and <Link href="/el-camino-village/">El Camino Village</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Hollypark FAQs</span>
                <h2>Frequently Asked Questions in Hollypark</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">What causes underground water leaks in Hollypark, Gardena?</summary>
                  <div className="faq-answer">
                    <p>
                      In Hollypark, underground leaks are primarily caused by aging galvanized water lines installed in the 1950s and 1960s, shifting clay soil around Rowley Park, and invasive root systems from mature neighborhood shade trees wrapping around buried pipes.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Can I replace my water service line in one day?</summary>
                  <div className="faq-answer">
                    <p>
                      Yes. Using trenchless pipe-pulling methods, most Hollypark residential water line replacements are completed in 4 to 8 hours with same-day water restoration.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Who handles the city permits for water line excavation?</summary>
                  <div className="faq-answer">
                    <p>
                      The independent, licensed plumbing contractors in our network handle all permit applications and inspections through the City of Gardena Community Development Department.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Need Reliable Water Line Service in Hollypark?</h2>
              <p>
                Connect with a local licensed contractor for fast diagnostics and upfront pricing today.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL HOLLYPARK DISPATCH: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Fast Response in Gardena, CA</span>
                </a>
                <Link href="/contact/" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '2px solid #FFFFFF', padding: '1rem 1.75rem', borderRadius: 'var(--radius-md)', fontWeight: 700, textDecoration: 'none' }}>
                  Request Assessment &rarr;
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
