import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        // For testing purposes: always show it
        // if (!consent) {
        setIsVisible(true);
        // }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all animate-in slide-in-from-top-8 duration-500 border border-gray-100">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6">
                        <Cookie size={32} strokeWidth={2.5} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Cookie Settings</h3>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We use cookies to personalize content and analyze our traffic. Please decide if you want to accept our cookies.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleAccept}
                            className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
                        >
                            Accept All Cookies
                        </button>
                        <button
                            onClick={handleReject}
                            className="w-full py-3.5 rounded-xl border-2 border-gray-100 text-gray-700 font-bold hover:bg-gray-50 hover:border-gray-200 transition-all"
                        >
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
