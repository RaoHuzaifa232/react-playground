export default function Events() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full text-center">
                <h1 className="text-4xl font-bold text-white mb-8 tracking-tight drop-shadow-sm">
                    On Click Events
                </h1>

                <button
                    onClick={() => alert('Button clicked!')}
                    className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-white/20 rounded-full hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-500 focus:ring-white active:scale-95 cursor-pointer"
                >
                    <span className="mr-2">Click me</span>
                    <svg
                        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}