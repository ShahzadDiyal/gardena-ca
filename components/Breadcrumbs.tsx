import React from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
  currentPage: string;
}

export default function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs-bar" aria-label="Breadcrumbs">
      <div className="container">
        <ol className="breadcrumbs-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page">{currentPage}</li>
        </ol>
      </div>
    </nav>
  );
}
