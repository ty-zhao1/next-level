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
    companyName: 'ML Intern @ Pfizer',
    duration: 'Jun 2023 - Present',
    role: 'ML Intern',
    description: 'Working on a machine learning-based tool to predict viral antigenicity. \
    Potential applications to influenza, COVID-19, and other infectious viruses.\
    ',
    show_role: false,
  },
  {
    id: 2,
    logoSrc: '/gastro.png',
    companyName: 'Researcher @ Stanford',
    duration: 'Jan 2023 - Present',
    role: 'Researcher',
    description: 'Currently building a predictive model used by Stanford Medical School for the severity of hepatic encephalopathy based on patient health records.',
    show_role: false,
  },
  // Add more experiences as needed
  {
    id: 3,
    logoSrc: '/nextlogo.png',
    companyName: 'Personal Website',
    duration: 'Jun 2023 - Present',
    role: 'Software Engineer',
    description: 'Designed and built my personal website using Next.js, Tailwind CSS, and Framer Motion. Code done in TypeScript. This website is a work in progress.',
    show_role: false,
  },
  {
    id: 4,
    logoSrc: '/gogoat2.png',
    companyName: 'AlphaGogoat: Reinforcement Learning for Pokemon Battles',
    duration: 'Mar 2023 - Jun 2023',
    role: 'Software Engineer',
    description: 'Programmed a Reinforcement Learning Agent in a team of 2 that played Pokémon in real time on the Pokémon Showdown battle simulator.',
    show_role: false,
  },
  {
    id: 4,
    logoSrc: '/guitarhero.png',
    companyName: 'Guitar Hero in C using Raspberry Pi, Arduino',
    duration: 'Oct 2022 - Dec 2022',
    role: 'Software Engineer',
    description: 'Coded Guitar Hero video game in a team of 3 from scratch using Arduino and Raspberry Pi\'s.\
    Processed i/o from guitar controller and Arduino, used wireless transmitters for guitar controller and Fast Fourier Transform to process notes.',
    show_role: false,
  },
];

export default function Exp() {
  return (
    <div className="min-h-screen bg-pink-50">
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
                <div className="text-left">
                  <h3 className="text-2xl font-semibold">{experience.companyName}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-200">
                    {experience.show_role ? `${experience.duration} | ${experience.role}` : experience.duration}
                    
                  </p>
                  <p className="mt-2 text-lg text-gray-500 dark:text-gray-200">
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
