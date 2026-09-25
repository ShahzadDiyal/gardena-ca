import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gardena Water Service Line Repair & Replacement | 24/7 Local Dispatch',
  description: 'Need water service line repair in Gardena, CA? Connect with vetted local plumbing specialists for trenchless water line replacement, leak detection & emergency main repairs. Call (310) 817-5933.',
  alternates: {
    canonical: 'https://fixwaterca.online/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fixwaterca.online/#organization",
      "name": "Gardena Water Line Pros",
      "url": "https://fixwaterca.online/",
      "logo": "https://fixwaterca.online/images/logo.svg",
      "telephone": "+1-310-817-5933",
      "description": "Professional referral and dispatch service connecting Gardena, CA property owners with licensed underground water line contractors.",
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
      "@type": "PlumbingService",
      "@id": "https://fixwaterca.online/#plumbing-service",
      "name": "Gardena Water Line Pros",
      "url": "https://fixwaterca.online/",
      "logo": "https://fixwaterca.online/images/logo.svg",
      "image": "https://fixwaterca.online/images/water-line-diagram.svg",
      "telephone": "+1-310-817-5933",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Check, Financing",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gardena",
        "addressRegion": "CA",
        "postalCode": "90247",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.8883,
        "longitude": -118.3090
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Gardena" },
        { "@type": "PostalCode", "postalCode": "90247" },
        { "@type": "PostalCode", "postalCode": "90248" },
        { "@type": "PostalCode", "postalCode": "90249" },
        { "@type": "Neighborhood", "name": "Strawberry Park" },
        { "@type": "Neighborhood", "name": "Hollypark" },
        { "@type": "Neighborhood", "name": "Moneta" },
        { "@type": "Neighborhood", "name": "El Camino Village" },
        { "@type": "Neighborhood", "name": "Downtown Gardena" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://fixwaterca.online/#website",
      "url": "https://fixwaterca.online/",
      "name": "Gardena Water Line Pros",
      "publisher": {
        "@id": "https://fixwaterca.online/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://fixwaterca.online/#webpage",
      "url": "https://fixwaterca.online/",
      "name": "Gardena Water Service Line Repair & Replacement | 24/7 Local Dispatch",
      "isPartOf": {
        "@id": "https://fixwaterca.online/#website"
      },
      "about": {
        "@id": "https://fixwaterca.online/#organization"
      },
      "description": "Comprehensive guide and emergency dispatch for water service line repair, leak detection, and trenchless replacement in Gardena, CA."
    },
    {
      "@type": "FAQPage",
      "@id": "https://fixwaterca.online/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is responsible for repairing the water service line in Gardena, CA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Gardena, the property owner is legally responsible for the private water service line that runs from the outlet of the city water meter (typically near the curb or sidewalk) all the way into the home's main shut-off valve. Golden State Water Company maintains only the water main under the street and the meter itself."
          }
        },
        {
          "@type": "Question",
          "name": "What are the signs of an underground water line leak in Gardena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common warning signs include unexplained high water bills from Golden State Water Company, spongy or damp patches of grass in your front yard, low water pressure across all fixtures, hissing sounds near internal pipes when no water is running, and the water meter dial turning when all household taps are shut off."
          }
        },
        {
          "@type": "Question",
          "name": "What is trenchless water line replacement and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trenchless water line replacement is a minimally invasive technique where technicians use pipe-pulling or horizontal directional boring to pull a new, seamless PEX-a or copper pipe along the existing path using two small access holes. This avoids digging a continuous trench through concrete driveways, sidewalks, and landscaped yards."
          }
        },
        {
          "@type": "Question",
          "name": "How does your Gardena water line referral service work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When you call our local helpline at (310) 817-5933, we connect you directly with an available, licensed, and insured plumbing specialist serving Gardena and the South Bay. The independent contractor performs an on-site diagnosis, provides an upfront quote, and executes the necessary repair or replacement under local municipal codes."
          }
        }
      ]
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="hero-badges">
                <span className="hero-badge">Gardena, CA &amp; South Bay</span>
                <span className="hero-badge">Trenchless Specialists</span>
                <span className="hero-badge">Emergency Dispatch</span>
              </div>
              <h1>Gardena Water Service Line Repair &amp; Replacement</h1>
              <p className="hero-subhead">
                Experiencing a sudden water leak in your front yard, low household water pressure, or an unexpectedly high Golden State Water bill? We connect you with licensed local underground plumbing contractors ready to diagnose, repair, and replace your main water supply line.
              </p>
              <div className="hero-cta-box">
                <a href="tel:3108175933" className="btn-cta-large">
                  <span>CALL NOW: (310) 817-5933</span>
                  <span className="btn-cta-subtext">Immediate Local Connection &bull; Upfront Quotes</span>
                </a>
              </div>
            </div>

            <div className="hero-card-box">
              <h2>Fast Water Line Help in Gardena</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                Connecting property owners with certified local excavation and trenchless pipe professionals throughout the 90247, 90248, and 90249 zip codes.
              </p>
              <ul className="hero-features-list">
                <li><span className="check-icon">&#10003;</span> <strong>Trenchless Pipe Pulling:</strong> Preserve driveways &amp; mature landscaping</li>
                <li><span className="check-icon">&#10003;</span> <strong>Precision Acoustic Leak Detection:</strong> Pinpoint underground breaks</li>
                <li><span className="check-icon">&#10003;</span> <strong>Galvanized Pipe Upgrades:</strong> Modern copper &amp; PEX-a piping</li>
                <li><span className="check-icon">&#10003;</span> <strong>Rapid Emergency Dispatch:</strong> Burst main line containment</li>
              </ul>
              <div className="referral-notice" style={{ marginBottom: 0 }}>
                <strong>Referral Notice:</strong> Gardena Water Line Pros is a local dispatch and customer referral service. We match property owners with independent, licensed plumbing contractors in the South Bay.
              </div>
            </div>
          </div>
        </section>

        {/* AI Overview / Direct Answer Box */}
        <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
          <div className="container">
            <div className="direct-answer-box">
              <h2>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0284C7" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                What Is a Water Service Line and Who Fixes It in Gardena?
              </h2>
              <p className="direct-answer-text">
                A <strong>water service line</strong> is the underground pressurized pipe that transports fresh potable water from the city water meter at your street curb into your home&apos;s main shutoff valve. In Gardena, CA, municipal utility providers such as <strong>Golden State Water Company</strong> are only responsible for water distribution mains under public roadways and the physical meter. <em>All underground piping from the meter&apos;s downstream connection to your foundation is the private legal responsibility of the property owner.</em> When this line corrodes, cracks, or bursts, a licensed underground plumbing contractor must be dispatched to perform leak location, excavation, or trenchless replacement.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Infrastructure Responsibility Diagram Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Infrastructure Guide</span>
              <h2>Understanding Your Water Line Responsibility in Gardena</h2>
              <p className="section-lead">
                Many South Bay homeowners are surprised to learn that outdoor leaks between the sidewalk meter and their home are not repaired by the water utility. Here is how your water system is structured:
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <Image
                src="/images/water-line-diagram.svg"
                alt="Diagram showing utility responsibility at the street versus private homeowner responsibility from the meter to the house"
                width={800}
                height={420}
                style={{ margin: '0 auto', width: '100%', height: 'auto' }}
              />

              <div style={{ marginTop: '1.5rem' }} className="grid-2">
                <div style={{ background: '#F0F9FF', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #0284C7' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#0F2C59', marginTop: 0 }}>Golden State Water Utility Side</h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 0 }}>
                    The utility maintains the primary main beneath Gardena avenues and the water meter box. If a leak occurs before the meter, Golden State Water handles the repair.
                  </p>
                </div>
                <div style={{ background: '#FEF2F2', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #DC2626' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#991B1B', marginTop: 0 }}>Your Private Property Side</h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 0 }}>
                    From the meter outlet through your yard, driveway, and into your foundation, you must hire a professional. If you notice pooling water or sudden pressure loss, explore our <Link href="/underground-water-leak-detection/">underground water leak detection services</Link> or call for immediate dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Grid with Contextual Links */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Specialized Solutions</span>
              <h2>Comprehensive Water Service Line Solutions in Gardena</h2>
              <p className="section-lead">
                Whether dealing with an active yard blowout or planning a long-overdue replacement of 1950s galvanized plumbing, our referral network connects you with the exact technical specialist required.
              </p>
            </div>

            <div className="grid-3">
              {/* Service Card 1 */}
              <article className="card">
                <div className="card-icon">&#9881;</div>
                <h3><Link href="/trenchless-water-line-replacement/" style={{ textDecoration: 'none', color: 'inherit' }}>Trenchless Water Line Replacement</Link></h3>
                <p>
                  Replace deteriorated main intake lines without digging trenches across paved driveways, concrete walkways, or manicured turf. Using advanced pipe pulling and directional boring, contractors install continuous, high-durability PEX-a or copper piping with minimal surface disruption.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Ideal for residential properties in <Link href="/strawberry-park/">Strawberry Park</Link> and <Link href="/hollypark/">Hollypark</Link> with established front yard landscaping.
                </p>
                <Link href="/trenchless-water-line-replacement/" className="card-link">Explore Trenchless Options &rarr;</Link>
              </article>

              {/* Service Card 2 */}
              <article className="card">
                <div className="card-icon">&#128269;</div>
                <h3><Link href="/underground-water-leak-detection/" style={{ textDecoration: 'none', color: 'inherit' }}>Underground Leak Detection</Link></h3>
                <p>
                  Locate subterranean main line leaks without destructive exploratory digging. Experienced South Bay specialists utilize non-invasive acoustic ground microphones, correlation loggers, and tracer gas technology to pinpoint hidden fractures under lawns and concrete slabs.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Essential when facing unexplained Golden State Water bill spikes or foundation moisture.
                </p>
                <Link href="/underground-water-leak-detection/" className="card-link">Learn About Leak Detection &rarr;</Link>
              </article>

              {/* Service Card 3 */}
              <article className="card">
                <div className="card-icon">&#9888;</div>
                <h3><Link href="/emergency-water-main-repair/" style={{ textDecoration: 'none', color: 'inherit' }}>Emergency Water Main Repair</Link></h3>
                <p>
                  When an underground main line fractures, hundreds of gallons of pressurized water can flood your property in minutes. Get connected immediately with 24/7 emergency response crews equipped for rapid water isolation, spot excavation, and durable mechanical clamp or section repairs.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Available day and night throughout all Gardena residential neighborhoods and commercial corridors.
                </p>
                <Link href="/emergency-water-main-repair/" className="card-link">Emergency Repair Protocols &rarr;</Link>
              </article>

              {/* Service Card 4 */}
              <article className="card">
                <div className="card-icon">&#128736;</div>
                <h3><Link href="/galvanized-pipe-replacement/" style={{ textDecoration: 'none', color: 'inherit' }}>Galvanized &amp; Lead Pipe Upgrades</Link></h3>
                <p>
                  Post-war Gardena homes built between 1940 and 1970 frequently suffer from severe internal rust, zinc degradation, and heavy mineral buildup inside original galvanized steel pipes. Upgrade your main supply line to modern, non-corrosive Type K copper or cross-linked polyethylene.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Commonly required in older properties across the <Link href="/moneta/">Moneta</Link> and <Link href="/downtown-gardena/">Downtown Gardena</Link> areas.
                </p>
                <Link href="/galvanized-pipe-replacement/" className="card-link">Upgrade Aging Galvanized Pipes &rarr;</Link>
              </article>

              {/* Service Card 5 */}
              <article className="card">
                <div className="card-icon">&#128167;</div>
                <h3><Link href="/low-water-pressure-repair/" style={{ textDecoration: 'none', color: 'inherit' }}>Low Water Pressure Diagnostics</Link></h3>
                <p>
                  Is your shower pressure dropping to a trickle when the washing machine runs? Underground supply line calcification, failing pressure-reducing valves (PRV), and hidden pinhole leaks are leading causes of severe water pressure loss across South Bay households.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Restore robust, code-compliant municipal volume throughout your entire home plumbing network.
                </p>
                <Link href="/low-water-pressure-repair/" className="card-link">Diagnose Pressure Problems &rarr;</Link>
              </article>

              {/* Service Card 6 */}
              <article className="card">
                <div className="card-icon">&#128688;</div>
                <h3><Link href="/water-meter-to-house-replacement/" style={{ textDecoration: 'none', color: 'inherit' }}>Meter-to-House Line Replacement</Link></h3>
                <p>
                  A complete whole-line renewal from the curb meter box directly to the house shut-off valve. When recurrent spot repairs become uneconomical, full replacement guarantees 50+ years of worry-free water delivery backed by independent contractor warranties.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  Frequently chosen by homeowners in <Link href="/el-camino-village/">El Camino Village</Link> during renovations.
                </p>
                <Link href="/water-meter-to-house-replacement/" className="card-link">Whole-Line Replacement Info &rarr;</Link>
              </article>
            </div>
          </div>
        </section>

        {/* How the Referral Process Works */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Simple &amp; Transparent</span>
              <h2>How Our Gardena Water Line Referral Service Works</h2>
              <p className="section-lead">
                We streamline the process of finding qualified, licensed underground plumbing contractors when you face a stressful water main issue.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-step">
                <div className="step-num">01</div>
                <h3>Call Our Local Hotline</h3>
                <p>
                  Dial <a href="tel:3108175933"><strong>(310) 817-5933</strong></a> to speak with our dispatch team. Describe your issue—whether it is an active yard blowout, hissing pipes, or a scheduled line replacement consultation.
                </p>
              </div>

              <div className="process-step">
                <div className="step-num">02</div>
                <h3>Matched With a Local Specialist</h3>
                <p>
                  We route your call to an independent, licensed, and insured plumbing contractor actively serving Gardena and the surrounding South Bay area with the appropriate technical equipment.
                </p>
              </div>

              <div className="process-step">
                <div className="step-num">03</div>
                <h3>On-Site Diagnostic &amp; Quote</h3>
                <p>
                  The dispatched technician conducts an on-site inspection, assesses soil and pipe conditions, and provides a clear, transparent written estimate outlining repair or trenchless replacement options.
                </p>
              </div>

              <div className="process-step">
                <div className="step-num">04</div>
                <h3>Permitted, Code-Compliant Work</h3>
                <p>
                  Upon your approval, the independent contractor completes the job under City of Gardena building codes, performs pressure testing, and coordinates necessary municipal inspections.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a href="tel:3108175933" className="btn-cta-large" style={{ display: 'inline-flex', maxWidth: '450px', margin: '0 auto' }}>
                <span>CONNECT WITH A GARDENA SPECIALIST</span>
                <span className="btn-cta-subtext">Direct Dispatch at (310) 817-5933</span>
              </a>
            </div>
          </div>
        </section>

        {/* Local Soil, Age & Municipal Context */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Local Insights</span>
              <h2>Why Water Service Lines Fail in Gardena, California</h2>
              <p className="section-lead">
                Gardena&apos;s distinctive geographic location, historical housing development, and soil conditions contribute to specific subterranean plumbing challenges.
              </p>
            </div>

            <div className="grid-2">
              <div>
                <h3>Mid-Century Housing Stock &amp; Galvanized Pipe Lifespans</h3>
                <p>
                  A substantial portion of residential neighborhoods in Gardena—such as <Link href="/strawberry-park/">Strawberry Park</Link>, <Link href="/moneta/">Moneta</Link>, and <Link href="/hollypark/">Hollypark</Link>—were constructed during the post-WWII housing boom of the 1940s through 1960s. During this era, standard practice involved laying threaded galvanized steel or thin-walled rigid copper supply pipes.
                </p>
                <p>
                  Galvanized pipes have an engineered lifespan of 40 to 60 years. Over decades, the internal protective zinc coating erodes, leading to heavy interior rust tuberculation that chokes municipal water pressure and causes weak seams to rupture underground. Replacing these lines with modern PEX-a or Type K copper through <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement</Link> permanently resolves these recurring issues.
                </p>
                <h3>South Bay Clay Soils &amp; Ground Movement</h3>
                <p>
                  Gardena sits over alluvial sedimentary soils and coastal clay loams that expand during winter rain cycles and contract during dry Southern California summers. This ground movement exerts shear stress on rigid buried lines, particularly at junction fittings near the curb meter or where the pipe enters the concrete home foundation.
                </p>
              </div>

              <div>
                <h3>Tree Root Intrusion &amp; External Corrosion</h3>
                <p>
                  Mature eucalyptus, ficus, and palm trees common across Gardena yards aggressively seek moisture. Microscopic fissures in aging pipes emit vapor that attracts root systems, which wrap around the service line and accelerate physical breaks.
                </p>
                <p>
                  Furthermore, external soil minerals can cause electrolytic pitting on buried copper pipes. When you suspect a leak under your yard, timely <Link href="/underground-water-leak-detection/">underground leak detection</Link> prevents extensive erosion, sinkholes, and costly structural damage to foundation slabs.
                </p>

                <div style={{ background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                  <h4 style={{ marginTop: 0, color: 'var(--color-primary-dark)', fontSize: '1.05rem' }}>City of Gardena Building &amp; Safety Compliance</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                    All major underground water line replacements in Gardena require proper plumbing permits and inspections through the <em>City of Gardena Community Development Department</em>. The independent plumbing contractors in our network manage all permitting, underground utility locating (DigAlert 811), and code compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Served Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Service Areas</span>
              <h2>Gardena Neighborhoods &amp; Communities We Serve</h2>
              <p className="section-lead">
                Our dispatch network covers all residential subdivisions, commercial districts, and light-industrial parks throughout Gardena and bordering South Bay communities:
              </p>
            </div>

            <div className="grid-3">
              <div className="card">
                <h3><Link href="/strawberry-park/" style={{ color: 'inherit', textDecoration: 'none' }}>Strawberry Park</Link></h3>
                <p>
                  Historic residential hub in west-central Gardena. Known for established single-family homes with mature trees and original post-war plumbing that frequently benefits from <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link>.
                </p>
                <Link href="/strawberry-park/" className="card-link">Strawberry Park Services &rarr;</Link>
              </div>

              <div className="card">
                <h3><Link href="/hollypark/" style={{ color: 'inherit', textDecoration: 'none' }}>Hollypark</Link></h3>
                <p>
                  Located in North Gardena near Rowley Memorial Park and Rosecrans Avenue. We connect Hollypark homeowners with rapid technicians for <Link href="/emergency-water-main-repair/">emergency water main repair</Link> and leak diagnostics.
                </p>
                <Link href="/hollypark/" className="card-link">Hollypark Services &rarr;</Link>
              </div>

              <div className="card">
                <h3><Link href="/moneta/" style={{ color: 'inherit', textDecoration: 'none' }}>Moneta</Link></h3>
                <p>
                  Gardena&apos;s southern heritage district along Western Avenue and Redondo Beach Boulevard. Our provider network handles whole-line <Link href="/galvanized-pipe-replacement/">galvanized pipe upgrades</Link> for historic mid-century properties.
                </p>
                <Link href="/moneta/" className="card-link">Moneta Services &rarr;</Link>
              </div>

              <div className="card">
                <h3><Link href="/el-camino-village/" style={{ color: 'inherit', textDecoration: 'none' }}>El Camino Village</Link></h3>
                <p>
                  Residential neighborhood bordering Crenshaw Boulevard and El Camino College. Homeowners rely on our network for non-invasive <Link href="/water-meter-to-house-replacement/">meter-to-house water line replacement</Link>.
                </p>
                <Link href="/el-camino-village/" className="card-link">El Camino Village Services &rarr;</Link>
              </div>

              <div className="card">
                <h3><Link href="/downtown-gardena/" style={{ color: 'inherit', textDecoration: 'none' }}>Downtown Gardena</Link></h3>
                <p>
                  The urban and commercial heartbeat centered around Gardena Boulevard. We connect local business owners and property managers with commercial-grade <Link href="/low-water-pressure-repair/">low water pressure solutions</Link> and main line repairs.
                </p>
                <Link href="/downtown-gardena/" className="card-link">Downtown Gardena Services &rarr;</Link>
              </div>

              <div className="card" style={{ background: 'linear-gradient(135deg, #0F2C59 0%, #1E3A8A 100%)', color: '#FFFFFF' }}>
                <h3 style={{ color: '#FFFFFF' }}>Need Service in Surrounding South Bay?</h3>
                <p style={{ color: '#E0F2FE' }}>
                  We also connect property owners across nearby Torrance, Lawndale, Hawthorne, and Carson with certified water line contractors.
                </p>
                <a href="tel:3108175933" style={{ color: '#FDE047', fontWeight: 800, textDecoration: 'none', marginTop: 'auto' }}>Call Dispatch: (310) 817-5933 &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table: Traditional vs Trenchless Replacement */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Technology Comparison</span>
              <h2>Traditional Trenching vs. Trenchless Water Line Replacement</h2>
              <p className="section-lead">
                Understand your options before authorizing major excavation work on your Gardena property.
              </p>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Feature / Consideration</th>
                    <th scope="col">Trenchless Pipe Pulling / Boring</th>
                    <th scope="col">Traditional Open-Cut Trenching</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Lawn &amp; Landscape Impact</strong></td>
                    <td>Minimal: Only requires two small access pits at the meter and house foundation.</td>
                    <td>High: Continuous 3 to 4-foot deep trench dug across entire front lawn and garden beds.</td>
                  </tr>
                  <tr>
                    <td><strong>Driveway &amp; Concrete Preservation</strong></td>
                    <td>Preserved: Bores directly underneath concrete driveways and walkways without cutting.</td>
                    <td>Disrupted: Concrete must be saw-cut, removed, and later repaved at substantial extra cost.</td>
                  </tr>
                  <tr>
                    <td><strong>Typical Project Duration</strong></td>
                    <td>Usually completed in 4 to 8 hours with same-day water restoration.</td>
                    <td>Often takes 2 to 3 days including trench excavation, backfilling, and surface restoration.</td>
                  </tr>
                  <tr>
                    <td><strong>Pipe Material Used</strong></td>
                    <td>Seamless, heavy-duty PEX-a or continuous Type K soft copper tubing.</td>
                    <td>Standard rigid copper or schedule 40 PVC segments with multiple glued/soldered joints.</td>
                  </tr>
                  <tr>
                    <td><strong>Expected Lifespan</strong></td>
                    <td>50 to 100+ years; highly resistant to corrosion and soil movement.</td>
                    <td>40 to 50 years depending on joint integrity and soil acidity.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                Want to confirm if your property qualifies for trenchless installation? Read our detailed guide on <Link href="/trenchless-water-line-replacement/">trenchless water line replacement in Gardena</Link> or call our team.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Signals & Provider Credibility Section */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Network Standards</span>
              <h2>Why Call Gardena Water Line Pros?</h2>
              <p className="section-lead">
                When you contact our referral service, we connect you with vetted, independent plumbing contractors who meet strict professional standards.
              </p>
            </div>

            <div className="trust-grid">
              <div className="trust-item">
                <span className="trust-item-icon">&#128220;</span>
                <h3>Licensed &amp; Insured</h3>
                <p>
                  We connect you exclusively with contractors holding active California C-36 plumbing licenses and comprehensive liability insurance.
                </p>
              </div>

              <div className="trust-item">
                <span className="trust-item-icon">&#9874;</span>
                <h3>Specialized Equipment</h3>
                <p>
                  The contractors in our network utilize commercial-grade acoustic leak locators, hydraulic pipe pullers, and horizontal boring rigs.
                </p>
              </div>

              <div className="trust-item">
                <span className="trust-item-icon">&#128176;</span>
                <h3>Upfront Written Quotes</h3>
                <p>
                  Technicians inspect your property and provide transparent pricing before any excavation or pipe repair begins—no surprise fees.
                </p>
              </div>

              <div className="trust-item">
                <span className="trust-item-icon">&#128337;</span>
                <h3>Rapid Local Dispatch</h3>
                <p>
                  Because our network focuses specifically on Gardena and the South Bay, emergency calls receive immediate dispatch priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (FAQ) */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Common Questions</span>
              <h2>Gardena Water Service Line FAQs</h2>
              <p className="section-lead">
                Find immediate answers to common questions about water main repairs, costs, responsibilities, and emergency procedures.
              </p>
            </div>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary className="faq-question">Who is responsible for repairing the water service line in Gardena, CA?</summary>
                <div className="faq-answer">
                  <p>
                    In Gardena, the property owner is legally responsible for maintaining and repairing the private water service line extending from the outlet side of the Golden State Water Company meter box (usually located at the street curb or sidewalk) directly to the home&apos;s main shutoff valve. Golden State Water only handles leaks occurring on the municipal water main under the street or before the meter.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">How do I know if my underground water line is leaking?</summary>
                <div className="faq-answer">
                  <p>
                    Key indicators include: a sudden increase in your water bill without a change in household habits, soggy or unusually lush patches of lawn during dry weather, a noticeable drop in whole-house water pressure, the sound of running water when all fixtures are off, or a water meter test indicator triangle that spins when all indoor and outdoor faucets are closed.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">What factors influence the cost of water service line replacement in Gardena?</summary>
                <div className="faq-answer">
                  <p>
                    Total investment depends on the overall distance from the curb meter to your home, the depth of the pipe, ground obstructions (such as concrete driveways, retaining walls, or tree roots), the replacement method chosen (trenchless pipe pulling versus open trenching), and City of Gardena permit and inspection fees. Independent contractors provide itemized, on-site estimates after assessing your property.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">Can you replace my water line without tearing up my concrete driveway?</summary>
                <div className="faq-answer">
                  <p>
                    Yes. In most cases, independent contractors in our network utilize <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link> techniques such as pipe pulling or pneumatic piercing tools. This allows the new water line to be installed directly under existing driveways, walkways, and patios with only two small excavation holes.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">How quickly can a technician be dispatched for an emergency leak?</summary>
                <div className="faq-answer">
                  <p>
                    When you call our local line at <a href="tel:3108175933">(310) 817-5933</a>, emergency calls are routed immediately to on-call plumbing contractors in the Gardena and South Bay area. In urgent situations where water is actively damaging property, technicians prioritize rapid response to isolate the leak and execute emergency repairs.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Final Call to Action Section */}
        <section className="cta-banner">
          <div className="container">
            <h2>Get Your Gardena Water Line Diagnosed Today</h2>
            <p>
              Do not let an underground water leak inflate your utility bills or erode your foundation. Connect with a licensed local water line specialist in Gardena right now.
            </p>
            <div className="cta-banner-buttons">
              <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                <span>CALL (310) 817-5933</span>
                <span className="btn-cta-subtext" style={{ color: '#475569' }}>24/7 South Bay Water Line Dispatch</span>
              </a>
              <Link href="/contact/" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '2px solid #FFFFFF', padding: '1rem 1.75rem', borderRadius: 'var(--radius-md)', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                Request Online Consultation &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
