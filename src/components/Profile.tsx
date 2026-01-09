import { car } from "../data/cars";
import { Avatar } from "./Avatar";

export function Profile() {
  return (
    <div className="flex items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center rounded-lg p-4 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
        <Avatar car={car} size={100} />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{car.brand}</h2>
        <p className="text-indigo-600 font-semibold">{car.model}</p>
      </div>
    </div>
  );
}
