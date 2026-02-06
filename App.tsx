
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import Products from './components/Products';
import Personalization from './components/Personalization';
import CottonSection from './components/CottonSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-200 selection:text-blue-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <VideoSection />
        <Features />
        <Products />
        <Personalization />
        <CottonSection />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
