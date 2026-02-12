
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyPartnership from './components/WhyPartnership';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Programs />
        <WhyPartnership />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
