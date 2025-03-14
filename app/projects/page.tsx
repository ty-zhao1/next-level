import Link from 'next/link';
import Nav from '../../components/Nav';

export default function Projects() {
    return (
        // say hello for now
        <div className="min-h-screen bg-stone-500">
            <Nav />
            <div className="px-4 py-4 max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-100">
                    Projects
                </h2>
            </div>
        </div>
    )
}