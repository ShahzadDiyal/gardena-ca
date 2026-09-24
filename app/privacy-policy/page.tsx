import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Gardena Water Line Pros',
  description: 'Privacy Policy and consumer data protection disclosure for Gardena Water Line Pros referral and dispatch services.',
  alternates: {
    canonical: 'https://www.gardenawaterlinepros.com/privacy-policy/'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs currentPage="Privacy Policy" />
      <main id="main-content">
        <section className="section">
          <div className="container" style={{ maxWidth: '850px' }}>
            <h1>Privacy Policy</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Last Updated: September 2026</p>

            <h2>1. Overview &amp; Referral Service Disclosure</h2>
            <p>
              Gardena Water Line Pros (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates a local lead generation, dispatch, and referral connection platform. This Privacy Policy details how we collect, handle, and transfer personal information when you use our website or contact our phone dispatch service.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              When you interact with our website or call our helpline, we may collect:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Full name, phone number, physical service address or neighborhood, and email address.</li>
              <li><strong>Project Details:</strong> Information describing your water line emergency, leak symptoms, or pipe replacement preferences.</li>
              <li><strong>Call Recordings &amp; Telephony Metadata:</strong> Time of call, phone number dialed, caller ID, and call duration for quality assurance and dispatch routing.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and anonymous analytical interaction logs.</li>
            </ul>

            <h2>3. How We Use &amp; Share Information</h2>
            <p>
              We use your information exclusively to connect you with independent, licensed plumbing and excavation contractors servicing Gardena, CA and the South Bay. When you submit a request or place a call, your contact details and service requirements are shared directly with local contractor partners so they may contact you, inspect your property, and provide quotes.
            </p>
            <p>
              We do not sell or rent your personal information to unrelated third-party marketers.
            </p>

            <h2>4. Cookies &amp; Analytics</h2>
            <p>
              Our website uses minimal, privacy-conscious analytics to measure site traffic and call performance. You can disable cookies in your web browser settings at any time without restricting your access to our emergency phone line.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard administrative and technical security measures to protect submitted contact details against unauthorized access, alteration, or disclosure.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to request deletion of your contact information, please visit our <Link href="/contact/">contact page</Link> or call <a href="tel:3108175933">(310) 817-5933</a>.
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
