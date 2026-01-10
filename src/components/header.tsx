import { useState } from 'react';

type HeaderVariant = 'default' | 'minimal' | 'compact';

export function Header({ variant = 'default' }: { variant?: HeaderVariant } = {}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const variantStyles = {
        default: 'bg-gray-800',
        minimal: 'bg-gray-900 border-b border-gray-700',
        compact: 'bg-gray-700'
    };

    const titleStyles = {
        default: 'text-2xl sm:text-3xl md:text-4xl',
        minimal: 'text-xl sm:text-2xl md:text-3xl',
        compact: 'text-lg sm:text-xl md:text-2xl'
    };

    return (
        <header className={`${variantStyles[variant]} text-white shadow-md transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 sm:py-6">
                    {/* Logo/Title */}
                    <h1 className={`${titleStyles[variant]} font-bold truncate`}>
                        React Practice Ground
                    </h1>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-4 lg:gap-6 flex-wrap">
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Home
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Components
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Hooks
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            State
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Props
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Event
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Form
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Router
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Context
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Custom Hooks
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            Performance
                        </a>
                        <a href="#" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">
                            API
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded hover:bg-gray-700 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden border-t border-gray-700 pt-4 pb-4 flex flex-col gap-3">
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Components
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Hooks
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            State
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Props
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Event
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Form
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Router
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Context
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Custom Hooks
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Performance
                        </a>
                        <a
                            href="#"
                            className="block px-2 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            API
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
}