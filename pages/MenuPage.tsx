import React, { useEffect, useState, useCallback } from 'react'; // Bu PDF parse edilmiş veri, menü için admin panel verisini kullanacağız.
import MenuBackground from '../components/MenuBackground';
import { fallbackMenuOffers } from '@/src/defaultContent';
import { loadSiteContent } from '@/src/siteContentService';
import type { MenuItem, SiteContent } from '@/src/siteContentTypes';

const MenuPage: React.FC = () => {
  const [offers, setOffers] = useState(fallbackMenuOffers);

  // Helper function to slugify titles for keys
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  // Function to compute offers from given content data
  const computeOffersFromContent = useCallback((content: SiteContent) => {
    const sections: string[] = Array.isArray(content?.menuSections) && content.menuSections.length
      ? content.menuSections
      : fallbackMenuOffers.map(o => o.title);
    const menuItems: MenuItem[] = Array.isArray(content?.menu) ? content.menu : [];

    const cards = sections.map((sectionTitle: string) => {
      // Bu bölümle ilgili bir öğe bulmaya çalışın (açıklama ve resim için)
      const item = menuItems.find((m) => (m.category || '').trim() === sectionTitle.trim());

      // Fallback resim ve açıklama için orijinal fallbackOffers'tan eşleşeni bul
      const fallback = fallbackMenuOffers.find(f => f.title === sectionTitle);

      const key = slugify(sectionTitle || (item?.title ?? 'section')) || 'section';
      return {
        key,
        title: sectionTitle || item?.title || 'Menu',
        desc: item?.description || fallback?.desc || 'Curated offering.',
        img: (item?.images && item.images[0]) || fallback?.img || './imggallery/denizsezeridea.jpeg',
      };
    });
    return cards;
  }, [slugify]); // slugify fonksiyonu dışarıdan geldiği için bağımlılıklara eklendi.

  // Initial load and listen to updates
  useEffect(() => {
    let cancelled = false;
    const hydrate = async () => {
      const content = await loadSiteContent();
      if (!cancelled && content) {
        const computed = computeOffersFromContent(content);
        if (computed && computed.length) {
          setOffers(computed as typeof fallbackMenuOffers);
        }
      }
    };
    hydrate();

    // Admin panelinden gelen güncellemeleri dinle
    const onSiteContentUpdated = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.content) {
        const updatedContent: SiteContent = customEvent.detail.content;
        const computed = computeOffersFromContent(updatedContent);
        if (computed && computed.length) {
          setOffers(computed as typeof fallbackMenuOffers);
        }
      }
    };

    window.addEventListener('siteContentUpdated', onSiteContentUpdated as EventListener);

    return () => {
      window.removeEventListener('siteContentUpdated', onSiteContentUpdated as EventListener);
      cancelled = true;
    };
  }, [computeOffersFromContent]); // computeOffersFromContent bağımlılık olarak eklendi.

  return (
    <main className="min-h-screen bg-slate-900 text-neutral-100 relative">
      <MenuBackground />
      <section className="pt-28 pb-10">
        <div className="container mx-auto px-6 menu-hero-content" style={{ minHeight: 380 }}>
          <div className="flex flex-col justify-center items-center text-center py-10">
            <h1 className="text-5xl md:text-6xl font-serif text-white drop-shadow-lg mb-4">Menu Options</h1>
            <p className="text-lg md:text-xl text-amber-100/90 max-w-3xl">Explore bespoke menus crafted for private dining, events, and memorable culinary experiences.</p>
            <p className="mt-4 text-sm text-amber-200/80 max-w-2xl">{parsed.privateChefSection ? parsed.privateChefSection.split('.').slice(0,2).join('. ') + '.' : ''}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((o) => (
              <article key={o.key} className="bg-slate-50/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden flex flex-col border border-white/10">
                <div className="h-48 sm:h-56 md:h-44 lg:h-48 overflow-hidden">
                  <img src={o.img} alt={o.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">{o.title}</h3>
                  <p className="text-slate-700 flex-1">{o.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#contact" className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-500">Inquire</a>
                    <span className="text-sm text-slate-600">Starting from <strong>$1,500</strong></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-900/90 backdrop-blur-sm text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div>
              <h4 className="text-3xl font-serif mb-2">Reserve Your Event</h4>
              <p className="text-slate-100 max-w-2xl">Experience bespoke culinary creations by Chef Deniz Sezer. We handle menu design, sourcing, service and cleanup so you can enjoy the event.</p>
            </div>
            <div>
              <a href="#contact" className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold">Reserve</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
