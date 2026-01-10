import React from 'react';
import { Cookie, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiesPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-20 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block p-3 rounded-full bg-blue-50 text-blue-600 mb-4">
                        <Cookie size={32} />
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookies Policy</h1>
                    <p className="text-xl text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Shield className="text-blue-600" size={24} />
                            1. What Are Cookies?
                        </h2>
                        <p>
                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                        <p className="mb-4">We use cookies for several reasons:</p>
                        <ul className="list-none space-y-3 pl-0">
                            {[
                                "Essential Cookies: Necessary for the website to function properly.",
                                "Performance Cookies: Help us understand how visitors interact with our website.",
                                "Functional Cookies: Enable enhanced functionality and personalization.",
                                "Marketing Cookies: Used to deliver relevant advertisements to you."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Managing Your Preferences</h2>
                        <p>
                            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                        </p>
                    </section>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mt-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Questions about our cookies?</h3>
                        <p className="mb-6">
                            If you have specific questions about how we use cookies, please contact us.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/contact-us" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                                Contact Us
                            </Link>
                            <Link to="/privacy-policy" className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiesPolicy;
