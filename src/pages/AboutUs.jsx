import React from 'react';
import { Mail, CheckCircle, User, MapPin, Phone, Globe } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero / Welcome Section */}
            <div className="bg-blue-600 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        About Us
                    </h1>
                    <p className="text-lg md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Welcome to MailToolRank.com — your trusted destination for honest insights, comparisons, and updates from the world of email tools and email marketing solutions.
                    </p>
                </div>
            </div>

            {/* Intro & Our Story Section */}
            <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">

                    {/* Introduction */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            At <strong>MailToolRank.com</strong>, we help digital marketers, business owners, and email professionals make informed decisions by providing clear, reliable, and practical information. Our goal is to simplify email marketing and deliverability concepts so users can confidently choose the right tools for their needs.
                        </p>
                    </div>

                    {/* Our Story */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center md:text-left">Our Story</h2>
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                MailToolRank.com was created to bridge the gap between powerful email technologies and real-world usage. The platform focuses on transparency, research-driven content, and genuine value.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Whether you’re just starting out or looking to scale your email campaigns, our content is designed to guide you every step of the way.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Meet the Founder Section */}
            <div className="bg-blue-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">Meet the Founder</h2>
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-blue-600 p-8 flex flex-col justify-center items-center text-white text-center">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                                <User size={48} className="text-white md:hidden" />
                                <User size={64} className="text-white hidden md:block" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Ishika Rawat</h3>
                            <p className="text-blue-100 font-medium">Founder</p>
                            <div className="mt-4 md:mt-6 flex items-center gap-2 text-sm opacity-80">
                                <MapPin size={16} />
                                <span>Jaipur, Rajasthan, India</span>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-6 md:p-12">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                Ishika Rawat is the founder of MailToolRank.com, based in Jaipur, Rajasthan, India. With hands-on experience in exploring email tools, analyzing deliverability performance, and reviewing email marketing platforms, she brings practical knowledge and clarity to the site’s content.
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                Her passion for digital communication and email marketing led her to build MailToolRank.com as a reliable resource for users seeking honest reviews and easy-to-understand guidance. Ishika actively oversees the platform to ensure content quality, accuracy, and relevance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Vision Section */}
            <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">Our Vision</h2>
                    <div className="bg-white p-6 md:p-12 rounded-3xl shadow-lg border border-gray-100">
                        <p className="text-lg md:text-xl text-center text-gray-700 mb-8 md:mb-10">
                            Our vision is to become a trusted hub for email marketing insights by focusing on:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {[
                                "In-depth email tool reviews and rankings",
                                "Email deliverability best practices",
                                "Actionable email marketing tips",
                                "Updates on industry trends and tools"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                                    <span className="text-base md:text-lg font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="bg-gray-900 text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact Us</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10">
                        For support, inquiries, or collaboration opportunities, feel free to contact us:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left max-w-3xl mx-auto">
                        <div className="bg-gray-800 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-2 text-blue-400">
                                <User size={20} />
                                <span className="font-bold uppercase text-sm tracking-wider">Founder</span>
                            </div>
                            <p className="text-lg">Ishika Rawat</p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-2 text-blue-400">
                                <Mail size={20} />
                                <span className="font-bold uppercase text-sm tracking-wider">Email</span>
                            </div>
                            <a href="mailto:support@mailtoolrank.com" className="text-lg hover:text-white transition-colors">
                                support@mailtoolrank.com
                            </a>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-2 text-blue-400">
                                <Phone size={20} />
                                <span className="font-bold uppercase text-sm tracking-wider">Phone</span>
                            </div>
                            <p className="text-lg">+91-7849848448</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Jaipur, Rajasthan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={18} />
                            <span>India</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
