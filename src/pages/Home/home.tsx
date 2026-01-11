import { Avatar, AvatarWithoutDestructing } from "../../components/Avatar";
import { CardExample } from "../../components/CardExample";
import { Profile } from "../../components/Profile";
import { cars, car } from "../../data/cars";

export default function Home() {
    // Mapping through the cars array to create a list of car details
    const carList = cars.map((carItem, index) => (
        <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group"
        >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
                {carItem.brand} {carItem.model}
            </h3>
            {/* Passing props */}
            <Avatar car={carItem} size={80} />
            <p className="mt-4 text-lg text-gray-600">
                <span className="font-semibold text-indigo-600">Year:</span> {carItem.year}
            </p>
        </div>
    ));

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black p-8 transition-all duration-1000 hover:from-gray-800 hover:via-purple-900">
            <div className="max-w-7xl mx-auto">
                {/* Main Profile Section */}
                <div className="mb-12">
                    <Profile />
                </div>

                {/* Car List Section */}
                <div className="mt-12">
                    <h2 className="text-4xl font-bold text-white mb-8 hover:text-indigo-300 transition-colors duration-300">
                        Our Car Collection
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Car list */}
                        {carList}
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Featured Car (No Destructuring)</h3>
                    <AvatarWithoutDestructing car={car} size={100} />
                </div>

                {/* Card component example */}
                <div className="mt-12">
                    <CardExample />
                </div>
            </div>
        </div>
    );
}