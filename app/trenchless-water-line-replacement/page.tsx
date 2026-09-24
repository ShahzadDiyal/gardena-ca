import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Trenchless Water Line Replacement Gardena CA | No-Dig Pipe Pulling',
  description: 'Replace broken or aging underground water lines in Gardena, CA without digging up your driveway or lawn. Fast trenchless pipe pulling & boring. Call (310) 817-5933.',
  alternates: {
    canonical: 'http://fixwaterca.online/trenchless-water-line-replacement/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "http://fixwaterca.online/trenchless-water-line-replacement/#service",
      "name": "Trenchless Water Line Replacement",
      "serviceType": "Trenchless Water Pipe Replacement",
      "description": "Minimally invasive underground water line replacement using hydraulic pipe pulling and directional boring in Gardena, CA.",
      "provider": {
        "@type": "Organization",
        "name": "Gardena Water Line Pros",
        "url": "http://fixwaterca.online/",
        "telephone": "+1-310-817-5933"
      },
      "areaServed": {
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
      "@id": "http://fixwaterca.online/trenchless-water-line-replacement/#breadcrumbs",
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
          "name": "Trenchless Water Line Replacement",
          "item": "http://fixwaterca.online/trenchless-water-line-replacement/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "http://fixwaterca.online/trenchless-water-line-replacement/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does trenchless water line replacement work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trenchless replacement uses hydraulic pipe-pulling or horizontal boring equipment. Technicians dig just two small access holes—one at the city water meter and one at the home's foundation. A high-strength cable pulls a splitting head along with a new continuous PEX-a or copper pipe directly through the old deteriorated pipe path."
          }
        },
        {
          "@type": "Question",
          "name": "Will trenchless replacement save my concrete driveway in Gardena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Because the new water line is pulled underground through the existing channel or bored beneath the slab, there is no need to saw-cut, excavate, or repave concrete driveways, brick walkways, or landscaped turf."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a trenchless water line replacement take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential trenchless installations in Gardena are completed within 4 to 8 hours. Water service is typically shut off only during the pipe transition, restoring clean water the very same day."
          }
        }
      ]
    }
  ]
};

export default function TrenchlessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Trenchless Water Line Replacement" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">No-Dig Technology</span>
                  <span className="hero-badge">Same-Day Water Restored</span>
                  <span className="hero-badge">50+ Year Lifespan</span>
                </div>
                <h1>Trenchless Water Line Replacement in Gardena, CA</h1>
                <p className="hero-subhead">
                  Upgrade your failing underground water main without destroying your yard, driveway, or patio. We connect you with South Bay trenchless plumbing specialists equipped for seamless pipe pulling and horizontal boring.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>GET A TRENCHLESS QUOTE: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Free Consultation &bull; Licensed Local Contractors</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Why Choose Trenchless?</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Preserves Concrete:</strong> No cutting or repaving expensive driveways</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Protects Landscaping:</strong> Leaves mature trees, lawns, and gardens intact</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Fast Completion:</strong> Completed in a single day with minimal downtime</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Superior Durability:</strong> Seamless PEX-a or Type K copper pipe</li>
                </ul>
                <div className="referral-notice">
                  <strong>Referral Service:</strong> We match you with vetted local plumbing contractors specialized in modern trenchless equipment.
                </div>
              </div>
            </div>
          </section>

          {/* Direct Answer Box */}
          <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div className="container">
              <div className="direct-answer-box">
                <h2>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0284C7" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  What Is Trenchless Water Line Replacement?
                </h2>
                <p className="direct-answer-text">
                  <strong>Trenchless water line replacement</strong> is an advanced subterranean plumbing method that installs a new, continuous water supply line between the municipal water meter and the home without excavating an open trench across your property. By utilizing hydraulic cable pullers or horizontal pneumatic boring tools, contractors feed high-strength, corrosion-proof PEX-a or copper piping through the existing underground channel using only two compact access points.
                </p>
              </div>
            </div>
          </section>

          {/* Trenchless Diagram Section */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">How It Works</span>
                <h2>The Trenchless Pipe Pulling Process</h2>
                <p className="section-lead">
                  Traditional open-trench replacement causes immense collateral damage to property improvements. Trenchless technology eliminates that destruction:
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
                <Image
                  src="/images/trenchless-diagram.svg"
                  alt="Diagram of trenchless water line replacement showing pipe puller under driveway"
                  width={800}
                  height={380}
                  style={{ margin: '0 auto', width: '100%', height: 'auto' }}
                />
              </div>

              <div className="process-grid" style={{ marginTop: '2.5rem' }}>
                <div className="process-step">
                  <div className="step-num">01</div>
                  <h3>Utility Locating &amp; Access Pits</h3>
                  <p>
                    After marking underground utilities via DigAlert (811), technicians dig two small excavation pits: one near the curb water meter and one at the exterior building shut-off valve.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">02</div>
                  <h3>Cable Threading &amp; Splitting</h3>
                  <p>
                    A high-tensile aircraft steel cable is fed through the old, corroded pipe. A hardened splitting head is attached to the leading edge of the new pipe.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">03</div>
                  <h3>Hydraulic Pulling &amp; Placement</h3>
                  <p>
                    A powerful hydraulic pulling unit pulls the new continuous pipe directly through the old line, bursting or sliding past the old pipe while installing the new line simultaneously.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">04</div>
                  <h3>Testing &amp; Code Inspection</h3>
                  <p>
                    The new line is connected to the meter and house valve, pressurized, and inspected in full accordance with City of Gardena plumbing safety codes before the small pits are backfilled.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Gardena Homeowners Need Trenchless */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Gardena Applications</span>
                <h2>Why Trenchless Is Ideal for Gardena Properties</h2>
                <p className="section-lead">
                  Gardena&apos;s residential landscape presents unique structural factors where trenchless replacement delivers maximum financial and aesthetic savings.
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Preserving South Bay Driveways &amp; Hardscaping</h3>
                  <p>
                    In neighborhoods like <Link href="/strawberry-park/">Strawberry Park</Link> and <Link href="/moneta/">Moneta</Link>, water service lines frequently run directly underneath poured concrete driveways, flagstone walkways, or carport slabs. Conventional trenching requires concrete cutting, jackhammering, and costly masonry restoration that can easily add thousands of dollars to your total bill.
                  </p>
                  <p>
                    By connecting with a local specialist through our comprehensive <Link href="/">water service line repair in Gardena</Link> network, you can replace the failing line beneath hardscape with zero surface disruption.
                  </p>
                  <h3>Overcoming Decades of Galvanized Pipe Corrosion</h3>
                  <p>
                    If your home was constructed before 1975, your current main line is likely threaded galvanized steel. Over decades of contact with Gardena&apos;s mineral-rich water supply, these pipes develop heavy interior scale that restricts flow and produces pinhole leaks. Learn more about full <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> solutions.
                  </p>
                </div>

                <div>
                  <h3>Signs You Need Immediate Water Line Replacement</h3>
                  <p>
                    Spot repairs on aging pipes often lead to repeated failures. It is time to consider a complete trenchless replacement if you notice:
                  </p>
                  <ul>
                    <li>Recurring subterranean leaks within 12 to 24 months</li>
                    <li>Significant, unexplained spikes in your Golden State Water utility bill</li>
                    <li>Persistent low water pressure across all household plumbing fixtures (explore our <Link href="/low-water-pressure-repair/">low water pressure repair</Link> guide)</li>
                    <li>Discolored, brownish, or metallic-tasting tap water during morning use</li>
                    <li>Visible ground sinking or wet soil patches near the curb meter</li>
                  </ul>
                  <p>
                    When dealing with an active blowout or water bubbling to the surface, prompt action is critical. We also provide immediate dispatch for <Link href="/emergency-water-main-repair/">emergency water main repair</Link> across the South Bay.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Considerations */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Investment Guide</span>
                <h2>Understanding Trenchless Replacement Costs in Gardena</h2>
                <p className="section-lead">
                  While every property is unique, understanding key cost drivers helps you evaluate written contractor quotes accurately.
                </p>
              </div>

              <div className="grid-3">
                <div className="card">
                  <h3>Total Distance &amp; Depth</h3>
                  <p>
                    The linear footage from the city meter to your foundation shut-off valve is the primary variable. Most Gardena setback distances range between 30 and 70 feet, typically buried 24 to 36 inches deep.
                  </p>
                </div>

                <div className="card">
                  <h3>Pipe Material Selection</h3>
                  <p>
                    Contractors generally offer high-density seamless <strong>PEX-a (cross-linked polyethylene)</strong> or <strong>Type K Copper tubing</strong>. Both materials offer exceptional resistance to South Bay soil corrosion.
                  </p>
                </div>

                <div className="card">
                  <h3>Permits &amp; Municipal Inspections</h3>
                  <p>
                    All complete line replacements require building and safety permits from the City of Gardena. The independent contractor manages filing, fees, and final inspector sign-offs.
                  </p>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginTop: '2rem', textAlign: 'center' }}>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Get an accurate, transparent on-site assessment for your property.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                  Call our helpline to schedule an inspection with a licensed Gardena trenchless technician.
                </p>
                <a href="tel:3108175933" className="btn-cta-large" style={{ display: 'inline-flex', maxWidth: '400px', margin: '0 auto' }}>
                  <span>CALL FOR ESTIMATE: (310) 817-5933</span>
                </a>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Got Questions?</span>
                <h2>Frequently Asked Questions About Trenchless Replacement</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">How does trenchless water line replacement work?</summary>
                  <div className="faq-answer">
                    <p>
                      Trenchless replacement uses hydraulic pipe-pulling or horizontal boring equipment. Technicians dig just two small access holes—one at the city water meter and one at the home&apos;s foundation. A high-strength cable pulls a splitting head along with a new continuous PEX-a or copper pipe directly through the old deteriorated pipe path.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Will trenchless replacement save my concrete driveway in Gardena?</summary>
                  <div className="faq-answer">
                    <p>
                      Yes. Because the new water line is pulled underground through the existing channel or bored beneath the slab, there is no need to saw-cut, excavate, or repave concrete driveways, brick walkways, or landscaped turf in neighborhoods like <Link href="/hollypark/">Hollypark</Link> or <Link href="/el-camino-village/">El Camino Village</Link>.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">How long does a trenchless installation take?</summary>
                  <div className="faq-answer">
                    <p>
                      Most residential trenchless installations in Gardena are completed in 4 to 8 hours. Water service is typically shut off only during the pipe transition, restoring clean, pressurized water the very same day.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">What pipe material is best for Gardena soil?</summary>
                  <div className="faq-answer">
                    <p>
                      Continuous Type K soft copper and municipal-grade PEX-a are the top choices. Both resist the acidic minerals and expansive clay soils of the South Bay, providing over 50 years of leak-free service. For complete line renewals, explore our <Link href="/water-meter-to-house-replacement/">meter-to-house pipe replacement</Link> services.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Upgrade Your Gardena Water Main With Zero Yard Damage</h2>
              <p>
                Connect with a local licensed trenchless pipe specialist today for fast dispatch and upfront pricing.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL DISPATCH: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Fast Response Across Gardena, CA</span>
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
