// Sync Your Truth - MVP Web App (Deployable on Vercel)

import React, { useState } from 'react'; import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() { return ( <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6"> <h1 className="text-4xl font-bold mb-4">Welcome to Sync Your Truth</h1> <p className="text-lg mb-6">Log synchronicities, share with your community, and unlock alignment.</p> <Link to="/subscribe" className="bg-black text-white px-4 py-2 rounded-xl">Subscribe Now</Link> </div> ); }

function Subscribe() { return ( <div className="min-h-screen flex items-center justify-center"> <div className="p-6 max-w-md bg-gray-100 rounded-xl shadow"> <h2 className="text-2xl font-bold mb-4">Subscribe to Access All Features</h2> <p className="mb-4">$6.99 every 2 weeks</p> <a href="https://buy.stripe.com/test_5kA4iV3bffPa9IsbII" // Replace with your live Stripe link className="bg-blue-600 text-white px-4 py-2 rounded-xl" > Subscribe with Stripe </a> </div> </div> ); }

function PrivacyPolicy() { return ( <div className="p-6 max-w-4xl mx-auto"> <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2> <p>This app collects only the data required to process payments and log synchronicity activity...</p> </div> ); }

function TermsOfService() { return ( <div className="p-6 max-w-4xl mx-auto"> <h2 className="text-2xl font-bold mb-4">Terms of Service</h2> <p>Sync Your Truth is owned and operated by Meagan. All rights to data, features, and branding are exclusively reserved to Meagan...</p> </div> ); }

function App() { return ( <Router> <Routes> <Route path="/" element={<Home />} /> <Route path="/subscribe" element={<Subscribe />} /> <Route path="/privacy" element={<PrivacyPolicy />} /> <Route path="/terms" element={<TermsOfService />} /> </Routes> </Router> ); }

export default App;

// Sync Your Truth - MVP Web App (Deployable on Vercel)

import React, { useState, useEffect } from 'react'; import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; import { createClient } from '@supabase/supabase-js';

const supabase = createClient( 'https://skthujnqpsjgcmimymck.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrdGh1am5xcHNqZ2NtaW15bWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MDA2MDAsImV4cCI6MjA2NjM3NjYwMH0.lVJkVEe9i4QdTt_MWEk3qZF9xx8DWF6pQy1gzw4mJjk' );

function Home() { return ( <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6"> <h1 className="text-4xl font-bold mb-4">Welcome to Sync Your Truth</h1> <p className="text-lg mb-6">Log synchronicities, share with your community, and unlock alignment.</p> <Link to="/subscribe" className="bg-black text-white px-4 py-2 rounded-xl">Subscribe Now</Link> </div> ); }

function Subscribe() { return ( <div className="min-h-screen flex items-center justify-center"> <div className="p-6 max-w-md bg-gray-100 rounded-xl shadow"> <h2 className="text-2xl font-bold mb-4">Subscribe to Access All Features</h2> <p className="mb-4">$6.99 every 2 weeks</p> <a
href="https://buy.stripe.com/test_5kA4iV3bffPa9IsbII"
className="bg-blue-600 text-white px-4 py-2 rounded-xl"
> Subscribe with Stripe </a> </div> </div> ); }

function PrivacyPolicy() { return ( <div className="p-6 max-w-4xl mx-auto"> <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2> <p>This app collects only the data required to process payments and log synchronicity activity...</p> </div> ); }

function TermsOfService() { return ( <div className="p-6 max-w-4xl mx-auto"> <h2 className="text-2xl font-bold mb-4">Terms of Service</h2> <p>Sync Your Truth is owned and operated by Meagan. All rights to data, features, and branding are exclusively reserved to Meagan...</p> </div> ); }

function Admin() { const [user, setUser] = useState(null); const navigate = useNavigate();

useEffect(() => { supabase.auth.getUser().then(({ data: { user } }) => { if (!user || user.email !== 'ireallydidnt4@gmail.com') { navigate('/'); } else { setUser(user); } }); }, [navigate]);

return user ? ( <div className="p-6"> <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1> <p>Welcome, Meagan. This panel will be upgraded with full controls soon.</p> </div> ) : null; }

function App() { return ( <Router> <Routes> <Route path="/" element={<Home />} /> <Route path="/subscribe" element={<Subscribe />} /> <Route path="/privacy" element={<PrivacyPolicy />} /> <Route path="/terms" element={<TermsOfService />} /> <Route path="/admin" element={<Admin />} /> </Routes> </Router> ); }

export default App;

// Sync Your Truth - MVP Web App (Deployable on Vercel)

import React, { useState, useEffect } from 'react'; import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; import { createClient } from '@supabase/supabase-js';

const supabase = createClient( 'https://skthujnqpsjgcmimymck.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrdGh1am5xcHNqZ2NtaW15bWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MDA2MDAsImV4cCI6MjA2NjM3NjYwMH0.lVJkVEe9i4QdTt_MWEk3qZF9xx8DWF6pQy1gzw4mJjk' );

function Home() { return ( <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6"> <h1 className="text-4xl font-bold mb-4">Welcome to Sync Your Truth</h1> <p className="text-lg mb-6">Log synchronicities, share with your community, and unlock alignment.</p> <Link to="/subscribe" className="bg-black text-white px-4 py-2 rounded-xl">Subscribe Now</Link> </div> ); }

function Subscribe() { return ( <div className="min-h-screen flex items-center justify-center"> <div className="p-6 max-w-md bg-gray-100 rounded-xl shadow"> <h2 className="text-2xl font-bold mb-4">Subscribe to Access All Features</h2> <p className="mb-4">$6.99 every 2 weeks</p> <a
href="https://buy.stripe.com/test_5kA4iV3bffPa9IsbII"
className="bg-blue-600 text-white px-4 py-2 rounded-xl"
> Subscribe with Stripe </a> </div> </div> ); }

function PrivacyPolicy() { return ( <div className="p-6 max-w-4xl mx-auto"> <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2> <p>This app collects only the data required to process payments and log synchronicity activity...</p> </div> ); }

function TermsOfService() { return ( <div className="p-6 max-w-4xl mx-auto"> <h2 className="text-2xl font-bold mb-4">Terms of Service</h2> <p>Sync Your Truth is owned and operated by Meagan. All rights to data, features, and branding are exclusively reserved to Meagan...</p> </div> ); }

function Admin() { const [user, setUser] = useState(null); const navigate = useNavigate();

useEffect(() => { supabase.auth.getUser().then(({ data: { user } }) => { if (!user || user.email !== 'ireallydidnt4@gmail.com') { navigate('/'); } else { setUser(user); } }); }, [navigate]);

return user ? ( <div className="p-6"> <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1> <p>Welcome, Meagan. This panel will be upgraded with full controls soon.</p> </div> ) : null; }

function App() { return ( <Router> <Routes> <Route path="/" element={<Home />} /> <Route path="/subscribe" element={<Subscribe />} /> <Route path="/privacy" element={<PrivacyPolicy />} /> <Route path="/terms" element={<TermsOfService />} /> <Route path="/admin" element={<Admin />} /> </Routes> </Router> ); }

export default App;

