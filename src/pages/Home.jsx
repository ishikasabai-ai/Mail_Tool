import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, ShieldCheck, Zap, BarChart } from 'lucide-react';
import { toolsData } from '../data/toolsData';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
                <div className="absolute top-0 right-0 p-12 opacity-10 blur-3xl rounded-full bg-blue-400 w-96 h-96 animate-pulse"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm">
                        Updated for 2026
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        Compare the Best <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Email Marketing Tools</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Don't waste time testing every platform. We've ranked the top 5 tools based on pricing, automation, and ease of use.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/compare" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transform hover:-translate-y-1">
                            Compare All Tools
                        </Link>
                        <a href="#top-picks" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all border border-white/10">
                            See Top Picks
                        </a>
                    </div>

                    <div className="mt-16 flex justify-center gap-8 text-blue-200/60 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} /> <span>Unbiased Reviews</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} /> <span>Data-Driven Rankings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} /> <span>Daily Updates</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Select The Best Tools</h2>
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                        We analyze dozens of email marketing platforms, testing them for deliverability, automation features, ease of use, and customer support responsiveness. Only the top performers make it to our curated list.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="mb-4 text-blue-600 flex justify-center"><Zap size={32} /></div>
                            <h3 className="font-semibold text-gray-900 mb-2">Efficiency</h3>
                            <p className="text-sm text-gray-500">Fast setup and powerful automation workflows.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="mb-4 text-blue-600 flex justify-center"><BarChart size={32} /></div>
                            <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                            <p className="text-sm text-gray-500">Deep insights into open rates and conversions.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="mb-4 text-blue-600 flex justify-center"><ShieldCheck size={32} /></div>
                            <h3 className="font-semibold text-gray-900 mb-2">Trust</h3>
                            <p className="text-sm text-gray-500">Security compliance and proven deliverability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top 5 Tools Grid */}
            <section id="top-picks" className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Email Marketing Tools</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our hand-picked selection of the best platforms for 2026.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {toolsData.map((tool, index) => (
                            <div key={tool.id} className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
                                    #{index + 1} Ranked
                                </div>

                                <div className="w-full md:w-48 bg-gray-50 rounded-xl p-6 flex items-center justify-center shrink-0">
                                    {/* Placeholder for Logo - Using Text for now if image fails, but using the link provided in data */}
                                    <img src={tool.logo} alt={`${tool.name} Logo`} className="max-h-16 w-auto mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="flex-grow text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
                                        <div className="flex items-center justify-center md:justify-start gap-1">
                                            <Star className="text-yellow-400 fill-yellow-400" size={18} />
                                            <span className="font-bold text-gray-900">{tool.rating}</span>
                                            <span className="text-gray-400 text-sm">/ 5.0</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-2">{tool.description}</p>
                                    <p className="text-blue-600 font-medium text-sm mb-4">
                                        <span className="bg-blue-50 px-2 py-1 rounded border border-blue-100">{tool.pricing}</span>
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                                        {tool.features.slice(0, 3).map((feature, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200">{feature}</span>
                                        ))}
                                    </div>
                                    <div className="text-sm font-medium text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-md">
                                        Best for: {tool.bestFor}
                                    </div>
                                </div>

                                <div className="flex flex-col w-full md:w-auto gap-3 shrink-0">
                                    <Link to={`/reviews/${tool.id}`} className="px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg hover:border-gray-900 font-medium transition-colors text-center shadow-sm">
                                        Read Review
                                    </Link>
                                    <a href={tool.affiliateLink || "#"} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors text-center shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                                        Visit Site <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/compare" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:underline">
                            View Full Comparison Table <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400 font-medium uppercase tracking-widest text-sm mb-8">Trusted by marketing teams at</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for partner logos */}
                        <div className="text-2xl font-bold text-gray-800">ACME Corp</div>
                        <div className="text-2xl font-bold text-gray-800">GlobalTech</div>
                        <div className="text-2xl font-bold text-gray-800">Nebula</div>
                        <div className="text-2xl font-bold text-gray-800">FoxRun</div>
                        <div className="text-2xl font-bold text-gray-800">Circle</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
