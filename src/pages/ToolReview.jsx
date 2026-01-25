import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { toolsData } from '../data/toolsData';
import { Check, X, ArrowRight, Star } from 'lucide-react';

const ToolReview = () => {
    const { id } = useParams();
    const tool = toolsData.find(t => t.id === id);

    if (!tool) {
        return <div className="text-center py-20 text-2xl">Tool not found</div>;
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <img src={tool.logo} alt={tool.name} className="h-20 w-auto mx-auto mb-6 rounded-xl bg-white p-2" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{tool.name} Review 2026</h1>
                    <p className="text-xl text-blue-200 mb-8">{tool.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} fill={i < Math.floor(tool.rating) ? "currentColor" : "none"} className={i < Math.floor(tool.rating) ? "" : "text-gray-600"} />
                            ))}
                        </div>
                        <span className="text-2xl font-bold">{tool.rating}/5.0</span>
                    </div>
                    <a href={tool.affiliateLink || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-colors">
                        Get Started with {tool.name} <ArrowRight className="ml-2" />
                    </a>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Review Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Pros & Cons */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Check className="text-green-500" /> Pros</h3>
                                <ul className="space-y-3">
                                    {tool.pros.map((pro, i) => (
                                        <li key={i} className="flex gap-2 text-gray-700">
                                            <span className="text-green-500 mt-1 flex-shrink-0">•</span> <span>{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-400">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><X className="text-red-500" /> Cons</h3>
                                <ul className="space-y-3">
                                    {tool.cons.map((con, i) => (
                                        <li key={i} className="flex gap-2 text-gray-700">
                                            <span className="text-red-400 mt-1 flex-shrink-0">•</span> <span>{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Overview & Verdict */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            {tool.reviewContent ? (
                                <div className="space-y-8">
                                    {tool.reviewContent.map((section, index) => (
                                        <div key={index}>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                                            <div className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                                {section.content}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview & Verdict</h2>
                                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                        {tool.longDescription ? tool.longDescription : (
                                            <>
                                                {tool.name} is one of the market leaders when it comes to {tool.bestFor.toLowerCase()}.
                                                Whether you are a beginner or a pro, it offers a robust set of features including {tool.features.join(', ')}.
                                                Our testing showed that the interface is intuitive, making it easy to set up your first campaign in minutes.
                                            </>
                                        )}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Pricing Card */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02]">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
                                    <h3 className="text-xl font-bold mb-1">Pricing Plan</h3>
                                    <p className="text-blue-100 text-sm">Best value for money</p>
                                </div>
                                <div className="p-8 text-center">
                                    <div className="w-20 h-20 mx-auto bg-white rounded-xl shadow-md p-2 mb-6 flex items-center justify-center">
                                        <img src={tool.logo} alt={tool.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                                    </div>
                                    <p className="text-gray-500 font-medium mb-2 uppercase tracking-wide text-xs">Starting At</p>
                                    <div className="flex items-center justify-center gap-1 mb-6">
                                        <span className="text-5xl font-extrabold text-gray-900">{tool.pricing.match(/\$\d+/)?.[0] || '$0'}</span>
                                        <span className="text-gray-400 font-medium mt-4">/mo</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-8 px-4">{tool.pricing}</p>

                                    <a
                                        href={tool.affiliateLink || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-1"
                                    >
                                        Visit Website <ArrowRight className="inline-block ml-1" size={18} />
                                    </a>
                                    <p className="text-xs text-gray-400 mt-4">30-day money back guarantee usually applies</p>
                                </div>
                            </div>

                            {/* Quick Summary Card */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-4">Why {tool.name}?</h4>
                                <ul className="space-y-3">
                                    {tool.pros.slice(0, 3).map((pro, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                                            <Check className="text-green-500 flex-shrink-0" size={16} /> {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text-center">
                    <Link to="/compare" className="text-blue-600 hover:underline font-medium">Back to Comparison</Link>
                </div>

            </div>
        </div>
    );
};

export default ToolReview;
