import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Leaderboard from './components/Leaderboard';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Leaderboard />
      <FAQ />
      <CTA />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;