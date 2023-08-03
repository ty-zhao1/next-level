'use client'
import Link from 'next/link';
import { FC } from 'react';


import { usePathname } from 'next/navigation'

export default function Nav() {
  //const router = useRouter();
  const pathname = usePathname();
  console.log('Current Pathname:', pathname);
  const paths = ["/", "/about", "/exp", "/other"];

  type LinkPath = "/" | "/about" | "/exp" | "/other";

  const currentIndex = paths.indexOf(pathname);
  console.log('Current Index:', currentIndex);
  const arrowDirection = (linkPath: LinkPath) => {
    const linkIndex = paths.indexOf(linkPath);
    console.log('Link Index for', linkPath, 'is:', linkIndex);
    if (linkIndex === currentIndex) return "";
    return linkIndex > currentIndex ? "right" : "left";
  };

  return (
    <nav className="flex justify-around p-4 bg-grey-100">
      <Link href="/">
        <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-blue-200 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base ${arrowDirection("/") === "left" ? "group-hover:-translate-x-1" : ""}`}>
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">{arrowDirection("/") === "left" ? "<- " : ""}</span> Home
        </div>
      </Link>
      <Link href="/about">
        <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-green-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base ${arrowDirection("/about") === "right" ? "group-hover:translate-x-1" : arrowDirection("/about") === "left" ? "group-hover:-translate-x-1" : ""}`}>
          {arrowDirection("/about") === "left" ? "<- " : ""} About {arrowDirection("/about") === "right" ? " ->" : ""}
        </div>
      </Link>
      <Link href="/exp">
        <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-pink-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base ${arrowDirection("/exp") === "right" ? "group-hover:translate-x-1" : arrowDirection("/exp") === "left" ? "group-hover:-translate-x-1" : ""}`}>
          {arrowDirection("/exp") === "left" ? "<- " : ""} Technical {arrowDirection("/exp") === "right" ? " ->" : ""}
        </div>
      </Link>
      <Link href="/other">
        <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-orange-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base ${arrowDirection("/other") === "right" ? "group-hover:translate-x-1" : arrowDirection("/other") === "left" ? "group-hover:-translate-x-1" : ""}`}>
          {arrowDirection("/other") === "left" ? "<- " : ""} Other {arrowDirection("/other") === "right" ? " ->" : ""}
        </div>
      </Link>
    </nav>
  );
}

//   return (
//     <nav className="flex justify-around p-4 bg-grey-100">
//       <Link href="/">
//         <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-blue-200 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base`}>
//           <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">{pathname !== "/" ? "<- " : ""}</span> Home
//         </div>
//       </Link>
//       <Link href="/about">
//         <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-green-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base ${pathname !== "/about" ? "" : "group-hover:translate-x-1"}`}>
//           About <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/about" ? " ->" : ""}</span>
//         </div>
//       </Link>
//       <Link href="/exp">
//         <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-pink-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base ${pathname !== "/experience" ? "" : "group-hover:translate-x-1"}`}>
//           Technical <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/exp" ? " ->" : ""}</span>
//         </div>
//       </Link>
//       <Link href="/other">
//         <div className={`group rounded-lg border border-transparent px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:border-gray-300 hover:bg-orange-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 whitespace-nowrap text-sm sm:text-base ${pathname !== "/projects" ? "" : "group-hover:translate-x-1"}`}>
//           Other <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/other" ? " ->" : ""}</span>
//         </div>
//       </Link>
//     </nav>
//   );

// };