import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
                            <Mail size={24} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900">
                            Email<span className="text-blue-600">Tool</span>Rank
                        </span>
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        <Link to="/top-picks" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Top Picks</Link>
                        <Link to="/compare" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Comparison</Link>
                        <Link to="/reviews" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Reviews</Link>
                        <Link to="/ranking" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">How We Rank</Link>
                        <Link to="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</Link>
                        <Link to="/contact-us" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact Us</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/compare">
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-xl shadow-gray-900/10 text-sm">
                                Find My Tool
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
