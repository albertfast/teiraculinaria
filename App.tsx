import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ImageGallery from './components/ImageGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidEther from './components/LiquidEther';
import './components/LiquidEther.css';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-slate-900 text-neutral-200 antialiased relative">
       <LiquidEther
        colors={['#a16207', '#1e293b', '#020617']}
        mouseForce={20}
        cursorSize={100}
        isViscous={true}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
      />
      <div className="relative z-10">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <About />
              <ImageGallery />
              <Testimonials />
              <Contact />
            </>} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
    </HashRouter>
  );
};

export default App;