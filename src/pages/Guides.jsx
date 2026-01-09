import React from 'react';
import { BookOpen, Target, BarChart, Settings, Mail } from 'lucide-react';

const Guides = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                        <BookOpen size={32} />
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Guide to Email Marketing</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know to build relationships, drive conversions, and grow your business.
                    </p>
                </div>

                <div className="prose prose-blue max-w-none text-gray-600 space-y-12">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Target className="text-blue-500" /> 1. What Is Email Marketing?</h2>
                        <p>Email marketing is the process of sending targeted emails to a group of subscribers to promote products, share updates, nurture leads, and build customer loyalty.</p>
                        <p className="mt-2">With the right strategy and tools, email marketing delivers:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>High return on investment (ROI)</li>
                            <li>Direct communication with your audience</li>
                            <li>Measurable and trackable results</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Why Use an Email Marketing App?</h2>
                        <p>An email marketing app helps you:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Design professional emails without coding</li>
                            <li>Manage and segment subscriber lists</li>
                            <li>Automate email campaigns</li>
                            <li>Track performance with analytics</li>
                            <li>Stay compliant with email regulations</li>
                        </ul>
                        <p className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 text-blue-800">
                            <strong>Note:</strong> EmailToolRank simplifies email marketing so you can focus on growth, not technical complexity.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Getting Started</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-2">Step 1: Create Your Account</h3>
                                <p className="text-sm">Sign up and verify your email address to access the dashboard.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-2">Step 2: Build Your Email List</h3>
                                <p className="text-sm mb-2">You can:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                    <li>Import contacts (CSV or integrations)</li>
                                    <li>Use signup forms and landing pages</li>
                                    <li>Sync contacts from other platforms</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Mail className="text-purple-500" /> 4. Creating Your First Email Campaign</h2>
                        <h3 className="font-bold text-gray-800 mt-4 mb-2">Choose a Campaign Type</h3>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Newsletter</li>
                            <li>Promotional email</li>
                            <li>Product announcement</li>
                            <li>Automated drip campaign</li>
                        </ul>
                        <h3 className="font-bold text-gray-800 mt-4 mb-2">Design Your Email</h3>
                        <p>Use our drag-and-drop editor to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Add text, images, and buttons</li>
                            <li>Customize colors and fonts</li>
                            <li>Preview on desktop and mobile</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Settings className="text-green-500" /> 5. Automation & Workflows</h2>
                        <p>Email automation lets you send the right message at the right time.</p>
                        <p className="mt-2 font-semibold">Common automation examples:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Welcome emails</li>
                            <li>Abandoned cart reminders</li>
                            <li>Follow-up sequences</li>
                            <li>Re-engagement campaigns</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Segmentation & Personalization</h2>
                        <p>Segment your audience based on:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Location</li>
                            <li>Behavior</li>
                            <li>Purchase history</li>
                            <li>Engagement level</li>
                        </ul>
                        <p className="mt-2 text-green-600 font-medium">Personalized emails result in higher open rates and conversions.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Email Deliverability Best Practices</h2>
                        <p>To ensure your emails reach the inbox:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Use a verified sender domain</li>
                            <li>Avoid spam-trigger words</li>
                            <li>Clean inactive subscribers regularly</li>
                            <li>Include unsubscribe links</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"><BarChart className="text-orange-500" /> 8. Analytics & Performance Tracking</h2>
                        <p>Track key metrics such as:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <div className="font-bold text-orange-800">Open Rates</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <div className="font-bold text-orange-800">Click Rates</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <div className="font-bold text-orange-800">Bounce Rates</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <div className="font-bold text-orange-800">Conversions</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Compliance & Best Practices</h2>
                        <p>Stay compliant with email laws like GDPR, CAN-SPAM, and CCPA.</p>
                        <p className="mt-2 font-semibold">Best practices include:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Clear opt-in forms</li>
                            <li>Honest subject lines</li>
                            <li>Easy unsubscribe options</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Tips for Email Marketing Success</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Send valuable, relevant content</li>
                            <li>Maintain a consistent schedule</li>
                            <li>Test subject lines and layouts</li>
                            <li>Keep emails mobile-friendly</li>
                            <li>Focus on building trust, not just selling</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Start Your Email Marketing Journey</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Email marketing is simple, powerful, and effective. Create your first campaign today and start building meaningful connections with your audience.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-blue-700 rounded-full font-bold hover:bg-blue-50 transition-colors">
                            Explore Tools
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Guides;
