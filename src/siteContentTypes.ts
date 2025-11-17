export interface BaseItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  images?: string[];
  order?: number;
}

export interface MenuItem extends BaseItem {
  price?: string;
  category?: string;
}

export interface ServiceItem extends BaseItem {
  details?: string[];
}

export interface HeroItem extends BaseItem {}

export interface TestimonialItem extends BaseItem {
  author?: string;
  role?: string;
}

export interface AboutItem extends BaseItem {}

export interface ContactItem extends BaseItem {
  email?: string;
  phone?: string;
  address?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    [key: string]: string | undefined;
  };
}

export interface PageSection {
  id: string;
  key?: string;
  heading?: string;
  html?: string;
  text?: string;
  images: string[];
  order: number;
}

export interface SiteContent {
  menuSections: string[];
  menu: MenuItem[];
  services: ServiceItem[];
  hero: HeroItem[];
  testimonials: TestimonialItem[];
  about: AboutItem[];
  contact: ContactItem[];
  pages: Record<string, PageSection[]>;
}

export type ContentItem =
  | MenuItem
  | ServiceItem
  | HeroItem
  | TestimonialItem
  | AboutItem
  | ContactItem;
