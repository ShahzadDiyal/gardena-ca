import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Underground Water Leak Detection Gardena CA | Non-Invasive Diagnostics',
  description: 'Spike in your Gardena water bill or damp patches on your lawn? Pinpoint hidden underground water line leaks with acoustic & electronic detection. Call (310) 817-5933.',
  alternates: {
    canonical: 'http://fixwaterca.online/underground-water-leak-detection/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "http://fixwaterca.online/underground-water-leak-detection/#service",
      "name": "Underground Water Leak Detection",
      "serviceType": "Acoustic & Electronic Leak Detection",
      "description": "Non-invasive electronic and acoustic subterranean water service line leak detection in Gardena, CA.",
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
      "@id": "http://fixwaterca.online/underground-water-leak-detection/#breadcrumbs",
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
          "name": "Underground Water Leak Detection",
          "item": "http://fixwaterca.online/underground-water-leak-detection/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "http://fixwaterca.online/underground-water-leak-detection/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do technicians find underground water leaks without digging?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technicians use high-sensitivity acoustic ground listening microphones, digital correlators, and pressure testing equipment. Pressurized water escaping a pipe generates distinct acoustic frequencies that these specialized devices isolate, pinpointing the exact depth and location of the break."
          }
        },
        {
          "@type": "Question",
          "name": "How can I check if my main water line is leaking using the meter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Turn off all water fixtures inside and outside your home. Open the Golden State Water meter lid at the sidewalk. Look at the low-flow indicator dial (often a small red triangle or star wheel). If it continues to spin when zero water is being used inside, water is actively leaking along the underground service pipe."
          }
        },
        {
          "@type": "Question",
          "name": "What causes underground water pipes to leak in Gardena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Primary causes include age-related internal corrosion in older galvanized pipes, shifting South Bay clay loam soils putting stress on fittings, tree root intrusion, and high municipal water pressure spikes."
          }
        }
      ]
    }
  ]
};

export default function LeakDetectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Underground Water Leak Detection" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Acoustic &amp; Sonic Locating</span>
                  <span className="hero-badge">Zero Guesswork</span>
                  <span className="hero-badge">Gardena &amp; South Bay</span>
                </div>
                <h1>Underground Water Leak Detection in Gardena, CA</h1>
                <p className="hero-subhead">
                  Stop underground water leaks from damaging your foundation, washing away topsoil, and running up hundreds of dollars in excess utility charges. Connect with licensed specialists using state-of-the-art acoustic listening and pressure correlation tools.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>SCHEDULE LEAK DETECTION: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Pinpoint Leak Location &bull; Same-Day Dispatch</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Hidden Leak Indicators</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>High Water Bills:</strong> Sudden increases from Golden State Water</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Wet Lawn Patches:</strong> Spongy soil or moss growing between meter &amp; house</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Meter Dial Spinning:</strong> Flow indicator turns when fixtures are off</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Hissing Sound:</strong> Constant noise near water inlet or foundation</li>
                </ul>
                <div className="referral-notice">
                  <strong>Referral Service:</strong> We match Gardena property owners with certified leak detection technicians equipped with non-invasive acoustic sensors.
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
                  How Do Specialists Locate Underground Water Leaks?
                </h2>
                <p className="direct-answer-text">
                  <strong>Non-invasive underground leak detection</strong> uses specialized electro-acoustic listening sensors, digital ground correlators, and inert tracer gas testing to identify subterranean pipe breaches without digging random trenches. Pressurized water leaking from an underground main generates high-frequency vibrations that travel along the pipe and through the soil. By filtering background ambient noise, experienced technicians pinpoint the exact breach coordinates to within inches before any targeted repair begins.
                </p>
              </div>
            </div>
          </section>

          {/* Detection Methods */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Diagnostic Technology</span>
                <h2>Advanced Underground Leak Locating Methods</h2>
                <p className="section-lead">
                  Our network partners utilize commercial diagnostic equipment specifically designed to locate buried residential and commercial water supply lines:
                </p>
              </div>

              <div className="grid-3">
                <div className="card">
                  <div className="card-icon">&#128266;</div>
                  <h3>Electro-Acoustic Ground Mics</h3>
                  <p>
                    Sensitive ground microphones amplify subterranean water escaping under high municipal pressure. Technicians scan along the known pipe alignment across grass, pavers, and asphalt to pinpoint sound peaks.
                  </p>
                </div>

                <div className="card">
                  <div className="card-icon">&#9879;</div>
                  <h3>Digital Correlation Loggers</h3>
                  <p>
                    Two sensors attached to contact points (such as the curb meter and the house shut-off valve) calculate sound velocity differences, computing the exact mathematical distance to the leak.
                  </p>
                </div>

                <div className="card">
                  <div className="card-icon">&#127788;</div>
                  <h3>Tracer Gas Leak Locating</h3>
                  <p>
                    For quiet, low-pressure pinhole leaks under concrete slabs or deep clay soils, harmless nitrogen-hydrogen tracer gas is introduced into the isolated line and detected at the surface with molecular gas sniffers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Danger of Ignoring Hidden Leaks */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Prevent Collateral Damage</span>
                <h2>Why Immediate Leak Locating in Gardena Is Critical</h2>
                <p className="section-lead">
                  An underground water line leak never resolves on its own. Delaying diagnostics allows small fractures to cause escalating property damage.
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Foundation Erosion &amp; South Bay Clay Shifting</h3>
                  <p>
                    Gardena&apos;s soil composition contains substantial clay layers that swell rapidly when saturated with water. Subterranean leaks beneath driveways or next to slab foundations can create subterranean voids, leading to cracked concrete slabs, sunken patios, and structural instability.
                  </p>
                  <p>
                    If your water bill is climbing or you suspect a leak in <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/hollypark/">Hollypark</Link>, or <Link href="/moneta/">Moneta</Link>, early detection protects both your home and landscaping. Once the leak is mapped, contractors evaluate whether a spot repair or complete <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link> is the most cost-effective long-term solution.
                  </p>
                  <h3>Protecting Whole-House Water Volume</h3>
                  <p>
                    Underground leaks divert significant flow away from indoor fixtures. If your household is also suffering from sudden pressure drops, consult our guide on <Link href="/low-water-pressure-repair/">low water pressure repair in Gardena</Link>.
                  </p>
                </div>

                <div>
                  <h3>DIY 3-Step Meter Leak Test</h3>
                  <p>
                    Before calling for specialized equipment, you can perform this simple test on your Golden State Water meter:
                  </p>
                  <ol>
                    <li><strong>Shut Off All Indoor Fixtures:</strong> Ensure no faucets, toilets, washing machines, or irrigation timers are operating.</li>
                    <li><strong>Locate the Water Meter:</strong> Find the concrete meter box near the street curb or sidewalk and carefully lift the lid.</li>
                    <li><strong>Observe the Flow Indicator:</strong> Look for a small red or silver triangle, star, or decimal dial. If this indicator is turning while all taps are off, water is actively leaking on your private supply line.</li>
                  </ol>
                  <p>
                    For active surface flooding or water bubbling up through soil, contact our 24/7 team for immediate <Link href="/emergency-water-main-repair/">emergency water main repair</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contextual Service Flow & Repair Solutions */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Next Steps</span>
                <h2>From Detection to Permanent Pipe Repair</h2>
                <p className="section-lead">
                  Once the leak is pinpointed, the dispatched plumbing contractor provides options tailored to the age and condition of your water infrastructure.
                </p>
              </div>

              <div className="process-grid">
                <div className="process-step">
                  <div className="step-num">01</div>
                  <h3>Pinpoint Assessment</h3>
                  <p>
                    The technician marks the exact location and depth of the underground water leak on the ground surface.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">02</div>
                  <h3>Pipe Condition Evaluation</h3>
                  <p>
                    If the pipe is modern copper in good overall condition, a localized spot repair may be suitable. If the line is 1950s galvanized steel, a full <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> is recommended.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">03</div>
                  <h3>Upfront Repair Options</h3>
                  <p>
                    You receive a clear, written estimate comparing localized mechanical clamping versus complete whole-line renewal through <Link href="/water-meter-to-house-replacement/">meter-to-house replacement</Link>.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num">04</div>
                  <h3>Restoration &amp; Verification</h3>
                  <p>
                    The repair is executed, pressure tested to ensure zero residual leakage, and your property is restored to clean condition.
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  Connect with our trusted dispatch network for reliable <Link href="/">water service line repair in Gardena</Link>.
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
                <span className="section-tag">Questions Answered</span>
                <h2>Underground Leak Detection FAQs</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">How accurate is acoustic underground leak detection?</summary>
                  <div className="faq-answer">
                    <p>
                      Acoustic detection is exceptionally precise. Skilled technicians can typically pinpoint an underground supply line break within a 1 to 2-foot radius, preventing the need to dig up the entire yard or remove large sections of concrete driveway in neighborhoods like <Link href="/el-camino-village/">El Camino Village</Link> and <Link href="/downtown-gardena/">Downtown Gardena</Link>.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Will my homeowner&apos;s insurance cover leak detection?</summary>
                  <div className="faq-answer">
                    <p>
                      Coverage depends on your specific insurance policy. Many policies include &quot;tear out and access&quot; coverage if the leak threatens the home&apos;s foundation or causes interior water intrusion. The independent contractor can provide detailed diagnostic documentation and photos for your claim.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">How quickly can leak detection be performed?</summary>
                  <div className="faq-answer">
                    <p>
                      Most residential leak detection appointments take between 1 and 2 hours to test, trace the pipe alignment, and locate the fracture point. Same-day emergency appointments are available throughout Gardena and South Bay communities.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="cta-banner">
            <div className="container">
              <h2>Stop the Leak Before It Damages Your Property</h2>
              <p>
                Call Gardena Water Line Pros today to dispatch a certified leak detection specialist equipped with acoustic sensors.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL NOW: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Fast Dispatch Across Gardena, CA</span>
                </a>
                <Link href="/contact/" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '2px solid #FFFFFF', padding: '1rem 1.75rem', borderRadius: 'var(--radius-md)', fontWeight: 700, textDecoration: 'none' }}>
                  Schedule Diagnostic &rarr;
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
