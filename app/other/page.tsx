import Link from 'next/link';
import Nav from '../../components/Nav';
import { NextPage } from 'next';

export default function Other() {
  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-700">
      <Nav />
      <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold text-black dark:text-white">
          Other interests
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
          Fill in later
        </p>
      </div>
    </div>
  );
}