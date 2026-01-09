import React from 'react';
import { Star, MessageCircle, TrendingUp, Quote } from 'lucide-react';

const Reviews = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block p-3 rounded-full bg-blue-50 text-blue-600 mb-4">
                        <Star size={32} fill="currentColor" />
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Real feedback from businesses, creators, and marketers who have grown with our recommended tools.
                    </p>
                </div>

                {/* Short & Punchy Reviews */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Top Rated Feedback</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "This app doubled our email open rates in just two weeks. Simple, powerful, and reliable.",
                            "The easiest email marketing tool we’ve ever used. Setup took minutes, not hours.",
                            "Automation that actually works. Our campaigns now run on autopilot.",
                            "Clean interface, smart features, and amazing results."
                        ].map((review, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-700 font-medium">"{review}"</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Customer Testimonials */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                        <MessageCircle className="text-blue-500" /> Customer Stories
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                            <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12" />
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                “We switched to this email marketing app after struggling with low engagement. The automation and personalization features helped us increase conversions by over 40%. Highly recommended for growing teams.”
                            </p>
                            <div>
                                <div className="font-bold text-gray-900">Sarah M.</div>
                                <div className="text-sm text-gray-500">Marketing Manager</div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                            <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12" />
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                “I’m not a tech expert, but this app made email marketing feel effortless. The templates are beautiful and the analytics are incredibly clear.”
                            </p>
                            <div>
                                <div className="font-bold text-gray-900">David R.</div>
                                <div className="text-sm text-gray-500">Small Business Owner</div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                            <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12" />
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                “From abandoned cart emails to product launches, this app handles everything flawlessly. Our revenue from email campaigns has never been higher.”
                            </p>
                            <div>
                                <div className="font-bold text-gray-900">Priya K.</div>
                                <div className="text-sm text-gray-500">E-commerce Founder</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results-Focused Reviews */}
                <div className="mb-20 bg-gray-900 text-white rounded-3xl p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                        <TrendingUp className="text-green-400" /> Real Marketing Results
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Increased click-through rates by 52% within the first month.",
                            "More leads, better segmentation, and less manual work.",
                            "Finally an email marketing app that delivers real ROI."
                        ].map((review, i) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <div className="flex text-green-400 mb-4">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-300 text-lg font-medium">"{review}"</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Email-Ready Section */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">Community Validated</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-blue-50 p-8 rounded-2xl text-center">
                            <div className="flex justify-center text-yellow-500 mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-700 italic mb-6">
                                “This email marketing app transformed how we communicate with our audience. The automation tools saved us hours every week, and the results speak for themselves.”
                            </p>
                            <div className="font-bold text-gray-900">— Emily T., Digital Marketer</div>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl text-center">
                            <div className="flex justify-center text-yellow-500 mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-700 italic mb-6">
                                “Powerful features without the complexity. Perfect for beginners and pros alike.”
                            </p>
                            <div className="font-bold text-gray-900">— James L., Startup Founder</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready for these results?</h2>
                    <p className="text-blue-100 text-lg mb-8">Join thousands of marketers who trust our email marketing app to grow their business.</p>
                    <button className="px-8 py-3 bg-white text-blue-700 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
                        Get Started Today
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Reviews;
