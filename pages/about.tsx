import Nav from '../components/Nav';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-green-100">
      <Nav />
      <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold text-black dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-200">
          Hello! My name is Adam, and I'm currently a junior at Stanford University studying computer science. I'm interested in software engineering, product management, and entrepreneurship. I'm also a huge fan of basketball, and I love to play and watch the sport in my free time.
        </p>
      </div>
    </div>
  );
}