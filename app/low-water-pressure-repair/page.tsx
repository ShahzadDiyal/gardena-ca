import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Low Water Pressure Repair & PRV Diagnostics Gardena CA | PRV & Main Line',
  description: 'Suffering from weak water pressure in Gardena, CA? Diagnose and repair failed pressure regulator valves (PRV), clogged supply lines & hidden leaks. Call (310) 817-5933.',
  alternates: {
    canonical: 'https://www.gardenawaterlinepros.com/low-water-pressure-repair/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.gardenawaterlinepros.com/low-water-pressure-repair/#service",
      "name": "Low Water Pressure Repair & PRV Diagnostics",
      "serviceType": "Water Pressure Troubleshooting & Regulator Repair",
      "description": "Comprehensive diagnostic and repair services for whole-house low water pressure, PRV failure, and water line bottlenecks in Gardena, CA.",
      "provider": {
        "@type": "Organization",
        "name": "Gardena Water Line Pros",
        "url": "https://www.gardenawaterlinepros.com/",
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
      "@id": "https://www.gardenawaterlinepros.com/low-water-pressure-repair/#breadcrumbs",
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
          "name": "Low Water Pressure Repair",
          "item": "https://www.gardenawaterlinepros.com/low-water-pressure-repair/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.gardenawaterlinepros.com/low-water-pressure-repair/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is my home water pressure low in Gardena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The top three causes of low water pressure in Gardena are: 1) a failed or clogged Pressure Reducing Valve (PRV), 2) internal rust and mineral scale choking older galvanized main water pipes, and 3) a hidden underground leak bleeding pressure between the city meter and your foundation."
          }
        },
        {
          "@type": "Question",
          "name": "What should normal water pressure be for a Gardena residence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the California Plumbing Code, optimal residential water pressure is between 50 and 70 PSI (pounds per square inch). Pressures below 40 PSI result in sluggish showers and slow appliance filling, while pressures above 80 PSI can rupture water heaters, flex hoses, and fixtures."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a Pressure Reducing Valve (PRV) last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical brass PRV has an operational lifespan of 10 to 15 years. Over time, internal rubber diaphragms and metal springs stiffen, get clogged with sediment, or seize up, causing sudden pressure drops or dangerously high pressure surges."
          }
        }
      ]
    }
  ]
};

export default function LowWaterPressurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Low Water Pressure Repair" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Pressure Diagnostics</span>
                  <span className="hero-badge">PRV Replacement</span>
                  <span className="hero-badge">Full Flow Restored</span>
                </div>
                <h1>Low Water Pressure Repair in Gardena, CA</h1>
                <p className="hero-subhead">
                  Frustrated by weak shower spray, appliances taking forever to fill, or dramatic pressure drops when multiple faucets are running? We connect you with experienced South Bay water pressure technicians to diagnose and fix the root cause.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>DIAGNOSE PRESSURE ISSUES: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Comprehensive Flow Testing &bull; Fast Local Dispatch</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Common Pressure Symptoms</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Shower Trickle:</strong> Pressure plunges when the washer runs</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Whole-House Drop:</strong> Weak flow across every indoor faucet</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Buzzing / Humming PRV:</strong> Vibrating regulator valve at foundation</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Sudden Pressure Loss:</strong> Pressure dropped unexpectedly overnight</li>
                </ul>
                <div className="referral-notice">
                  <strong>Referral Dispatch:</strong> We connect you with licensed plumbing contractors equipped for PRV replacement and underground supply line restoration.
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
                  What Causes Low Water Pressure in Gardena Homes?
                </h2>
                <p className="direct-answer-text">
                  Low water pressure throughout an entire property is typically caused by one of three issues: a failed <strong>Pressure Reducing Valve (PRV)</strong> that has seized closed, severe <strong>internal mineral and rust tuberculation</strong> inside an aging galvanized water service line, or a <strong>hidden underground leak</strong> on the private supply pipe bleeding off water volume before it reaches your fixtures. Distinguishing between static pressure (measured in PSI) and dynamic flow rate (measured in GPM) through professional gauge testing identifies whether the issue requires a simple PRV replacement or a main line upgrade.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnostic Matrix Grid */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Diagnostic Guide</span>
                <h2>Identifying Your Water Pressure Bottleneck</h2>
                <p className="section-lead">
                  Water pressure problems require systematic troubleshooting to pinpoint the exact failure point:
                </p>
              </div>

              <div className="grid-3">
                <div className="card">
                  <div className="card-icon">&#9881;</div>
                  <h3>Failed Pressure Regulator (PRV)</h3>
                  <p>
                    Located near the main house shut-off valve, the PRV regulates incoming municipal pressure. When its internal spring or diaphragm fails, water flow becomes choked. Replacing the PRV is a fast, straightforward repair.
                  </p>
                </div>

                <div className="card">
                  <div className="card-icon">&#128688;</div>
                  <h3>Corroded Galvanized Pipe</h3>
                  <p>
                    In mid-century Gardena homes across <Link href="/strawberry-park/">Strawberry Park</Link> and <Link href="/moneta/">Moneta</Link>, decades of rust buildup restrict water volume. Learn about our <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> solutions.
                  </p>
                </div>

                <div className="card">
                  <div className="card-icon">&#128269;</div>
                  <h3>Subterranean Water Leak</h3>
                  <p>
                    A cracked or ruptured underground line allows gallons of water to escape under your lawn, causing whole-house pressure drops. Explore our <Link href="/underground-water-leak-detection/">underground water leak detection</Link> services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Static vs Dynamic Pressure Explained */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Technical Insight</span>
                <h2>Static Pressure vs. Dynamic Flow Rate</h2>
                <p className="section-lead">
                  Understanding why your pressure looks normal until you open a second faucet:
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>The &quot;Volume Drop&quot; Phenomenon</h3>
                  <p>
                    When all faucets are closed, water in your pipes builds up to full street pressure—often registering 60 to 70 PSI on a static gauge. However, if your main service line is constricted by internal rust or crushed by tree roots, only a tiny stream of water can pass through at a time.
                  </p>
                  <p>
                    As soon as you turn on a shower or garden hose, that static pressure collapses immediately because the pipe cannot supply adequate volume (Gallons Per Minute). If this describes your home, a non-invasive <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link> can restore full, unrestricted volume across your entire plumbing system.
                  </p>
                  <h3>Municipal Pressure Standards in Gardena</h3>
                  <p>
                    Golden State Water delivers high-pressure water throughout South Bay mains. To comply with the California Plumbing Code and protect appliances, every property should maintain working regulator valves set between 55 and 70 PSI.
                  </p>
                </div>

                <div>
                  <h3>How Technicians Restore Your Water Flow</h3>
                  <p>
                    When an independent contractor from our network arrives at your Gardena residence, they perform a comprehensive flow test:
                  </p>
                  <ul>
                    <li><strong>Meter Testing:</strong> Check incoming pressure directly at the Golden State Water meter.</li>
                    <li><strong>PRV Inspection:</strong> Test static and dynamic pressure at the building entrance.</li>
                    <li><strong>Acoustic Isolation:</strong> Rule out underground line fractures and slab leaks.</li>
                    <li><strong>Recommendation:</strong> Provide upfront pricing for PRV rebuild/replacement or whole-line <Link href="/water-meter-to-house-replacement/">meter-to-house renewal</Link>.</li>
                  </ul>
                  <p>
                    For immediate emergency repairs or major leaks, our helpline connects you with 24/7 <Link href="/emergency-water-main-repair/">emergency water main repair</Link> crews.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Pressure FAQs</span>
                <h2>Frequently Asked Questions About Water Pressure</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">How can I tell if my PRV is bad?</summary>
                  <div className="faq-answer">
                    <p>
                      Signs of a bad PRV include sudden drops in water pressure, loud humming or banging noises near your water main when taps are opened, or unexpected spikes in pressure that cause toilet fill valves to hiss and water heater relief valves to drip in neighborhoods like <Link href="/hollypark/">Hollypark</Link>, <Link href="/el-camino-village/">El Camino Village</Link>, or <Link href="/downtown-gardena/">Downtown Gardena</Link>.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Can low water pressure damage my home plumbing?</summary>
                  <div className="faq-answer">
                    <p>
                      While low pressure itself does not harm pipes, the underlying cause—such as severe internal corrosion or an active underground leak—can cause foundation settling and pipe ruptures. Conversely, a failed PRV that allows street pressure above 80 PSI to enter the house can rupture washing machine hoses and water heaters.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">How long does it take to replace a water pressure regulator?</summary>
                  <div className="faq-answer">
                    <p>
                      A standard residential PRV replacement typically takes 1 to 2 hours. Technicians isolate the main water supply, remove the failed brass unit, install a code-compliant regulator, and calibrate it to your desired PSI.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Restore Powerful, Consistent Water Pressure Today</h2>
              <p>
                Connect with a licensed Gardena water pressure specialist for fast diagnostics and upfront repair estimates.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL DISPATCH: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Serving Gardena, CA &amp; South Bay</span>
                </a>
                <Link href="/contact/" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '2px solid #FFFFFF', padding: '1rem 1.75rem', borderRadius: 'var(--radius-md)', fontWeight: 700, textDecoration: 'none' }}>
                  Schedule Inspection &rarr;
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
