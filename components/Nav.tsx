'use client'
import Link from 'next/link';
import { FC } from 'react';


import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname();

  const arrowDirection = (linkPath: string) => {
    if (pathname === linkPath) return { symbol: '', translate: '' };
    if (pathname > linkPath) return { symbol: '<- ', translate: 'group-hover:-translate-x-1' };
    return { symbol: ' ->', translate: 'group-hover:translate-x-1' };
  };

  return (
    <nav className="flex justify-around p-4 bg-grey-100">
      {[
        { path: "/", label: "Home", color: "bg-blue-200" },
        { path: "/about", label: "About", color: "bg-green-100" },
        { path: "/exp", label: "Technical", color: "bg-pink-100" },
        { path: "/other", label: "Other", color: "bg-orange-100" }
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
  // const arrowDirection = (linkPath: string) => {
  //   if (pathname === linkPath) return { symbol: '', translate: '' };
  //   if (pathname > linkPath) return { symbol: '<- ', translate: '-translate-x-1' };
  //   return { symbol: ' ->', translate: 'translate-x-1' };
  // };

  // return (
  //   <nav className="flex justify-around p-4 bg-grey-100">
  //     {[
  //       { path: "/", label: "Home" },
  //       { path: "/about", label: "About" },
  //       { path: "/exp", label: "Technical" },
  //       { path: "/other", label: "Other" }
  //     ].map(({ path, label }) => {
  //       const { symbol, translate } = arrowDirection(path);
  //       return (
  //         <Link key={path} href={path}>
  //           <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-blue-200 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base`}>
  //             {symbol.startsWith('<') && <span className={`inline-block transition-transform group-hover:${translate} motion-reduce:transform-none`}>{symbol}</span>}
  //             {label}
  //             {symbol.endsWith('>') && <span className={`inline-block transition-transform group-hover:${translate} motion-reduce:transform-none`}>{symbol}</span>}
  //           </div>
  //         </Link>
  //       )
  //     })}
  //   </nav>
  // );
  //   }