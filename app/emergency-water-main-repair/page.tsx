import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: '24/7 Emergency Water Main Repair Gardena CA | Fast Local Dispatch',
  description: 'Burst underground water main in Gardena, CA? Get immediate 24/7 dispatch for emergency water line repair, water shut-off & leak containment. Call (310) 817-5933.',
  alternates: {
    canonical: 'http://fixwaterca.online/emergency-water-main-repair/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmergencyService",
      "@id": "http://fixwaterca.online/emergency-water-main-repair/#service",
      "name": "Emergency Water Main Repair",
      "serviceType": "24/7 Water Line Emergency Dispatch",
      "description": "24/7 rapid emergency dispatch for ruptured, leaking, and burst underground water service lines in Gardena, CA.",
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
      "@id": "http://fixwaterca.online/emergency-water-main-repair/#breadcrumbs",
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
          "name": "Emergency Water Main Repair",
          "item": "http://fixwaterca.online/emergency-water-main-repair/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "http://fixwaterca.online/emergency-water-main-repair/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I do immediately if my water main bursts in Gardena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First, locate the main shutoff valve on the exterior of your house or at the Golden State Water meter box near the street curb and turn it clockwise 90 degrees with a curb key or pliers. Second, keep people and vehicles away from flooding areas. Third, call our 24/7 emergency dispatch line at (310) 817-5933."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can an emergency plumbing crew arrive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emergency calls are dispatched immediately to on-call licensed plumbing contractors stationed throughout Gardena and the South Bay, typically arriving on-site quickly to isolate the break and stop water loss."
          }
        },
        {
          "@type": "Question",
          "name": "Can an emergency break be fixed without replacing the whole line?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If the rest of the supply line is structurally sound, contractors can install high-pressure stainless steel repair sleeves or replace a short damaged section. If the pipe is severely degraded galvanized steel, they will discuss permanent trenchless replacement options."
          }
        }
      ]
    }
  ]
};

export default function EmergencyRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Emergency Water Main Repair" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge" style={{ background: 'rgba(220, 38, 38, 0.3)', borderColor: '#EF4444' }}>24/7 Rapid Response</span>
                  <span className="hero-badge">Burst Line Isolation</span>
                  <span className="hero-badge">Gardena &amp; South Bay</span>
                </div>
                <h1>24/7 Emergency Water Main Repair in Gardena, CA</h1>
                <p className="hero-subhead">
                  When a pressurized subterranean water line fractures or completely bursts, thousands of gallons of water can flood your yard, crack your driveway, and erode your foundation in hours. Connect immediately with on-call licensed emergency plumbing contractors.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large" style={{ background: 'linear-gradient(180deg, #DC2626 0%, #991B1B 100%)' }}>
                    <span>EMERGENCY DISPATCH: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Immediate Call Routing &bull; 24/7 Availability</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box" style={{ borderTopColor: '#DC2626' }}>
                <h2>Emergency Checklist</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon" style={{ color: '#DC2626' }}>&#9888;</span> <strong>Shut Off Water:</strong> Turn the curb meter or main house valve</li>
                  <li><span className="check-icon" style={{ color: '#DC2626' }}>&#9888;</span> <strong>Clear Flooded Zones:</strong> Avoid standing water near electrical panels</li>
                  <li><span className="check-icon" style={{ color: '#DC2626' }}>&#9888;</span> <strong>Call Our Hotline:</strong> Immediate connection to a local contractor</li>
                  <li><span className="check-icon" style={{ color: '#DC2626' }}>&#9888;</span> <strong>Protect Utilities:</strong> Technicians coordinate emergency mark-outs</li>
                </ul>
                <div className="referral-notice">
                  <strong>Emergency Dispatch:</strong> We match you with licensed, independent South Bay plumbing contractors prepared for urgent excavation and line stabilization.
                </div>
              </div>
            </div>
          </section>

          {/* Direct Answer Box */}
          <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div className="container">
              <div className="direct-answer-box" style={{ borderLeftColor: '#DC2626' }}>
                <h2>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#DC2626" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  What Qualifies as a Water Main Emergency?
                </h2>
                <p className="direct-answer-text">
                  A <strong>water main emergency</strong> occurs whenever the high-pressure supply line between the municipal water meter and the home ruptures, resulting in uncontrollable water discharge, complete loss of indoor water service, sudden sinkhole formation in the yard, or foundation water intrusion. Because water mains operate under 50 to 80+ PSI of municipal pressure, an active rupture demands immediate water shutoff and dispatch of a certified contractor capable of high-pressure pipe repair or urgent <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Step-by-Step Emergency Response */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Rapid Response Protocol</span>
                <h2>What to Do During a Water Line Rupture in Gardena</h2>
                <p className="section-lead">
                  Follow these immediate steps to protect your property while emergency plumbing crews are in route:
                </p>
              </div>

              <div className="process-grid">
                <div className="process-step">
                  <div className="step-num" style={{ color: '#EF4444' }}>01</div>
                  <h3>Shut Down the Main Water Supply</h3>
                  <p>
                    Locate your Golden State Water meter box near the curb. Use a water meter key or sturdy pliers to rotate the brass valve clockwise 90 degrees until the padlock holes align.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num" style={{ color: '#EF4444' }}>02</div>
                  <h3>Call Our 24/7 Hotline</h3>
                  <p>
                    Dial <a href="tel:3108175933"><strong>(310) 817-5933</strong></a> immediately. Explain the nature of the rupture (geyser, flooded yard, wall hiss) for rapid routing to an on-call Gardena technician.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num" style={{ color: '#EF4444' }}>03</div>
                  <h3>Site Excavation &amp; Isolation</h3>
                  <p>
                    The contractor arrives with diagnostic tools, pumps out standing water, exposes the fractured section, and installs a heavy-duty stainless steel repair sleeve or replacement pipe spool.
                  </p>
                </div>

                <div className="process-step">
                  <div className="step-num" style={{ color: '#EF4444' }}>04</div>
                  <h3>Pressure Testing &amp; Flush</h3>
                  <p>
                    Once sealed, the line is pressure tested, thoroughly flushed to remove sediment, and safe potable water delivery is restored to your household.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Causes of Sudden Water Line Blowouts */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Root Causes</span>
                <h2>Why Water Main Pipes Burst in Gardena</h2>
                <p className="section-lead">
                  Underground water line failures are rarely random. They are typically the culmination of environmental and metallurgical stresses:
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Aging Galvanized Steel Pipe Failure</h3>
                  <p>
                    Many older residences across <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/hollypark/">Hollypark</Link>, and <Link href="/moneta/">Moneta</Link> have original galvanized steel pipes dating back to the 1950s. As internal rust eats through the pipe wall from the inside out, the metal wall thins until it can no longer withstand municipal water surges, resulting in catastrophic bursts.
                  </p>
                  <p>
                    Following emergency stabilization, contractors often recommend a permanent upgrade via <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> to eliminate future ruptures.
                  </p>
                  <h3>High Municipal Pressure &amp; Water Hammer</h3>
                  <p>
                    Water distribution lines in the South Bay experience natural pressure fluctuations. If your home&apos;s pressure-reducing valve (PRV) fails, incoming pressure can spike above 90 PSI, stressing weakened underground pipe joints. Learn how to address pressure issues with our <Link href="/low-water-pressure-repair/">low water pressure troubleshooting</Link> service.
                  </p>
                </div>

                <div>
                  <h3>Expansive Clay Soil Movement</h3>
                  <p>
                    Gardena&apos;s clay-heavy soils swell during wet weather and shrink during drought. This continual ground shifting exerts immense bending stress on rigid buried lines, snapping threaded joints or pulling pipes away from foundation penetrations.
                  </p>
                  <p>
                    If a leak is suspected but not yet bubbling to the surface, non-invasive <Link href="/underground-water-leak-detection/">underground water leak detection</Link> can identify micro-fissures before a major blowout occurs.
                  </p>

                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                    <h4 style={{ marginTop: 0, color: '#991B1B' }}>Avoid Costly Foundation Damage</h4>
                    <p style={{ fontSize: '0.875rem', color: '#7F1D1D', marginBottom: 0 }}>
                      Underground water leaks can wash away supporting soil beneath concrete foundation footings. If you observe water pooling near your perimeter foundation wall, call our emergency dispatch team immediately for <Link href="/">emergency plumbing services in Gardena</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Emergency FAQs</span>
                <h2>Frequently Asked Questions About Emergency Repairs</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-question">What should I do immediately if my water main bursts?</summary>
                  <div className="faq-answer">
                    <p>
                      Turn off the main shutoff valve at the curb meter box or exterior wall immediately to stop water loss. Keep pets and family members away from flooded areas, and dial <a href="tel:3108175933"><strong>(310) 817-5933</strong></a> for emergency contractor dispatch across Gardena, <Link href="/el-camino-village/">El Camino Village</Link>, or <Link href="/downtown-gardena/">Downtown Gardena</Link>.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Can the contractor replace the entire water line during an emergency?</summary>
                  <div className="faq-answer">
                    <p>
                      Yes. If the emergency excavation reveals that the pipe is beyond repair due to extensive rust or multiple fractures, the contractor can perform a same-day or next-day <Link href="/water-meter-to-house-replacement/">water meter-to-house replacement</Link> using trenchless technology.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">Does Golden State Water fix emergency leaks on my property?</summary>
                  <div className="faq-answer">
                    <p>
                      No. Golden State Water Company only handles repairs on the public water main and up to the meter box. All piping on the customer side of the meter is private property and requires a licensed plumbing contractor.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="cta-banner" style={{ background: 'linear-gradient(135deg, #991B1B 0%, #0F2C59 100%)' }}>
            <div className="container">
              <h2>Active Water Line Emergency in Gardena? Call Now</h2>
              <p>
                Do not wait for water to flood your property. Contact our 24/7 helpline for immediate dispatch to licensed local contractors.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#991B1B' }}>
                  <span>CALL 24/7 DISPATCH: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Immediate Response Across Gardena, CA</span>
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
