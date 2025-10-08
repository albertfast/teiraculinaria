import React from 'react';
import parsed from '../data/parsedPdf';

/*
  A completely refreshed Services page inspired by the provided reference: 
  - Premium hero
  - Curated package cards (5–7 Course, Romantic, Chef's Choice, Family Style, Blindfolded)
  - What's included, How it works, FAQs, CTA
*/

type Pkg = {
  key: string;
  title: string;
  badge?: string;
  img: string;
  blurb: string;
  includes: string[];
};

const packages: Pkg[] = [
  {
    key: 'modern-fine-dining',
    title: '3 to 5‑Course Modern Fine Dining',
    badge: 'Popular',
  img: './imggallery/299220748_486389583312196_2918701892607691025_n.jpg',
    blurb:
      'An unforgettable evening crafted to your tastes — seasonal ingredients, refined techniques and elegant plating.',
    includes: [
      'Private Chef Deniz Sezer',
      'All ingredients & shopping',
      'On‑site cooking, service & cleanup'
    ]
  },
  {
    key: 'romantic-dinner',
    title: 'Romantic Dinner with a Private Chef',
  img: './imggallery/351088026_944585160151459_2706183776673791694_n.jpg',
    blurb:
      'A 5‑course fine‑dining experience tailored for two. Celebrate with a bouquet of red roses and chilled French champagne.',
    includes: [
      'Private Chef, bespoke 5‑course menu',
      'Bouquet of red roses & French champagne',
      'Full post‑dinner cleanup'
    ]
  },
  {
    key: 'chefs-choice',
    title: "Chef's Choice / Premium Degustation",
  img: './imggallery/318235503_536005258138307_7765495500139449825_n.jpg',
    blurb:
      'A curated 7‑course dégustation spotlighting signature dishes and inventive pairings. Designed around your preferences.',
    includes: [
      'Seasonal tasting progression',
      'Ingredient sourcing & menu design',
      'Service staff available on request'
    ]
  },
  {
    key: 'family-style',
    title: 'Family Style Share Plates',
  img: './imggallery/299622273_867508887542151_6159437778816378211_n.jpg',
    blurb:
      'Seven gourmet dishes served family‑style. A convivial, customizable feast with something for every guest.',
    includes: [
      'Private chef & all ingredients',
      'Share‑plate menu tailored to you',
      'Service & cleanup included'
    ]
  },
  {
    key: 'blindfolded',
    title: 'Blindfolded Dinner — Dine in the Dark',
  img: './imggallery/316119619_6422508417765998_6768193420321574199_n.jpg',
    blurb:
      'A sensory 5‑course journey guided by your chef. Explore textures and flavors without sight — unforgettable.',
    includes: [
      'Custom 5‑course tasting',
      'Your own blindfolds provided',
      'Shopping, cooking, service & cleanup'
    ]
  }
];

const alwaysIncluded = [
  'Bespoke menu design tailored to preferences & dietary needs',
  'Premium, locally‑sourced ingredients',
  'On‑site cooking and professional service',
  'Full cleanup — seamless and stress‑free'
];

const howItWorks = [
  {
    t: 'Inquire',
    d: 'Share your date, location, guest count and any ideas. We’ll quickly confirm availability.'
  },
  {
    t: 'Design',
    d: 'Collaborative menu design around your tastes, seasonality and any dietary notes.'
  },
  { t: 'Experience', d: 'We arrive prepared, cook on‑site and host a polished, relaxed service.' },
  { t: 'Wrap‑up', d: 'We handle cleanup so your kitchen is spotless when we leave.' }
];

const ServicesPage: React.FC = () => {
  // Keep hero intro short and curated; avoid dumping long PDF text that can overflow the hero
  const intro =
    'Bespoke private chef experiences tailored to your tastes — Michelin‑trained craft with Anatolian soul.';

  return (
  <main className="min-h-screen bg-slate-950 text-slate-100 pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[420px] md:h-[54vh]">
          <img
            src="./imggallery/340490753_536729521725498_7803232779063458043_n.jpg"
            alt="Private Chef Services"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" />
          <div className="relative z-10 container mx-auto px-6 h-full flex items-end pb-10 pt-20 md:pt-0">
            <div className="max-w-3xl">
              <p className="uppercase tracking-widest text-amber-300/90 text-xs md:text-sm">The Anatolian Table</p>
              <h1 className="text-4xl md:text-6xl font-serif text-white drop-shadow">Private Chef Services</h1>
              <p className="mt-3 text-amber-100 text-base md:text-xl max-w-2xl">{intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <article key={p.key} className="group bg-slate-900/80 ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-48 sm:h-56">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-2xl font-serif text-white">{p.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{p.blurb}</p>
                  <ul className="mt-1 grid gap-2 leading-relaxed">
                    {p.includes.map((it) => (
                      <li key={it} className="text-slate-300 flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 flex items-center justify-between">
                    <a href="/#contact" className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-400">
                      Inquire
                    </a>
                    <span className="text-sm text-slate-400">Custom‑priced • Minimums apply</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="pb-10 md:pb-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">What’s always included</h2>
            <p className="text-slate-300 mt-3 max-w-prose">
              Michelin‑trained technique with Anatolian warmth. We handle every detail so you can simply enjoy the evening.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {alwaysIncluded.map((x) => (
              <li key={x} className="flex items-start gap-3 bg-slate-900/70 ring-1 ring-white/5 rounded-xl p-4">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-serif text-white">How it works</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-4">
              {howItWorks.map((s, i) => (
                <div key={s.t} className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 text-amber-300">
                    <span className="h-8 w-8 rounded-full bg-amber-500/10 ring-1 ring-amber-400/40 flex items-center justify-center text-sm font-semibold text-amber-300">
                      {i + 1}
                    </span>
                    <h4 className="text-lg font-semibold text-white">{s.t}</h4>
                  </div>
                  <p className="text-slate-300 pl-11">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs + Service area / Pricing */}
      <section className="pb-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-white">FAQs</h3>
            <div className="mt-4 grid gap-4">
              <div>
                <p className="text-white font-medium">How far in advance should we book?</p>
                <p className="text-slate-300">Most events are booked 2–8 weeks ahead. For special dates, inquire early.</p>
              </div>
              <div>
                <p className="text-white font-medium">Can you accommodate dietary needs?</p>
                <p className="text-slate-300">Absolutely — menus are tailored to allergies and preferences.</p>
              </div>
              <div>
                <p className="text-white font-medium">Do you bring tableware?</p>
                <p className="text-slate-300">We can advise and coordinate rentals if needed; premium serveware add‑ons available.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 md:p-8 flex flex-col gap-3">
            <h4 className="text-xl font-semibold text-white">Service area</h4>
            <p className="text-slate-300">
              {parsed.locations || 'San Francisco Bay Area and beyond by arrangement.'}
            </p>
            <div className="h-px bg-white/10 my-2" />
            <h4 className="text-xl font-semibold text-white">Pricing</h4>
            <p className="text-slate-300">
              Custom menus typically range from <span className="text-amber-300 font-medium">$1,500</span> to
              <span className="text-amber-300 font-medium"> $5,000</span> per evening depending on guest count and ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-900/90 backdrop-blur-sm text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl ring-1 ring-white/10">
            <div>
              <h4 className="text-3xl font-serif mb-2">Ready to plan your evening?</h4>
              <p className="text-slate-100 max-w-2xl">Share a few details and we’ll tailor a bespoke proposal — menu, logistics and timeline handled for you.</p>
            </div>
            <div>
              <a href="/#contact" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-400">Inquire now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
