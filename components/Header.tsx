'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsOpen(prev => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  // Close when pathname changes
  useEffect(() => {
    closeNav();
  }, [pathname]);

  const isServiceActive = [
    '/trenchless-water-line-replacement',
    '/underground-water-leak-detection',
    '/emergency-water-main-repair',
    '/galvanized-pipe-replacement',
    '/low-water-pressure-repair',
    '/water-meter-to-house-replacement'
  ].some(path => pathname.includes(path));

  const isAreaActive = [
    '/strawberry-park',
    '/hollypark',
    '/moneta',
    '/el-camino-village',
    '/downtown-gardena'
  ].some(path => pathname.includes(path));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label="Gardena Water Line Pros Home" onClick={closeNav}>
          <Image
            src="/images/logo.svg"
            alt="Gardena Water Line Pros"
            width={260}
            height={54}
            priority
            className="header-logo"
          />
        </Link>

        <button
          className="mobile-nav-toggle"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleNav}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <nav className={`main-nav ${isOpen ? 'is-active' : ''}`} aria-label="Main site navigation">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                onClick={closeNav}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className={`nav-item has-dropdown ${servicesOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`nav-link dropdown-toggle ${isServiceActive ? 'active' : ''}`}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <svg className={`dropdown-caret ${servicesOpen ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className={`dropdown-menu ${servicesOpen ? 'is-visible' : ''}`}>
                <div className="dropdown-menu-inner">
                  <Link
                    href="/trenchless-water-line-replacement/"
                    className={`dropdown-item ${pathname.includes('/trenchless-water-line-replacement') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Trenchless Replacement</span>
                    <span className="dropdown-item-desc">No-dig pipe pulling &amp; boring</span>
                  </Link>

                  <Link
                    href="/underground-water-leak-detection/"
                    className={`dropdown-item ${pathname.includes('/underground-water-leak-detection') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Leak Detection</span>
                    <span className="dropdown-item-desc">Acoustic subterranean diagnostics</span>
                  </Link>

                  <Link
                    href="/emergency-water-main-repair/"
                    className={`dropdown-item ${pathname.includes('/emergency-water-main-repair') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Emergency Main Repair</span>
                    <span className="dropdown-item-desc">24/7 urgent pipe leak response</span>
                  </Link>

                  <Link
                    href="/galvanized-pipe-replacement/"
                    className={`dropdown-item ${pathname.includes('/galvanized-pipe-replacement') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Galvanized Upgrades</span>
                    <span className="dropdown-item-desc">Copper &amp; PEX-a repiping</span>
                  </Link>

                  <Link
                    href="/low-water-pressure-repair/"
                    className={`dropdown-item ${pathname.includes('/low-water-pressure-repair') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Low Pressure Repair</span>
                    <span className="dropdown-item-desc">PRV valve &amp; mineral scale fix</span>
                  </Link>

                  <Link
                    href="/water-meter-to-house-replacement/"
                    className={`dropdown-item ${pathname.includes('/water-meter-to-house-replacement') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Meter-to-House Replacement</span>
                    <span className="dropdown-item-desc">Full supply line installation</span>
                  </Link>
                </div>
              </div>
            </li>

            {/* Service Areas Dropdown */}
            <li
              className={`nav-item has-dropdown ${areasOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                type="button"
                className={`nav-link dropdown-toggle ${isAreaActive ? 'active' : ''}`}
                aria-expanded={areasOpen}
                onClick={() => setAreasOpen(!areasOpen)}
              >
                <span>Service Areas</span>
                <svg className={`dropdown-caret ${areasOpen ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className={`dropdown-menu dropdown-menu-compact ${areasOpen ? 'is-visible' : ''}`}>
                <div className="dropdown-menu-inner">
                  <Link
                    href="/strawberry-park/"
                    className={`dropdown-item ${pathname.includes('/strawberry-park') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Strawberry Park</span>
                  </Link>
                  <Link
                    href="/hollypark/"
                    className={`dropdown-item ${pathname.includes('/hollypark') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Hollypark</span>
                  </Link>
                  <Link
                    href="/moneta/"
                    className={`dropdown-item ${pathname.includes('/moneta') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Moneta</span>
                  </Link>
                  <Link
                    href="/el-camino-village/"
                    className={`dropdown-item ${pathname.includes('/el-camino-village') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">El Camino Village</span>
                  </Link>
                  <Link
                    href="/downtown-gardena/"
                    className={`dropdown-item ${pathname.includes('/downtown-gardena') ? 'active' : ''}`}
                    onClick={closeNav}
                  >
                    <span className="dropdown-item-title">Downtown Gardena</span>
                  </Link>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link
                href="/about/"
                className={`nav-link ${pathname.includes('/about') ? 'active' : ''}`}
                onClick={closeNav}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/contact/"
                className={`nav-link ${pathname.includes('/contact') ? 'active' : ''}`}
                onClick={closeNav}
              >
                Contact
              </Link>
            </li>

            <li className="nav-cta-item desktop-only-cta">
              <a href="tel:3108175933" className="header-cta-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                </svg>
                <span>(310) 817-5933</span>
              </a>
            </li>

            <li className="mobile-drawer-cta-item mobile-only-cta">
              <a href="tel:3108175933" className="mobile-menu-cta-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                </svg>
                <span>Call 24/7 Helpline: (310) 817-5933</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
