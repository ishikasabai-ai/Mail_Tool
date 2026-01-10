import React from 'react';
import { Star, Check, Award, TrendingUp, Users, ShoppingBag, DollarSign, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopPicks = () => {
    const tools = [
        {
            id: 1,
            rank: "🥇",
            name: "Mailchimp",
            badge: "Best Overall Email Marketing Tool",
            logo: "https://tse3.mm.bing.net/th/id/OIP.dTNA95jKWk64stcq2ddiDAHaEK?cb=defcachec2&w=474&h=379&c=7&p=0",
            description: "Mailchimp offers a well-rounded solution with powerful automation, analytics, and an intuitive interface.",
            bestFor: "Small to medium-sized businesses",
            features: [
                "Drag-and-drop email builder",
                "Advanced segmentation",
                "Marketing automation",
                "Detailed performance reports"
            ],
            color: "bg-yellow-100 text-yellow-800",
            icon: <Star className="w-6 h-6 text-yellow-600" />
        },
        {
            id: 2,
            rank: "🥈",
            name: "ActiveCampaign",
            badge: "Best for Automation & Advanced Workflows",
            logo: "https://w7.pngwing.com/pngs/758/475/png-transparent-activecampaign-vertical-logo-tech-companies.png",
            description: "Exceptional automation capabilities combined with CRM features.",
            bestFor: "Growing businesses & agencies",
            features: [
                "Visual automation builder",
                "Behavioral tracking",
                "Personalized email journeys",
                "CRM integration"
            ],
            color: "bg-gray-100 text-gray-800",
            icon: <Zap className="w-6 h-6 text-gray-600" />
        },
        {
            id: 3,
            rank: "🥉",
            name: "ConvertKit",
            badge: "Best for Creators & Newsletters",
            logo: "https://tse4.mm.bing.net/th/id/OIP.ikIqr_F6I3r1jn2C6mIpOAHaHa?w=474&h=379&c=7&p=0",
            description: "Built specifically for creators who want simplicity with powerful segmentation.",
            bestFor: "Bloggers, YouTubers, podcasters",
            features: [
                "Subscriber tagging",
                "Simple automation rules",
                "Clean email templates",
                "Landing pages & forms"
            ],
            color: "bg-orange-100 text-orange-800",
            icon: <Users className="w-6 h-6 text-orange-600" />
        },
        {
            id: 4,
            rank: "💼",
            name: "Klaviyo",
            badge: "Best for E-commerce Email Marketing",
            logo: "https://logowik.com/content/uploads/images/klaviyo8917.jpg",
            description: "Deep e-commerce integrations and revenue-focused analytics.",
            bestFor: "Online stores & DTC brands",
            features: [
                "Shopify & WooCommerce integration",
                "Abandoned cart emails",
                "Product recommendations",
                "Revenue tracking"
            ],
            color: "bg-green-100 text-green-800",
            icon: <ShoppingBag className="w-6 h-6 text-green-600" />
        },
        {
            id: 5,
            rank: "💰",
            name: "MailerLite",
            badge: "Best Budget-Friendly Option",
            logo: "https://www.engagebay.com/blog/wp-content/uploads/2023/02/logo.jpg",
            description: "Affordable pricing with solid features for beginners.",
            bestFor: "Startups & small teams",
            features: [
                "Easy-to-use editor",
                "Automation workflows",
                "Landing pages",
                "Generous free plan"
            ],
            color: "bg-blue-100 text-blue-800",
            icon: <DollarSign className="w-6 h-6 text-blue-600" />
        }
    ];

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block p-3 rounded-full bg-yellow-50 text-yellow-600 mb-4 shadow-sm">
                        <Star size={32} fill="currentColor" />
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Top Picks for Email Marketing</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Choosing the right email marketing tool can make a huge difference in how you connect with your audience,
                        automate campaigns, and grow revenue. Below are our top picks for email marketing platforms,
                        selected based on ease of use, features, deliverability, and value for money.
                    </p>
                </div>

                {/* Tools List */}
                <div className="space-y-12 mb-20">
                    {tools.map((tool) => (
                        <div key={tool.id} className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                {tool.icon}
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0 text-6xl md:text-7xl">{tool.rank}</div>

                                <div className="flex-grow">
                                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${tool.color}`}>
                                        {tool.badge}
                                    </div>
                                    <div className="flex items-center gap-4 mb-3">
                                        <img src={tool.logo} alt={`${tool.name} logo`} className="w-12 h-12 rounded-lg object-contain bg-white border border-gray-100" />
                                        <h2 className="text-3xl font-bold text-gray-900">{tool.name}</h2>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Why it stands out</h3>
                                            <p className="text-gray-700 text-lg leading-relaxed mb-6">{tool.description}</p>

                                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Best For</h3>
                                            <p className="text-gray-900 font-medium">{tool.bestFor}</p>
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-6">
                                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Key Features</h3>
                                            <ul className="space-y-3">
                                                {tool.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                                        <div className="mt-1 min-w-5">
                                                            <Check size={16} className="text-blue-600" strokeWidth={3} />
                                                        </div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex gap-4">
                                        <Link to={`/reviews/${tool.id}`} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                            Read Full Review
                                        </Link>
                                        <a href="#" className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ranking Criteria & Final Verdict Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 text-white rounded-3xl p-10">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Award className="text-yellow-400" /> How We Choose Our Top Picks
                        </h2>
                        <p className="text-gray-400 mb-6">Our recommendations are based on rigorous testing and data analysis across critical factors:</p>
                        <div className="space-y-4">
                            {["Ease of use", "Automation & personalization features", "Deliverability & reliability", "Pricing & scalability", "Customer support & integrations"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-blue-400">{i + 1}</div>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-10">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <TrendingUp className="text-blue-200" /> Final Thoughts
                        </h2>
                        <p className="text-blue-100 mb-6">The best email marketing tool depends on your specific goals and business stage.</p>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between border-b border-blue-500/30 pb-2">
                                <span>All-in-one solution</span>
                                <span className="font-bold text-yellow-300">Mailchimp</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-blue-500/30 pb-2">
                                <span>Advanced automation</span>
                                <span className="font-bold text-yellow-300">ActiveCampaign</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-blue-500/30 pb-2">
                                <span>Creators & newsletters</span>
                                <span className="font-bold text-yellow-300">ConvertKit</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-blue-500/30 pb-2">
                                <span>E-commerce growth</span>
                                <span className="font-bold text-yellow-300">Klaviyo</span>
                            </li>
                            <li className="flex items-center justify-between pt-2">
                                <span>Affordable start</span>
                                <span className="font-bold text-yellow-300">MailerLite</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xl text-gray-600">
                        Whichever you choose, a strong email marketing platform will help you build better relationships, increase engagement, and drive consistent growth.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TopPicks;
