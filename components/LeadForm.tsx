'use client';

import React, { useState } from 'react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: '#F0FDF4', border: '2px solid #86EFAC', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
        <h3 style={{ color: '#166534', marginTop: 0 }}>Request Dispatched Successfully!</h3>
        <p style={{ color: '#15803D', marginBottom: '1rem' }}>A licensed Gardena water line contractor will contact you shortly.</p>
        <p style={{ fontWeight: 'bold', color: '#166534' }}>For immediate emergency assistance, call directly:</p>
        <a
          href="tel:3108175933"
          style={{
            display: 'inline-block',
            backgroundColor: '#DC2626',
            color: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            fontWeight: 800,
            fontSize: '1.1rem',
            textDecoration: 'none',
            marginTop: '0.5rem'
          }}
        >
          Call (310) 817-5933
        </a>
      </div>
    );
  }

  return (
    <form id="lead-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="full-name" className="form-label">Full Name *</label>
        <input type="text" id="full-name" name="full-name" className="form-control" placeholder="Jane Doe" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone-number" className="form-label">Phone Number *</label>
        <input type="tel" id="phone-number" name="phone-number" className="form-control" placeholder="(310) 555-0123" required />
      </div>

      <div className="form-group">
        <label htmlFor="service-needed" className="form-label">Service Needed *</label>
        <select id="service-needed" name="service-needed" className="form-control" required defaultValue="">
          <option value="" disabled>Select a service...</option>
          <option value="trenchless">Trenchless Water Line Replacement</option>
          <option value="leak-detection">Underground Water Leak Detection</option>
          <option value="emergency-repair">Emergency Water Main Repair</option>
          <option value="galvanized-upgrade">Galvanized Pipe Replacement</option>
          <option value="low-pressure">Low Water Pressure Repair / PRV</option>
          <option value="meter-to-house">Meter-to-House Pipe Replacement</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="neighborhood" className="form-label">Gardena Neighborhood / Zip Code</label>
        <select id="neighborhood" name="neighborhood" className="form-control" defaultValue="90247">
          <option value="90247">Gardena (90247)</option>
          <option value="90248">Gardena (90248)</option>
          <option value="90249">Gardena (90249)</option>
          <option value="strawberry-park">Strawberry Park</option>
          <option value="hollypark">Hollypark</option>
          <option value="moneta">Moneta</option>
          <option value="el-camino-village">El Camino Village</option>
          <option value="downtown-gardena">Downtown Gardena</option>
          <option value="other-south-bay">Other South Bay City</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="project-details" className="form-label">Describe Your Water Line Issue</label>
        <textarea id="project-details" name="project-details" className="form-control" placeholder="E.g., high water bill, soggy lawn patch near sidewalk meter, shower pressure dropped..."></textarea>
      </div>

      <button type="submit" className="btn-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Connecting with local specialist...' : 'Dispatch My Request →'}
      </button>
    </form>
  );
}
