import { useState } from 'react';
import { Link } from 'react-router-dom';

type HeaderVariant = 'default' | 'minimal' | 'compact';

export function Header({ variant = 'default' }: { variant?: HeaderVariant } = {}) {
    // React Hook (useState) to manage menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Modern glassmorphism styles
    const baseStyles = 'backdrop-blur-md border-b transition-all duration-300 sticky top-0 z-50';

    const variantStyles = {
        default: 'bg-gray-900/80 border-gray-800',
        minimal: 'bg-white/5 border-white/10',
        compact: 'bg-black/90 border-gray-800'
    };

    const titleStyles = {
        default: 'text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent',
        minimal: 'text-xl font-semibold text-white',
        compact: 'text-lg font-medium text-gray-200'
    };

    const linkStyles = "text-sm font-medium transition-all duration-200 hover:text-indigo-400 relative group";

    return (
        <header className={`${baseStyles} ${variantStyles[variant]}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo/Title */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className={`${titleStyles[variant]} tracking-tight hover:opacity-80 transition-opacity`}>
                            React Practice
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Events', path: '/events' },
                            { name: 'Components', path: '#' },
                            { name: 'Hooks', path: '#' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`${linkStyles} text-gray-300`}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions (Optional placeholder) */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        // onClick handler to toggle menu state
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-full text-gray-300 hover:bg-white/10 transition-colors focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <nav className="px-2 pt-2 pb-6 space-y-1 bg-gray-900/50 backdrop-blur-xl rounded-b-2xl border-t border-gray-800">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Events', path: '/events' },
                            { name: 'Components', path: '#' },
                            { name: 'Hooks', path: '#' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}