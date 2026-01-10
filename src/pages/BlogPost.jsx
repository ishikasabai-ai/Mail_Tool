import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
                <Link to="/blog" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to All Posts
                </Link>

                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

                    <div className="flex items-center gap-6 text-gray-500 border-b border-gray-100 pb-8 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                                <User size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                                <p className="text-xs">Author</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span className="text-sm">{post.date}</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-64 md:h-96 w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg max-w-none text-gray-600">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
