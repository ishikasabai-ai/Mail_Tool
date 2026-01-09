import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

import Compare from './pages/Comparison';
import ToolReview from './pages/ToolReview';
import Ranking from './pages/Ranking';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import Guides from './pages/Guides';
import TopPicks from './pages/TopPicks';
import Reviews from './pages/Reviews';
import AffiliateDisclosure from './pages/AffiliateDisclosure';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/reviews/:id" element={<ToolReview />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/top-picks" element={<TopPicks />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
