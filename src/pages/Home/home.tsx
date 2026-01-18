import { Link, Outlet } from "react-router-dom";
import { Avatar, AvatarWithoutDestructing } from "../../components/Avatar";
import { CardExample } from "../../components/CardExample";
import { Profile } from "../../components/Profile";
import { cars, car } from "../../data/cars";

export default function Home() {
    // Mapping through the cars array to create a list of car details
    const carList = cars.map((carItem, index) => (
        <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-indigo-500/20"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-indigo-300 transition-colors">
                    {carItem.brand} {carItem.model}
                </h3>

                <div className="flex justify-center mb-6 transform group-hover:scale-105 transition-transform duration-300">
                    <Avatar car={carItem} size={100} />
                </div>

                <div className="bg-black/20 rounded-xl p-3 text-center backdrop-blur-md border border-white/5">
                    <p className="text-lg text-gray-300">
                        <span className="font-semibold text-indigo-400">Year:</span> {carItem.year}
                    </p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1a1c2e] to-black p-4 sm:p-8">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Main Profile Section */}
                <section className="relative">
                    <Profile />
                </section>

                {/* Car List Section */}
                <section>
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-12 text-center">
                        Our Collection
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {carList}
                    </div>
                </section>

                {/* Featured Car Section */}
                <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-3xl p-12 border border-white/10 backdrop-blur-md">
                    <div className="flex flex-col items-center relative z-10">
                        <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-4 border border-indigo-500/30">
                            Featured Selection
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-8">Highlight of the Week</h3>
                        <div className="shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)] animate-pulse hover:animate-none transition-all">
                            <AvatarWithoutDestructing car={car} size={150} />
                        </div>
                    </div>
                </section>

                {/* Card component example */}
                <section className="flex justify-center">
                    <div className="transform hover:rotate-1 transition-transform duration-500">
                        <CardExample />
                    </div>
                </section>

                {/* Car Brands Navigation */}
                <section className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10 backdrop-blur-md">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Explore Our Brands</h3>
                    <nav className="flex flex-wrap justify-center gap-4">
                        <Link 
                            to="/bmw" 
                            className="px-6 py-3 bg-blue-600/80 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                        >
                            BMW
                        </Link>
                        <Link 
                            to="/toyota" 
                            className="px-6 py-3 bg-red-600/80 hover:bg-red-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                        >
                            Toyota
                        </Link>
                        <Link 
                            to="/honda" 
                            className="px-6 py-3 bg-gray-600/80 hover:bg-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50"
                        >
                            Honda
                        </Link>
                        <Link 
                            to="/ford" 
                            className="px-6 py-3 bg-blue-800/80 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-700/50"
                        >
                            Ford
                        </Link>
                        <Link 
                            to="/tesla" 
                            className="px-6 py-3 bg-purple-600/80 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                        >
                            Tesla
                        </Link>
                    </nav>
                </section>

                {/* Outlet */}
                <Outlet />
            </div>
        </div>
    );
}