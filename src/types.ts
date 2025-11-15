export type Card = {
  id: string;
  section: string;
  title?: string;
  subtitle?: string;
  body?: string;
  font_family?: string;
  font_size?: number;
  font_weight?: string;
  text_color?: string;
  text_align?: 'left' | 'center' | 'right';
  x?: number;
  y?: number;
  width_pct?: number;
  image_url?: string;
  image_alt?: string;
  order_index?: number;
};

export type Content = {
  version: number;
  cards: Card[];
};
