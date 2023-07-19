'use client'

import Link from 'next/link';
import { FC } from 'react';


import {usePathname } from 'next/navigation'

const Nav = () => {
    //const router = useRouter();
    const pathname = usePathname();
  
    return (
      <nav className="flex justify-around p-4 bg-grey-100">
        <Link href="/">
        <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-gray-900`}>
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">{pathname !== "/" ? "<- " : ""}</span> Home
        </div>
        </Link>
        <Link href="/about">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-green-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-gray-900 ${pathname !== "/about" ? "" : "group-hover:translate-x-1"}`}>
            About <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/about" ? " ->" : ""}</span>
          </div>
        </Link>
        <Link href="/exp">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-pink-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-gray-900 ${pathname !== "/experience" ? "" : "group-hover:translate-x-1"}`}>
            Experience <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/exp" ? " ->" : ""}</span>
          </div>
        </Link>
        <Link href="/projects">
          <div className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-gray-900 ${pathname !== "/projects" ? "" : "group-hover:translate-x-1"}`}>
            Projects <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">{pathname !== "/projects" ? " ->" : ""}</span>
          </div>
        </Link>
      </nav>
    );
  };

  export default Nav;

// const Nav = () => {
//   const router = useRouter();

//   return (
//     <nav className="flex justify-around p-4 bg-blue-300">
//       <Link 
//         href="/" 
//         className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-white ${router.pathname !== "/" ? "group-hover:translate-x-1" : ""}`}
//       >
//         {router.pathname !== "/" ? "<- " : ""} Home
//       </Link>
//       <Link 
//         href="/about" 
//         className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-white ${router.pathname !== "/about" ? "group-hover:translate-x-1" : ""}`}
//       >
//         About {router.pathname !== "/about" ? " ->" : ""}
//       </Link>
//       <Link 
//         href="/exp"
//         className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-white ${router.pathname !== "/experience" ? "group-hover:translate-x-1" : ""}`}
//       >
//         Experience {router.pathname !== "/exp" ? " ->" : ""}
//       </Link>
//       <Link 
//         href="/projects"
//         className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-500 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-white ${router.pathname !== "/projects" ? "group-hover:translate-x-1" : ""}`}
//       >
//         Projects {router.pathname !== "/projects" ? " ->" : ""}
//       </Link>
//     </nav>
//   );
// };

// const Nav: FC = () => {
//   return (
//     <nav>
//       <Link href="/">Home</Link>
//       <Link href="/about">About</Link>
//       <Link href="/experience">Experience</Link>
//       <Link href="/projects">Projects</Link>
//     </nav>
//   );
// };

// const Nav: FC = () => {
//     return (
//       <nav className="flex justify-around py-4 bg-white dark:bg-black bg-gray-200">
//         <Link href="/" className="text-black-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
//           Home
//         </Link>
//         <Link href="/about" className="text-black-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
//           About
//         </Link>
//         <Link href="/exp" className="text-black-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
//           Experience
//         </Link>
//         <Link href="/projects" className="text-black-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
//           Projects
//         </Link>
//       </nav>
//     );
//   };

// export default Nav;

// const Nav: FC = () => {
//     return (
//       <nav className="flex justify-around p-4 bg-blue-900">
//         <Link href="/" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-white">
//             Home <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//         </Link>
//         <Link href="/about" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-white">
//             About <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//         </Link>
//         <Link href="/exp" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-white">
//             Experience <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//         </Link>
//         <Link href="/projects" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-white">
//             Projects <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                 -&gt;
//               </span>
//         </Link>
//       </nav>
//     );
//   };
  
//   export default Nav;

//<Link href="/music">Music</Link>
//<Link href="/food">Food</Link>
//<Link href="/resume">Resume</Link>