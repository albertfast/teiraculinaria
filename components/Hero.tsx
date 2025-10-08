import React from 'react';

const Hero: React.FC = () => {

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen min-h-[700px] flex items-center justify-center text-center relative overflow-hidden bg-black">
      <img src="/imggallery/146036331_2570005219790657_2835741437971567938_n.jpg" alt="Chef background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="relative z-10 text-white p-6 animate-fadeUp max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4 tracking-tight">
          Deniz Sezer — Michelin-Trained Chef
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
          Intimate, multi-course private dining and bespoke culinary experiences.
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-neutral-200 mb-8">
          Chef Deniz blends Anatolian roots with haute cuisine techniques to craft memorable evenings for exclusive guests.
        </p>
        <a href="#contact" onClick={scrollToContact} className="inline-block bg-amber-600 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Inquire About Private Dining
        </a>
      </div>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeUp { animation: fadeUp 1s ease-out both; }
      `}</style>
    </section>
  );
};

export default Hero;