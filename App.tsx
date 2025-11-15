import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import SpecialAccess from './components/SpecialAccess';
import AdminLocal from './components/AdminLocal';
import AdminGitHub from './components/AdminGitHub';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  const ScrollToHash: React.FC = () => {
    const { hash } = useLocation();
    useEffect(() => {
      if (hash) {
        const id = decodeURIComponent(hash);
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, [hash]);
    return null;
  };
  return (
    <BrowserRouter basename={String((import.meta as any).env.BASE_URL || '/').replace(/\/$/, '')}>
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
            <Route path="/special-access" element={<SpecialAccess />} />
            <Route path="/admin" element={<AdminLocal />} />
            <Route path="/admin-github" element={<AdminGitHub />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/admin-panel-new" element={
              <Suspense fallback={<div className="p-5 text-center">Yükleniyor...</div>}>
                {React.createElement(React.lazy(() => import('./components/AdminPanel_new')))}
              </Suspense>
            } />
          </Routes>
          <ScrollToHash />
        </main>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;