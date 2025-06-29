import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Sync Your Truth</h1>
      <p className="text-lg mb-6">Log synchronicities, share with your community, and unlock alignment.</p>
      <Link to="/subscribe" className="bg-black text-white px-4 py-2 rounded-xl">Subscribe Now</Link>
    </div>
  );
}

function Subscribe() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 max-w-md bg-gray-100 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Access All Features</h2>
        <p className="mb-4">$6.99 every 2 weeks</p>
        <a
          href="https://buy.stripe.com/test_5kA4iV3bffPa9IsbII" // Replace with your live Stripe link
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Subscribe with Stripe
        </a>
      </div>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
      <p>This app collects only the data required to process payments and log synchronicity activity...</p>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
      <p>Sync Your Truth is owned and operated by Meagan. All rights to data, features, and branding are exclusively reserved to Meagan...</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
