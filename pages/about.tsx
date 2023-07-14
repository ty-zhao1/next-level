// pages/about.tsx

// import Link from 'next/link';
// import Nav from '../components/Nav';
// import { NextPage } from 'next';

// const AboutPage: NextPage = () => {
//   return (
//     <div>
//       <h1>About Me</h1>
//       <Link href="/">Go back home</Link>
//     </div>
//   );
// };

// export default AboutPage;
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold text-black dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
          This is a placeholder. Here, you can write about your professional background, skills, education, interests, etc.
        </p>
        {/* <div className="mt-8">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              ← Back to Home
            </a>
          </Link>
        </div> */}
        <div className="mt-8">
          <Link href="/">
            <p className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer">
              ← Back to Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
  // return (
  //   <h1>Hello</h1>
  // );
}

// const About = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-black">
//       <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="text-4xl font-extrabold text-black dark:text-white">
//           About Me
//         </h2>
//         <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
//           This is a placeholder. Here, you can write about your professional background, skills, education, interests, etc.
//         </p>
//         <div className="mt-8">
//           <Link href="/">
//             <a className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
//               ← Back to Home
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;