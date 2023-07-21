import Link from 'next/link';
import Nav from '../../components/Nav';
import { NextPage } from 'next';
import Image from 'next/image';

// export default function Exp() {
//   return (
//     <div className="min-h-screen bg-pink-100">
//       <Nav />
//       <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="text-4xl font-extrabold text-black dark:text-white">
//           My experience
//         </h2>
//         <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
//           Fill in later
//         </p>
//       </div>
//     </div>
//   );
// }

const experiences = [
  {
    id: 1,
    logoSrc: '/pfizer.png',
    companyName: 'Pfizer',
    description: 'Working as an intern on a machine learning-based tool to predict bacterial and viral antigenicity. Applications to influenza, COVID-19, and other infectious diseases.\
    ',
  },
  {
    id: 2,
    logoSrc: '/stanford_med.png',
    companyName: 'Stanford',
    description: 'Description of Company 2',
  },
  // Add more experiences as needed
];


// export default function Exp() {
//   const maxVisibleExperiences = 4; // Set the desired number of experiences visible on the screen

//   return (
//     <div className="min-h-screen bg-pink-100">
//       <Nav />
//       <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="text-4xl font-extrabold text-black dark:text-white">
//           My experience
//         </h2>
//         <div
//           className={`mt-8 ${
//             experiences.length > maxVisibleExperiences ? 'max-h-[calc(100vh-24rem)] overflow-y-auto' : ''
//           }`}
//         >
//           {experiences.map((experience, index) => (
//             <div key={experience.id} className="flex items-center">
//               <div className="mr-4 w-16 h-16">
//                 <Image
//                   src={experience.logoSrc}
//                   alt={`${experience.companyName} Logo`}
//                   width={128}
//                   height={128}
//                 />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold">{experience.companyName}</h3>
//                 <p className="mt-2 text-lg text-gray-500 dark:text-gray-200">
//                   {experience.description}
//                 </p>
//               </div>
//               {index !== experiences.length - 1 && (
//                 <hr className="border-gray-300 dark:border-gray-700 my-4" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Exp() {
  return (
    <div className="min-h-screen bg-pink-100">
      <Nav />
      <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold text-black dark:text-white">
          My experience
        </h2>
        {experiences.map((experience, index) => (
          <div key={experience.id} className="flex items-center mt-8">
            <div className="mr-4 w-16 h-16">
              <Image
                src={experience.logoSrc}
                alt={`${experience.companyName} Logo`}
                width={128}
                height={128}
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold">{experience.companyName}</h3>
              <p className="mt-2 text-lg text-gray-500 dark:text-gray-200">
                {experience.description}
              </p>
            </div>
            {index !== experiences.length - 1 && (
              <hr className="border-gray-300 dark:border-gray-700 my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}