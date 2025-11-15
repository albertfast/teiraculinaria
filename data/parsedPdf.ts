import { pdfText } from './pdf_content';

const normalize = (s: string) => s.replace(/\s+/g, ' ').trim();

const text = normalize(pdfText);

// Simple heuristics to extract sections based on known headings/keywords from the PDF
const extractBetween = (start: string, end: string) => {
  const si = text.indexOf(start);
  if (si === -1) return '';
  const ei = end ? text.indexOf(end, si + start.length) : text.length;
  return normalize(text.substring(si + start.length, ei >= 0 ? ei : undefined));
};

export const intro = extractBetween('Welcome to The', 'Why Choose The Anatolian Table?');
export const whyChoose = extractBetween('Why Choose The Anatolian Table?', 'BOOK NOW');

export const privateChefSection = extractBetween('Private Chef Services', 'Events & ');
export const eventsSection = extractBetween('Events &', "Join Michelin-trained Chef Deniz Sezer");
export const cookingClassSection = extractBetween('Join Michelin-trained Chef Deniz Sezer', 'Information');

export const locations = (() => {
  const m = text.match(/Locations\s*(.*?)Hours/);
  return m ? normalize(m[1]) : '';
})();

export const contact = (() => {
  const m = text.match(/CONTACT\s*([\s\S]*?)Experien/);
  return m ? normalize(m[1]) : '';
})();

export default {
  intro,
  whyChoose,
  privateChefSection,
  eventsSection,
  cookingClassSection,
  locations,
  contact,
};
