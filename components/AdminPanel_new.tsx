import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';
import { defaultSiteContent, fallbackMenuOffers, servicesPackages } from '@/src/defaultContent';
import {
  loadSiteContent,
  saveSiteContentLocally,
  dispatchSiteContentEvent,
  publishSiteContentToGitHub,
  getStoredGitHubCreds,
  type GitHubCredentials,
} from '@/src/siteContentService';
import type {
  SiteContent,
  MenuItem,
  ServiceItem,
  HeroItem,
  TestimonialItem,
  AboutItem,
  ContactItem,
  PageSection,
  ContentItem,
} from '@/src/siteContentTypes';

// Section types
type SectionType = 'menu' | 'services' | 'hero' | 'testimonials' | 'about' | 'contact';

const rawBasePath = String((import.meta as any).env.BASE_URL ?? '/');
const normalizedBase = rawBasePath.startsWith('/') ? rawBasePath : `/${rawBasePath}`;
const basePath = normalizedBase.endsWith('/') ? normalizedBase : `${normalizedBase}/`;
const isExternalAsset = (value: string) => /^(https?:|data:|\/\/)/i.test(value);
const stripRelativePrefix = (value: string) => value.replace(/^(\.\/|\/)/, '');
const normalizeImagePath = (value: string) => {
  if (!value) return '';
  if (isExternalAsset(value)) return value;
  const trimmed = stripRelativePrefix(value);
  return trimmed ? `./${trimmed}` : '';
};
const resolveImageUrl = (value: string) => {
  if (!value) return '';
  if (isExternalAsset(value)) return value;
  const trimmed = stripRelativePrefix(value);
  return trimmed ? `${basePath}${trimmed}` : '';
};
const buildRouteUrl = (path: string) => {
  const trimmed = path.replace(/^\/+/, '');
  return `${basePath}${trimmed}`;
};

// Main component for content management
const AdminPanel: React.FC = () => {
  const navigate = useNavigate();

  // State definitions
  const [activeSection, setActiveSection] = useState<string>('menu');
  const [activeSubSection, setActiveSubSection] = useState<string>('');
  
  // Tüm site içeriğini tek bir state objesi içinde tutuyoruz
  const [content, setContent] = useState<SiteContent>({
    menu: [],
    services: [],
    hero: [],
    testimonials: [],
    about: [],
    contact: [],
    pages: {},
    menuSections: [
      'Chef\'s Choice / Premium',
      'Modern Tasting Menu',
      'Family Style / Share Plates',
      'Blindfolded Dinner (Dine in the Dark)',
      'Events & Catering Menus',
      'Seasonal Specials & Add-ons',
    ],
  });

  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showNotification, setShowNotification] = useState<{show: boolean; message: string; type?: 'success' | 'error' | 'info'}>({show: false, message: ''});
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [availableImages, setAvailableImages] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [showPageSections, setShowPageSections] = useState<boolean>(false);
  const [publishing, setPublishing] = useState<boolean>(false);
  const [autoPublish, setAutoPublish] = useState<boolean>(true);
  const [githubCreds, setGithubCreds] = useState<GitHubCredentials | null>(() => getStoredGitHubCreds());

  // Sayfa yüklendiğinde içeriği ve mevcut resimleri yükle
  useEffect(() => {
    loadContent();
    loadAvailableImages();
  }, []);

  useEffect(() => {
    const syncCreds = () => setGithubCreds(getStoredGitHubCreds());
    window.addEventListener('storage', syncCreds);
    return () => window.removeEventListener('storage', syncCreds);
  }, []);

  const PageSectionsModal = () => {
    if (!showPageSections) return null;
    const currentPath = window.location.pathname || '/';
    const sections = content.pages[currentPath] || [];
    return (
      <div className="modal-overlay">
        <div className={`modal ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="modal-header">
            <h3>Detected Page Sections ({sections.length})</h3>
            <button onClick={() => setShowPageSections(false)} className="btn-close">Close</button>
          </div>
          <div className="modal-body">
            {sections.length === 0 ? (
              <p>No sections detected yet. Use "Detect Content" first.</p>
            ) : (
              <ul className="detected-sections-list">
                {sections.map((s) => (
                  <li key={s.id} className="detected-section-item">
                    <strong>{s.heading || '(no heading)'}</strong>
                    <div className="detected-meta">
                      <span>Images: {s.images.length}</span>
                      <span>Chars: {s.text?.length || 0}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };


  const cloneDefaultContent = (): SiteContent => JSON.parse(JSON.stringify(defaultSiteContent));

  const hydrateContent = (data: SiteContent | null | undefined): SiteContent => {
    if (!data) return cloneDefaultContent();
    const copy: SiteContent = {
      ...data,
      menuSections: Array.isArray(data.menuSections) && data.menuSections.length
        ? data.menuSections
        : fallbackMenuOffers.map(o => o.title),
      menu: Array.isArray(data.menu) && data.menu.length
        ? data.menu
        : fallbackMenuOffers.map((o, index) => ({
            id: o.key,
            title: o.title,
            description: o.desc,
            images: [o.img],
            order: index + 1,
            category: o.title,
          })),
      services: Array.isArray(data.services) && data.services.length
        ? data.services
        : servicesPackages.map((p, index) => ({
            id: p.key,
            title: p.title,
            description: p.blurb,
            images: [p.img],
            order: index + 1,
            details: p.includes,
          })),
      hero: Array.isArray(data.hero) ? data.hero : [],
      testimonials: Array.isArray(data.testimonials) ? data.testimonials : [],
      about: Array.isArray(data.about) ? data.about : [],
      contact: Array.isArray(data.contact) ? data.contact : [],
      pages: data.pages || {},
    };
    return copy;
  };

  // Load content (from remote JSON or fallback)
  const loadContent = async () => {
    try {
      const loaded = await loadSiteContent({ refresh: true });
      const safeContent = hydrateContent(loaded);
      setContent(safeContent);
      showNotificationMessage('Content loaded successfully');
    } catch (error) {
      console.error('Error loading content:', error);
      setContent(cloneDefaultContent());
      showNotificationMessage('Error loading content', 'error');
    }
  };

  // Detect content from website components based on class names
  const detectWebsiteContent = async () => {
    try {
      // Try to detect content by querying the DOM of the current page.
      const detected: any = { menu: [], services: [], hero: [], testimonials: [], about: [], contact: [] };

      // Helper to safely query text
      const qText = (root: ParentNode, selector: string) => {
        const el = root.querySelector(selector);
        return el ? el.textContent?.trim() || '' : '';
      };
      const collectImages = (root: Element | null) => {
        if (!root) return [];
        return Array.from(root.querySelectorAll('img'))
          .map((img) => normalizeImagePath((img as HTMLImageElement).getAttribute('src') || ''))
          .filter(Boolean);
      };

      // HERO
      const heroRoot = (document.querySelector('#hero') || document.querySelector('.hero')) as Element | null;
      if (heroRoot) {
        detected.hero.push({
          id: `hero_detected_${Date.now()}`,
          title: qText(heroRoot, 'h1, h2, .title'),
          subtitle: qText(heroRoot, 'h2, h3, .subtitle'),
          description: qText(heroRoot, 'p, .lead'),
          images: collectImages(heroRoot),
          order: 0,
        });
      }

      // ABOUT
      const aboutRoot = (document.querySelector('#about') || document.querySelector('.about')) as Element | null;
      if (aboutRoot) {
        detected.about.push({
          id: `about_detected_${Date.now()}`,
          title: qText(aboutRoot, 'h1, h2, .title'),
          subtitle: qText(aboutRoot, 'h2, h3, .subtitle'),
          description: qText(aboutRoot, 'p'),
          images: collectImages(aboutRoot),
          order: 0,
        });
      }

      // CONTACT
      const contactRoot = (document.querySelector('#contact') || document.querySelector('.contact')) as Element | null;
      if (contactRoot) {
        detected.contact.push({
          id: `contact_detected_${Date.now()}`,
          title: qText(contactRoot, 'h1, h2, .title'),
          subtitle: '',
          description: qText(contactRoot, 'p'),
          email: qText(contactRoot, 'a[href^="mailto:"]') || qText(contactRoot, 'input[name="email"], .email'),
          phone: qText(contactRoot, 'a[href^="tel:"]') || qText(contactRoot, '.phone'),
          address: qText(contactRoot, '.address'),
          images: collectImages(contactRoot),
          order: 0,
        });
      }

      // TESTIMONIALS
      const testimonialRoots = document.querySelectorAll('.testimonial, .testimonials, #testimonials');
      testimonialRoots.forEach((root, idx) => {
        const title = qText(root, '.name, .author, h3');
        const role = qText(root, '.role, .title');
        const text = qText(root, 'p, .quote');
        detected.testimonials.push({
          id: `testimonial_detected_${Date.now()}_${idx}`,
          title: text || title,
          subtitle: '',
          description: text,
          author: title,
          role,
          images: collectImages(root as Element),
          order: idx,
        });
      });

      // MENU and SERVICES: look for lists/cards with class names
      const menuRoots = document.querySelectorAll('.menu, .menu-section, [data-menu]');
      menuRoots.forEach((root, idx) => {
        const items = root.querySelectorAll('.menu-item, .item, li');
        items.forEach((it, iIdx) => {
          detected.menu.push({
            id: `menu_detected_${Date.now()}_${idx}_${iIdx}`,
            title: qText(it, 'h3, .title, .name'),
            subtitle: qText(it, '.subtitle'),
            description: qText(it, '.description, p'),
            price: qText(it, '.price, .cost'),
            images: collectImages(it as Element),
            order: iIdx,
            category: qText(root, 'h2, h3') || '',
          });
        });
      });

      const serviceRoots = document.querySelectorAll('.services, .service-list, [data-services]');
      serviceRoots.forEach((root, idx) => {
        const items = root.querySelectorAll('article, .service, .service-item, li');
        items.forEach((it, iIdx) => {
          detected.services.push({
            id: `service_detected_${Date.now()}_${idx}_${iIdx}`,
            title: qText(it, 'h3, .title'),
            subtitle: qText(it, '.subtitle'),
            description: qText(it, 'p, .description'),
            images: collectImages(it as Element),
            order: iIdx,
          });
        });
      });

      // Capture generic page sections (useful for pages like Services)
      const pageSections: PageSection[] = [];
      const sectionCandidates = document.querySelectorAll('section, [role="region"], .section, .page-section, [data-section]');
      sectionCandidates.forEach((sec, idx) => {
        const heading = qText(sec, 'h1, h2, h3, .title');
        const html = (sec as Element).innerHTML || '';
        const text = (sec as Element).textContent?.trim() || '';
        const images = collectImages(sec as Element);
        if (heading || text || images.length) {
          pageSections.push({
            id: `section_${Date.now()}_${idx}`,
            heading: heading || undefined,
            html: html.slice(0, 2000),
            text: text.slice(0, 2000),
            images,
            order: idx,
          });
        }
      });

      const currentPath = window.location.pathname || '/';

      setContent((prev) => ({
        ...prev, // Mevcut menü bölümlerini koru
        menu: detected.menu.length ? detected.menu : prev.menu,
        services: detected.services.length ? detected.services : prev.services,
        hero: detected.hero.length ? detected.hero : prev.hero,
        testimonials: detected.testimonials.length ? detected.testimonials : prev.testimonials,
        about: detected.about.length ? detected.about : prev.about,
        contact: detected.contact.length ? detected.contact : prev.contact,
        pages: {
          ...(prev.pages || {}),
          [currentPath]: pageSections.length ? pageSections : ((prev.pages || {})[currentPath] || []),
        }
      }));

      showNotificationMessage(`Website content detected and loaded (${pageSections.length} page sections)`);
    } catch (error) {
      console.error('Error detecting website content:', error);
      showNotificationMessage('Error detecting website content', 'error');
    }
  };

  // Load available images (Gerçek uygulamada bir API'den gelmeli)
  const loadAvailableImages = () => {
    const galleryFiles = [
      '146036331_2570005219790657_2835741437971567938_n.jpg',
      '149537444_115806570503750_6955106662995791129_n.jpg',
      '278237612_128420249532692_7345261953775011443_n.jpg',
      '278530833_660667775045864_1228330850447914314_n.jpg',
      '280949690_725467548767333_4553270213043954652_n.jpg',
      '281702814_728529544951109_6603836699030402746_n.jpg',
      '283669946_4610482689053285_5972101986939321638_n.jpg',
      '289888444_764784084705431_5104627132645856332_n.jpg',
      '290201033_365343522335822_6989121683645521651_n.jpg',
      '298262238_1003468893663263_5635158051316616602_n.jpg',
      '299220748_486389583312196_2918701892607691025_n.jpg',
      '299622273_867508887542151_6159437778816378211_n.jpg',
      '306431890_838509097573244_4219760642394676583_n.jpg',
      '310038471_641913360867435_675961683670589393_n.jpg',
      '312832450_183603154242544_3364490850470574658_n.jpg',
      '313873528_1866452180360149_4966383405849033872_n.jpg',
      '316119619_6422508417765998_6768193420321574199_n.jpg',
      '318235503_536005258138307_7765495500139449825_n.jpg',
      '324544066_152195107605724_1918904625421334616_n.jpg',
      '339508856_885513272544585_8268982997877371805_n.jpg',
      '340490753_536729521725498_7803232779063458043_n.jpg',
      'denizsezeridea.jpeg',
      'vegetable.jpg',
      'vegi.jpeg'
    ];
    const normalized = galleryFiles
      .map((file) => normalizeImagePath(`./imggallery/${file}`))
      .filter(Boolean);
    setAvailableImages(normalized);
  };

  const refreshGithubCreds = () => setGithubCreds(getStoredGitHubCreds());

  // Notification display function
    const showNotificationMessage = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
      setShowNotification({show: true, message, type});
      setTimeout(() => {
        setShowNotification({show: false, message: ''});
      }, 3000);
    };

  // Persist changes locally and optionally auto publish
  const saveChanges = async () => {
    try {
      const toSave = hydrateContent(content);
      saveSiteContentLocally(toSave);
      dispatchSiteContentEvent(toSave);
      showNotificationMessage(
        autoPublish ? 'Changes saved. Syncing live site...' : 'Changes saved locally!',
        autoPublish ? 'info' : 'success'
      );
      if (autoPublish) {
        await publishChanges({ silent: true, override: toSave });
      }
    } catch (error) {
      console.error('Error saving changes:', error);
      showNotificationMessage('Error saving changes', 'error');
    }
  };

  // Publish to GitHub (updates public/content/siteContent.json + docs copy)
  const publishChanges = async ({ silent, override }: { silent?: boolean; override?: SiteContent } = {}) => {
    try {
      const latestCreds = getStoredGitHubCreds();
      setGithubCreds(latestCreds);
      if (!latestCreds) {
        showNotificationMessage('GitHub credentials missing. Go to Admin GitHub to connect.', 'error');
        return false;
      }
      setPublishing(true);
      if (!silent) {
        showNotificationMessage('Publishing content to GitHub...', 'info');
      }
      await publishSiteContentToGitHub(override || content, latestCreds, 'content: update via admin panel');
      showNotificationMessage(silent ? 'Changes saved and published!' : 'Content published successfully!', 'success');
      return true;
    } catch (error) {
      console.error('Error publishing changes:', error);
      showNotificationMessage('Error publishing changes', 'error');
      return false;
    } finally {
      setPublishing(false);
    }
  };

  // Add new menu section
  const addMenuSection = () => {
    const sectionName = prompt('Enter new section name:');
    if (sectionName && sectionName.trim() !== '') {
      setContent((prev) => ({ 
        ...prev, 
        menuSections: [...prev.menuSections, sectionName.trim()] 
      }));
      showNotificationMessage(`"${sectionName}" section successfully added`);
    }
  };

  // Add new item
  const addNewItem = () => {
    let newItem: any = {
      id: `${activeSection}_${Date.now()}`,
      title: '',
      description: '',
      images: [],
      order: content[activeSection as SectionType].length,
    };

    // Different initial values for each content type
    switch (activeSection) {
      case 'menu':
        newItem = { 
          ...newItem, 
          price: '', 
          subtitle: '',
          category: activeSubSection || (content.menuSections.length > 0 ? content.menuSections[0] : 'General') // İlk mevcut kategori veya 'General'
        };
        break;
      case 'services':
        newItem = { ...newItem, details: [] };
        break;
      case 'testimonials':
        newItem = { ...newItem, author: '', role: '' };
        break;
      case 'contact':
        newItem = { ...newItem, email: '', phone: '', address: '', socialMedia: {} };
        break;
      default:
        break;
    }

    setEditingItem(newItem as ContentItem);
    setIsEditing(true);
    setSelectedImages([]);
  };

  // Edit item
  const editItem = (item: ContentItem) => {
    setEditingItem(JSON.parse(JSON.stringify(item))); // Deep clone
    setIsEditing(true);
    const normalized = (item.images || []).map(normalizeImagePath).filter(Boolean);
    setSelectedImages(normalized);
  };

  // Delete item
  const deleteItem = (itemId: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setContent((prevContent) => {
        const updatedItems = prevContent[activeSection as SectionType].filter(
          (item) => item.id !== itemId
        );
        return {
          ...prevContent,
          [activeSection as SectionType]: updatedItems as any // Type-casting
        };
      });
      showNotificationMessage('Item successfully deleted');
    }
  };

  // Watch form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingItem) return;
    
    const { name, value } = e.target;
    
  // For nested property updates
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setEditingItem({
        ...editingItem,
        [parent]: {
          ...((editingItem as any)[parent] || {}),
          [child]: value
        }
      });
    } else {
      setEditingItem({
        ...editingItem,
        [name]: value
      });
    }
  };

  // Watch detail list changes (for services)
  const handleDetailsChange = (value: string, index: number) => {
    if (!editingItem || activeSection !== 'services') return;
    
    const updatedDetails = [...((editingItem as ServiceItem).details || [])]; // details'ın undefined olmaması için kontrol
    updatedDetails[index] = value;
    
    setEditingItem({
      ...editingItem,
      details: updatedDetails
    } as ServiceItem);
  };

  // Add new item to detail list
  const addDetailItem = () => {
    if (!editingItem || activeSection !== 'services') return;
    
    const updatedDetails = [...((editingItem as ServiceItem).details || []), ''];
    
    setEditingItem({
      ...editingItem,
      details: updatedDetails
    } as ServiceItem);
  };

  // Delete item from detail list
  const removeDetailItem = (index: number) => {
    if (!editingItem || activeSection !== 'services') return;
    
    const updatedDetails = [...((editingItem as ServiceItem).details || [])];
    updatedDetails.splice(index, 1);
    
    setEditingItem({
      ...editingItem,
      details: updatedDetails
    } as ServiceItem);
  };

  // Image selection
  const handleImageSelect = (imageUrl: string) => {
    if (!editingItem) return;
    const normalized = normalizeImagePath(imageUrl);
    if (!normalized) return;
    setSelectedImages((prev) =>
      prev.includes(normalized)
        ? prev.filter((img) => img !== normalized)
        : [...prev, normalized]
    );
  };

  // Image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    // Let's select the chosen files from the existing image gallery
    // In a real application there would be file uploads, but we're using existing images for now
    const numberOfFiles = Math.min(files.length, availableImages.length);
    const selectedFromGallery = availableImages.slice(0, numberOfFiles);
    
    setSelectedImages((prev) => {
      const next = [...prev];
      selectedFromGallery.forEach((img) => {
        const normalized = normalizeImagePath(img);
        if (normalized && !next.includes(normalized)) {
          next.push(normalized);
        }
      });
      return next;
    });
    
    // Notify the user that the operation is complete
    showNotificationMessage('Images uploaded');
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingItem) return;
    
    // Add selected images to editingItem
    const sanitizedImages = selectedImages.map(normalizeImagePath).filter(Boolean);
    const updatedItem = {
      ...editingItem,
      images: sanitizedImages
    };
    
  // Update existing content
    setContent((prevContent) => {
      const updatedContent = { ...prevContent };
      const sectionItems = [...(prevContent[activeSection as SectionType] as ContentItem[])];
      
      const existingItemIndex = sectionItems.findIndex(item => item.id === updatedItem.id);
      
      if (existingItemIndex >= 0) {
        // Update existing item
        sectionItems[existingItemIndex] = updatedItem as any;
        showNotificationMessage('Item updated successfully');
      } else {
        // Add new item
        sectionItems.push(updatedItem as any);
        showNotificationMessage('New item added successfully');
      }
      
      // TypeScript'in güvende olması için cast kullanıyoruz
      updatedContent[activeSection as SectionType] = sectionItems as any; 
      
      return updatedContent;
    });
    
    setIsEditing(false);
    setEditingItem(null);
    setSelectedImages([]);
  };

  // Cancel editing
  const cancelEditing = () => {
    if (window.confirm('Are you sure you want to cancel editing? All your changes will be lost.')) {
      setIsEditing(false);
      setEditingItem(null);
      setSelectedImages([]);
    }
  };

  // Filter menu items by category
  const filteredMenuItems = activeSubSection 
    ? (content.menu as MenuItem[]).filter(item => item.category === activeSubSection)
    : (content.menu as MenuItem[]);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Header component
  const Header = () => (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo-container">
        <div className="logo">
          <img src={resolveImageUrl('./imggallery/denizsezeridea.jpeg')} alt="Logo" />
        </div>
        <h1>Deniz Sezer | Admin Panel</h1>
      </div>
      <div className="header-actions">
        <button onClick={() => navigate('/contact')} className="btn-outline">Contact</button>
        <button onClick={() => navigate('/')} className="btn-outline">Home</button>
        <button onClick={() => window.open(buildRouteUrl('admin'), '_blank')} className="btn-info">Modern Admin</button>
        <button onClick={() => navigate('/menu')} className="btn-warning">Menu</button>
        <button onClick={detectWebsiteContent} className="btn-primary">Detect Content</button>
        <button onClick={() => setShowPageSections(!showPageSections)} className="btn-info">Show Page Sections</button>
        <button onClick={() => {
          // Export JSON: open in new tab
          const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(content, null, 2));
          window.open(dataStr, '_blank');
        }} className="btn-outline">Export JSON</button>
        <button onClick={() => {
          // Copy JSON to clipboard
          navigator.clipboard?.writeText(JSON.stringify(content, null, 2)).then(() => {
            showNotificationMessage('Content JSON copied to clipboard');
          }).catch(() => {
            showNotificationMessage('Failed to copy JSON to clipboard', 'error');
          });
        }} className="btn-outline">Copy JSON</button>
        <button onClick={toggleDarkMode} className={`btn-theme ${isDarkMode ? 'light' : 'dark'}`}>
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
  

  // Navigation component
  const Navigation = () => (
    <nav className={`main-nav ${isDarkMode ? 'dark' : 'light'}`}>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => {
                setActiveSection(section.id);
                setActiveSubSection('');
              }}
              className={activeSection === section.id ? 'active' : ''}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  // Page sections
  const sections = [
    { id: 'menu', label: 'Menu' },
    { id: 'services', label: 'Services' },
    { id: 'hero', label: 'Hero' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  // Notification component
  const Notification = () => (
    showNotification.show && (
      <div className={`notification ${showNotification.type}`}>
        <div className="notification-content">
          <p>{showNotification.message}</p>
          <button onClick={() => setShowNotification({show: false, message: ''})}>
            &times;
          </button>
        </div>
      </div>
    )
  );

  // Menu Sections component
  const MenuSections = () => (
      <div className="menu-sections">
        <div className="section-header">
          <h2>Menu Sections</h2>
          <button onClick={addMenuSection} className="btn-primary">+ Add New Section</button>
        </div>
        <div className="section-buttons">
          <button
            onClick={() => setActiveSubSection('')}
            className={activeSubSection === '' ? 'active' : ''}
          >
            All
          </button>
          
          {/* HATA DÜZELTMESİ: content.menuSections'ın undefined olma ihtimaline karşı kontrol eklendi */}
          {(content.menuSections || []).map((section) => ( 
            <button
              key={section}
              onClick={() => setActiveSubSection(section)}
              className={activeSubSection === section ? 'active' : ''}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
  );

  // Content List component
  const ContentList = () => {
    let items: ContentItem[] = [];

    switch (activeSection) {
      case 'menu':
        items = filteredMenuItems as ContentItem[];
        break;
      default:
        // Type safety check
        if (Array.isArray(content[activeSection as SectionType])) {
          items = content[activeSection as SectionType] as ContentItem[];
        } else {
          items = [];
        }
    }

    return (
      <div className="content-list">
        <div className="content-header">
          <h2>
            {activeSubSection || sections.find(s => s.id === activeSection)?.label}
          </h2>
          <button onClick={addNewItem} className="btn-primary">+ Add New</button>
        </div>
        
        <div className="items-container">
          {items.length === 0 ? (
            <div className="empty-state">
              <p>No content in this section yet.</p>
              <button onClick={addNewItem} className="btn-primary">Add First Item</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="content-item">
                <div className="item-header">
                  <h3>{item.title}</h3>
                  {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
                </div>
                
                <div className="item-body">
                  <div className="item-text">
                    <p className="description">{item.description}</p>
                    {activeSection === 'menu' && (
                      <p className="price"><strong>Price:</strong> {(item as MenuItem).price}</p>
                    )}
                    {activeSection === 'testimonials' && (
                      <p className="author"><strong>Author:</strong> {(item as TestimonialItem).author} {(item as TestimonialItem).role && `(${(item as TestimonialItem).role})`}</p>
                    )}
                    {activeSection === 'services' && (item as ServiceItem).details && (
                      <div className="details">
                        <strong>Details:</strong>
                        <ul>
                          {(item as ServiceItem).details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeSection === 'contact' && (
                      <div className="contact-details">
                        {(item as ContactItem).email && (
                          <p><strong>Email:</strong> {(item as ContactItem).email}</p>
                        )}
                        {(item as ContactItem).phone && (
                          <p><strong>Phone:</strong> {(item as ContactItem).phone}</p>
                        )}
                        {(item as ContactItem).address && (
                          <p><strong>Address:</strong> {(item as ContactItem).address}</p>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {item.images && item.images.length > 0 && (
                    <div className="item-images">
                      {item.images.map((img: string, idx: number) => {
                        const src = resolveImageUrl(img);
                        if (!src) return null;
                        return (
                          <div key={`${item.id}-img-${idx}`} className="image-thumbnail">
                            <img src={src} alt={`${item.title} ${idx+1}`} />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                <div className="item-actions">
                  <button 
                    className="btn-edit" 
                    onClick={() => editItem(item)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-delete" 
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  // Edit Form component
  const EditForm = () => {
    if (!editingItem) return null;
    
    return (
      <div className="edit-form-container">
        <div className="edit-form-header">
          <h2>{editingItem.id.includes('_new') ? 'Add New Item' : 'Edit Item'}</h2>
          <button onClick={cancelEditing} className="btn-close">&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-grid">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={editingItem.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              {(activeSection === 'menu' || activeSection === 'services' || activeSection === 'testimonials' || activeSection === 'hero' || activeSection === 'about') && (
                <div className="form-group">
                  <label htmlFor="subtitle">Subtitle</label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={editingItem.subtitle || ''}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={editingItem.description}
                  onChange={handleInputChange}
                  rows={4}
                  required
                ></textarea>
              </div>
              
              {activeSection === 'menu' && (
                <>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      value={(editingItem as MenuItem).price || ''}
                      onChange={handleInputChange}
                      placeholder="e.g: $250 per person"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      id="category"
                      name="category"
                      value={(editingItem as MenuItem).category || ''}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {content.menuSections.map((section) => (
                        <option key={section} value={section}>
                          {section}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              
              {activeSection === 'testimonials' && (
                <>
                  <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={(editingItem as TestimonialItem).author || ''}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="role">Title/Role (optional)</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={(editingItem as TestimonialItem).role || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
            </div>
            
            <div className="form-column">
              {activeSection === 'contact' && (
                <div className="contact-form-section">
                  <h3>Contact Details</h3>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={(editingItem as ContactItem).email || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={(editingItem as ContactItem).phone || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={(editingItem as ContactItem).address || ''}
                      onChange={handleInputChange}
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Social Media</label>
                    <div className="social-media-inputs">
                      <div className="form-group">
                        <label htmlFor="instagram">Instagram</label>
                        <input
                          type="text"
                          id="instagram"
                          name="socialMedia.instagram"
                          value={(editingItem as ContactItem).socialMedia?.instagram || ''}
                          onChange={handleInputChange}
                          placeholder="Instagram URL"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>
                        <input
                          type="text"
                          id="facebook"
                          name="socialMedia.facebook"
                          value={(editingItem as ContactItem).socialMedia?.facebook || ''}
                          onChange={handleInputChange}
                          placeholder="Facebook URL"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input
                          type="text"
                          id="twitter"
                          name="socialMedia.twitter"
                          value={(editingItem as ContactItem).socialMedia?.twitter || ''}
                          onChange={handleInputChange}
                          placeholder="Twitter URL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'services' && (
                <div className="service-details-section">
                  <h3>Service Details</h3>
                  {((editingItem as ServiceItem).details || []).map((detail, idx) => (
                    <div key={idx} className="detail-item">
                      <input
                        type="text"
                        value={detail}
                        onChange={(e) => handleDetailsChange(e.target.value, idx)}
                        placeholder={`Detay ${idx + 1}`}
                      />
                      <button 
                        type="button" 
                        onClick={() => removeDetailItem(idx)}
                        className="btn-remove"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <button 
                    type="button" 
                    onClick={addDetailItem}
                    className="btn-secondary"
                  >
                    + Add Detail
                  </button>
                </div>
              )}
              
              <div className="image-selection-section">
                <h3>Resimler</h3>
                
                <div className="selected-images">
                  <h4>Selected Images</h4>
                  <div className="image-grid">
                  {selectedImages.length === 0 ? (
                      <p className="no-images">No images selected yet</p>
                    ) : (
                      selectedImages.map((img, idx) => {
                        const src = resolveImageUrl(img);
                        if (!src) return null;
                        return (
                          <div key={`selected-${idx}-${img}`} className="image-thumbnail selected">
                            <img src={src} alt={`Selected ${idx+1}`} />
                            <button 
                              type="button"
                              onClick={() => handleImageSelect(img)}
                              className="remove-btn"
                            >
                              &times;
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                
                <div className="image-upload">
                  <h4>Upload Images</h4>
                  <div className="upload-container">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      multiple
                      accept="image/*"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="upload-label">
                      Select Images
                    </label>
                  </div>
                  <small className="info-text">
                    Note: In demo mode, selected files will be chosen from the existing image gallery instead of server storage.
                  </small>
                </div>
                
                <div className="available-images">
                  <h4>Mevcut Resimler</h4>
                  <div className="image-grid">
                    {availableImages.map((img, idx) => {
                      const src = resolveImageUrl(img);
                      if (!src) return null;
                      return (
                        <div 
                          key={`available-${idx}-${img}`} 
                          className={`image-thumbnail ${selectedImages.includes(img) ? 'selected' : ''}`}
                          onClick={() => handleImageSelect(img)}
                        >
                          <img src={src} alt={`Available ${idx+1}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn-success">Save</button>
            <button type="button" onClick={cancelEditing} className="btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  };

  // Ana sayfa render
  return (
    <div className={`admin-panel ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <Navigation />
      
      <div className="main-container">
        <div className="action-bar">
          <div className="action-buttons">
            <button onClick={saveChanges} className="btn-primary">
              {autoPublish ? 'Save & Sync' : 'Save'}
            </button>
            <button onClick={() => publishChanges()} className="btn-success" disabled={publishing}>
              {publishing ? 'Publishing…' : 'Publish'}
            </button>
            <button onClick={loadContent} className="btn-info">Reload Content</button>
            <button onClick={detectWebsiteContent} className="btn-warning">Detect Content</button>
          </div>
          <div className="action-meta">
            <label className="auto-publish-toggle">
              <input
                type="checkbox"
                checked={autoPublish}
                onChange={(e) => setAutoPublish(e.target.checked)}
              />
              <span>Auto publish to GitHub on save</span>
            </label>
            <div className={`github-status ${githubCreds ? 'connected' : 'missing'}`}>
              {githubCreds
                ? `GitHub connected (${githubCreds.owner}/${githubCreds.repo})`
                : 'GitHub not connected — open Admin GitHub to add token'}
              <button onClick={refreshGithubCreds} className="btn-outline small">
                Refresh creds
              </button>
            </div>
          </div>
        </div>
        
        <div className="content-container">
          {activeSection === 'menu' && <MenuSections />}
          
          {isEditing ? (
            <EditForm />
          ) : (
            <ContentList />
          )}
        </div>
      </div>
      
      <Notification />
      <PageSectionsModal />
    </div>
  );
};

export default AdminPanel;
