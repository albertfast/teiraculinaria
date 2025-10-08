import React from 'react';
import Ballpit from '../components/Ballpit';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero with background video */}
      <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="./imggallery/Video by chefdenizsezer [DLWUUKQReM0].mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="./imggallery/denizsezeridea.jpeg"
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
              At <em>The Anatolian Table</em>, our mission is to unite people through unforgettable culinary experiences that celebrate both tradition and innovation. We craft personalized menus with the finest seasonal ingredients and global influences, honoring diverse culinary traditions.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Every course is designed to spark conversation, joy, and connection — creating lasting memories around the table.
            </p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our vision</h2>
            <p className="text-slate-300 leading-relaxed">
              Our vision is to transform dining into an art form — blending culinary creativity with personalized service. We bring Michelin-starred expertise to intimate settings, elevating each gathering into an extraordinary occasion.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              By merging bold Turkish flavors with modern technique, we craft moments that resonate beyond the plate.
            </p>
          </div>
        </div>
      </section>

      {/* Accent band with Ballpit background (dark + amber) */}
      <section className="relative" style={{ minHeight: 320 }}>
        <div className="absolute inset-0">
          <Ballpit
            count={160}
            gravity={0.5}
            friction={0.98}
            wallBounce={0.95}
            followCursor={true}
            colors={[0x7c2d12, 0xf59e0b, 0xffe4b5]}
            ambientColor={0x111827}
            ambientIntensity={0.9}
            lightIntensity={140}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/80 to-slate-950" />
        <div className="relative container mx-auto px-6 py-16">
          <h3 className="text-3xl md:text-4xl font-serif text-white">Elevate your experience</h3>
          <p className="text-slate-300 max-w-3xl mt-3">Bespoke menus, refined service and immersive dining crafted for private residences, celebrations and executive events.</p>
        </div>
      </section>

      {/* Chef section — full-width bottom photo band */}
      <section className="relative mt-6">
        <img
          src="./imggallery/denizsezeridea.jpeg"
          alt="Chef Deniz Sezer"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-10">
            <h3 className="text-3xl md:text-4xl font-serif text-white">Deniz Sezer — Founder / Chef</h3>
            <p className="text-slate-200 leading-relaxed mt-2 max-w-4xl">Deniz grew up in Tire, Izmir. His culinary path spans Michelin-starred restaurants across Turkey, Europe and the United States. Today he brings that craft to the Bay Area as a private chef, blending Anatolian roots with modern technique. Every experience is tailored — from seasonal tasting menus to immersive, themed events — with sourcing, service and cleanup handled end-to-end.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
