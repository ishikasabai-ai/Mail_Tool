import React from 'react';
import { Mail, Clock, HelpCircle, FileText, MessageSquare } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We’re here to help 🚀<br />
                        Whether you have a question, need technical support, or want to learn more about EmailToolRank, feel free to reach out to us anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                            <p className="text-gray-600 mb-6">Have a question about features, pricing, integrations, or email deliverability? Our team is ready to assist you.</p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 text-white p-2 rounded-lg mt-1">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email</h4>
                                        <p className="text-gray-600">supportEmail@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600 text-white p-2 rounded-lg mt-1">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Support Hours</h4>
                                        <p className="text-gray-600">Monday – Friday<br />9:00 AM – 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Support & Help</h3>
                            <p className="text-gray-500 text-sm mb-6">For faster assistance, you may also:</p>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                        <HelpCircle size={18} /> Visit Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                        <FileText size={18} /> Check our FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                        <MessageSquare size={18} /> Submit a support ticket
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name (Optional)</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Your Company Ltd." />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
