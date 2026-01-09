import React from 'react';
import { ShieldCheck, AlertCircle, FileText, Globe, Mail } from 'lucide-react';

const AffiliateDisclosure = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Affiliate Disclosure</h1>

                <div className="space-y-12">

                    {/* Standard */}
                    <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-900">Standard Affiliate Disclosure</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Some of the links on this website are affiliate links. This means that if you click on a link and make a purchase, we may earn a small commission at no additional cost to you. We only recommend email marketing tools and services that we genuinely believe will add value to our users.
                        </p>
                    </section>

                    {/* Professional */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional & Trust-Focused Disclosure</h2>
                        <div className="text-gray-600 leading-relaxed space-y-4">
                            <p>
                                We believe in full transparency. Our email marketing app participates in affiliate programs, which means we may earn commissions when users sign up through certain links on our site.
                            </p>
                            <p>
                                These commissions help support our platform and allow us to continue providing valuable content and tools. Our recommendations are always based on independent research and real value to our users.
                            </p>
                        </div>
                    </section>

                    {/* Legal / FTC */}
                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="text-gray-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-900">Legal-Safe & FTC-Compliant Version</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            In compliance with FTC guidelines, please note that some links on this website are affiliate links. This means we may earn a commission if you click on the link and make a purchase. This comes at no additional cost to you and helps us maintain and improve our services.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Email Newsletter */}
                        <section className="border border-gray-200 p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="text-purple-500" size={20} />
                                <h3 className="font-bold text-gray-900">Email Newsletter Disclosure</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                This email may contain affiliate links. If you choose to make a purchase through these links, we may receive a commission at no additional cost to you. We only promote products and services that we trust and believe are beneficial.
                            </p>
                        </section>

                        {/* Blog Post */}
                        <section className="border border-gray-200 p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-3">
                                <Globe className="text-green-500" size={20} />
                                <h3 className="font-bold text-gray-900">Blog Post / Review Disclosure</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                This article contains affiliate links to email marketing tools. If you click on these links and make a purchase, we may earn a commission. This does not affect our reviews or recommendations. Our opinions are based on features, usability, and overall value for marketers and businesses.
                            </p>
                        </section>
                    </div>

                    {/* Short */}
                    <section className="text-center pt-8 border-t border-gray-100">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Short Affiliate Disclosure</h3>
                        <p className="text-gray-500 italic text-sm">
                            This page may contain affiliate links. If you purchase through these links, we may earn a commission at no extra cost to you.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default AffiliateDisclosure;
