import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'El Camino Village Gardena Water Line Repair & Trenchless Replacement',
  description: 'Water service line repair and trenchless pipe replacement in El Camino Village, Gardena CA. Fast local dispatch for leak detection & main line renewals. Call (310) 817-5933.',
  alternates: {
    canonical: 'http://fixwaterca.online/el-camino-village/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "http://fixwaterca.online/el-camino-village/#place",
      "name": "El Camino Village, Gardena, CA",
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
      "@id": "http://fixwaterca.online/el-camino-village/#breadcrumbs",
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
          "name": "El Camino Village",
          "item": "http://fixwaterca.online/el-camino-village/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "http://fixwaterca.online/el-camino-village/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do homes in El Camino Village experience water service line leaks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most homes in El Camino Village were built in the late 1940s and 1950s with original galvanized steel plumbing. Decades of mineral exposure and shifting South Bay soil have caused these pipes to rust from the inside out, leading to pinhole leaks and flow restrictions."
          }
        },
        {
          "@type": "Question",
          "name": "Can a new water line be installed under my concrete driveway in El Camino Village?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Using trenchless pipe-pulling or horizontal directional boring, contractors can install a seamless, continuous PEX-a or copper pipe under your driveway without cutting, jackhammering, or repaving the concrete."
          }
        }
      ]
    }
  ]
};

export default function ElCaminoVillagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="El Camino Village" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">El Camino Village &bull; West Gardena</span>
                  <span className="hero-badge">No-Dig Technology</span>
                  <span className="hero-badge">Local Plumbing Dispatch</span>
                </div>
                <h1>El Camino Village Gardena Water Line Repair &amp; Replacement</h1>
                <p className="hero-subhead">
                  Experiencing a subterranean pipe leak, low water pressure, or aging galvanized plumbing in El Camino Village? We connect you with licensed South Bay plumbing specialists for precision acoustic leak detection, trenchless pipe replacement, and complete whole-line renewals.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>CALL EL CAMINO VILLAGE DISPATCH: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Immediate Local Connection &bull; Free Upfront Estimates</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>El Camino Village Services</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Trenchless Pipe Pulling:</strong> Preserve driveways near Crenshaw Blvd</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Meter-to-House Renewal:</strong> Upgrade to 1&quot; high-flow PEX-a or copper</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Acoustic Leak Detection:</strong> Pinpoint breaks without lawn digging</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Emergency Response:</strong> 24/7 dispatch for burst water mains</li>
                </ul>
                <div className="referral-notice">
                  <strong>Local Dispatch:</strong> Matching El Camino Village property owners with licensed South Bay plumbing contractors.
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
                  Water Supply Infrastructure in El Camino Village
                </h2>
                <p className="direct-answer-text">
                  Bordering Crenshaw Boulevard, Redondo Beach Boulevard, and adjacent to <strong>El Camino College</strong>, <strong>El Camino Village</strong> is a post-WWII residential master-planned subdivision featuring classic mid-century ranch architecture. Built primarily between 1946 and 1955, these residences were constructed with original galvanized steel main water service lines connected to street-side water meters. Having surpassed their 50-year design lifespan, these lines commonly exhibit severe internal scale, weak flow volume, and recurring underground pinhole leaks.
                </p>
              </div>
            </div>
          </section>

          {/* Neighborhood Challenges */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">West Gardena Focus</span>
                <h2>Water Service Line Issues in El Camino Village</h2>
                <p className="section-lead">
                  Common plumbing challenges faced by El Camino Village property owners:
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Galvanized Pipe Aging &amp; Low Pressure</h3>
                  <p>
                    In many El Camino Village residences, the original 3/4-inch galvanized supply line has narrowed significantly due to rust accumulation. This creates a severe restriction where running a washing machine or irrigation system causes showers to lose all pressure.
                  </p>
                  <p>
                    Upgrading through <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> restores full water pressure throughout the property. Learn more about diagnosing flow bottlenecks with our <Link href="/low-water-pressure-repair/">low water pressure repair guide</Link>.
                  </p>
                  <h3>Protecting Poured Concrete Driveways</h3>
                  <p>
                    A signature feature of El Camino Village homes is the extended concrete driveway leading to rear garages. Conventional open-trench plumbing would destroy these paved surfaces. By using <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link>, contractors bore directly beneath the driveway, leaving the concrete completely intact.
                  </p>
                </div>

                <div>
                  <h3>Whole-Line Meter-to-House Replacement</h3>
                  <p>
                    When an underground line has leaked multiple times, temporary spot clamps are no longer economical. Replacing the complete run from the curb meter to the house with seamless PEX-a or Type K copper provides 50+ years of worry-free performance. Explore our <Link href="/water-meter-to-house-replacement/">meter-to-house water line replacement</Link> options.
                  </p>
                  <p>
                    If your yard has soggy soil or your water bill has skyrocketed, schedule non-destructive <Link href="/underground-water-leak-detection/">underground water leak detection</Link>. For complete service coverage, see our <Link href="/">water service line repair in Gardena</Link> main page.
                  </p>

                  <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--color-primary-dark)' }}>Fast Emergency Dispatch</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                      Active yard flooding or broken main valves in El Camino Village receive immediate priority dispatch through our 24/7 <Link href="/emergency-water-main-repair/">emergency water main repair service</Link>.
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
                <span className="section-tag">Available Services</span>
                <h2>Water Line Solutions for El Camino Village</h2>
              </div>

              <div className="grid-3">
                <div className="card">
                  <h3><Link href="/trenchless-water-line-replacement/" style={{ color: 'inherit', textDecoration: 'none' }}>Trenchless Replacement</Link></h3>
                  <p>
                    Install continuous PEX-a or copper piping beneath driveways and lawns without open trenches.
                  </p>
                  <Link href="/trenchless-water-line-replacement/" className="card-link">Trenchless Guide &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/water-meter-to-house-replacement/" style={{ color: 'inherit', textDecoration: 'none' }}>Meter-to-House Renewal</Link></h3>
                  <p>
                    Complete private supply line replacement from the curb meter box to the house shutoff.
                  </p>
                  <Link href="/water-meter-to-house-replacement/" className="card-link">Full Replacement &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/underground-water-leak-detection/" style={{ color: 'inherit', textDecoration: 'none' }}>Acoustic Leak Detection</Link></h3>
                  <p>
                    Pinpoint hidden subterranean pipe leaks beneath lawns and concrete slabs with acoustic sensors.
                  </p>
                  <Link href="/underground-water-leak-detection/" className="card-link">Leak Detection &rarr;</Link>
                </div>
              </div>

              <div style={{ marginTop: '2rem', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                <h3 style={{ marginTop: 0, fontSize: '1.15rem' }}>Serving Surrounding South Bay Areas</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  Our network also provides rapid dispatch to neighboring communities including <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/hollypark/">Hollypark</Link>, <Link href="/moneta/">Moneta</Link>, and <Link href="/downtown-gardena/">Downtown Gardena</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Neighborhood FAQs</span>
                <h2>Frequently Asked Questions in El Camino Village</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">Why do homes in El Camino Village experience water service line leaks?</summary>
                  <div className="faq-answer">
                    <p>
                      Most homes in El Camino Village were built in the late 1940s and 1950s with original galvanized steel plumbing. Decades of mineral exposure and shifting South Bay soil have caused these pipes to rust from the inside out, leading to pinhole leaks and flow restrictions.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Can a new water line be installed under my concrete driveway?</summary>
                  <div className="faq-answer">
                    <p>
                      Yes. Using trenchless pipe-pulling or horizontal directional boring, contractors can install a seamless, continuous PEX-a or copper pipe under your driveway without cutting, jackhammering, or repaving the concrete.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">How quickly can a contractor evaluate my water line in El Camino Village?</summary>
                  <div className="faq-answer">
                    <p>
                      Technicians are dispatched locally across Gardena and can typically perform an on-site evaluation the same day you call <a href="tel:3108175933"><strong>(310) 817-5933</strong></a>.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Upgrade Your El Camino Village Water Line Today</h2>
              <p>
                Connect with an experienced local plumbing contractor for fast diagnostics and upfront written pricing.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL DISPATCH: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Serving El Camino Village &amp; Gardena, CA</span>
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
