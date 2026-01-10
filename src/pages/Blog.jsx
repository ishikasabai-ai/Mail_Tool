import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h1>
                    <p className="text-xl text-gray-600">Tips, guides, and industry news for email marketers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="relative overflow-hidden h-48">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Link to={`/blog/${post.id}`} className="text-blue-600 font-medium hover:underline inline-flex items-center mt-auto">
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
