'use client'
import Link from 'next/link';
import { FC } from 'react';


import {usePathname } from 'next/navigation'

export default function Nav() {
    //const router = useRouter();
    const pathname = usePathname();
  
    return (
      <nav className="flex justify-around p-4 bg-grey-100">
        <Link href="/">
        <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-200 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200`}>
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">{pathname !== "/" ? "<- " : ""}</span> Home
        </div>
        </Link>
        <Link href="/about">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-green-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 ${pathname !== "/about" ? "" : "group-hover:translate-x-1"}`}>
            About <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/about" ? " ->" : ""}</span>
          </div>
        </Link>
        <Link href="/exp">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-pink-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 ${pathname !== "/experience" ? "" : "group-hover:translate-x-1"}`}>
            Technical <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/exp" ? " ->" : ""}</span>
          </div>
        </Link>
        <Link href="/other">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-100 dark:hover:bg-gray-400 text-gray-900 dark:text-gray-200 ${pathname !== "/projects" ? "" : "group-hover:translate-x-1"}`}>
            Other <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/other" ? " ->" : ""}</span>
          </div>
        </Link>
      </nav>
    );
  };