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
    <div className="min-h-screen bg-gray-700">
      <Nav />
      <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-200 text-center"
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
        <hr className="my-8 border-gray-200" />
        <motion.p
          className="mt-4 text-lg text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          Hello! My name is Adam, and I&apos;m currently a junior at Stanford University studying computer science.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          I&apos;m interested in the usage of various computational methods to provide practical, effective solutions for real problems in the world. My work so far has mostly revolved around healthcare, but I&apos;m always looking to apply my knowledge in and learn from other fields.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          Outside of tech, I am a dedicated classical musician, minoring in music and playing on Stanford Orchestra and my chamber groups. I also enjoy weightlifting, photography, and trying delicious food.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          Feel free to reach out to me at <a className="text-blue-500 hover:text-blue-600" href="mailto:adamzhao@stanford.edu" target="_blank">
            adamzhao@stanford.edu
            </a>
            , or my&nbsp;
              <a className="text-blue-500 hover:text-blue-600" href="https://www.linkedin.com/in/zhao1adam/" target="_blank">
              LinkedIn
              </a>
        </motion.p>
        {/* <motion.p
          className="mt-4 text-lg text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          Here is my <a className="text-blue-500 hover:text-blue-600" href="https://www.linkedin.com/in/zhao1adam/" target="_blank">
            LinkedIn
            </a>
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-200 text-center"
          initial="hidden"
          animate={textAnimation}
          variants={textAnimationVariants}
        >
          Here is my <a className="text-blue-500 hover:text-blue-600" href="https://github.com/ty-zhao" target="_blank">
            Github
            </a>
        </motion.p> */}
      </div>
    </div>
  );
}