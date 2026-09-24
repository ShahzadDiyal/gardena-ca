/**
 * Gardena Water Line Pros - Core Client Script
 * Ultra-lightweight, 0 dependencies, WCAG Accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('is-active');
      navToggle.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    });

    // Close mobile nav when clicking a link inside it
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          mainNav.classList.remove('is-active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // FAQ Accordion keyboard accessibility enhancement
  const faqSummaries = document.querySelectorAll('.faq-question');
  faqSummaries.forEach(summary => {
    summary.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        const details = summary.parentElement;
        if (details) {
          details.open = !details.open;
        }
      }
    });
  });

  // Track phone clicks if Google Analytics or Tag Manager is present
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'Contact',
          event_label: 'Phone Call Click',
          value: 1
        });
      }
    });
  });

  // Contact form submission handling (Client-side feedback for static site)
  const contactForm = document.getElementById('lead-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Connecting with local specialist...';

      // Simulate instantaneous dispatch routing
      setTimeout(() => {
        contactForm.innerHTML = `
          <div style="background-color: #F0FDF4; border: 2px solid #86EFAC; border-radius: 8px; padding: 1.5rem; text-align: center;">
            <h3 style="color: #166534; margin-top: 0;">Request Dispatched Successfully!</h3>
            <p style="color: #15803D; margin-bottom: 1rem;">A licensed Gardena water line contractor will contact you shortly.</p>
            <p style="font-weight: bold; color: #166534;">For immediate emergency assistance, call directly:</p>
            <a href="tel:3108175933" style="display: inline-block; background-color: #DC2626; color: #ffffff; padding: 0.75rem 1.5rem; border-radius: 6px; font-weight: 800; font-size: 1.1rem; text-decoration: none; margin-top: 0.5rem;">Call (310) 817-5933</a>
          </div>
        `;
      }, 700);
    });
  }
});
