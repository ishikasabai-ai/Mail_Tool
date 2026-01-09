import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                                <Mail size={20} />
                            </div>
                            <span className="font-bold text-lg text-gray-900">
                                EmailToolRank
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Helping businesses find the perfect email marketing platform through unbiased reviews and data-driven comparisons.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/" className="hover:text-blue-600 transition-colors">Top Picks</Link></li>
                            <li><Link to="/compare" className="hover:text-blue-600 transition-colors">Comparison Table</Link></li>
                            <li><Link to="/ranking" className="hover:text-blue-600 transition-colors">Ranking Criteria</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                            <li><Link to="/guides" className="hover:text-blue-600 transition-colors">Guides</Link></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Glossary</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-800 transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} EmailToolRank. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-gray-900">Terms of Service</Link>
                        <Link to="/affiliate-disclosure" className="hover:text-gray-900">Affiliate Disclosure</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
