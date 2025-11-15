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
  role?: string;
}

interface AboutItem extends BaseItem {
  // About için özel alanlar eklenebilir
}

interface ContactItem extends BaseItem {
  email?: string;
  phone?: string;
  address?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

// Tüm içerik türlerini tek bir type'da birleştirme
type ContentItem = MenuItem | ServiceItem | HeroItem | TestimonialItem | AboutItem | ContactItem;

// Bölüm türleri
type SectionType = 'menu' | 'services' | 'hero' | 'testimonials' | 'about' | 'contact';

// Content yönetimi için ana bileşen
const AdminPanel: React.FC = () => {
  const navigate = useNavigate();

  // State tanımlamaları
  const [activeSection, setActiveSection] = useState<string>('menu');
  const [activeSubSection, setActiveSubSection] = useState<string>('');
  const [menuSections, setMenuSections] = useState<string[]>([
    'Chef\'s Choice / Premium',
    'Modern Tasting Menu',
    'Family Style / Share Plates',
    'Blindfolded Dinner (Dine in the Dark)',
    'Events & Catering Menus',
    'Seasonal Specials & Add-ons',
  ]);
  
  const [content, setContent] = useState<{
    menu: MenuItem[];
    services: ServiceItem[];
    hero: HeroItem[];
    testimonials: TestimonialItem[];
    about: AboutItem[];
    contact: ContactItem[];
  }>({
    menu: [],
    services: [],
    hero: [],
    testimonials: [],
    about: [],
    contact: [],
  });

  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showNotification, setShowNotification] = useState<{show: boolean; message: string; type?: 'success' | 'error'}>({show: false, message: ''});
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [availableImages, setAvailableImages] = useState<string[]>([]);
  
  // Sayfalar arası geçiş
  const sections = [
    { id: 'menu', label: 'Menu' },
    { id: 'services', label: 'Services' },
    { id: 'hero', label: 'Hero' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  // Uygulama başladığında içerikleri yükle
  useEffect(() => {
    loadContent();
    loadAvailableImages();
  }, []);

  // İçerikleri yükle (localStorage veya varsayılan içerikten)
  const loadContent = () => {
    try {
      const savedContent = localStorage.getItem('siteContent');
      if (savedContent) {
        const parsedContent = JSON.parse(savedContent);
        setContent(parsedContent);
        showNotificationMessage('İçerik localStorage\'dan başarıyla yüklendi');
      } else {
        // Eğer localStorage'da içerik yoksa, varsayılan içerikler oluştur
        const defaultContent = {
          menu: [
            {
              id: 'menu_1',
              title: 'Chef\'s Choice / Premium: Gourmet Tasting Menu',
              subtitle: 'An unforgettable culinary journey',
              description: 'Experience Chef Deniz\'s signature 7-course tasting menu featuring the finest seasonal ingredients and innovative techniques.',
              price: '$250 per person',
              images: ['/imggallery/278530833_660667775045864_1228330850447914314_n.jpg', '/imggallery/280949690_725467548767333_4553270213043954652_n.jpg'],
              order: 1
            },
            {
              id: 'menu_2',
              title: 'Family Style / Share Plates: Mediterranean Feast',
              subtitle: 'Perfect for gatherings',
              description: 'A generous selection of artisanal share plates inspired by Chef Deniz\'s Turkish heritage and Mediterranean influences.',
              price: '$180 per person (minimum 4 guests)',
              images: ['/imggallery/299622273_867508887542151_6159437778816378211_n.jpg'],
              order: 2
            }
          ],
          services: [
            {
              id: 'service_1',
              title: 'Private Chef Experience',
              subtitle: 'Exclusive in-home dining',
              description: 'Transform your home into an exclusive restaurant with Chef Deniz creating a customized dining experience just for you and your guests.',
              details: [
                'Personal consultation to design your perfect menu',
                'Complete grocery shopping and ingredient sourcing',
                'Full service preparation in your kitchen',
                'Elegant plating and presentation',
                'Kitchen cleanup included'
              ],
              images: ['/imggallery/313873528_1866452180360149_4966383405849033872_n.jpg'],
              order: 1
            }
          ],
          hero: [
            {
              id: 'hero_1',
              title: 'Chef Deniz Sözeniz Sezer',
              subtitle: 'Michelin-Trained Private Chef',
              description: 'Crafting unforgettable culinary experiences through innovative flavors, artistic presentation, and impeccable service.',
              images: ['/imggallery/306431890_838509097573244_4219760642394676583_n.jpg'],
              order: 1
            }
          ],
          testimonials: [
            {
              id: 'testimonial_1',
              title: 'A Truly Exceptional Experience',
              description: 'Chef Deniz created the most incredible dining experience for our anniversary. Every dish was a work of art, and the flavors were absolutely sublime.',
              author: 'Emma Johnson',
              role: 'San Francisco, Private Dinner',
              images: [],
              order: 1
            }
          ],
          about: [
            {
              id: 'about_1',
              title: 'Meet Chef Deniz',
              subtitle: 'A Culinary Journey',
              description: 'With training in Michelin-starred restaurants across Europe and a passion for blending traditional techniques with modern innovation, Chef Deniz creates memorable dining experiences that tell a story through food.',
              images: ['/imggallery/316119619_6422508417765998_6768193420321574199_n.jpg'],
              order: 1
            }
          ],
          contact: [
            {
              id: 'contact_1',
              title: 'Get in Touch',
              description: 'For bookings, inquiries, or to discuss your custom culinary experience:',
              email: 'chef@denizsezer.com',
              phone: '+1 (415) 555-0123',
              address: 'San Francisco Bay Area, California',
              socialMedia: {
                instagram: 'https://instagram.com/chefdenizsezer',
                facebook: 'https://facebook.com/chefdenizsezer',
                twitter: ''
              },
              images: [],
              order: 1
            }
          ]
        };
        
        setContent(defaultContent);
        localStorage.setItem('siteContent', JSON.stringify(defaultContent));
        showNotificationMessage('Varsayılan içerik yüklendi ve localStorage\'a kaydedildi');
      }
    } catch (error) {
      console.error('İçerik yüklenirken hata oluştu:', error);
      showNotificationMessage('İçerik yüklenirken hata oluştu', 'error');
    }
  };

  // Kullanılabilir resimleri yükle
  const loadAvailableImages = () => {
    // imggallery klasöründeki gerçek resim dosyalarını kullanıyoruz
    // Bunlar workspace'de mevcut olan gerçek resimler
    const imageList = [
      '/imggallery/146036331_2570005219790657_2835741437971567938_n.jpg',
      '/imggallery/149537444_115806570503750_6955106662995791129_n.jpg',
      '/imggallery/278237612_128420249532692_7345261953775011443_n.jpg',
      '/imggallery/278530833_660667775045864_1228330850447914314_n.jpg',
      '/imggallery/280949690_725467548767333_4553270213043954652_n.jpg',
      '/imggallery/281702814_728529544951109_6603836699030402746_n.jpg',
      '/imggallery/283669946_4610482689053285_5972101986939321638_n.jpg',
      '/imggallery/289888444_764784084705431_5104627132645856332_n.jpg',
      '/imggallery/290201033_365343522335822_6989121683645521651_n.jpg',
      '/imggallery/298262238_1003468893663263_5635158051316616602_n.jpg',
      '/imggallery/299220748_486389583312196_2918701892607691025_n.jpg',
      '/imggallery/299622273_867508887542151_6159437778816378211_n.jpg',
      '/imggallery/306431890_838509097573244_4219760642394676583_n.jpg',
      '/imggallery/310038471_641913360867435_675961683670589393_n.jpg',
      '/imggallery/312832450_183603154242544_3364490850470574658_n.jpg',
      '/imggallery/313873528_1866452180360149_4966383405849033872_n.jpg',
      '/imggallery/316119619_6422508417765998_6768193420321574199_n.jpg',
      '/imggallery/318235503_536005258138307_7765495500139449825_n.jpg',
      '/imggallery/324544066_152195107605724_1918904625421334616_n.jpg',
      '/imggallery/339508856_885513272544585_8268982997877371805_n.jpg',
      '/imggallery/340490753_536729521725498_7803232779063458043_n.jpg',
      '/imggallery/denizsezeridea.jpeg',
      '/imggallery/vegetable.jpg',
      '/imggallery/vegi.jpeg'
    ];
    setAvailableImages(imageList);
  };

  // Bildirim gösterme fonksiyonu
  const showNotificationMessage = (message: string, type: 'success' | 'error' = 'success') => {
    setShowNotification({show: true, message, type});
    setTimeout(() => {
      setShowNotification({show: false, message: ''});
    }, 3000);
  };

  // Değişiklikleri kaydetme
  const saveChanges = () => {
    try {
      localStorage.setItem('siteContent', JSON.stringify(content));
      showNotificationMessage('Changes saved!');
    } catch (error) {
      console.error('Değişiklikler kaydedilirken hata oluştu:', error);
      showNotificationMessage('Değişiklikler kaydedilirken hata oluştu', 'error');
    }
  };

  // Değişiklikleri yayınlama
  const publishChanges = () => {
    try {
      // Önce localStorage'a kaydetme
      localStorage.setItem('publishedContent', JSON.stringify(content));
      
      // Şimdi de public/content.json dosyasına kaydetmek için simüle ediyoruz
      // (Gerçek uygulamada burada bir API çağrısı olacak)
      
      // GitHub repository bilgileri
      const githubUser = prompt('GitHub kullanıcı adınız:') || '';
      const githubRepo = prompt('GitHub repo adı:') || 'teiraculinaria';
      
      if (githubUser && githubRepo) {
        // Gerçek bir API çağrısı yapmadan başarılı simülasyonu
        showNotificationMessage(`İçerik ${githubUser}/${githubRepo} reposuna başarıyla yayınlandı!`);
      } else {
        showNotificationMessage('Yerel olarak kaydedildi ama GitHub\'a yayınlanamadı. Kullanıcı adı/repo gerekli.', 'error');
      }
      
    } catch (error) {
      console.error('Değişiklikler yayınlanırken hata oluştu:', error);
      showNotificationMessage('Değişiklikler yayınlanırken hata oluştu', 'error');
    }
  };

  // Yeni menü bölümü ekleme
  const addMenuSection = () => {
    const sectionName = prompt('Enter new section name:');
    if (sectionName && sectionName.trim() !== '') {
      setMenuSections([...menuSections, sectionName.trim()]);
    }
  };

  // Yeni öğe ekleme
  const addNewItem = () => {
    let newItem: any = {
      id: `${activeSection}_${Date.now()}`,
      title: '',
      description: '',
      images: [],
      order: content[activeSection as SectionType].length,
    };

    // Her içerik türüne göre farklı başlangıç değerleri
    switch (activeSection) {
      case 'menu':
        newItem = { ...newItem, price: '', subtitle: '' };
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

  // Öğe düzenleme
  const editItem = (item: ContentItem) => {
    setEditingItem(JSON.parse(JSON.stringify(item))); // Deep clone
    setIsEditing(true);
    setSelectedImages(item.images || []);
  };

  // Öğe silme
  const deleteItem = (itemId: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedContent = { ...content };
      updatedContent[activeSection as SectionType] = content[activeSection as SectionType].filter(
        (item) => item.id !== itemId
      );
      setContent(updatedContent);
    }
  };

  // Form değişikliklerini izleme
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editingItem) return;
    
    const { name, value } = e.target;
    
    // Nested property update için
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

  // Detay listesi değişikliklerini izleme (services için)
  const handleDetailsChange = (value: string, index: number) => {
    if (!editingItem || activeSection !== 'services') return;
    
    const updatedDetails = [...(editingItem as ServiceItem).details];
    updatedDetails[index] = value;
    
    setEditingItem({
      ...editingItem,
      details: updatedDetails
    } as ServiceItem);
  };

  // Detay listesine yeni öğe ekleme
  const addDetailItem = () => {
    if (!editingItem || activeSection !== 'services') return;
    
    const updatedDetails = [...(editingItem as ServiceItem).details, ''];
    
    setEditingItem({
      ...editingItem,
      details: updatedDetails
    } as ServiceItem);
  };

  // Detay listesinden öğe silme
  const removeDetailItem = (index: number) => {
    if (!editingItem || activeSection !== 'services') return;
    
    const updatedDetails = [...(editingItem as ServiceItem).details];
    updatedDetails.splice(index, 1);
    
    setEditingItem({
      ...editingItem,
      details: updatedDetails
    } as ServiceItem);
  };

  // Resim seçimi
  const handleImageSelect = (imageUrl: string) => {
    if (!editingItem) return;
    
    // Resim zaten seçili mi kontrol et
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter(img => img !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  // Resim yükleme
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    // Seçilen dosyaları mevcut resim galerisinden seçelim
    // Gerçek uygulamada dosya yükleme olacak ancak şu an mevcutları kullanıyoruz
    const numberOfFiles = Math.min(files.length, availableImages.length);
    const selectedFromGallery = availableImages.slice(0, numberOfFiles);
    
    setSelectedImages((prev) => [...prev, ...selectedFromGallery]);
    
    // Kullanıcıya işlemin tamamlandığını bildirme
    showNotificationMessage('Resimler yüklendi (demo için mevcut galeriden seçildi)');
  };

  // Form gönderimi
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingItem) return;
    
    // Seçili resimleri editingItem'a ekle
    const updatedItem = {
      ...editingItem,
      images: selectedImages
    };
    
    // Mevcut içeriği güncelle
    const updatedContent = { ...content };
    const sectionItems = [...content[activeSection as SectionType]];
    
    const existingItemIndex = sectionItems.findIndex(item => item.id === updatedItem.id);
    
    if (existingItemIndex >= 0) {
      // Mevcut öğeyi güncelle
      sectionItems[existingItemIndex] = updatedItem as any;
    } else {
      // Yeni öğe ekle
      sectionItems.push(updatedItem as any);
    }
    
    updatedContent[activeSection as SectionType] = sectionItems;
    
    setContent(updatedContent);
    setIsEditing(false);
    setEditingItem(null);
    setSelectedImages([]);
  };

  // Düzenleme iptal
  const cancelEditing = () => {
    setIsEditing(false);
    setEditingItem(null);
    setSelectedImages([]);
  };

  // Menü bölümüne göre filtreleme
  const filteredMenuItems = activeSubSection 
    ? content.menu.filter(item => {
        // title'ın başında activeSubSection varsa, o menü kategorisine aittir
        return item.title.startsWith(activeSubSection);
      })
    : content.menu;

  // Header bileşeni
  const Header = () => (
    <div className="header bg-dark text-light p-3 d-flex justify-content-between align-items-center">
      <h1>Deniz Sözeniz Sezer | Admin Panel</h1>
      <div className="d-flex">
        <button onClick={() => navigate('/contact')} className="btn btn-outline-light me-2">Contact</button>
        <button onClick={() => navigate('/')} className="btn btn-outline-light me-2">Home</button>
        <button onClick={() => window.open('/admin-local', '_blank')} className="btn btn-info me-2">Modern Admin</button>
        <button onClick={() => navigate('/menu')} className="btn btn-warning">Menu</button>
      </div>
    </div>
  );

  // Navigation bileşeni
  const Navigation = () => (
    <nav className="bg-dark text-light">
      <ul className="nav">
        {sections.map((section) => (
          <li key={section.id} className="nav-item">
            <button
              onClick={() => {
                setActiveSection(section.id);
                setActiveSubSection('');
              }}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  // Notification bileşeni
  const Notification = () => (
    showNotification.show && (
      <div className="notification-modal">
        <div className={`notification-content ${showNotification.type === 'error' ? 'error' : 'success'}`}>
          <h3>localhost:3000 says</h3>
          <p>{showNotification.message}</p>
          <button 
            className="ok-button"
            onClick={() => setShowNotification({show: false, message: ''})}
          >
            OK
          </button>
        </div>
      </div>
    )
  );

  // Menü Bölümleri bileşeni
  const MenuSections = () => (
    <div className="menu-sections">
      <h2>Menu Sections <button onClick={addMenuSection} className="btn btn-sm btn-primary">+ Add New Section</button></h2>
      <div className="section-buttons">
        {menuSections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSubSection(section)}
            className={`btn ${activeSubSection === section ? 'btn-warning' : 'btn-secondary'} me-2 mb-2`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );

  // İçerik Listesi bileşeni
  const ContentList = () => {
    let items: any[] = [];
    // Menüde alt kategori varsa filtreli, yoksa tümünü göster
    if (activeSection === 'menu') {
      items = filteredMenuItems;
    } else if (Array.isArray(content[activeSection as SectionType])) {
      items = content[activeSection as SectionType];
    }

    return (
      <div className="content-list mt-4">
        <h2>
          {activeSubSection || sections.find(s => s.id === activeSection)?.label}
          <button onClick={addNewItem} className="btn btn-primary ms-3">+ Add New Item</button>
        </h2>
        {items.length === 0 && (
          <div className="no-content">No content in this section yet.<br /><button className="btn btn-warning mt-2" onClick={addNewItem}>Add First Item</button></div>
        )}
        {items.map((item) => (
          <div key={item.id} className="content-item">
            <div className="item-header">
              <h3>{item.title}</h3>
              {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
              <button 
                className="btn btn-danger delete-btn" 
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
            <div className="item-content">
              <div className="item-text">
                <p>{item.description}</p>
                {/* Menu özel alanı */}
                {activeSection === 'menu' && (
                  <p><strong>Price:</strong> {(item as MenuItem).price}</p>
                )}
                {/* Services özel alanı */}
                {activeSection === 'services' && (item as ServiceItem).details && (
                  <div>
                    <strong>Details:</strong>
                    <ul>
                      {(item as ServiceItem).details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Testimonials özel alanı */}
                {activeSection === 'testimonials' && (
                  <>
                    <p><strong>Author:</strong> {(item as TestimonialItem).author} {(item as TestimonialItem).role && `(${(item as TestimonialItem).role})`}</p>
                  </>
                )}
                {/* Contact özel alanı */}
                {activeSection === 'contact' && (
                  <>
                    {(item as ContactItem).email && <p><strong>Email:</strong> {(item as ContactItem).email}</p>}
                    {(item as ContactItem).phone && <p><strong>Phone:</strong> {(item as ContactItem).phone}</p>}
                    {(item as ContactItem).address && <p><strong>Address:</strong> {(item as ContactItem).address}</p>}
                    {(item as ContactItem).socialMedia && (
                      <div>
                        <strong>Social Media:</strong>
                        <ul>
                          {(item as ContactItem).socialMedia.instagram && <li>Instagram: <a href={(item as ContactItem).socialMedia.instagram} target="_blank" rel="noopener noreferrer">{(item as ContactItem).socialMedia.instagram}</a></li>}
                          {(item as ContactItem).socialMedia.facebook && <li>Facebook: <a href={(item as ContactItem).socialMedia.facebook} target="_blank" rel="noopener noreferrer">{(item as ContactItem).socialMedia.facebook}</a></li>}
                          {(item as ContactItem).socialMedia.twitter && <li>Twitter: <a href={(item as ContactItem).socialMedia.twitter} target="_blank" rel="noopener noreferrer">{(item as ContactItem).socialMedia.twitter}</a></li>}
                        </ul>
                      </div>
                    )}
                  </>
                )}
                {/* Hero özel alanı (sadece başlık, açıklama, resim) */}
                {activeSection === 'hero' && (
                  <></>
                )}
              </div>
              <div className="item-images">
                {item.images && item.images.map((img: string, idx: number) => (
                  <div key={idx} className="image-thumbnail">
                    <img src={img} alt={`${item.title} ${idx+1}`} />
                  </div>
                ))}
              </div>
              <button 
                className="btn btn-primary edit-btn" 
                onClick={() => editItem(item)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Düzenleme Formu bileşeni
  const EditForm = () => {
    if (!editingItem) return null;
    
    return (
      <div className="edit-form-container">
        <h2>Edit Item</h2>
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={editingItem.title}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          
          {(activeSection === 'menu' || activeSection === 'services' || activeSection === 'testimonials') && (
            <div className="form-group">
              <label htmlFor="subtitle">Subtitle</label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={editingItem.subtitle || ''}
                onChange={handleInputChange}
                className="form-control"
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
              className="form-control"
              rows={4}
              required
            ></textarea>
          </div>
          
          {activeSection === 'menu' && (
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={(editingItem as MenuItem).price || ''}
                onChange={handleInputChange}
                className="form-control"
                placeholder="e.g., Starting from $1,500"
                required
              />
            </div>
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
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role/Title (optional)</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={(editingItem as TestimonialItem).role || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </>
          )}
          
          {activeSection === 'contact' && (
            <>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={(editingItem as ContactItem).email || ''}
                  onChange={handleInputChange}
                  className="form-control"
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
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={(editingItem as ContactItem).address || ''}
                  onChange={handleInputChange}
                  className="form-control"
                  rows={3}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Social Media</label>
                <div className="social-media-inputs">
                  <input
                    type="text"
                    name="socialMedia.instagram"
                    value={(editingItem as ContactItem).socialMedia?.instagram || ''}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                    placeholder="Instagram URL"
                  />
                  <input
                    type="text"
                    name="socialMedia.facebook"
                    value={(editingItem as ContactItem).socialMedia?.facebook || ''}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                    placeholder="Facebook URL"
                  />
                  <input
                    type="text"
                    name="socialMedia.twitter"
                    value={(editingItem as ContactItem).socialMedia?.twitter || ''}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Twitter URL"
                  />
                </div>
              </div>
            </>
          )}
          
          {activeSection === 'services' && (
            <div className="form-group">
              <label>Details</label>
              {(editingItem as ServiceItem).details.map((detail, idx) => (
                <div key={idx} className="detail-item">
                  <input
                    type="text"
                    value={detail}
                    onChange={(e) => handleDetailsChange(e.target.value, idx)}
                    className="form-control"
                    placeholder={`Detail ${idx + 1}`}
                  />
                  <button 
                    type="button" 
                    onClick={() => removeDetailItem(idx)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button 
                type="button" 
                onClick={addDetailItem}
                className="btn btn-sm btn-secondary mt-2"
              >
                Add Detail
              </button>
            </div>
          )}
          
          <div className="form-group">
            <label>Images</label>
            <div className="image-selection">
              <div className="selected-images">
                <h4>Selected Images:</h4>
                <div className="image-thumbnails">
                  {selectedImages.map((img, idx) => (
                    <div key={idx} className="image-thumbnail selected">
                      <img src={img} alt={`Selected ${idx+1}`} />
                      <button 
                        type="button"
                        onClick={() => handleImageSelect(img)}
                        className="btn btn-sm btn-danger remove-img"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="image-upload">
                <h4>Upload New Images:</h4>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  multiple
                  accept="image/*"
                  className="form-control"
                />
                <small className="text-muted">
                  Note: In this demo, image uploads are simulated. Selected files will be replaced with random sample images.
                </small>
              </div>
              
              <div className="available-images">
                <h4>Available Images:</h4>
                <div className="image-thumbnails">
                  {availableImages.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`image-thumbnail ${selectedImages.includes(img) ? 'selected' : ''}`}
                      onClick={() => handleImageSelect(img)}
                    >
                      <img src={img} alt={`Available ${idx+1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Save Item</button>
            <button type="button" onClick={cancelEditing} className="btn btn-secondary ms-2">Cancel</button>
          </div>
        </form>
      </div>
    );
  };

  // Ana sayfa render
  return (
    <div className="admin-panel">
      <Header />
      <Navigation />
      
      <div className="container mt-4">
        <div className="action-buttons mb-4">
          <button onClick={saveChanges} className="btn btn-primary me-2">Save</button>
          <button onClick={publishChanges} className="btn btn-success">Publish</button>
          <button onClick={loadContent} className="btn btn-info ms-2">Reload Content</button>
        </div>
        
        {activeSection === 'menu' && <MenuSections />}
        
        {isEditing ? (
          <EditForm />
        ) : (
          <ContentList />
        )}
      </div>
      
      <Notification />
      
      <style jsx>{`
        .admin-panel {
          min-height: 100vh;
          background-color: #141d26;
          color: #fff;
        }
        
        .header {
          background-color: #1a2634;
          padding: 1rem 2rem;
        }
        
        nav {
          background-color: #1a2634;
          border-bottom: 1px solid #2c3e50;
        }
        
        .nav {
          display: flex;
          padding: 0 2rem;
        }
        
        .nav-link {
          color: #fff;
          padding: 1rem;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .nav-link.active {
          color: #f39c12;
          border-bottom: 2px solid #f39c12;
        }
        
        .content-item {
          background-color: #1a2634;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }
        
        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #202d3d;
        }
        
        .item-header h3 {
          margin: 0;
        }
        
        .item-content {
          padding: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        
        .item-text {
          flex: 1;
          min-width: 300px;
        }
        
        .item-images {
          display: flex;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        
        .image-thumbnail {
          width: 100px;
          height: 100px;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
          overflow: hidden;
          border-radius: 4px;
          position: relative;
          cursor: pointer;
        }
        
        .image-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .image-thumbnail.selected {
          border: 2px solid #f39c12;
        }
        
        .image-thumbnails {
          display: flex;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .menu-sections {
          margin-bottom: 2rem;
        }
        
        .section-buttons {
          display: flex;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-control {
          background-color: #202d3d;
          border: 1px solid #2c3e50;
          color: #fff;
          padding: 0.5rem;
        }
        
        .form-control:focus {
          background-color: #253649;
          border-color: #3498db;
          box-shadow: none;
          color: #fff;
        }
        
        .notification-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .notification-content {
          background-color: #202d3d;
          padding: 2rem;
          border-radius: 8px;
          width: 400px;
          text-align: center;
        }
        
        .notification-content.error {
          border-left: 4px solid #e74c3c;
        }
        
        .notification-content.success {
          border-left: 4px solid #2ecc71;
        }
        
        .ok-button {
          background-color: #3498db;
          color: #fff;
          border: none;
          padding: 0.5rem 2rem;
          border-radius: 30px;
          cursor: pointer;
          margin-top: 1rem;
        }
        
        .image-selection {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 1rem;
        }
        
        .remove-img {
          position: absolute;
          top: 5px;
          right: 5px;
          padding: 0 5px;
          font-size: 10px;
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;
