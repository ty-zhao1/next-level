'use client'
import { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Image from 'next/image';
import Nav from '../../components/Nav';

const headerAnimationVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const textAnimationVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function About() {
  const headerAnimation = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    const animateHeader = async () => {
      await headerAnimation.start('visible');
    };

    const animateText = async () => {
      await textAnimation.start('visible');
    };

    animateHeader();
    animateText();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-700">
      <Nav />
      <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-black dark:text-gray-200 text-center"
          initial="hidden"
          animate={headerAnimation}
          variants={headerAnimationVariants}
        >
          About Me
        </motion.h2>
        <div className="flex justify-center mt-8">
          <motion.div
            className="h-48 w-48 rounded-full overflow-hidden"
            initial="hidden"
            animate={textAnimation}
            variants={textAnimationVariants}
          >
            <Image
              src="/about_headshot.jpg" // path to your photo
              alt="Your Photo"
              width={192} // adjust the width of the image
              height={192} // adjust the height of the image
            />
          </motion.div>
        </div>
        <hr className="my-8 border-gray-300 dark:border-gray-200" />
        <motion.p
          className="mt-4 text-lg text-gray-500 dark:text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          Hello! My name is Adam, and I'm currently a junior at Stanford University studying computer science.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-500 dark:text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          I'm interested in the usage of various computational methods to provide practical, effective solutions for real problems in the world, regardless of industry. My work so far has mostly revolved around healthcare, but I'm always looking to apply my knowledge in and learn from other fields.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-500 dark:text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          Outside of tech, I am a dedicated classical musician, having played cello for over 14 years. I also enjoy weightlifting, photography, and trying delicious food.
        </motion.p>
      </div>
    </div>
  );
}