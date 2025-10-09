import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Ballpit from '../components/Ballpit';
import LightBallpit from '../components/LightBallpit';

const AboutPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if the device is mobile/low-performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
                 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Background bubbles (fixed position) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {isMobile ? (
          <LightBallpit className="w-full h-full opacity-60" />
        ) : (
          <Ballpit
            count={60}
            gravity={0.15}
            friction={0.99}
            wallBounce={0.95}
            followCursor={true}
            colors={[0x7c2d12, 0xf59e0b, 0xffe4b5]}
            ambientColor={0x111827}
            ambientIntensity={0.85}
            lightIntensity={70}
          />
        )}
        <div className="absolute inset-0 bg-slate-950/85" />
      </div>
      
      {/* Content with z-index over background */}
      <div className="relative z-10">
      {/* Hero with background video */}
      <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="./imggallery/title.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="./imggallery/149537444_115806570503750_6955106662995791129_n.jpg"
          style={{
            objectPosition: "center 25%" // Move the focus point to show the chef's face
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/55 to-slate-950/80" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white drop-shadow mb-3">The Anatolian Table</h1>
            <p className="text-amber-200 text-lg md:text-xl">Michelin-starred craft, Anatolian soul. Private dining and bespoke events by Chef Deniz Sezer.</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="-mt-10 md:-mt-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl bg-slate-900/70 ring-1 ring-white/5 p-6">
              <div className="text-3xl md:text-4xl font-semibold text-amber-300">10+<span className="text-base md:text-lg align-top ml-1 text-slate-300">years</span></div>
              <div className="text-slate-400 mt-1">of fine-dining experience</div>
            </div>
            <div className="rounded-xl bg-slate-900/70 ring-1 ring-white/5 p-6">
              <div className="text-3xl md:text-4xl font-semibold text-amber-300">150+<span className="text-base md:text-lg align-top ml-1 text-slate-300">events</span></div>
              <div className="text-slate-400 mt-1">private dinners & celebrations</div>
            </div>
            <div className="rounded-xl bg-slate-900/70 ring-1 ring-white/5 p-6">
              <div className="text-3xl md:text-4xl font-semibold text-amber-300">12<span className="text-base md:text-lg align-top ml-1 text-slate-300">cities</span></div>
              <div className="text-slate-400 mt-1">served across TR, EU, and US</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our mission</h2>
            <p className="text-slate-300 leading-relaxed">
              At <em>The Anatolian Table</em>, At The Anatolian Table, our mission is to unite people through unforgettable culinary experiences that celebrate both tradition and innovation. We are driven by a passion for excellence, creating personalized menus that fuse the rich flavors of Anatolian cuisine with global influences. Every dish we craft is a reflection of our commitment to the finest seasonal ingredients, meticulous attention to detail, and a deep respect for diverse culinary traditions.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Our goal is to bring people together around the table, where every bite sparks conversation, joy, and connection. Through each dining experience, we aim to create lasting memories, blending creativity and authenticity in every course. At The Anatolian Table, we believe that food is more than nourishment—it's a celebration of culture, love, and the shared moments that make life extraordinary.
            </p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our vision</h2>
            <p className="text-slate-300 leading-relaxed">
              At The Anatolian Table, our vision is to transform dining into an art form by blending culinary creativity with personalized service. We aspire to be a leading name in bespoke private chef services and catering, known for our innovation, excellence, and unwavering passion for food. By merging global flavors with the finest seasonal ingredients, we aim to craft unforgettable moments where every meal becomes a celebration of culture, craftsmanship, and the connections that bring us together. Our goal is to elevate the dining experience, making each gathering an extraordinary occasion.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              By merging bold Turkish flavors with modern technique, we craft moments that resonate beyond the plate.
            </p>
          </div>
        </div>
      </section>
      {/*Image Card*/}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="md:w-2/3 mx-auto h-80 md:h-96 overflow-hidden">
              {/* Using an image we know exists in the built output */}
              <img
                src="./imggallery/340490753_536729521725498_7803232779063458043_n.jpg"
                alt="Chef Portrait"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  objectPosition: "center center" // Adjusting focus for a different image
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Accent band (no ballpit since we have global one) */}
      <section className="relative py-16 md:py-20" style={{ minHeight: 240 }}>
        <div className="absolute inset-0 bg-amber-900/20 backdrop-blur-sm" />
        <div className="relative container mx-auto px-6 py-8">
          <h3 className="text-3xl md:text-4xl font-serif text-white">Our Story</h3>
          <p className="text-slate-300 max-w-3xl mt-3">The Anatolian Table is a family-owned business founded by Chef Deniz Sezer and his wife, Michelle, born from their shared love for food, culture, and each other. Deniz’s passion for culinary arts and Michelle’s admiration for Turkish cuisine came together like the perfect recipe: a pinch of expertise, a dash of love, and plenty of laughter.</p>
          <p className="text-slate-300 max-w-3xl mt-3">Together, they embarked on a journey to share the rich flavors and traditions of Turkish cuisine with the world, creating a dining experience that is both authentic and innovative.</p>
          <p className="text-slate-300 max-w-3xl mt-3">At The Anatolian Table, we believe that food is a universal language that brings people together. Our story is one of passion, creativity, and a deep respect for the culinary arts.</p>
          <p className="text-slate-300 max-w-3xl mt-3">With over 15 years of experience in Michelin-starred kitchens across Spain, Japan, and Italy, Deniz blends the finest flavors of global cuisines with the rich tastes of Anatolian tradition. His culinary journey began in Turkey, where he trained in Gastronomy and Culinary Arts, perfecting his craft while always dreaming of sharing these flavors with the world. Michelle, while continuing her own career, also takes on an essential role in the business, managing its organizational side. Declaring herself the "official taste-tester," Michelle earned this title after countless late-night spice debates and trying new flavor combinations. Each time, she enjoys testing Deniz’s creative touches while discovering new culinary possibilities.</p>
          <p className="text-slate-300 max-w-3xl mt-3">The Anatolian Tables offers more than just food—it delivers memorable, heartwarming experiences. With our private chef and catering services, we prepare Michelin-level dishes tailored to your taste. Our menus, inspired by Mediterranean, Asian, Italian, and fusion cuisines, are made with the finest seasonal ingredients.</p>
          <p className="text-slate-300 max-w-3xl mt-3">Our goal is to bring the warmth of family, the joy of sharing meals, and world-class flavors to your table. In every bite, you’ll find our story, and in every dish, our love.</p>
          <p className="text-slate-300 max-w-3xl mt-3">We invite you to The Anatolian Table—a place where every bite tells a story, and every table is filled with joy.</p>
        </div>
      </section>

      {/* Chef section with bio card */}
      <section className="relative mt-6 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center bg-slate-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl ring-1 ring-amber-500/10">
            <div className="md:w-2/5 h-96 md:h-auto overflow-hidden">
              <img
                src="./imggallery/340490753_536729521725498_7803232779063458043_n.jpg"
                alt="Chef Deniz Sezer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                style={{
                  objectPosition: "center 25%" // Better position to focus on face
                }}
              />
            </div>
            <div className="p-8 md:w-3/5">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Deniz Sezer — Founder / Chef</h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                Deniz grew up in Tire, Izmir. His culinary path spans Michelin-starred restaurants across Turkey, Europe and the United States. Today he brings that craft to the Bay Area as a private chef, blending Anatolian roots with modern technique.
              </p>
              <p className="text-slate-200 leading-relaxed">
                Every experience is tailored — from seasonal tasting menus to immersive, themed events — with sourcing, service and cleanup handled end-to-end.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#contact" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-500 transition-colors duration-300 text-sm font-semibold">
                  Book an Experience
                </a>
                <a href="/services" className="inline-block border border-slate-400 text-slate-200 px-6 py-3 rounded-full hover:bg-slate-800 transition-colors duration-300 text-sm font-semibold">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Accent band (no ballpit since we have global one) */}
      <section className="relative py-16 md:py-20" style={{ minHeight: 240 }}>
        <div className="absolute inset-0 bg-amber-900/20 backdrop-blur-sm" />
        <div className="relative container mx-auto px-6 py-8">
          <h3 className="text-3xl md:text-4xl font-serif text-white">Elevate your experience</h3>
          <p className="text-slate-300 max-w-3xl mt-3">Bespoke menus, refined service and immersive dining crafted for private residences, celebrations and executive events.</p>
        </div>
      </section>
      </div>
    </main>
  );
};

export default AboutPage;
