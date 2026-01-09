import React from 'react';
import { Shield, Search, Users, Zap, Headphones } from 'lucide-react';

const Ranking = () => {
    const criteria = [
        {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: "Features & Automation",
            description: "We test the depth of automation capabilities, email builders, and list segmentation. Tools that offer powerful workflows without complexity rank higher."
        },
        {
            icon: <Users className="w-8 h-8 text-green-600" />,
            title: "Ease of Use",
            description: "We measure how long it takes to set up a campaign from scratch. Our beginner-friendly metric ensures that tools are accessible to non-technical users."
        },
        {
            icon: <Shield className="w-8 h-8 text-indigo-600" />,
            title: "Deliverability & Security",
            description: "A great email is useless if it lands in spam. We analyze deliverability rates and compliance with GDPR/CCPA standards."
        },
        {
            icon: <Search className="w-8 h-8 text-purple-600" />,
            title: "Pricing Transparency",
            description: "We look for hidden fees. Tools with clear, scalable pricing structures and generous free tiers get bonus points."
        },
        {
            icon: <Headphones className="w-8 h-8 text-orange-600" />,
            title: "Customer Support",
            description: "We anonymously test support channels (chat, email, phone) to measure response time and helpfulness."
        }
    ];

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">How We Rank Email Tools</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our rankings are based on rigorous testing, not just popularity. Here is our 5-point framework for evaluating every platform.
                    </p>
                </div>

                <div className="space-y-12">
                    {criteria.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 rounded-2xl border border-gray-100 items-start">
                            <div className="bg-white p-4 rounded-xl shadow-sm shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 bg-blue-900 text-white rounded-2xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Do you have a tool we should review?</h2>
                    <p className="text-blue-200 mb-8">We are always looking for new and innovative platforms to add to our database.</p>
                    <a href="mailto:contact@emailtoolrank.com" className="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                        Submit a Tool
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Ranking;
