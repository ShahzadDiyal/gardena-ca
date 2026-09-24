import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Galvanized & Lead Water Pipe Replacement Gardena CA | Copper & PEX',
  description: 'Replace aging, rusty galvanized water service lines in Gardena, CA. Upgrade to modern Type K copper or PEX-a for clean water & full pressure. Call (310) 817-5933.',
  alternates: {
    canonical: 'http://fixwaterca.online/galvanized-pipe-replacement/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "http://fixwaterca.online/galvanized-pipe-replacement/#service",
      "name": "Galvanized & Lead Water Pipe Replacement",
      "serviceType": "Main Water Supply Line Repiping",
      "description": "Replacement of degraded galvanized steel and lead water supply lines with modern PEX-a and copper in Gardena, CA.",
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
      "@id": "http://fixwaterca.online/galvanized-pipe-replacement/#breadcrumbs",
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
          "name": "Galvanized Pipe Replacement",
          "item": "http://fixwaterca.online/galvanized-pipe-replacement/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "http://fixwaterca.online/galvanized-pipe-replacement/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long do galvanized water pipes last in Gardena, CA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Galvanized steel pipes typically have a functional lifespan of 40 to 60 years. In Gardena, many homes built during the mid-20th century are well past this threshold, meaning original lines are severely compromised by internal rust tuberculation, low flow rates, and fragile joints."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my tap water look rusty in the morning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When water sits overnight inside corroded galvanized steel pipes, iron oxide (rust) leaches into the water. This causes brown, yellow, or reddish discoloration and a distinct metallic taste when faucets are first opened."
          }
        },
        {
          "@type": "Question",
          "name": "Which replacement pipe material is best: Copper or PEX-a?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both materials are code-approved in Gardena. Type K soft copper offers exceptional strength and natural antimicrobial properties, while seamless PEX-a offers flexibility, freeze resilience, complete immunity to mineral scaling, and easy installation via trenchless pipe pulling."
          }
        }
      ]
    }
  ]
};

export default function GalvanizedPipePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Galvanized &amp; Lead Pipe Replacement" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">PEX-a &amp; Copper Upgrades</span>
                  <span className="hero-badge">Pure Clean Water</span>
                  <span className="hero-badge">Gardena Mid-Century Homes</span>
                </div>
                <h1>Galvanized &amp; Lead Pipe Replacement in Gardena, CA</h1>
                <p className="hero-subhead">
                  Are aging, corroded galvanized iron water pipes restricting your household water flow and tinting your drinking water? Connect with licensed South Bay pipe specialists to upgrade your underground main supply line to modern, non-corroding Type K copper or PEX-a.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>SCHEDULE PIPE ASSESSMENT: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Upfront Quotes &bull; Code-Compliant Permits</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Signs of Failing Galvanized Pipes</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Rusty / Discolored Water:</strong> Brown or yellow tint in morning water</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Choked Water Volume:</strong> Pressure drops when multiple fixtures run</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Metallic Aftertaste:</strong> Bitter or iron taste in tap water</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Frequent Underground Leaks:</strong> Rust spots flaking open under soil</li>
                </ul>
                <div className="referral-notice">
                  <strong>Referral Dispatch:</strong> We connect Gardena property owners with licensed plumbing contractors experienced in complete underground pipe replacement.
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
                  Why Must Aging Galvanized Water Pipes Be Replaced?
                </h2>
                <p className="direct-answer-text">
                  <strong>Galvanized iron water pipes</strong> were coated with zinc during manufacturing to deter corrosion. After 40 to 50 years of municipal water contact, this internal zinc layer completely erodes, causing the underlying raw iron to oxidize. This leads to internal rust buildup (tuberculation) that narrows a 1-inch pipe down to the diameter of a pencil, causing severe water flow restrictions, rusty water, and brittle pipe walls prone to catastrophic underground blowouts. Upgrading to corrosion-proof Type K copper or PEX-a restores full water flow and ensures clean, safe potable water for 50+ years.
                </p>
              </div>
            </div>
          </section>

          {/* Pipe Materials Comparison */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Modern Materials</span>
                <h2>Comparing Modern Water Line Materials</h2>
                <p className="section-lead">
                  Licensed contractors in our network install code-approved materials engineered to endure South Bay soil chemistry:
                </p>
              </div>

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Material</th>
                      <th scope="col">Corrosion Resistance</th>
                      <th scope="col">Lifespan</th>
                      <th scope="col">Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>PEX-a (Cross-Linked Polyethylene)</strong></td>
                      <td>100% immune to rust, scale, and mineral calcification.</td>
                      <td>70+ Years</td>
                      <td>Ideal for <Link href="/trenchless-water-line-replacement/">trenchless pipe pulling</Link> beneath driveways and established landscaping.</td>
                    </tr>
                    <tr>
                      <td><strong>Type K Seamless Soft Copper</strong></td>
                      <td>Heavy-duty wall thickness, high resistance to soil minerals.</td>
                      <td>50 to 75 Years</td>
                      <td>Traditional choice for premium rigidity and direct underground burial.</td>
                    </tr>
                    <tr>
                      <td><strong>Old Galvanized Iron (Existing)</strong></td>
                      <td>Vulnerable; heavy interior rust and external corrosion.</td>
                      <td>40 to 60 Years (Expired)</td>
                      <td>Obsolete standard. Requires immediate replacement when leaking or clogged.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Gardena Neighborhood Context */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Local Relevance</span>
                <h2>Galvanized Plumbing in Gardena&apos;s Historic Subdivisions</h2>
                <p className="section-lead">
                  Gardena&apos;s residential building timeline explains why so many local homeowners are experiencing pipe failures today.
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Post-War Suburban Boom (1940s–1960s)</h3>
                  <p>
                    Neighborhoods like <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/moneta/">Moneta</Link>, and <Link href="/hollypark/">Hollypark</Link> were developed in the decades following World War II. During this era, galvanized steel was the standard material specified in Southern California municipal building codes.
                  </p>
                  <p>
                    Because these systems are now 60 to 80 years old, they have exceeded their engineered lifespan. Homeowners frequently mistake low water pressure for a problem with Golden State Water utility delivery, when the true bottleneck is internal rust choking their private line. Discover how our specialists handle <Link href="/low-water-pressure-repair/">low water pressure diagnostics in Gardena</Link>.
                  </p>
                  <h3>Why Spot Repairs Fail on Old Galvanized Lines</h3>
                  <p>
                    Attempting to clamp or solder a rusted galvanized pipe rarely holds. The mechanical threading is often paper-thin, and disturbing the pipe during spot excavation can cause new breaks further along the line.
                  </p>
                </div>

                <div>
                  <h3>The Solution: Whole-Line Trenchless Renewal</h3>
                  <p>
                    Instead of paying for recurring patch jobs, contractors replace the entire pipe run from the sidewalk meter to the house foundation in a single day using modern pipe pullers. Learn more about complete <Link href="/water-meter-to-house-replacement/">meter-to-house replacement</Link>.
                  </p>
                  <p>
                    If your pipe has already ruptured or is creating a wet sinkhole in your lawn, our network also provides immediate 24/7 dispatch for <Link href="/emergency-water-main-repair/">emergency water main repair</Link>.
                  </p>

                  <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--color-primary-dark)' }}>Safe Drinking Water &amp; Lead Compliance</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                      While pure lead service lines are rare in Gardena, older galvanized systems frequently utilized lead gooseneck connectors or lead-bearing solder. Upgrading to NSF-61 certified PEX-a or lead-free Type K copper ensures pure, healthy drinking water for your family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-Step Replacement Process */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Step-by-Step</span>
                <h2>How Contractors Upgrade Your Supply Line</h2>
              </div>

              <div className="process-grid">
                <div className="process-step">
                  <div className="step-num">01</div>
                  <h3>Diagnostic Flow Test</h3>
                  <p>
                    The technician tests dynamic water pressure at the meter and exterior hose bibs to measure the exact friction loss across your service line.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">02</div>
                  <h3>Permit &amp; DigAlert 811</h3>
                  <p>
                    All required City of Gardena plumbing permits are pulled, and subterranean gas and electrical lines are marked for safe work.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">03</div>
                  <h3>Trenchless Pipe Pull</h3>
                  <p>
                    Using pneumatic or hydraulic pulling rigs, the old galvanized pipe is split and replaced with seamless PEX-a or copper under your lawn and driveway.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">04</div>
                  <h3>Full Flush &amp; Commissioning</h3>
                  <p>
                    The system is pressure-tested, flushed of all construction debris, and verified for maximum water pressure at every household tap.
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  Connect with our network for complete <Link href="/">water service line repair in Gardena</Link>.
                </p>
                <a href="tel:3108175933" className="btn-cta-large" style={{ display: 'inline-flex', maxWidth: '450px', margin: '0 auto' }}>
                  <span>CALL DISPATCH: (310) 817-5933</span>
                </a>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Common Questions</span>
                <h2>Galvanized Pipe Replacement FAQs</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">How do I know if my water service line is galvanized steel?</summary>
                  <div className="faq-answer">
                    <p>
                      Look at the pipe where it enters your home near the main shut-off valve or at the meter. If the pipe is dull gray-silver and a refrigerator magnet sticks firmly to it, it is galvanized steel. Copper is non-magnetic and reddish-gold; PEX is flexible blue, red, or white plastic tubing.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Will upgrading my water line increase my home value in Gardena?</summary>
                  <div className="faq-answer">
                    <p>
                      Yes. During home inspections in areas like <Link href="/el-camino-village/">El Camino Village</Link> and <Link href="/downtown-gardena/">Downtown Gardena</Link>, original galvanized main lines are frequently flagged as high-risk liabilities. Upgrading with permitted, warrantied materials removes a major buyer objection.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Do I have to repipe the inside of my house at the same time?</summary>
                  <div className="faq-answer">
                    <p>
                      Not necessarily. While replacing internal branch piping is beneficial, replacing the underground main service line from the meter to the house resolves the primary restriction and prevents subterranean leaks without requiring indoor wall drywall repairs.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Restore High Water Pressure &amp; Clean Drinking Water</h2>
              <p>
                Upgrade your aging Gardena galvanized supply line today. Connect with a licensed contractor for an on-site evaluation.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL NOW: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Free Consultation &bull; Fast South Bay Dispatch</span>
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
