import { car } from "../data/cars";
import { Avatar } from "./Avatar";

export function Profile() {
  return (
    <div className="relative group max-w-sm mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex items-center justify-center p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/10">
        <div className="text-center w-full">
          <div className="relative inline-block mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
            <div className="absolute inset-0 bg-indigo-500 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
            <div className="relative ring-4 ring-white/10 rounded-2xl">
              <Avatar car={car} size={110} />
            </div>
          </div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-200 via-white to-purple-200 bg-clip-text text-transparent mb-3 tracking-tight">
            {car.brand}
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 group-hover:border-indigo-500/50 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            <p className="text-indigo-200 font-medium tracking-wide text-sm uppercase">
              {car.model}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
