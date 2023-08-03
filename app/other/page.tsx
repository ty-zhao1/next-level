'use client'
import Link from 'next/link';
import Nav from '../../components/Nav';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

const headerVariants = {
  // hidden: { x: "-100vw", opacity: 0 },
  // visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

// Animation variants for content
const contentVariants = {
  // hidden: { x: "100vw", opacity: 0 },
  // visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

type Photo = {
  src: string;
  alt?: string;
};

const photos: Photo[] = [
  { src: '/photography/flower1.JPG', alt: "flowers"},
  { src: '/photography/photo2.jpeg', alt: "clouds"},
  { src: '/photography/photo3.jpeg', alt:'Stanford' },
  { src: '/photography/photo4.jpeg', alt:'Stanford' },
  { src: '/photography/photo5.jpeg', alt:'Cloud' },
  { src: '/photography/flower2.JPG',  alt: "flowers"},
  { src: '/photography/photo6.jpeg', alt: 'Brooklyn' },
  { src: '/photography/photo7.jpeg', alt:'Forest Park' },
  { src: '/photography/photo8.jpeg', alt: 'Forest Park' },
  { src: '/photography/photo9.jpeg', alt: 'Forest Park'},
  { src: '/photography/photo10.jpeg', alt: 'Cloud' },
]


export default function Other() {
  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-700">
      <Nav />
      <div className="px-4 py-4 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.h2 
          className="text-4xl font-extrabold text-black dark:text-gray-100"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          Hobbies
        </motion.h2>

        <div className="mt-8">
          <motion.h3 
            className="text-2xl font-bold text-black dark:text-white"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            Photography
          </motion.h3>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-200">
            I've taken an interest in photography, specifically clouds and landscape. Here are some of my favorite photos I've taken. Feel free to scroll left and right.
            </p>
            <div className="flex overflow-x-auto space-x-4 mt-4">
              {photos.map((photo, index) => (
                <Image
                  key={index}
                  src={`${photo.src}`}
                  alt={photo.alt || `Photography ${index}`}
                  className="h-48 responsive rounded-md"
                  width={1000}
                  height={1000}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.h3 
            className="text-2xl font-bold text-black dark:text-white"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            Cello
          </motion.h3>

          <motion.p 
            className="mt-4 text-lg text-gray-500 dark:text-gray-200"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
                     I'm a clasically trained cellist with over 12 years of experience. I've been in various orchestras, chamber groups and other ensembles, playing pieces by Beethoven, Mozart, Tchaikovsky, and many more.
         I'm currently a member of the Stanford Symphony Orchestra, and am open to playing gigs and other events.
          </motion.p>
        </div>

        <div className="mt-16">
          <motion.h3 
            className="text-2xl font-bold text-black dark:text-white"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            Cooking and food
          </motion.h3>

          <motion.p 
            className="mt-4 text-lg text-gray-500 dark:text-gray-200"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            I'm a foodie at heart. I love tasting and cooking (albeit to varying success) foods from various cultures around the world. I'm always looking for new recipes to try, so feel free to send me some!
         Recently I've tried to make original fusion dishes, such as a Korean-Mexican fusion burrito, and a Japanese-Italian fusion sushi pizza.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-gray-700">
//       <Nav />
//       <div className="px-4 py-4 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="text-4xl font-extrabold text-black dark:text-gray-100">
//           Hobbies
//         </h2>
//         <div className="mt-8">
//           <h3 className="text-2xl font-bold text-black dark:text-white">
//             Photography
//           </h3>
//           <p className="mt-2 text-lg text-gray-500 dark:text-gray-200">
//             I've taken an interest in photography, specifically clouds and landscape. Here are some of my favorite photos I've taken. Feel free to scroll left and right.
//           </p>
//           <div className="flex overflow-x-auto space-x-4 mt-4"> {/*ref={scrollContainerRef}*/}
//             {photos.map((photo, index) => (
//               <Image
//                 key={index}
//                 src={`${photo.src}`}
//                 alt={photo.alt || `Photography ${index}`}
//                 className="h-48 responsive rounded-md"
//                 width={1000}
//                 height={1000}
//               />
//             ))}
//           </div>
//         </div>

//   <div className="mt-16">
//       <h3 className="text-2xl font-bold text-black dark:text-white">
//         Cello
//       </h3>
//       <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
//         I'm a clasically trained cellist with over 12 years of experience. I've been in various orchestras, chamber groups and other ensembles, playing pieces by Beethoven, Mozart, Tchaikovsky, and many more.
//         I'm currently a member of the Stanford Symphony Orchestra, and am open to playing gigs and other events.
//       </p>
//     </div>

//     <div className="mt-16">
//       <h3 className="text-2xl font-bold text-black dark:text-white">
//         Cooking and food
//       </h3>
//       <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
//         I'm a foodie at heart. I love tasting and cooking (albeit to varying success) foods from various cultures around the world. I'm always looking for new recipes to try, so feel free to send me some!
//         Recently I've tried to make original fusion dishes, such as a Korean-Mexican fusion burrito, and a Japanese-Italian fusion sushi pizza.

//       </p>
//     </div>
// </div>
//       </div>
//   );
// }

// const scrollContainerRef = useRef(null);
//   useEffect(() => {
//     const handleScroll = () => {
//       const container = scrollContainerRef.current;

//       if (!container) return;

//       const containerCenter = container.clientWidth / 2 + container.scrollLeft;
//       const effectThreshold = container.clientWidth * 0.0;

//       Array.from(container.children).forEach((child) => {
//         const photoCenter = child.offsetLeft + child.clientWidth / 2;
//         const distanceFromCenter = Math.abs(containerCenter - photoCenter);
    
//         let opacity = 1;
    
//         // Check if photo is on the right edge
//         if (distanceFromCenter > (container.clientWidth / 2 - effectThreshold)) {
//           opacity = 1 - (distanceFromCenter - (container.clientWidth / 2 - effectThreshold)) / effectThreshold;
//         }
    
//         // Check if photo is on the left edge
//         if (photoCenter < (container.scrollLeft + effectThreshold)) {
//           const distanceFromLeftEdge = effectThreshold - (photoCenter - container.scrollLeft);
//           opacity = 1 - distanceFromLeftEdge / effectThreshold;
//         }
    
//         opacity = Math.min(1, Math.max(0.6, opacity));  // Ensure opacity stays between 0.6 and 1
//         (child as HTMLElement).style.opacity = String(opacity);
//       });
//     };

//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (scrollContainerRef.current) {
//         scrollContainerRef.current.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);