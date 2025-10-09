import { PageSection, SectionContent, SectionImage } from './adminTypes';

// Get website structure and content
export async function getSiteStructure(): Promise<PageSection[]> {
  try {
    // In production, this would fetch from a JSON file or API
    // For now, we'll return a hardcoded structure matching the site
    return [
      {
        id: 'home-hero',
        pageName: 'home',
        sectionName: 'hero',
        displayName: 'Hero Section',
        component: 'Hero',
        editable: true,
        contentType: 'mixed',
        content: {
          title: 'Deniz Sezer — Michelin-Trained Chef',
          subtitle: 'Intimate, multi-course private dining and bespoke culinary experiences.',
          body: [
            'Chef Deniz blends Anatolian roots with haute cuisine techniques to craft memorable evenings for exclusive guests.'
          ],
          images: [
            {
              id: 'hero-bg',
              src: './imggallery/146036331_2570005219790657_2835741437971567938_n.jpg',
              alt: 'Chef background'
            }
          ]
        }
      },
      {
        id: 'home-about',
        pageName: 'home',
        sectionName: 'about',
        displayName: 'About Section',
        component: 'About',
        editable: true,
        contentType: 'mixed',
        content: {
          title: 'Meet Chef Deniz Sezer',
          body: [
            'With extensive experience in Michelin-starred kitchens and private celebrity engagements — including a five-day private residency for Karim Benzema in Miami — Chef Deniz offers bespoke multi-course menus priced between $1,500 and $5,000 per evening, depending on customization.',
            'Each event is curated with seasonal ingredients, refined techniques, and a personal narrative that elevates every course.'
          ],
          images: [
            {
              id: 'about-chef',
              src: './imggallery/denizsezeridea.jpeg',
              alt: 'Chef Deniz Sezer'
            }
          ]
        }
      },
      {
        id: 'home-gallery',
        pageName: 'home',
        sectionName: 'gallery',
        displayName: 'Gallery Section',
        component: 'ImageGallery',
        editable: true,
        contentType: 'gallery',
        content: {
          title: 'Gallery',
          subtitle: 'A curated selection of moments from private dinners, pop-ups and exclusive events.',
          images: [
            { id: 'gal-1', src: './imggallery/denizsezeridea.jpeg', alt: 'Gallery 1' },
            { id: 'gal-2', src: './imggallery/316119619_6422508417765998_6768193420321574199_n.jpg', alt: 'Gallery 2' },
            { id: 'gal-3', src: './imggallery/324544066_152195107605724_1918904625421334616_n.jpg', alt: 'Gallery 3' },
            { id: 'gal-4', src: './imggallery/340490753_536729521725498_7803232779063458043_n.jpg', alt: 'Gallery 4' },
            { id: 'gal-5', src: './imggallery/299622273_867508887542151_6159437778816378211_n.jpg', alt: 'Gallery 5' },
            { id: 'gal-6', src: './imggallery/310038471_641913360867435_675961683670589393_n.jpg', alt: 'Gallery 6' },
            { id: 'gal-7', src: './imggallery/313873528_1866452180360149_4966383405849033872_n.jpg', alt: 'Gallery 7' },
            { id: 'gal-8', src: './imggallery/351088026_944585160151459_2706183776673791694_n.jpg', alt: 'Gallery 8' }
          ]
        }
      },
      {
        id: 'home-testimonials',
        pageName: 'home',
        sectionName: 'testimonials',
        displayName: 'Testimonials Section',
        component: 'Testimonials',
        editable: true,
        contentType: 'mixed',
        content: {
          title: 'What Clients Say',
          body: [
            '"Chef Deniz created a dining experience unlike any other. Each dish told a story and every bite was perfection."',
            '"The attention to detail and personalized service made our anniversary dinner absolutely unforgettable."',
            '"From the first bite to the last, each course was a revelation. Chef Deniz brought our vision to life and exceeded all expectations."'
          ]
        }
      },
      {
        id: 'about-mission',
        pageName: 'about',
        sectionName: 'mission',
        displayName: 'Mission Section',
        component: 'AboutPage',
        editable: true,
        contentType: 'text',
        content: {
          title: 'Our mission',
          body: [
            "At The Anatolian Table, our mission is to unite people through unforgettable culinary experiences that celebrate both tradition and innovation. We are driven by a passion for excellence, creating personalized menus that fuse the rich flavors of Anatolian cuisine with global influences. Every dish we craft is a reflection of our commitment to the finest seasonal ingredients, meticulous attention to detail, and a deep respect for diverse culinary traditions.",
            "Our goal is to bring people together around the table, where every bite sparks conversation, joy, and connection. Through each dining experience, we aim to create lasting memories, blending creativity and authenticity in every course. At The Anatolian Table, we believe that food is more than nourishment—it's a celebration of culture, love, and the shared moments that make life extraordinary."
          ]
        }
      },
      // Add more sections as needed for other pages
    ];
  } catch (error) {
    console.error('Error loading site structure:', error);
    return [];
  }
}

// Save content changes
export async function saveContent(sections: PageSection[]): Promise<boolean> {
  try {
    // In a real implementation, this would save to a file or API
    localStorage.setItem('site-content', JSON.stringify(sections));
    console.log('Content saved successfully (to localStorage)');
    return true;
  } catch (error) {
    console.error('Error saving content:', error);
    return false;
  }
}

// Generate a commit and push to GitHub
export async function publishToGitHub(sections: PageSection[]): Promise<boolean> {
  try {
    // This is a placeholder - in a real implementation, you would:
    // 1. Convert the sections data to component updates
    // 2. Make API calls to GitHub to commit and push changes
    // 3. Trigger a rebuild/redeploy
    
    alert('In a real implementation, this would push changes to GitHub and redeploy the site');
    return true;
  } catch (error) {
    console.error('Error publishing to GitHub:', error);
    return false;
  }
}

// Helper function to upload an image
export async function uploadImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // In a real implementation, you would upload the file to storage
      // For now, we'll simulate this by returning a data URL
      resolve(reader.result as string);
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
}