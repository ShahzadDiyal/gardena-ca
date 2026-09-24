import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Gardena Water Line Pros Home">
              <Image
                src="/images/logo.svg"
                alt="Gardena Water Line Pros"
                width={240}
                height={50}
                className="footer-logo"
              />
            </Link>
            <p>
              Gardena Water Line Pros connects property owners throughout Gardena, CA and the South Bay with licensed, independent plumbing contractors specializing in underground water line repair, leak detection, and trenchless pipe replacement.
            </p>
            <div className="footer-helpline-box">
              <span className="footer-helpline-label">24/7 Emergency Helpline:</span>
              <a href="tel:3108175933" className="footer-phone-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                </svg>
                <span>(310) 817-5933</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link href="/trenchless-water-line-replacement/">Trenchless Replacement</Link></li>
              <li><Link href="/underground-water-leak-detection/">Underground Leak Detection</Link></li>
              <li><Link href="/emergency-water-main-repair/">Emergency Main Repair</Link></li>
              <li><Link href="/galvanized-pipe-replacement/">Galvanized Pipe Upgrades</Link></li>
              <li><Link href="/low-water-pressure-repair/">Low Water Pressure Repair</Link></li>
              <li><Link href="/water-meter-to-house-replacement/">Meter-to-House Replacement</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Service Areas</h3>
            <ul className="footer-links">
              <li><Link href="/strawberry-park/">Strawberry Park</Link></li>
              <li><Link href="/hollypark/">Hollypark</Link></li>
              <li><Link href="/moneta/">Moneta</Link></li>
              <li><Link href="/el-camino-village/">El Camino Village</Link></li>
              <li><Link href="/downtown-gardena/">Downtown Gardena</Link></li>
              <li><Link href="/contact/">View All Coverage</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Information</h3>
            <ul className="footer-links">
              <li><Link href="/about/">About Our Service</Link></li>
              <li><Link href="/contact/">Contact Dispatch</Link></li>
              <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service/">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            <strong>Referral &amp; Advertising Disclosure:</strong> Gardena Water Line Pros is a free referral and marketing service that connects consumers with local service providers. All contractors are independent, and Gardena Water Line Pros does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the contractor possesses the necessary licenses and insurance required for the work being performed.
          </p>
          <div className="footer-bottom-flex">
            <p className="footer-copyright">
              &copy; 2026 Gardena Water Line Pros. All rights reserved. Serving Gardena, CA 90247, 90248, 90249 and surrounding South Bay communities.
            </p>
            <div className="footer-legal-links">
              <Link href="/privacy-policy/">Privacy Policy</Link>
              <span className="footer-legal-sep" aria-hidden="true">&bull;</span>
              <Link href="/terms-of-service/">Terms of Service</Link>
              <span className="footer-legal-sep" aria-hidden="true">&bull;</span>
              <Link href="/contact/">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
