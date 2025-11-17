import { SiteContent, MenuItem, ServiceItem } from './siteContentTypes';

export const fallbackMenuOffers = [
  {
    key: 'signature',
    title: "Chef's Choice / Premium12",
    desc: 'An elegant, multi-course tasting that highlights seasonal ingredients and refined techniques. Perfect for intimate dinners or special celebrations.',
    img: './imggallery/312832450_183603154242544_3364490850470574658_n.jpg',
  },
  {
    key: 'tasting',
    title: 'Modern Tasting Menu',
    desc: 'A curated 6–7 course degustation showcasing the chef’s signature dishes and inventive flavor pairings. Minimum group size advised for full experience.',
    img: './imggallery/310038471_641913360867435_675961683670589393_n.jpg',
  },
  {
    key: 'family',
    title: 'Family Style / Share Plates',
    desc: 'Relaxed communal dining with a selection of savory plates meant to be shared — approachable, delicious, and customizable.',
    img: './imggallery/299622273_867508887542151_6159437778816378211_n.jpg',
  },
  {
    key: 'blindfold',
    title: 'Blindfolded Dinner (Dine in the Dark)',
    desc: 'A sensory-focused 5-course experience guided by the chef — taste and texture take center stage in an unforgettable tasting.',
    img: './imggallery/316119619_6422508417765998_6768193420321574199_n.jpg',
  },
  {
    key: 'catering',
    title: 'Events & Catering Menus',
    desc: 'Full-service catering packages for corporate events, weddings, and large gatherings — thoughtfully sourced and executed to your needs.',
    img: './imggallery/324544066_152195107605724_1918904625421334616_n.jpg',
  },
  {
    key: 'special',
    title: 'Seasonal Specials & Add-ons',
    desc: 'Limited-time offerings and curated add-ons like sommelier pairing, on-site service staff, and decorative plating themes.',
    img: './imggallery/denizsezeridea.jpeg',
  },
];

export const servicesPackages = [
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

const toMenuItem = (): MenuItem[] =>
  fallbackMenuOffers.map((offer, index) => ({
    id: offer.key,
    title: offer.title,
    description: offer.desc,
    images: [offer.img],
    order: index + 1,
    category: offer.title,
  }));

const toServiceItem = (): ServiceItem[] =>
  servicesPackages.map((svc, index) => ({
    id: svc.key,
    title: svc.title,
    description: svc.blurb,
    images: [svc.img],
    order: index + 1,
    details: svc.includes,
  }));

export const defaultSiteContent: SiteContent = {
  menuSections: fallbackMenuOffers.map((offer) => offer.title),
  menu: toMenuItem(),
  services: toServiceItem(),
  hero: [],
  testimonials: [],
  about: [],
  contact: [],
  pages: {},
};

export const MENU_SECTION_FALLBACKS = defaultSiteContent.menuSections;
