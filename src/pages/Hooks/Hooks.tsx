import { useState } from "react";

export default function Hooks() {
    const [count, setCount] = useState(0);
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
            <h1 className="text-6xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
                Hooks
            </h1>
            <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            useState
                        </h1>

                        <div className="flex flex-col items-center justify-center space-y-8 py-12 bg-black/20 rounded-2xl border border-white/5">
                            <div className="text-center">
                                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Current Count</p>
                                <p className="text-7xl font-bold text-white tabular-nums tracking-tight">
                                    {count}
                                </p>
                            </div>

                            <button
                                onClick={() => setCount(count + 1)}
                                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-200 active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Increment
                                    <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}