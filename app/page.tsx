import Image from 'next/image'
import Link from 'next/link';
import Nav from '../components/Nav';
import SphereGrid from "../components/SphereGrid";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24 bg-blue-100 dark:bg-olive">
            {/* <Nav/> */}
            <SphereGrid/>
            <div className="relative flex flex-col place-items-center mt-12 sm:mt-24">
                <h1 className="text-4xl sm:text-7xl text-black dark:text-gray-300 font-bold">Adam Zhao</h1>
                <p className="text-md sm:text-lg text-gray-700 dark:text-gray-400">Welcome to my website!</p>
            </div>
            
            {/* Sun and Moon container */}
            <div className="flex justify-center mt-4 sm:mt-8 mb-8 sm:mb-16 scale-50 sm:scale-100">
                {/* Sun Image for Light Mode */}
                <div className="dark:hidden z-0">
                    <Image src="/sun.svg" alt="SVG in Light Mode" width="150" height="150" />
                </div>

                {/* Moon Image for Dark Mode */}
                <div className="hidden dark:block z-0">
                    <Image src="/moon.svg" alt="Moon in Dark Mode" width={75} height={75} />
                </div>
            </div>
            
            <div className="gap-6 sm:gap-12 grid text-center lg:mb-0 grid-cols-3 lg:text-left">
    {["About", "Technical", "More things"].map((title, index) => {
        const descriptions = ["An intro to me.", "Technical background.", "Non-technical tidbits."];
        const colors = ["green", "pink", "orange"];
        
        return (
            <Link
                key={index}
                href={`/${title.toLowerCase()}`}
                className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-${colors[index]}-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-full lg:w-[220px] flex flex-col items-center`}
            >
                <div className="flex items-center justify-center w-full space-x-2">
                    <h2 className={`font-semibold opacity-75 text-xs lg:text-2xl`}>
                        {title}
                    </h2>
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </div>
                <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
                    {descriptions[index]}
                </p>
            </Link>
        );
    })}
</div>
        </main>
    )
}