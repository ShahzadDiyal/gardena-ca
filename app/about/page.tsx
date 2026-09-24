import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About Gardena Water Line Pros | Local Referral & Dispatch Service',
  description: 'Learn about Gardena Water Line Pros. We connect homeowners and businesses in Gardena, CA with licensed, vetted underground water line specialists. Call (310) 817-5933.',
  alternates: {
    canonical: 'https://www.gardenawaterlinepros.com/about/'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.gardenawaterlinepros.com/about/#webpage",
      "url": "https://www.gardenawaterlinepros.com/about/",
      "name": "About Gardena Water Line Pros",
      "description": "About our local referral and customer connection service for water service line repair and trenchless replacement in Gardena, CA.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Gardena Water Line Pros",
        "url": "https://www.gardenawaterlinepros.com/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.gardenawaterlinepros.com/about/#breadcrumbs",
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
          "name": "About Us",
          "item": "https://www.gardenawaterlinepros.com/about/"
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs currentPage="About Us" />
      <main id="main-content">
        <article>
          {/* Hero */}
          <section className="hero" style={{ padding: '3rem 0 3.5rem' }}>
            <div className="container hero-grid">
              <div>
                <div className="hero-badges">
                  <span className="hero-badge">Transparent Referral Service</span>
                  <span className="hero-badge">Gardena, California</span>
                  <span className="hero-badge">Licensed South Bay Partners</span>
                </div>
                <h1>About Gardena Water Line Pros</h1>
                <p className="hero-subhead">
                  We simplify the process of finding trusted, licensed, and insured underground plumbing contractors for residential and commercial property owners throughout Gardena and the South Bay.
                </p>
                <div className="hero-cta-box">
                  <a href="tel:3108175933" className="btn-cta-large">
                    <span>SPEAK WITH DISPATCH: (310) 817-5933</span>
                    <span className="btn-cta-subtext">Immediate Assistance &bull; Fast Local Connection</span>
                  </a>
                </div>
              </div>

              <div className="hero-card-box">
                <h2>Our Core Mission</h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                  When an underground water main ruptures or water pressure collapses, finding a specialized contractor with trenchless pipe pulling equipment should not add to your stress.
                </p>
                <ul className="hero-features-list">
                  <li><span className="check-icon">&#10003;</span> <strong>Direct Matchmaking:</strong> Connect with qualified local contractors</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Specialized Equipment:</strong> Acoustic locators &amp; hydraulic pullers</li>
                  <li><span className="check-icon">&#10003;</span> <strong>Transparent Quotes:</strong> Clear upfront pricing from providers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mission & Model Explanation */}
          <section className="section">
            <div className="container">
              <div className="grid-2">
                <div>
                  <h2>How Our Connection Service Operates</h2>
                  <p>
                    <strong>Gardena Water Line Pros</strong> operates as a specialized referral and dispatch network. We do not directly perform plumbing excavations or pipe repairs ourselves. Instead, we maintain active partnerships with independent, fully licensed California C-36 plumbing contractors who possess the heavy diagnostic and trenchless machinery required to handle underground water service lines.
                  </p>
                  <p>
                    When you call our local hotline at <a href="tel:3108175933"><strong>(310) 817-5933</strong></a>, your call is immediately routed to an available contractor serving your specific neighborhood in Gardena. Whether you need an emergency water shutoff, acoustic leak location, or a scheduled <Link href="/trenchless-water-line-replacement/">trenchless water line replacement</Link>, we ensure you speak directly with an expert who can inspect your property and provide an accurate written estimate.
                  </p>
                  <p>
                    Learn more about our comprehensive service scope on our main <Link href="/">water service line repair in Gardena</Link> authority page.
                  </p>
                </div>

                <div>
                  <h2>What Customers Can Expect</h2>
                  <p>
                    When you connect with an independent contractor through our service, you can expect:
                  </p>
                  <ul>
                    <li><strong>Clear Communication:</strong> Prompt phone response and scheduled arrival windows.</li>
                    <li><strong>On-Site Evaluation:</strong> Thorough inspection of your Golden State Water meter, soil conditions, and foundation shut-off valves.</li>
                    <li><strong>Itemized Written Estimates:</strong> Honest pricing with transparent options between spot repairs, whole-line renewal, and <Link href="/galvanized-pipe-replacement/">galvanized pipe upgrades</Link>.</li>
                    <li><strong>Permitted &amp; Code-Compliant Work:</strong> All excavation and pipe installations are performed under City of Gardena Community Development building codes.</li>
                    <li><strong>Independent Warranties:</strong> Workmanship and pipe material warranties are provided directly by the executing contractor.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Referral Transparency & Credibility Notice */}
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Transparency &amp; Standards</span>
                <h2>Our Commitment to Honest Lead Generation</h2>
                <p className="section-lead">
                  We believe in total transparency regarding our business model and contractor network standards:
                </p>
              </div>

              <div className="grid-3">
                <div className="card">
                  <h3>Independent Contractors</h3>
                  <p>
                    All plumbing, leak detection, and excavation work is performed solely by independent third-party contractors. Gardena Water Line Pros does not employ technicians directly.
                  </p>
                </div>

                <div className="card">
                  <h3>Vetted Licensing Standards</h3>
                  <p>
                    We route calls exclusively to contractors holding valid California Contractors State License Board (CSLB) C-36 plumbing licenses and active commercial general liability coverage.
                  </p>
                </div>

                <div className="card">
                  <h3>No Fabricated Claims</h3>
                  <p>
                    We do not fabricate fake reviews, awards, or company employee statistics. All trust signals and warranties belong directly to the independent contracting companies in our network.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhoods Covered */}
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Service Area</span>
                <h2>Communities We Connect in Gardena, CA</h2>
                <p className="section-lead">
                  Our dispatch helpline covers all residential neighborhoods and commercial areas across the 90247, 90248, and 90249 zip codes:
                </p>
              </div>

              <div className="grid-3">
                <div className="card">
                  <h3><Link href="/strawberry-park/" style={{ color: 'inherit', textDecoration: 'none' }}>Strawberry Park</Link></h3>
                  <p>Historic residential subdivisions with aging post-war water lines.</p>
                  <Link href="/strawberry-park/" className="card-link">Strawberry Park Coverage &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/hollypark/" style={{ color: 'inherit', textDecoration: 'none' }}>Hollypark</Link></h3>
                  <p>North Gardena single-family neighborhoods near Rowley Park.</p>
                  <Link href="/hollypark/" className="card-link">Hollypark Coverage &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/moneta/" style={{ color: 'inherit', textDecoration: 'none' }}>Moneta</Link></h3>
                  <p>South Gardena commercial and residential properties along Western Ave.</p>
                  <Link href="/moneta/" className="card-link">Moneta Coverage &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/el-camino-village/" style={{ color: 'inherit', textDecoration: 'none' }}>El Camino Village</Link></h3>
                  <p>West Gardena residential tracts adjacent to El Camino College.</p>
                  <Link href="/el-camino-village/" className="card-link">El Camino Village Coverage &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/downtown-gardena/" style={{ color: 'inherit', textDecoration: 'none' }}>Downtown Gardena</Link></h3>
                  <p>Gardena Boulevard commercial storefronts and multi-family units.</p>
                  <Link href="/downtown-gardena/" className="card-link">Downtown Gardena Coverage &rarr;</Link>
                </div>

                <div className="card">
                  <h3><Link href="/emergency-water-main-repair/" style={{ color: 'inherit', textDecoration: 'none' }}>Emergency Dispatch</Link></h3>
                  <p>24/7 urgent response for ruptured subterranean water mains.</p>
                  <Link href="/emergency-water-main-repair/" className="card-link">Emergency Protocols &rarr;</Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta-banner">
            <div className="container">
              <h2>Connect With a Trusted Gardena Water Line Specialist</h2>
              <p>
                Call our local helpline now to schedule an on-site evaluation or receive immediate emergency dispatch.
              </p>
              <div className="cta-banner-buttons">
                <a href="tel:3108175933" className="btn-cta-large" style={{ background: '#FFFFFF', color: '#0F2C59' }}>
                  <span>CALL NOW: (310) 817-5933</span>
                  <span className="btn-cta-subtext" style={{ color: '#475569' }}>Serving Gardena, CA &amp; South Bay</span>
                </a>
                <Link href="/contact/" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '2px solid #FFFFFF', padding: '1rem 1.75rem', borderRadius: 'var(--radius-md)', fontWeight: 700, textDecoration: 'none' }}>
                  Contact Dispatch &rarr;
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
