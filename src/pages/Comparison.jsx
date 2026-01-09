import React, { useState, useMemo } from 'react';
import { Check, X, Filter } from 'lucide-react';
import { toolsData } from '../data/toolsData';
import { Link } from 'react-router-dom';

const Comparison = () => {
    const [filter, setFilter] = useState('All');

    const filteredTools = useMemo(() => {
        if (filter === 'All') return toolsData;
        if (filter === 'Beginners') return toolsData.filter(t => t.bestFor.includes('Beginner') || t.pros.some(p => p.toLowerCase().includes('easy')));
        if (filter === 'E-commerce') return toolsData.filter(t => t.bestFor.includes('E-commerce'));
        if (filter === 'Budget') return toolsData.filter(t => t.pricing.toLowerCase().includes('free') || parseInt(t.pricing.match(/\d+/)) < 20);
        return toolsData;
    }, [filter]);

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare Best Email Tools</h1>
                    <p className="text-xl text-gray-600">Side-by-side feature and pricing breakdown.</p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <div className="flex items-center gap-2 text-gray-700 font-medium mr-4">
                        <Filter size={20} />
                        Filter By:
                    </div>
                    {['All', 'Beginners', 'E-commerce', 'Budget'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border transition-all ${filter === cat
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                    : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-6 min-w-[200px] font-bold text-gray-900">Feature / Tool</th>
                                {filteredTools.map((tool) => (
                                    <th key={tool.id} className="p-6 min-w-[200px] text-center border-l border-gray-100">
                                        <div className="flex flex-col items-center gap-3">
                                            <img src={tool.logo} alt={tool.name} className="h-10 w-auto mix-blend-multiply" />
                                            <span className="font-bold text-gray-900">{tool.name}</span>
                                            <Link to={`/reviews/${tool.id}`} className="text-xs text-blue-600 hover:underline">Read Review</Link>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* Rating Row */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-medium text-gray-700">Rating</td>
                                {filteredTools.map((tool) => (
                                    <td key={tool.id} className="p-4 text-center border-l border-gray-100">
                                        <div className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-md font-bold">
                                            {tool.rating} <StarIcon size={14} />
                                        </div>
                                    </td>
                                ))}
                            </tr>

                            {/* Pricing Row */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-medium text-gray-700">Starting Price</td>
                                {filteredTools.map((tool) => (
                                    <td key={tool.id} className="p-4 text-center border-l border-gray-100 text-sm">{tool.pricing}</td>
                                ))}
                            </tr>

                            {/* Automation Row */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-medium text-gray-700">Automation</td>
                                {filteredTools.map((tool) => (
                                    <td key={tool.id} className="p-4 text-center border-l border-gray-100">
                                        {tool.features.some(f => f.toLowerCase().includes('automation')) ?
                                            <Check className="mx-auto text-green-500" /> :
                                            <span className="text-gray-400 text-sm">Basic</span>
                                        }
                                    </td>
                                ))}
                            </tr>

                            {/* CRM Row */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-medium text-gray-700">Built-in CRM</td>
                                {filteredTools.map((tool) => (
                                    <td key={tool.id} className="p-4 text-center border-l border-gray-100">
                                        {tool.features.includes('CRM') ?
                                            <Check className="mx-auto text-green-500" /> :
                                            <X className="mx-auto text-red-300" />
                                        }
                                    </td>
                                ))}
                            </tr>

                            {/* Landing Map Row - Just checking if features exist */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 font-medium text-gray-700">Landing Pages</td>
                                {filteredTools.map((tool) => (
                                    <td key={tool.id} className="p-4 text-center border-l border-gray-100">
                                        {tool.features.includes('Landing Pages') ?
                                            <Check className="mx-auto text-green-500" /> :
                                            <X className="mx-auto text-red-300" />
                                        }
                                    </td>
                                ))}
                            </tr>

                            {/* Best For Row */}
                            <tr className="bg-gray-50/30">
                                <td className="p-4 font-medium text-gray-700">Best For</td>
                                {filteredTools.map((tool) => (
                                    <td key={tool.id} className="p-4 text-center border-l border-gray-100 text-sm text-gray-600 italic">
                                        {tool.bestFor}
                                    </td>
                                ))}
                            </tr>

                            {/* CTA Row */}
                            <tr>
                                <td className="p-4"></td>
                                {filteredTools.map((tool) => (
                                    <td key={tool.id} className="p-6 text-center border-l border-gray-100">
                                        <a href="#" className="inline-block w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                                            Visit Site
                                        </a>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const StarIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

export default Comparison;
