/**
 * MAKLAID SEO — meta tag generator.
 *
 * Produces HTML strings for <head>: OpenGraph, Twitter Card,
 * canonical link and keywords meta for every page.
 */

const SITE_URL = 'https://maklaidadvocates.com';
const DEFAULT_IMAGE = '/images/maklaid-logo.jpg';
const SITE_NAME = 'MAKLAID ADVOCATES';

export interface SeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

export function generateMeta({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords,
}: SeoOptions): string {
  const fullUrl = `${SITE_URL}${path}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const ogTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  const tags: string[] = [];

  if (keywords) {
    tags.push(`<meta name="keywords" content="${keywords}" />`);
  }

  tags.push(`<link rel="canonical" href="${fullUrl}" />`);

  // OpenGraph
  tags.push(`<meta property="og:type" content="${type}" />`);
  tags.push(`<meta property="og:title" content="${ogTitle}" />`);
  tags.push(`<meta property="og:description" content="${description}" />`);
  tags.push(`<meta property="og:image" content="${fullImage}" />`);
  tags.push(`<meta property="og:url" content="${fullUrl}" />`);
  tags.push(`<meta property="og:site_name" content="${SITE_NAME}" />`);
  tags.push(`<meta property="og:locale" content="en_US" />`);

  // Twitter Card
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta name="twitter:site" content="@maklaidadvocates" />`);
  tags.push(`<meta name="twitter:title" content="${ogTitle}" />`);
  tags.push(`<meta name="twitter:description" content="${description}" />`);
  tags.push(`<meta name="twitter:image" content="${fullImage}" />`);

  return tags.join('\n    ');
}
