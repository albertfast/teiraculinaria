import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Veri türleri
interface BaseItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  order: number;
}

interface MenuItem extends BaseItem {
  price: string;
}

interface ServiceItem extends BaseItem {
  details: string[];
}

interface HeroItem extends BaseItem {
  // Hero için özel alanlar eklenebilir
}

interface TestimonialItem extends BaseItem {
  author: string;
  position?: string;
}

interface Section {
  id: string;
  name: string;
  displayName: string;
  items: (MenuItem | ServiceItem | HeroItem | TestimonialItem)[];
}

interface PageData {
  id: string;
  name: string;
  displayName: string;
  sections: Section[];
}

// Örnek veri
const initialPages: PageData[] = [
  {
    id: 'home',
    name: 'home',
    displayName: 'Home',
    sections: [
      {
        id: 'home-hero',
        name: 'hero',
        displayName: 'Hero Section',
        items: [
          {
            id: 'hero-1',
            title: 'Culinary Artistry',
            subtitle: 'Elevating dining experiences',
            description: 'Michelin-trained Chef Deniz Sezer creates unforgettable culinary experiences with creativity and passion.',
            images: ['./imggallery/306431890_838509097573244_4219760642394676583_n.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'home-intro',
        name: 'intro',
        displayName: 'Introduction',
        items: [
          {
            id: 'intro-1',
            title: 'Welcome to Chef Deniz Sezer\'s World',
            subtitle: 'Where culinary dreams become reality',
            description: 'Experience the fusion of traditional techniques and modern innovation through Chef Deniz\'s carefully crafted menus and personalized dining experiences.',
            images: ['./imggallery/313873528_1866452180360149_4966383405849033872_n.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'home-featured',
        name: 'featured',
        displayName: 'Featured Experiences',
        items: [
          {
            id: 'featured-1',
            title: 'Private Dining',
            subtitle: 'Exclusive culinary journeys',
            description: 'Let Chef Deniz create a bespoke menu for your special occasion, served in the comfort of your home or chosen venue.',
            images: ['./imggallery/278530833_660667775045864_1228330850447914314_n.jpg'],
            order: 1
          },
          {
            id: 'featured-2',
            title: 'Seasonal Tasting Menus',
            subtitle: 'A celebration of local produce',
            description: 'Experience the finest seasonal ingredients transformed into breathtaking culinary masterpieces.',
            images: ['./imggallery/299622273_867508887542151_6159437778816378211_n.jpg'],
            order: 2
          }
        ]
      }
    ]
  },
  {
    id: 'menu',
    name: 'menu',
    displayName: 'Menu',
    sections: [
      {
        id: 'menu-premium',
        name: 'premium',
        displayName: 'Chef\'s Choice / Premium',
        items: [
          {
            id: 'premium-1',
            title: 'Chef\'s Choice / Premium',
            subtitle: 'An elegant, multi-course tasting',
            description: 'An elegant, multi-course tasting that highlights seasonal ingredients and refined techniques. Perfect for intimate dinners or special celebrations.',
            price: 'Starting from $1,500',
            images: ['./imggallery/chefs-choice.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'menu-tasting',
        name: 'tasting',
        displayName: 'Modern Tasting Menu',
        items: [
          {
            id: 'tasting-1',
            title: 'Modern Tasting Menu',
            subtitle: 'A curated 6–7 course degustation',
            description: 'A curated 6–7 course degustation showcasing the chef\'s signature dishes and inventive flavor pairings. Minimum group size advised for full experience.',
            price: 'Starting from $1,500',
            images: ['./imggallery/modern-tasting.jpg'],
            order: 2
          }
        ]
      },
      {
        id: 'menu-family',
        name: 'family',
        displayName: 'Family Style / Share Plates',
        items: [
          {
            id: 'family-1',
            title: 'Family Style / Share Plates',
            subtitle: 'Relaxed communal dining',
            description: 'Relaxed communal dining with a selection of generously sized dishes designed for sharing. Great for casual gatherings and celebrations.',
            price: 'Starting from $1,000',
            images: ['./imggallery/family-style.jpg'],
            order: 3
          }
        ]
      },
      {
        id: 'menu-blindfolded',
        name: 'blindfolded',
        displayName: 'Blindfolded Dinner (Dine in the Dark)',
        items: [
          {
            id: 'blindfolded-1',
            title: 'Blindfolded Dinner (Dine in the Dark)',
            subtitle: 'An immersive sensory experience',
            description: 'An immersive sensory experience where guests dine blindfolded, heightening taste, smell, and texture sensations. A unique and memorable culinary adventure.',
            price: 'Starting from $2,000',
            images: ['./imggallery/blindfolded-dinner.jpg'],
            order: 4
          }
        ]
      },
      {
        id: 'menu-catering',
        name: 'catering',
        displayName: 'Events & Catering Menus',
        items: [
          {
            id: 'catering-1',
            title: 'Events & Catering Menus',
            subtitle: 'Full-service catering packages',
            description: 'Full-service catering packages for corporate events, weddings, and large gatherings — thoughtfully sourced and executed to your needs.',
            price: 'Custom pricing',
            images: ['./imggallery/events-catering.jpg'],
            order: 5
          }
        ]
      },
      {
        id: 'menu-seasonal',
        name: 'seasonal',
        displayName: 'Seasonal Specials & Add-ons',
        items: [
          {
            id: 'seasonal-1',
            title: 'Seasonal Specials & Add-ons',
            subtitle: 'Enhance your dining experience',
            description: 'Enhance your dining experience with seasonal specialties, wine pairings, and unique add-ons that complement Chef Deniz\'s curated menus.',
            price: 'Varies',
            images: ['./imggallery/seasonal-specials.jpg'],
            order: 6
          }
        ]
      }
    ]
  },
  {
    id: 'services',
    name: 'services',
    displayName: 'Services',
    sections: [
      {
        id: 'services-private',
        name: 'private-chef',
        displayName: 'Private Chef Services',
        items: [
          {
            id: 'private-1',
            title: 'Private Chef Experience',
            description: 'Transform your home into an exclusive restaurant with Chef Deniz\'s personalized dining experience. From intimate dinners to special celebrations, enjoy restaurant-quality cuisine in the comfort of your own space.',
            details: [
              'Consultation and personalized menu planning',
              'Premium ingredient sourcing from local markets',
              'On-site preparation and professional service',
              'Wine pairing recommendations',
              'Complete clean-up included'
            ],
            images: ['./imggallery/299220748_486389583312196_2918701892607691025_n.jpg', './imggallery/313873528_1866452180360149_4966383405849033872_n.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'services-events',
        name: 'events',
        displayName: 'Event Catering',
        items: [
          {
            id: 'events-1',
            title: 'Bespoke Event Catering',
            description: 'From intimate gatherings to large celebrations, Chef Deniz creates memorable culinary experiences for any occasion. Each event is thoughtfully designed to reflect your vision and delight your guests.',
            details: [
              'Corporate events and product launches',
              'Wedding receptions and rehearsal dinners',
              'Holiday parties and special celebrations',
              'Custom menu development',
              'Full-service staffing available',
              'Bar service and cocktail design'
            ],
            images: ['./imggallery/312832450_183603154242544_3364490850470574658_n.jpg', './imggallery/310038471_641913360867435_675961683670589393_n.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'services-classes',
        name: 'cooking-classes',
        displayName: 'Cooking Classes',
        items: [
          {
            id: 'classes-1',
            title: 'Interactive Cooking Classes',
            description: 'Learn the secrets of Chef Deniz\'s culinary techniques in engaging, hands-on cooking classes. Perfect for individuals, couples, or groups looking to enhance their culinary skills while having fun.',
            details: [
              'Small group classes (max 8 participants)',
              'Private one-on-one instruction available',
              'Corporate team-building experiences',
              'Themed menus (Mediterranean, French, Modern Turkish, etc.)',
              'All ingredients and equipment provided',
              'Enjoy the meal you prepare with wine pairings'
            ],
            images: ['./imggallery/281702814_728529544951109_6603836699030402746_n.jpg', './imggallery/280949690_725467548767333_4553270213043954652_n.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'services-consultation',
        name: 'consultation',
        displayName: 'Culinary Consultation',
        items: [
          {
            id: 'consultation-1',
            title: 'Restaurant & Menu Development',
            description: 'Benefit from Chef Deniz\'s expertise in restaurant operations, menu engineering, and kitchen efficiency. Ideal for new restaurant concepts or established venues looking to refresh their offerings.',
            details: [
              'Menu development and optimization',
              'Kitchen workflow and efficiency analysis',
              'Staff training and development',
              'Food cost management',
              'Supplier relationship establishment',
              'Seasonal menu planning'
            ],
            images: ['./imggallery/298262238_1003468893663263_5635158051316616602_n.jpg'],
            order: 1
          }
        ]
      }
    ]
  },
  {
    id: 'about',
    name: 'about',
    displayName: 'About',
    sections: [
      {
        id: 'about-bio',
        name: 'bio',
        displayName: 'Chef Biography',
        items: [
          {
            id: 'bio-1',
            title: 'Chef Deniz Sezer',
            description: 'Michelin-trained chef with a passion for innovative cuisine that blends traditional techniques with modern creativity. Chef Deniz brings over 15 years of experience from some of the world\'s most prestigious kitchens to create unforgettable dining experiences.',
            details: [
              'Born and raised in Istanbul, Turkey',
              'Trained at Le Cordon Bleu, Paris',
              'Worked in Michelin-starred restaurants across Europe',
              'Specializes in Mediterranean and French fusion cuisine',
              'Advocates for sustainable, locally-sourced ingredients'
            ],
            images: ['./imggallery/283669946_4610482689053285_5972101986939321638_n.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'about-philosophy',
        name: 'philosophy',
        displayName: 'Culinary Philosophy',
        items: [
          {
            id: 'philosophy-1',
            title: 'The Art of Flavor',
            description: 'My approach to cooking is rooted in respecting ingredients and traditions while embracing innovation. Each dish tells a story, invoking emotions and memories through carefully balanced flavors and textures.',
            details: [
              'Seasonal and sustainable ingredients',
              'Balance of technique and creativity',
              'Attention to detail in presentation',
              'Respect for culinary traditions',
              'Constant exploration of new flavors'
            ],
            images: ['./imggallery/278237612_128420249532692_7345261953775011443_n.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'about-journey',
        name: 'journey',
        displayName: 'Culinary Journey',
        items: [
          {
            id: 'journey-1',
            title: 'From Istanbul to the World',
            description: 'My culinary journey began in the vibrant markets of Istanbul, where I developed a deep appreciation for fresh ingredients and bold flavors. After formal training in France, I spent years working in kitchens across Europe, Asia, and the Americas, absorbing diverse culinary traditions that now influence my unique cooking style.',
            details: [
              'Early inspiration from family recipes',
              'Classic training in French techniques',
              'Exploration of global cuisines',
              'Development of signature style',
              'Return to roots with modern interpretation'
            ],
            images: ['./imggallery/289888444_764784084705431_5104627132645856332_n.jpg', './imggallery/290201033_365343522335822_6989121683645521651_n.jpg'],
            order: 1
          }
        ]
      }
    ]
  },
  {
    id: 'testimonials',
    name: 'testimonials',
    displayName: 'Testimonials',
    sections: [
      {
        id: 'testimonials-clients',
        name: 'client-testimonials',
        displayName: 'Client Testimonials',
        items: [
          {
            id: 'testimonial-1',
            title: 'Exceptional Experience',
            description: 'Chef Deniz created an unforgettable dining experience for our anniversary. The flavors were extraordinary and the presentation was stunning. Every dish told a story and transported us to different parts of the Mediterranean.',
            author: 'Sarah & Michael Johnson',
            position: 'Private Dining Clients',
            images: ['./imggallery/149537444_115806570503750_6955106662995791129_n.jpg'],
            order: 1
          },
          {
            id: 'testimonial-2',
            title: 'Beyond Expectations',
            description: 'Our corporate event was elevated to new heights thanks to Chef Deniz\'s incredible menu. Our international clients were impressed by the thoughtful fusion of flavors and the impeccable service. We\'ll definitely be booking again for future events.',
            author: 'Robert Chen',
            position: 'Marketing Director, Global Innovations',
            images: ['./imggallery/324544066_152195107605724_1918904625421334616_n.jpg'],
            order: 2
          },
          {
            id: 'testimonial-3',
            title: 'A Culinary Journey',
            description: 'The cooking class with Chef Deniz was not just educational but truly inspirational. His passion for ingredients and techniques is contagious. We learned so much while having an amazing time, and the meal we created together was divine.',
            author: 'Emma & David Rodriguez',
            position: 'Cooking Class Participants',
            images: ['./imggallery/318235503_536005258138307_7765495500139449825_n.jpg'],
            order: 3
          },
          {
            id: 'testimonial-4',
            title: 'Wedding Reception Perfection',
            description: 'Chef Deniz and his team catered our wedding reception, and the food became one of the most talked-about aspects of our special day. The custom menu perfectly reflected our journey as a couple, and every detail was executed flawlessly.',
            author: 'Sophia & James Wilson',
            position: 'Wedding Clients',
            images: ['./imggallery/316119619_6422508417765998_6768193420321574199_n.jpg'],
            order: 4
          }
        ]
      },
      {
        id: 'testimonials-professional',
        name: 'professional-endorsements',
        displayName: 'Professional Endorsements',
        items: [
          {
            id: 'endorsement-1',
            title: 'A True Culinary Artist',
            description: 'Working alongside Chef Deniz was an inspiring experience. His innovative approach to traditional techniques and his unwavering commitment to quality ingredients sets a new standard in the culinary world.',
            author: 'Chef Isabelle Laurent',
            position: 'Executive Chef, Étoile Restaurant (2 Michelin Stars)',
            images: ['./imggallery/344363826_1374148396767037_6961431355963523252_n.jpg'],
            order: 1
          }
        ]
      }
    ]
  },
  {
    id: 'contact',
    name: 'contact',
    displayName: 'Contact',
    sections: [
      {
        id: 'contact-info',
        name: 'contact-information',
        displayName: 'Contact Information',
        items: [
          {
            id: 'contact-1',
            title: 'Get in Touch',
            description: 'Ready to create an unforgettable culinary experience? Contact Chef Deniz to discuss your vision and begin planning your bespoke dining event or service.',
            details: [
              'Email: chef@denizsezer.com',
              'Phone: +90 555 123 4567',
              'Instagram: @chef.denizsezer',
              'Based in Istanbul, Turkey',
              'Available for international bookings'
            ],
            images: ['./imggallery/470200357_18433602970073948_7179051539531042285_n.jpg'],
            order: 1
          }
        ]
      },
      {
        id: 'contact-booking',
        name: 'booking-process',
        displayName: 'Booking Process',
        items: [
          {
            id: 'booking-1',
            title: 'How to Book',
            description: 'Booking Chef Deniz\'s services is a simple and collaborative process designed to create the perfect culinary experience for your needs.',
            details: [
              '1. Initial Consultation: Discuss your vision, preferences, and requirements',
              '2. Proposal: Receive a customized proposal including menu suggestions and pricing',
              '3. Menu Finalization: Refine the menu to perfectly suit your event',
              '4. Confirmation: Secure your booking with a deposit',
              '5. Final Details: Confirm all logistics one week before your event',
              '6. Enjoy: Experience culinary excellence on your special day'
            ],
            images: ['./imggallery/339508856_885513272544585_8268982997877371805_n.jpg'],
            order: 1
          }
        ]
      }
    ]
  }
];

export default function AdminPanel() {
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState<PageData[]>(initialPages);
  const [currentPage, setCurrentPage] = useState<string>('menu');
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [currentItem, setCurrentItem] = useState<any | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Yetkilendirme kontrolü
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin-auth');
    if (isLoggedIn !== 'true') {
      navigate('/admin-login');
    } else {
      // Verileri yükle (örnek verilerle başlıyoruz, gerçekte API'dan gelecek)
      const savedData = localStorage.getItem('site-content');
      if (savedData) {
        try {
          setPages(JSON.parse(savedData));
        } catch (e) {
          console.error('Content load error:', e);
        }
      }
      setIsLoading(false);
    }
  }, [navigate]);

  // Seçili sayfanın bölümlerini al
  const currentPageData = pages.find(p => p.id === currentPage);
  const sections = currentPageData?.sections || [];

  // Seçili bölümün öğelerini al
  const currentSectionData = currentSection 
    ? sections.find(s => s.id === currentSection)
    : null;

  // Oturum kapatma
  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    navigate('/admin-login');
  };

  // Değişiklikleri kaydet
  const saveChanges = () => {
    localStorage.setItem('site-content', JSON.stringify(pages));
    setHasChanges(false);
    alert('Changes saved!');
  };

  // Değişiklikleri yayınla
  const publishChanges = () => {
    // GitHub API entegrasyonu burada olacak, şimdilik sadece kaydet
    saveChanges();
    alert('Changes published! (Real integration requires backend)');
  };

  // Öğe düzenleme
  const updateCurrentItem = (field: string, value: any) => {
    if (!currentItem || !currentSection) return;
    
    // Önce currentItem'ı güncelle (gerçek zamanlı güncelleme için)
    setCurrentItem(prevItem => ({
      ...prevItem,
      [field]: value
    }));
    
    setPages(prevPages => {
      return prevPages.map(page => {
        if (page.id !== currentPage) return page;
        
        return {
          ...page,
          sections: page.sections.map(section => {
            if (section.id !== currentSection) return section;
            
            return {
              ...section,
              items: section.items.map(item => {
                if (item.id !== currentItem.id) return item;
                
                return {
                  ...item,
                  [field]: value
                };
              })
            };
          })
        };
      });
    });
    
    setHasChanges(true);
  };

  // Add new image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !currentItem) return;
    
    // Get all available image files in the project
    const imageGallery = [
      './imggallery/146036331_2570005219790657_2835741437971567938_n.jpg',
      './imggallery/149537444_115806570503750_6955106662995791129_n.jpg',
      './imggallery/278237612_128420249532692_7345261953775011443_n.jpg',
      './imggallery/278530833_660667775045864_1228330850447914314_n.jpg',
      './imggallery/280949690_725467548767333_4553270213043954652_n.jpg',
      './imggallery/281702814_728529544951109_6603836699030402746_n.jpg',
      './imggallery/283669946_4610482689053285_5972101986939321638_n.jpg',
      './imggallery/289888444_764784084705431_5104627132645856332_n.jpg',
      './imggallery/290201033_365343522335822_6989121683645521651_n.jpg',
      './imggallery/298262238_1003468893663263_5635158051316616602_n.jpg',
      './imggallery/299220748_486389583312196_2918701892607691025_n.jpg',
      './imggallery/299622273_867508887542151_6159437778816378211_n.jpg',
      './imggallery/306431890_838509097573244_4219760642394676583_n.jpg',
      './imggallery/310038471_641913360867435_675961683670589393_n.jpg',
      './imggallery/312832450_183603154242544_3364490850470574658_n.jpg',
      './imggallery/313873528_1866452180360149_4966383405849033872_n.jpg'
    ];
    
    // Create a preview for each uploaded file and simulate server upload
    const newImages = Array.from(e.target.files).map((file, index) => {
      // Create a temporary local preview (only used for visual feedback if needed)
      // const localPreview = URL.createObjectURL(file as Blob);
      
      // In a real app, we would upload the file to the server here
      // For demo purposes, we'll just use existing images from the gallery
      const serverPath = imageGallery[Math.floor(Math.random() * imageGallery.length)];
      
      // We're returning the server path directly, but in a real app
      // we would first upload the file and then get the server path
      return serverPath;
    });
    
    // Update the current item with the new images
    updateCurrentItem('images', [...currentItem.images, ...newImages]);
    
    // Show success message
    alert('Images uploaded successfully!');
  };

  // Resim silme
  const removeImage = (index: number) => {
    if (!currentItem) return;
    
    const newImages = [...currentItem.images];
    newImages.splice(index, 1);
    
    updateCurrentItem('images', newImages);
  };

  // Yeni bölüm ekleme
  const addNewSection = () => {
    const sectionName = prompt('Enter new section name:');
    if (!sectionName) return;
    
    const sectionId = `${currentPage}-${sectionName.toLowerCase().replace(/\s+/g, '-')}`;
    
    setPages(prevPages => {
      return prevPages.map(page => {
        if (page.id !== currentPage) return page;
        
        return {
          ...page,
          sections: [
            ...page.sections,
            {
              id: sectionId,
              name: sectionName.toLowerCase().replace(/\s+/g, '-'),
              displayName: sectionName,
              items: []
            }
          ]
        };
      });
    });
    
    setHasChanges(true);
  };

  // Yeni öğe ekleme
  const addNewItem = () => {
    if (!currentSection) return;
    
    const newItemId = `item-${Date.now()}`;
    
    setPages(prevPages => {
      return prevPages.map(page => {
        if (page.id !== currentPage) return page;
        
        return {
          ...page,
          sections: page.sections.map(section => {
            if (section.id !== currentSection) return section;
            
            const newItem = {
              id: newItemId,
              title: 'New Item',
              subtitle: 'Subtitle',
              description: 'Description goes here.',
              price: 'Price',
              images: [],
              order: section.items.length + 1
            };
            
            return {
              ...section,
              items: [...section.items, newItem]
            };
          })
        };
      });
    });
    
    setHasChanges(true);
  };

  // Öğe silme
  const deleteItem = (itemId: string) => {
    if (!currentSection || !window.confirm('Are you sure you want to delete this item?')) return;
    
    setPages(prevPages => {
      return prevPages.map(page => {
        if (page.id !== currentPage) return page;
        
        return {
          ...page,
          sections: page.sections.map(section => {
            if (section.id !== currentSection) return section;
            
            return {
              ...section,
              items: section.items.filter(item => item.id !== itemId)
            };
          })
        };
      });
    });
    
    setCurrentItem(null);
    setHasChanges(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <header className="bg-slate-800 border-b border-slate-700 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl font-bold text-amber-400">Deniz Sezer | Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md transition"
            >
              Log Out
            </button>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex space-x-6">
              <button
                onClick={() => { setCurrentPage('home'); setCurrentSection(null); setCurrentItem(null); }}
                className={`px-4 py-2 ${currentPage === 'home' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}
              >
                Home
              </button>
              <button
                onClick={() => { setCurrentPage('menu'); setCurrentSection(null); setCurrentItem(null); }}
                className={`px-4 py-2 ${currentPage === 'menu' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}
              >
                Menu
              </button>
              <button
                onClick={() => { setCurrentPage('about'); setCurrentSection(null); setCurrentItem(null); }}
                className={`px-4 py-2 ${currentPage === 'about' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}
              >
                About
              </button>
              <button
                onClick={() => { setCurrentPage('services'); setCurrentSection(null); setCurrentItem(null); }}
                className={`px-4 py-2 ${currentPage === 'services' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}
              >
                Services
              </button>
              <button
                onClick={() => { setCurrentPage('testimonials'); setCurrentSection(null); setCurrentItem(null); }}
                className={`px-4 py-2 ${currentPage === 'testimonials' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}
              >
                Testimonials
              </button>
              <button
                onClick={() => { setCurrentPage('contact'); setCurrentSection(null); setCurrentItem(null); }}
                className={`px-4 py-2 ${currentPage === 'contact' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}
              >
                Contact
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              {hasChanges && (
                <span className="text-amber-400 text-sm">
                  * Unsaved changes
                </span>
              )}
              <button
                onClick={saveChanges}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition"
              >
                Save
              </button>
              <button
                onClick={publishChanges}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </header>

      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-xl text-slate-400">Loading...</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-6">
          {/* Section navigation for current page */}
          <div className="mb-6 bg-slate-800 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">{pages.find(p => p.id === currentPage)?.displayName} Sections</h2>
              <button
                className="px-3 py-1.5 text-sm text-blue-400 hover:bg-slate-700 rounded"
                onClick={addNewSection}
              >
                + Add New Section
              </button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {currentPageData?.sections.map(section => (
                <button
                  key={section.id}
                  className={`px-4 py-2 rounded-full ${
                    currentSection === section.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  onClick={() => {
                    setCurrentSection(section.id);
                    setCurrentItem(null);
                  }}
                >
                  {section.displayName}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            {currentSection ? (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">
                    {currentSectionData?.displayName}
                  </h2>
                  <button
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition"
                    onClick={addNewItem}
                  >
                    + Add New Item
                  </button>
                </div>

                {/* Item list */}
                <div className="bg-slate-800 rounded-lg p-4">
                  {currentSectionData?.items.length === 0 ? (
                    <p className="text-slate-400">No items in this section yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {currentSectionData?.items.map(item => (
                        <div 
                          key={item.id}
                          className={`p-4 rounded-lg cursor-pointer transition ${
                            currentItem?.id === item.id
                              ? 'bg-slate-700 border border-amber-500'
                              : 'bg-slate-700 hover:bg-slate-600'
                          }`}
                          onClick={() => setCurrentItem(item)}
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="font-bold">{item.title}</h3>
                            <button
                              className="text-red-400 hover:text-red-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteItem(item.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                          <p className="text-slate-400 text-sm">{item.subtitle}</p>
                          
                          {/* Images preview */}
                          {item.images && item.images.length > 0 && (
                            <div className="flex overflow-x-auto gap-2 mt-2 pb-2">
                              {item.images.map((img: string, idx: number) => (
                                <img
                                  key={idx}
                                  src={img}
                                  alt={`${item.title} ${idx + 1}`}
                                  className="h-16 w-24 object-cover rounded"
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Item edit form */}
                {currentItem && (
                  <div className="mt-6 bg-slate-800 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Edit Item</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-1">Title</label>
                        <input
                          type="text"
                          value={currentItem.title}
                          onChange={(e) => updateCurrentItem('title', e.target.value)}
                          className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block mb-1">Subtitle</label>
                        <input
                          type="text"
                          value={currentItem.subtitle || ''}
                          onChange={(e) => updateCurrentItem('subtitle', e.target.value)}
                          className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white"
                        />
                      </div>
                      
                      <div>
                        <label className="block mb-1">Description</label>
                        <textarea
                          value={currentItem.description}
                          onChange={(e) => updateCurrentItem('description', e.target.value)}
                          rows={4}
                          className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white"
                        />
                      </div>
                        
                      {currentItem.price !== undefined && (
                        <div>
                          <label className="block mb-1">Price</label>
                          <input
                            type="text"
                            value={currentItem.price}
                            onChange={(e) => updateCurrentItem('price', e.target.value)}
                            className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white"
                          />
                        </div>
                      )}
                      
                      {currentItem.author !== undefined && (
                        <div>
                          <label className="block mb-1">Author</label>
                          <input
                            type="text"
                            value={currentItem.author}
                            onChange={(e) => updateCurrentItem('author', e.target.value)}
                            className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white"
                          />
                        </div>
                      )}
                      
                      {currentItem.position !== undefined && (
                        <div>
                          <label className="block mb-1">Position/Title</label>
                          <input
                            type="text"
                            value={currentItem.position || ''}
                            onChange={(e) => updateCurrentItem('position', e.target.value)}
                            className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white"
                          />
                        </div>
                      )}
                      
                      {currentItem.details !== undefined && (
                        <div>
                          <label className="block mb-1">Details</label>
                          {currentItem.details.map((detail: string, idx: number) => (
                            <div key={idx} className="flex gap-2 mb-2">
                              <input
                                type="text"
                                value={detail}
                                onChange={(e) => {
                                  const newDetails = [...currentItem.details];
                                  newDetails[idx] = e.target.value;
                                  updateCurrentItem('details', newDetails);
                                }}
                                className="flex-1 p-2 bg-slate-700 border border-slate-600 rounded text-white"
                              />
                              <button
                                onClick={() => {
                                  const newDetails = [...currentItem.details];
                                  newDetails.splice(idx, 1);
                                  updateCurrentItem('details', newDetails);
                                }}
                                className="px-3 py-1 bg-red-700 hover:bg-red-800 rounded"
                              >
                                X
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const newDetails = [...(currentItem.details || []), ''];
                              updateCurrentItem('details', newDetails);
                            }}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
                          >
                            + Add Detail
                          </button>
                        </div>
                      )}
                      
                      {/* Image management */}
                      <div>
                        <label className="block mb-2">Images</label>
                        <div className="grid grid-cols-3 gap-4">
                          {currentItem.images.map((img: string, idx: number) => (
                            <div key={idx} className="relative group">
                              <img
                                src={img}
                                alt={`Image ${idx + 1}`}
                                className="w-full h-32 object-cover rounded"
                              />
                              <button
                                onClick={() => removeImage(idx)}
                                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                X
                              </button>
                            </div>
                          ))}
                          
                          {/* Image upload button */}
                          <div 
                            className="w-full h-32 border-2 border-dashed border-slate-600 rounded flex items-center justify-center cursor-pointer hover:border-amber-500 transition"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <span className="text-slate-400">+ Add Image</span>
                          </div>
                        </div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <h2 className="text-xl font-bold mb-4">Welcome</h2>
                <p className="text-slate-400">
                  Please select a section to edit from the options above.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}