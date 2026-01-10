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

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-10">

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Check className="text-green-500" /> Pros</h3>
                        <ul className="space-y-3">
                            {tool.pros.map((pro, i) => (
                                <li key={i} className="flex gap-2 text-gray-700">
                                    <span className="text-green-500 mt-1">•</span> {pro}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-400">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><X className="text-red-500" /> Cons</h3>
                        <ul className="space-y-3">
                            {tool.cons.map((con, i) => (
                                <li key={i} className="flex gap-2 text-gray-700">
                                    <span className="text-red-400 mt-1">•</span> {con}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Overview & Screenshot */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {tool.name} is one of the market leaders when it comes to {tool.bestFor.toLowerCase()}.
                        Whether you are a beginner or a pro, it offers a robust set of features including {tool.features.join(', ')}.
                        Our testing showed that the interface is intuitive, making it easy to set up your first campaign in minutes.
                    </p>
                </div>

                {/* Pricing */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
                    <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
                        <p className="text-gray-600 mb-2">Starting at</p>
                        <div className="text-4xl font-bold text-blue-900 mb-4">{tool.pricing.split(' ')[2] || '$0/mo'}</div>
                        <p className="text-sm text-gray-500 mb-6">{tool.pricing}</p>
                        <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            View Full Pricing
                        </a>
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
