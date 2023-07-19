import Nav from '../../components/Nav';
import Link from 'next/link';
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-green-100">
      <Nav />
      <div className="px-4 py-12 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold text-black dark:text-white text-center">
          About Me
        </h2>
        <div className="flex justify-center mt-8">
          <div className="h-48 w-48 rounded-full overflow-hidden">
            <Image
              src="/about_headshot.jpg" // path to your photo
              alt="Your Photo"
              width={192} // adjust the width of the image
              height={192} // adjust the height of the image
            />
          </div>
        </div>
        <hr className="my-8 border-gray-300 dark:border-gray-700" />
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-200 text-center">
          Hello! My name is Adam, and I'm currently a junior at Stanford University studying computer science. 
        </p>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-200 text-center">
          I'm interested in the usage of various computational methods to provide practical, effective solutions for real problems in the world, regardless of industry. My work so far has mostly revolved around healthcare, but I'm always looking to apply my knowledge in and learn from other fields.
        </p>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-200 text-center">
          Outside of tech, I am a dedicated classical musician, having played cello for over 14 years. I also enjoy weightlifting, photography, and trying delicious food.
        </p>
      </div>
    </div>
  );
}