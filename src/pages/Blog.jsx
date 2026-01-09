import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "10 Email Marketing Trends to Watch in 2026",
            excerpt: "From AI-driven personalization to interactive emails, here is what you need to know to stay ahead of the curve.",
            author: "Sarah Smith",
            date: "Oct 12, 2025",
            category: "Trends",
            image: "https://placehold.co/600x400/2563eb/white?text=Trends"
        },
        {
            id: 2,
            title: "Mailchimp vs ActiveCampaign: Which is Right for You?",
            excerpt: "A deep dive into the features, pricing, and automation capabilities of two industry giants.",
            author: "Mike Johnson",
            date: "Sep 28, 2025",
            category: "Comparison",
            image: "https://placehold.co/600x400/4f46e5/white?text=Versus"
        },
        {
            id: 3,
            title: "How to Build an Email List from Scratch",
            excerpt: "Step-by-step guide to growing your subscriber base without spending a fortune on ads.",
            author: "Emily Davis",
            date: "Sep 15, 2025",
            category: "Guides",
            image: "https://placehold.co/600x400/0891b2/white?text=Growth"
        },
        {
            id: 4,
            title: "The Ultimate Guide to Segmentation",
            excerpt: "Why segmentation is the key to higher open rates and how to implement it effectively.",
            author: "David Wilson",
            date: "Aug 22, 2025",
            category: "Strategy",
            image: "https://placehold.co/600x400/7c3aed/white?text=Strategy"
        },
        {
            id: 5,
            title: "How to Avoid Spam Filters in 2026",
            excerpt: "Technical tips and content best practices to ensure your emails land in the inbox.",
            author: "Alex Turner",
            date: "Aug 05, 2025",
            category: "Deliverability",
            image: "https://placehold.co/600x400/ea580c/white?text=Spam+Tips"
        },
        {
            id: 6,
            title: "Best Time to Send Emails: A Data Analysis",
            excerpt: "We analyzed 10 million emails to find the perfect send time for every industry.",
            author: "Sarah Smith",
            date: "Jul 18, 2025",
            category: "Research",
            image: "https://placehold.co/600x400/16a34a/white?text=Analytics"
        },
        {
            id: 7,
            title: "Email Copywriting 101",
            excerpt: "Write subject lines that get opens and body copy that converts like crazy.",
            author: "Jessica Lee",
            date: "Jul 02, 2025",
            category: "Copywriting",
            image: "https://placehold.co/600x400/db2777/white?text=Copywriting"
        }
    ];

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h1>
                    <p className="text-xl text-gray-600">Tips, guides, and industry news for email marketers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
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
                                <Link to="#" className="text-blue-600 font-medium hover:underline inline-flex items-center mt-auto">
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
