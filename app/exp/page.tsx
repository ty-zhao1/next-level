'use client'
import Nav from '../../components/Nav';
import Image from 'next/image';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    logoSrc: '/pfizer2.png',
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
    description: 'Designed and built my personal website in TypeScript using Next.js, Tailwind CSS, and Framer Motion. This website is a work in progress.',
    show_role: false,
  },
  {
    id: 4,
    logoSrc: '/pokemon.png',
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
    <div className="min-h-screen bg-pink-50 dark:bg-gray-700">
      <Nav />
      <div className="px-4 py-4 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold text-black dark:text-gray-100">
          Technical
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Here are a few of my past experiences and projects.
        </p>
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start mt-8"
          >
            {/* Logo animation from the left */}
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className="mr-4 flex flex-col justify-center">
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
              <div className="text-left w-full">
                <h3 className="text-2xl font-semibold dark:text-gray-200">{experience.companyName}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  {experience.show_role ? `${experience.duration} | ${experience.role}` : experience.duration}
                </p>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-200">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
