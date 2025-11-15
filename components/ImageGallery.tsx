import React, { useState } from 'react';

// Use BASE_URL for correct path resolution in production
const getPath = (path: string) => {
  return (import.meta as any).env.BASE_URL + path.replace('./', '');
};

const imageNames = [
  'denizsezeridea.jpeg',
  '316119619_6422508417765998_6768193420321574199_n.jpg',
  '324544066_152195107605724_1918904625421334616_n.jpg',
  '340490753_536729521725498_7803232779063458043_n.jpg',
  '299622273_867508887542151_6159437778816378211_n.jpg',
  '310038471_641913360867435_675961683670589393_n.jpg',
  '313873528_1866452180360149_4966383405849033872_n.jpg',
  '351088026_944585160151459_2706183776673791694_n.jpg'
];

const images = imageNames.map(img => getPath('imggallery/' + img));

const ImageGallery: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 bg-slate-900/80">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-100 mb-6">Gallery</h2>
        <p className="text-neutral-300 mb-8 max-w-2xl">A curated selection of moments from private dinners, pop-ups and exclusive events.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setOpenIndex(i)}
              className="relative overflow-hidden rounded-lg shadow-lg group focus:outline-none"
              aria-label={`Open image ${i + 1}`}>
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-sm text-neutral-100">Chef Deniz Sezer</div>
              </div>
            </button>
          ))}
        </div>

        {openIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="max-w-4xl w-full">
              <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                <button onClick={() => setOpenIndex(null)} className="absolute top-3 right-3 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">✕</button>
                <img src={images[openIndex]} alt={`Large ${openIndex + 1}`} className="w-full h-[70vh] object-contain bg-black" />
                <div className="p-4 border-t border-slate-700 bg-slate-900/90 text-neutral-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-neutral-100">Private Dining — Chef Deniz Sezer</div>
                      <div className="text-sm">Exclusive evenings, curated menus, unforgettable flavors.</div>
                    </div>
                    <div className="text-sm text-neutral-400">Image {openIndex + 1} of {images.length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
