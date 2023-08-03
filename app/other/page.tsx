'use client'
import Nav from '../../components/Nav';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
            I&apos;ve taken an interest in photography, specifically clouds and landscape. Here are some of my favorite photos I&apos;ve taken. Feel free to scroll left and right.
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
                     I&apos;m a clasically trained cellist with over 12 years of experience. I&apos;ve been in various orchestras, chamber groups and other ensembles, playing pieces by Beethoven, Mozart, Tchaikovsky, and many more.
         I&apos;m currently a member of the Stanford Symphony Orchestra, and am open to playing gigs and other events.
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
            I&apos;m a foodie at heart. I love tasting and cooking (albeit to varying success) foods from various cultures around the world. I&apos;m always looking for new recipes to try, so feel free to send me some!
         Recently I&apos;ve tried to make original fusion dishes, such as a Korean-Mexican fusion burrito, and a Japanese-Italian fusion sushi pizza.
          </motion.p>
        </div>
      </div>
    </div>
  );
}