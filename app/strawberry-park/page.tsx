import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Strawberry Park Gardena Water Line Repair & Trenchless Replacement',
  description: 'Water service line repair and trenchless pipe replacement in Strawberry Park, Gardena CA. Fast local dispatch for underground leak detection & main repairs. Call (310) 817-5933.',
  alternates: {
    canonical: 'https://fixwaterca.online/strawberry-park/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": "https://fixwaterca.online/strawberry-park/#place",
      "name": "Strawberry Park, Gardena, CA",
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
      "@id": "https://fixwaterca.online/strawberry-park/#breadcrumbs",
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
          "name": "Strawberry Park",
          "item": "https://fixwaterca.online/strawberry-park/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://fixwaterca.online/strawberry-park/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why are water line leaks common in Strawberry Park, Gardena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Strawberry Park is one of Gardena's historic residential hubs, with many homes built in the 1940s and 1950s using threaded galvanized iron pipes. These lines have reached the end of their engineered lifespan, suffering from internal corrosion and shear stress from South Bay clay soil movement."
          }
        },
        {
          "@type": "Question",
          "name": "Can my Strawberry Park water line be replaced without digging up my front yard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Contractors in our network specialize in trenchless pipe pulling and directional boring. This installs a new continuous PEX-a or copper line from your Golden State Water meter to your foundation with only two small access holes, preserving your lawn and concrete driveway."
          }
        }
      ]
    }
  ]
};

export default function StrawberryParkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="Strawberry Park" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Strawberry Park &bull; 90247 &amp; 90249</span>
                  <span className="hero-badge">Local Plumbing Dispatch</span>
                  <span className="hero-badge">No-Dig Pipe Pulling</span>
                </div>
                <h1>Strawberry Park Gardena Water Line Repair &amp; Replacement</h1>
                <p className="hero-subhead">
                  Facing an underground water leak, low fixture pressure, or an unexpectedly high Golden State Water utility bill in Strawberry Park? We connect neighborhood homeowners with vetted, licensed plumbing specialists for precision acoustic leak detection and non-invasive trenchless line renewal.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>CALL STRAWBERRY PARK DISPATCH: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Immediate Local Connection &bull; Upfront Estimates</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Strawberry Park Services</h2>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Trenchless Pipe Pulling:</strong> Protect driveways along 135th &amp; 140th St</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Acoustic Leak Detection:</strong> Pinpoint breaks between meter &amp; house</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Galvanized Line Upgrades:</strong> Replace corroded 1950s steel piping</li>
                  <li><span className="check-icon">&#10003;</span> <strong>24/7 Emergency Dispatch:</strong> Rapid response for yard blowouts</li>
                </ul>
                <div className="referral-notice">
                  <strong>Local Dispatch:</strong> Matching Strawberry Park residents with licensed, insured South Bay plumbing contractors.
                </div>
              </div>
            </div>
          </section>

          {/* Local Community Introduction */}
          <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
            <div className="container">
              <div className="direct-answer-box">
                <h2>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0284C7" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  Water Line Infrastructure in Strawberry Park, Gardena
                </h2>
                <p className="direct-answer-text">
                  Historically known for its rich agricultural roots, <strong>Strawberry Park</strong> is one of Gardena&apos;s original core communities that joined in the city&apos;s 1930 incorporation. The neighborhood features a dense concentration of charming single-family post-war ranch homes centered around Western Avenue, Rosecrans Avenue, and 135th Street. Most of these properties were plumbed with galvanized steel water service lines that have now reached 60 to 75 years of age, making subterranean pipe corrosion, pinhole leaks, and flow restrictions widespread across the community.
                </p>
              </div>
            </div>
          </section>

          {/* Local Challenges & Solutions */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Neighborhood Focus</span>
                <h2>Common Water Line Challenges in Strawberry Park</h2>
                <p className="section-lead">
                  Why Strawberry Park homeowners frequently require specialized water service line intervention:
                </p>
              </div>

              <div className="grid-2">
                <div>
                  <h3>Aging Galvanized Main Lines &amp; Mineral Scale</h3>
                  <p>
                    Many residences throughout Strawberry Park still rely on their original 1940s–1950s galvanized intake pipes. Over decades, mineral calcification and internal iron oxidation narrow the pipe interior, causing water flow to dwindle whenever multiple taps run.
                  </p>
                  <p>
                    Upgrading these failing lines through our trusted network for <Link href="/galvanized-pipe-replacement/">galvanized pipe replacement in Gardena</Link> restores full municipal pressure and eliminates morning rust discoloration.
                  </p>
                  <h3>Preserving Established Front Yards &amp; Driveways</h3>
                  <p>
                    Strawberry Park is renowned for its well-maintained front lawns and mature neighborhood foliage. Traditional trenching tears up grass, shrubs, and concrete driveway approaches. By deploying <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link>, contractors pull seamless PEX-a or Type K copper underneath the yard with zero trenching.
                  </p>
                </div>

                <div>
                  <h3>Underground Clay Movement &amp; Tree Roots</h3>
                  <p>
                    The South Bay clay loam in Strawberry Park shifts between dry summers and rainy winters, placing physical shear stress on brittle subterranean fittings. Furthermore, aggressive roots from mature landscape trees can wrap around leaking joints.
                  </p>
                  <p>
                    If you notice soggy soil between your sidewalk meter box and foundation, schedule prompt <Link href="/underground-water-leak-detection/">underground water leak detection</Link> before subterranean erosion causes slab damage. For comprehensive whole-home solutions, learn more about our <Link href="/">water service line repair in Gardena</Link>.
                  </p>

                  <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--color-primary-dark)' }}>City of Gardena Code Compliance</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                      Contractors in our referral network manage all required City of Gardena Community Development plumbing permits, DigAlert utility coordination, and final inspection sign-offs for Strawberry Park residents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Available in Strawberry Park */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Available Services</span>
                <h2>Complete Water Line Solutions for Strawberry Park</h2>
              </div>

            <div className="grid-3">
              <div className="card">
                <h3><Link href="/trenchless-water-line-replacement/" style={{ color: 'inherit', textDecoration: 'none' }}>Trenchless Pipe Pulling</Link></h3>
                <p>
                  Pull seamless, corrosion-proof PEX-a or copper piping beneath concrete driveways and lawns without open-trench digging.
                </p>
                <Link href="/trenchless-water-line-replacement/" className="card-link">Trenchless Details &rarr;</Link>
              </div>

              <div className="card">
                <h3><Link href="/emergency-water-main-repair/" style={{ color: 'inherit', textDecoration: 'none' }}>Emergency Main Repair</Link></h3>
                <p>
                  24/7 urgent response across Strawberry Park for burst water mains, geysers, and emergency meter isolation.
                </p>
                <Link href="/emergency-water-main-repair/" className="card-link">Emergency Protocols &rarr;</Link>
              </div>

              <div className="card">
                <h3><Link href="/water-meter-to-house-replacement/" style={{ color: 'inherit', textDecoration: 'none' }}>Meter-to-House Renewal</Link></h3>
                <p>
                  Replace the entire private supply line from the Golden State Water curb meter to your home shutoff valve.
                </p>
                <Link href="/water-meter-to-house-replacement/" className="card-link">Whole-Line Info &rarr;</Link>
              </div>
            </div>

            <div style={{ marginTop: '2rem', background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <h3 style={{ marginTop: 0, fontSize: '1.15rem' }}>Serving Nearby Gardena Neighborhoods</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                In addition to Strawberry Park, our network provides fast local dispatch to adjacent communities including <Link href="/hollypark/">Hollypark</Link> to the north, <Link href="/moneta/">Moneta</Link> to the south, and <Link href="/el-camino-village/">El Camino Village</Link> to the west.
              </p>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Local FAQs</span>
              <h2>Strawberry Park Water Line FAQs</h2>
            </div>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary className="faq-question">Why are water line leaks common in Strawberry Park, Gardena?</summary>
                <div className="faq-answer">
                  <p>
                    Strawberry Park is one of Gardena&apos;s historic residential hubs, with many homes built in the 1940s and 1950s using threaded galvanized iron pipes. These lines have reached the end of their engineered lifespan, suffering from internal corrosion and shear stress from South Bay clay soil movement.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">How do I shut off my water in Strawberry Park during an emergency?</summary>
                <div className="faq-answer">
                  <p>
                    Locate your Golden State Water meter box near the street sidewalk. Use a water curb key or channel lock pliers to rotate the brass valve clockwise 90 degrees. If the valve is seized or inaccessible, call our 24/7 hotline at <a href="tel:3108175933"><strong>(310) 817-5933</strong></a> for immediate dispatch.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">Can low pressure in my shower be fixed by replacing the main line?</summary>
                <div className="faq-answer">
                  <p>
                    Yes. If diagnostic tests confirm that your existing supply line is clogged with rust scale or leaking underground, upgrading to a 1-inch PEX-a or copper line restores full pressure. Check our guide on <Link href="/low-water-pressure-repair/">low water pressure repair</Link> for full details.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-banner">
          <div className="container">
            <h2>Get Fast Water Line Help in Strawberry Park</h2>
            <p>
              Connect with a licensed local plumbing contractor for prompt diagnosis and upfront repair quotes.
            </p>
            <div className="cta-banner-buttons">
              <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                <span>CALL NOW: (310) 817-5933</span>
                <span className="btn-cta-subtext" style={{ color: '#475569' }}>Serving Strawberry Park &amp; Gardena, CA</span>
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
