import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from '../common/CookieConsent';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <CookieConsent />
            <Navbar />
            <main className="flex-grow w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
