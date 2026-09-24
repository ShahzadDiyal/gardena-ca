import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | Gardena Water Line Pros',
  description: 'Terms of service, referral disclosures, and independent contractor terms for Gardena Water Line Pros.',
  alternates: {
    canonical: 'http://fixwaterca.online/terms-of-service/'
  }
};

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs currentPage="Terms of Service" />
      <main id="main-content">
        <section className="section">
          <div className="container" style={{ maxWidth: '850px' }}>
            <h1>Terms of Service</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Last Updated: September 2026</p>

            <h2>1. Nature of the Referral Service</h2>
            <p>
              Gardena Water Line Pros is a free advertising, dispatch, and referral connection platform designed to connect consumers with independent local service contractors in Gardena, CA and surrounding South Bay communities. <strong>Gardena Water Line Pros is not a licensed plumbing contractor, does not perform plumbing or excavation work, and is not an employer or agent of the contractors to whom calls and inquiries are routed.</strong>
            </p>

            <h2>2. Independent Contractor Relationship</h2>
            <p>
              All plumbing repairs, leak locating, trenchless replacements, pipe excavations, permitting, and construction activities are performed solely by independent third-party contractors. Each contractor operates their own business entity, establishes their own pricing and warranty policies, and maintains their own California C-36 plumbing licenses and liability insurance.
            </p>

            <h2>3. Consumer Verification Responsibility</h2>
            <p>
              While we strive to match consumers with reputable, licensed professionals, it remains the sole responsibility of the property owner to verify that any contractor engaged holds valid licensing with the California Contractors State License Board (CSLB), carries adequate workers&apos; compensation and general liability insurance, and obtains all mandatory City of Gardena building permits prior to commencing work.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              In no event shall Gardena Water Line Pros, its owners, or affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the work performed by any contractor referred through this website or phone dispatch service, including but not limited to property damage, water loss, plumbing failures, personal injury, or contractual disputes between the consumer and the contractor.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of California.
            </p>

            <h2>6. Contact Inquiries</h2>
            <p>
              For questions regarding these Terms of Service, please reach out via our <Link href="/contact/">contact page</Link> or call our team at <a href="tel:3108175933">(310) 817-5933</a>.
            </p>

            <p style={{ marginTop: '2rem' }}>
              <Link href="/" style={{ fontWeight: 700 }}>&larr; Return to Gardena Water Line Pros Homepage</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
