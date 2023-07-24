'use client'
import Link from 'next/link';
import Nav from '../../components/Nav';
import { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    logoSrc: '/pfizer.png',
    companyName: 'Pfizer',
    duration: 'Jan 2020 - Dec 2021',
    role: 'Software Engineer',
    description: 'Working as an intern on a machine learning-based tool to predict viral antigenicity. Applications to influenza, COVID-19, and other infectious diseases.\
    ',
  },
  {
    id: 2,
    logoSrc: '/gastro.png',
    companyName: 'Stanford',
    duration: 'Jan 2020 - Dec 2021',
    role: 'Software Engineer',
    description: 'Description of Company 2',
  },
  // Add more experiences as needed
  {
    id: 3,
    logoSrc: '/next.svg',
    companyName: 'Dummy',
    duration: 'Jan 2020 - Dec 2021',
    role: 'Software Engineer',
    description: 'Description of Company 2',
  },
  {
    id: 4,
    logoSrc: '/next.svg',
    companyName: 'Dummy',
    duration: 'Jan 2020 - Dec 2021',
    role: 'Software Engineer',
    description: 'Description of Company 2',
  },
];

// export default function Exp() {
//   return (
//     <div className="min-h-screen bg-pink-100">
//       <Nav />
//       <div className="px-4 py-4 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="text-4xl font-extrabold text-black dark:text-white">
//           My experience
//         </h2>
//         {experiences.map((experience, index) => (
//           <div key={experience.id} className="flex items-center mt-8">
//             <div className="mr-4 w-48 h-48 rounded-md overflow-hidden">
//               <Image
//                 src={experience.logoSrc}
//                 alt={`${experience.companyName} Logo`}
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div className="flex-1 grid place-items-center">
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold">{experience.companyName}</h3>
//                 <p className="mt-2 text-gray-500 dark:text-gray-200">
//                   {experience.duration} | {experience.role}
//                 </p>
//                 <p className="mt-2 text-lg text-gray-500 dark:text-gray-200">
//                   {experience.description}
//                 </p>
//               </div>
//               {index !== experiences.length - 1 && (
//                 <div className="w-full">
//                   <hr className="border-t border-gray-300 dark:border-gray-700 my-4" />
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


export default function Exp() {
  return (
    <div className="min-h-screen bg-pink-100">
      <Nav />
      <div className="px-4 py-4 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold text-black dark:text-white">
          My experience
        </h2>
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center mt-8"
          >
            {/* Logo animation from the left */}
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className="mr-4">
              <div className="w-48 h-48 rounded-md overflow-hidden">
                <Image
                  src={experience.logoSrc}
                  alt={`${experience.companyName} Logo`}
                  width={200}
                  height={200}
                />
              </div>
            </motion.div>

            {/* Text animation from the right */}
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
              <div className="flex flex-col items-center"> {/* Wrap text and line in a flex container */}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold">{experience.companyName}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-200">
                    {experience.duration} | {experience.role}
                  </p>
                  <p className="mt-2 text-lg text-gray-500 dark:text-gray-200"> {/* Adjust margin-bottom here */}
                    {experience.description}
                  </p>
                </div>
                {/* Horizontal line */}
                {/* {index !== experiences.length - 1 && (
                  <div className="w-full">
                    <hr className="border-t border-gray-300 dark:border-gray-700 my-4" />
                  </div>
                )} */}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
