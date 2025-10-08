import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative">
                <img 
                    src="./imggallery/denizsezeridea.jpeg" 
                    alt="Chef Deniz Sezer" 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-3 -right-3 bg-amber-600 text-white text-xs sm:text-sm font-bold p-3 rounded-full shadow-lg">
                    MICHELIN
                    <br />
                    EXPERIENCE
                </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-100 mb-4">Meet Chef Deniz Sezer</h2>
            <p className="text-base md:text-lg text-neutral-300 mb-4 leading-relaxed">
              Born in Izmir, Turkey, Chef Deniz Sezer merges Anatolian tradition with Michelin-trained technique to create private dining experiences that are intimate, theatrical, and meticulously crafted.
            </p>
            <p className="text-base md:text-lg text-neutral-300 mb-4 leading-relaxed">
              With extensive experience in Michelin-starred kitchens and private celebrity engagements — including a five-day private residency for Karim Benzema in Miami — Chef Deniz offers bespoke multi-course menus priced between $1,500 and $5,000 per evening, depending on customization.
            </p>
            <p className="text-base md:text-lg text-neutral-300 mb-6 leading-relaxed">
              Each event is curated with seasonal ingredients, refined techniques, and a personal narrative that elevates every course.
            </p>
            <div className="border-l-4 border-amber-500 pl-4">
              <p className="font-semibold text-neutral-100 italic">"My philosophy is simple: use the finest ingredients to create food that is both beautiful and deeply satisfying. Food should tell a story."</p>
              <p className="text-sm text-neutral-400 mt-1">- Deniz Sezer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;