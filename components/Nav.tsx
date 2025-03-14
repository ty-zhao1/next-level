'use client'
import Link from 'next/link';
import { FC } from 'react';


import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname();

  const directory_ordering: Record<string, number> = {
    "/": 0,
    "/about": 1,
    "/exp": 2,
    "/projects": 3,
    "/other": 4
  }
  const arrowDirection = (linkPath: string) => {
    if (directory_ordering[pathname] === directory_ordering[linkPath]) return { symbol: '', translate: '' };
    if (directory_ordering[pathname] > directory_ordering[linkPath]) return { symbol: '<- ', translate: 'group-hover:-translate-x-1' };
    return { symbol: ' ->', translate: 'group-hover:translate-x-1' };
  };

  return (
    <nav className="flex justify-around p-4 bg-grey-100">
      {[
        { path: "/", label: "Home", color: "bg-blue-200", order: 0 },
        { path: "/about", label: "About", color: "bg-green-100", order: 1 },
        { path: "/exp", label: "Technical", color: "bg-pink-100", order: 2 },
        { path: "/projects", label: "Projects", color: "bg-blue-100", order: 3 },
        { path: "/other", label: "More", color: "bg-orange-100", order: 4 }
      ].map(({ path, label, color }) => {
        const { symbol, translate } = arrowDirection(path);
        return (
          <Link key={path} href={path}>
            <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-gray-400 text-gray-200 whitespace-nowrap text-sm sm:text-base`}>
              {symbol.startsWith('<') && <span className={`inline-block transition-transform ${translate} motion-reduce:transform-none`}>{symbol}</span>}
              {label}
              {symbol.endsWith('>') && <span className={`inline-block transition-transform ${translate} motion-reduce:transform-none`}>{symbol}</span>}
            </div>
          </Link>
        )
      })}
    </nav>
  );
}