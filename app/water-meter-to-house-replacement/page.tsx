import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Water Meter to House Pipe Replacement Gardena CA | Full Line Renewal',
  description: 'Replace your entire private water service line from the curb meter to your house in Gardena, CA. Long-lasting PEX-a & copper with trenchless methods. Call (310) 817-5933.',
  alternates: {
    canonical: 'https://fixwaterca.online/water-meter-to-house-replacement/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://fixwaterca.online/water-meter-to-house-replacement/#service",
      "name": "Water Meter to House Pipe Replacement",
      "serviceType": "Whole-Line Water Service Replacement",
      "description": "Full replacement of private underground water service pipes from the city meter to the residential foundation shutoff in Gardena, CA.",
      "provider": {
        "@type": "Organization",
        "name": "Gardena Water Line Pros",
        "url": "https://fixwaterca.online/",
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
      "@id": "https://fixwaterca.online/water-meter-to-house-replacement/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://fixwaterca.online/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Water Meter to House Replacement",
          "item": "https://fixwaterca.online/water-meter-to-house-replacement/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://fixwaterca.online/water-meter-to-house-replacement/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When should I replace the entire line instead of doing a spot repair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your water service line has leaked multiple times, is over 40 years old, is made of galvanized steel, or has suffered severe corrosion, doing another spot patch is throwing money away. A full whole-line replacement eliminates recurring repair costs and provides a 50+ year worry-free system."
          }
        },
        {
          "@type": "Question",
          "name": "What pipe size should be installed from the meter to the house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While older homes often had 1/2-inch or 3/4-inch supply lines, modern plumbing codes and higher fixture counts typically call for a 1-inch or 1-1/4-inch continuous line. This ensures robust water pressure even when multiple bathrooms, appliances, and irrigation zones operate simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "Are permits required in Gardena for meter-to-house replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Complete water service line replacements require a plumbing permit and final inspection from the City of Gardena Community Development Department. Licensed contractors handle all permit filing and inspections on your behalf."
          }
        }
      ]
    }
  ]
};

export default function MeterToHousePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Water Meter to House Replacement" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Whole-Line Replacement</span>
                  <span className="hero-badge">Permanent Solution</span>
                  <span className="hero-badge">50+ Year Reliability</span>
                </div>
                <h1>Water Meter to House Pipe Replacement in Gardena, CA</h1>
                <p className="hero-subhead">
                  Tired of recurring underground pipe leaks, muddy lawn patches, and low water pressure? A complete whole-line replacement from the city water meter to your home foundation provides permanent peace of mind. Connect with licensed South Bay pipe installation contractors today.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>SCHEDULE WHOLE-LINE ESTIMATE: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Free On-Site Assessment &bull; Upfront Pricing</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Why Replace the Entire Line?</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>End Recurring Leaks:</strong> Stop paying for repeated emergency patch jobs</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Increased Pipe Diameter:</strong> Upgrade to 1&quot; or 1-1/4&quot; for modern high flow</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Trenchless Methods:</strong> Pull new pipe beneath driveways with zero trenches</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Permitted &amp; Inspected:</strong> Fully compliant with City of Gardena codes</li>
                </ul>
                <div className="referral-notice">
                  <strong>Referral Dispatch:</strong> We match you with vetted plumbing contractors specializing in full water service line installations.
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
                  What Does a Full Meter-to-House Water Line Replacement Involve?
                </h2>
                <p className="direct-answer-text">
                  A <strong>meter-to-house water line replacement</strong> involves installing a brand-new, continuous, high-grade water supply pipe (such as seamless PEX-a or Type K soft copper) from the downstream discharge side of the Golden State Water meter pit at your street curb directly to your home&apos;s exterior main shut-off valve and pressure regulator. By replacing the entire private run rather than performing temporary spot clamps, you eliminate all historical leak points, resolve underground flow bottlenecks, and safeguard your property against future subterranean blowouts.
                </p>
              </div>
            </div>
          </section>

          {/* Scope & Benefits */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Long-Term Investment</span>
                <h2>Spot Repair vs. Complete Main Line Replacement</h2>
                <p className="section-lead">
                  When an underground water line fails, homeowners must weigh a short-term spot patch against a permanent whole-line replacement:
                </p>
              </div>

              <div className="grid-2">
                <div className="card">
                  <h3 style={{ color: '#991B1B' }}>The Problem with Spot Repairs on Old Pipes</h3>
                  <p>
                    A spot repair only fixes the single point that ruptured today. In older homes across <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/moneta/">Moneta</Link>, and <Link href="/hollypark/">Hollypark</Link>, if the pipe failed from corrosion, the rest of the underground pipe is equally thin and rusted.
                  </p>
                  <p>
                    Clamping an old galvanized line often stresses adjacent joints, causing a secondary break weeks or months later. Repeated excavation, landscaping repairs, and emergency service calls quickly cost more than a single whole-line replacement.
                  </p>
                </div>

                <div className="card">
                  <h3 style={{ color: '#166534' }}>The Advantage of Full Replacement</h3>
                  <p>
                    Replacing the entire line with modern continuous piping eliminates every joint beneath your lawn and driveway. With <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link>, the new line is pulled beneath the ground in just one day.
                  </p>
                  <p>
                    Furthermore, upgrading from an obsolete 1/2-inch or 3/4-inch line to a modern 1-inch line delivers exceptional water volume, resolving <Link href="/low-water-pressure-repair/">low water pressure issues</Link> permanently.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-Step Replacement Workflow */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Installation Workflow</span>
                <h2>How Contractors Execute a Complete Line Replacement</h2>
              </div>

              <div className="process-grid">
                <div className="process-step">
                  <div className="step-num">01</div>
                  <h3>Site Survey &amp; Utility Mark-Out</h3>
                  <p>
                    The contractor assesses the pipe distance, ground elevation, and driveway crossings, and coordinates with DigAlert (811) to locate all subterranean gas and electrical lines.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">02</div>
                  <h3>Permit Acquisition</h3>
                  <p>
                    The licensed plumbing contractor files for all mandatory City of Gardena Community Development plumbing permits to ensure full municipal code compliance.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">03</div>
                  <h3>Trenchless Pipe Installation</h3>
                  <p>
                    Two small access pits are excavated at the meter and house foundation. A continuous, seamless PEX-a or Type K copper pipe is pulled directly through the underground path.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">04</div>
                  <h3>Valve Tie-In &amp; Inspection</h3>
                  <p>
                    The new line is connected to a new lead-free ball valve and pressure regulator, pressure-tested under city inspector oversight, and backfilled cleanly.
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                  Learn more about our comprehensive <Link href="/">water service line repair in Gardena</Link> services.
                </p>
                <a href="tel:3108175933" className="btn-cta-large" style={{ display: 'inline-flex', maxWidth: '450px', margin: '0 auto' }}>
                  <span>CALL DISPATCH: (310) 817-5933</span>
                </a>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Common Inquiries</span>
                <h2>Meter-to-House Replacement FAQs</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">How long will water be shut off during the replacement?</summary>
                  <div className="faq-answer">
                    <p>
                      Water is typically shut off only during the final tie-in phase, usually lasting between 2 and 4 hours. Most homeowners have full water service restored by late afternoon in neighborhoods like <Link href="/el-camino-village/">El Camino Village</Link> and <Link href="/downtown-gardena/">Downtown Gardena</Link>.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">What pipe material is best for long-term reliability?</summary>
                  <div className="faq-answer">
                    <p>
                      Municipal-grade seamless PEX-a and Type K soft copper are the gold standards. Both provide superior resistance to soil shifting, chemical corrosion, and root intrusion, and carry manufacturer lifespans exceeding 50 years. Discover more in our <Link href="/galvanized-pipe-replacement/">galvanized pipe upgrade guide</Link>.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">What if I have an active emergency water leak right now?</summary>
                  <div className="faq-answer">
                    <p>
                      If water is actively bubbling up in your yard or entering your foundation, shut off the curb meter immediately and call our 24/7 hotline at <a href="tel:3108175933">(310) 817-5933</a> for emergency dispatch through our <Link href="/emergency-water-main-repair/">emergency water main repair service</Link>.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Secure 50+ Years of Trouble-Free Water Delivery</h2>
              <p>
                Connect with an experienced Gardena water line contractor for an on-site consultation and clear written estimate.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL NOW: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Fast Dispatch Across Gardena, CA</span>
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
