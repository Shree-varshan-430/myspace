import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, className = '', theme = 'light' }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.myspacebangalore.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `https://www.myspacebangalore.com${item.href}`,
      })),
    ],
  };

  const isDark = theme === 'dark';

  return (
    <nav aria-label="Breadcrumb" className={`text-xs font-sans ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-navy-900'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${
                  isDark ? 'text-slate-600' : 'text-slate-400'
                }`}
              />
              {isLast ? (
                <span
                  className={`font-medium truncate max-w-[220px] sm:max-w-xs ${
                    isDark ? 'text-brand-blue' : 'text-navy-900 font-semibold'
                  }`}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors truncate max-w-[150px] ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-navy-900'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
