import React from 'react';

export default function StickyMobileBar() {
  return (
    <aside className="sticky-mobile-call-bar" aria-label="Mobile Call Action">
      <a href="tel:3108175933" className="mobile-call-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
        </svg>
        <span>Call (310) 817-5933</span>
      </a>
    </aside>
  );
}
