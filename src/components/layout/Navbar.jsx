import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Info, ShieldCheck, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                        <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
                            <Mail size={24} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900">
                            Mail<span className="text-blue-600">Tool</span>Rank
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/top-picks" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Top Picks</Link>
                        <Link to="/compare" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Comparison</Link>
                        <Link to="/reviews" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Reviews</Link>
                        <Link to="/ranking" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">How We Rank</Link>
                        <Link to="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</Link>
                        <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About Us</Link>
                        <Link to="/contact-us" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact Us</Link>
                    </div>

                    {/* Desktop Right Section */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors py-2">
                                <Info size={14} className="group-hover:text-blue-600 transition-colors" />
                                <span>Advertiser Disclosure</span>
                            </button>

                            {/* Hover Popover */}
                            <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-80 md:w-96 transform group-hover:translate-y-0 translate-y-2">
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 relative before:content-[''] before:absolute before:-top-2 before:right-6 before:w-4 before:h-4 before:bg-white before:border-l before:border-t before:border-gray-100 before:rotate-45">
                                    <div className="flex items-center gap-2 mb-3">
                                        <ShieldCheck size={18} className="text-blue-600" />
                                        <h3 className="font-bold text-gray-900">Advertiser Disclosure</h3>
                                    </div>
                                    <div className="space-y-3 text-xs text-gray-600 leading-relaxed">
                                        <p>
                                            <strong>EmailToolRank</strong> is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
                                        </p>
                                        <p>
                                            Our rankings are based on rigorous testing and real-world performance. Affiliate partnerships do not influence our editorial content.
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-gray-100">
                                        <Link to="/affiliate-disclosure" className="text-blue-600 hover:underline text-xs font-semibold flex items-center gap-1">
                                            Read our full policy &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/compare">
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-xl shadow-gray-900/10 text-sm">
                                Find My Tool
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 p-2 focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 h-screen shadow-lg animate-fade-in-down overflow-y-auto">
                    <div className="px-4 pt-4 pb-20 space-y-2">
                        {['Top Picks', 'Comparison', 'Reviews', 'Ranking', 'Blog', 'About', 'Contact Us'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="block px-4 py-4 text-base font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <Link to="/compare" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 mb-4">
                                    Find My Tool
                                </button>
                            </Link>
                            <Link to="/affiliate-disclosure" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-xs text-gray-500 justify-center">
                                <Info size={14} /> Advertiser Disclosure
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
