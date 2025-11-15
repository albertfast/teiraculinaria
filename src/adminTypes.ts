import { Card } from '../src/types';

// New types for the admin panel
export interface PageSection {
  id: string;
  pageName: string;
  sectionName: string;
  displayName: string;
  component: string; // Component name for reference
  editable: boolean;
  contentType: 'text' | 'image' | 'gallery' | 'mixed';
  content: SectionContent;
}

export interface SectionContent {
  title?: string;
  subtitle?: string;
  body?: string[];
  images?: SectionImage[];
  settings?: Record<string, any>; // Additional settings specific to the section
}

export interface SectionImage {
  id: string;
  src: string;
  alt: string;
  order?: number;
  caption?: string;
}

export interface AdminState {
  pages: {
    name: string;
    displayName: string;
    route: string;
    sections: PageSection[];
  }[];
  currentPage: string;
  currentSection: string;
  editMode: boolean;
  previewMode: boolean;
  unsavedChanges: boolean;
}