import Image from 'next/image'
import Link from 'next/link';
import Nav from '../components/Nav';
import SphereGrid from "../components/SphereGrid";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24 bg-black">
            {/* <Nav/> */}
            <SphereGrid />
            <div className="relative flex flex-col place-items-center mt-12 sm:mt-24">
                <h1 className="text-4xl sm:text-7xl text-white font-bold">Adam Zhao</h1>
                <p className="text-md sm:text-lg text-gray-200">Welcome to my website!</p>
            </div>
            <div className="gap-6 sm:gap-12 grid text-center lg:mb-0 grid-cols-4 lg:text-left">
                {[
                    { title: "About", description: "An intro to me.", color: "green", link: "/about" },
                    { title: "Technical", description: "Technical background.", color: "pink", link: "/exp" },
                    { title: "Projects", description: "Past projects.", color: "blue", link: "/projects" },
                    { title: "More", description: "Other tidbits.", color: "orange", link: "/other" }
                ].map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href={`${item.link}`}
                            className={`group rounded-lg border border-transparent px-5 py-4 transition-colors w-full lg:w-[220px] flex flex-col items-center hover:border-gray-300 hover:border-white hover:bg-neutral-800/30`}
                        >
                            <div className="flex items-center justify-center w-full space-x-2 text-white">
                                <h2 className={`font-semibold opacity-90 text-xs lg:text-2xl`}>
                                    {item.title}
                                </h2>
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none whitespace-nowrap">
                                    -&gt;
                                </span>
                            </div>
                            {/* <p className={`m-0 max-w-[30ch] text-xs opacity-50`}>
                                {item.description}
                            </p> */}
                        </Link>
                    );
                })}

            </div>
        </main>
    )
}