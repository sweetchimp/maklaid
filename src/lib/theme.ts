/**
 * MAKLAID Design System — single source of truth.
 *
 * Brand colors were sampled pixel-by-pixel from the official logo
 * (Maklaid DP.jpg): navy #152137 + white #FFFFFF. The gold accent
 * (#C9A227) is the approved complementary brand accent.
 */

/* ---------------------------------- Types --------------------------------- */

export type ShadeKey =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

export interface TypeScaleEntry {
  token: string;
  size: string;
  lineHeight: string;
  fontFamily: 'heading' | 'body';
  weight: number;
}

export interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface AnimationTokens {
  fadeIn: string;
  slideUp: string;
  hoverScale: string;
}

/** Button props */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/** Badge props */
export type BadgeVariant = 'navy' | 'gold' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md';

/** Card props */
export type CardVariant = 'default' | 'interactive';

/** Shared link model for Navigation / Footer */
export interface NavLink {
  label: string;
  href: string;
}

/* --------------------------------- Theme ---------------------------------- */

export const theme = {
  colors: {
    primary: {
      name: 'Navy',
      description: 'Exact color sampled from the MAKLAID logo background.',
      scale: {
        50: '#f3f5f9',
        100: '#e4e9f1',
        200: '#c7d0e0',
        300: '#9daecb',
        400: '#6b84ac',
        500: '#47628e',
        600: '#334b72',
        700: '#263857',
        800: '#1d2c46',
        900: '#152137',
        950: '#0c1526',
      } as Record<ShadeKey, string>,
      DEFAULT: '#152137',
    },
    secondary: {
      name: 'Gold',
      description: 'Metallic gold accent for CTAs and highlights.',
      scale: {
        50: '#fbf7ea',
        100: '#f5edcf',
        200: '#ebda9f',
        300: '#e0c56b',
        400: '#d5b444',
        500: '#c9a227',
        600: '#a88620',
        700: '#86691b',
        800: '#644e16',
        900: '#423113',
        950: '#241a09',
      } as Record<ShadeKey, string>,
      DEFAULT: '#c9a227',
    },
    neutral: {
      text: '#1f2937',
      surface: '#f3f4f6',
      white: '#ffffff',
      border: '#e5e7eb',
      muted: '#6b7280',
    },
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
  },

  /* ------------------------------- Typography ------------------------------ */

  fonts: {
    heading: "'Playfair Display', Georgia, 'Times New Roman', serif",
    body: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
  },

  typeScale: [
    { token: 'h1', size: '3.5rem', lineHeight: '1.08', fontFamily: 'heading', weight: 700 },
    { token: 'h2', size: '2.5rem', lineHeight: '1.15', fontFamily: 'heading', weight: 700 },
    { token: 'h3', size: '2rem', lineHeight: '1.25', fontFamily: 'heading', weight: 600 },
    { token: 'body', size: '1rem', lineHeight: '1.65', fontFamily: 'body', weight: 400 },
    { token: 'small', size: '0.875rem', lineHeight: '1.5', fontFamily: 'body', weight: 400 },
  ] as TypeScaleEntry[],

  /* -------------------------------- Spacing -------------------------------- */

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  } as SpacingTokens,

  /* ------------------------------- Animations ------------------------------ */

  animations: {
    fadeIn: 'opacity 0 → 1, 300ms ease-out',
    slideUp: 'translateY(20px → 0), 400ms ease-out',
    hoverScale: 'scale(1 → 1.05), 200ms ease-out',
  } as AnimationTokens,

  /* -------------------------------- Assets --------------------------------- */

  assets: {
    logo: '/images/maklaid-logo.jpg',
  },

  /* ------------------------------ Breakpoints ------------------------------ */

  breakpoints: {
    sm: '40rem',
    md: '48rem',
    lg: '64rem',
    xl: '80rem',
  },
} as const;

export default theme;

/* ------------------------------ Site content ------------------------------- */

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

/** Footer column model — Services / Company / Contact info */
export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Corporate & Commercial', href: '/services#corporate-commercial' },
      { label: 'Family Law', href: '/services#family-law' },
      { label: 'Criminal Defense', href: '/services#criminal-defense' },
      { label: 'Real Estate & Property', href: '/services#real-estate' },
      { label: 'Immigration Law', href: '/services#immigration-law' },
      { label: 'Litigation & Disputes', href: '/services#litigation' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About MAKLAID', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Client Insights', href: '/insights' },
      { label: 'Design System', href: '/design-system' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

/** Footer contact row model */
export type ContactIconName = 'map-pin' | 'phone' | 'mail' | 'message-circle';

export interface ContactItem {
  icon: ContactIconName;
  label: string;
  href?: string;
}

export const contactInfo: ContactItem[] = [
  { icon: 'map-pin', label: 'Riverside Chambers, 12th Floor, Nairobi' },
  { icon: 'phone', label: '+254 (0) 700 000 000', href: 'tel:+254700000000' },
  { icon: 'mail', label: 'info@maklaid.co.ke', href: 'mailto:info@maklaid.co.ke' },
  { icon: 'message-circle', label: 'WhatsApp Us', href: 'https://wa.me/254700000000?text=Hi%20MAKLAID%2C%20I%20need%20legal%20assistance' },
];

export const practiceAreas: { title: string; description: string; tag: string }[] = [
  {
    title: 'Corporate & Commercial',
    description:
      'Formation, governance, M&A and commercial contracts that keep your business protected at every stage.',
    tag: 'Business',
  },
  {
    title: 'Family Law',
    description:
      'Compassionate, discreet representation in divorce, custody and matrimonial property matters.',
    tag: 'Personal',
  },
  {
    title: 'Criminal Defense',
    description:
      'Vigorous defense of your rights and freedom — from investigation through trial and appeal.',
    tag: 'Defense',
  },
  {
    title: 'Real Estate & Property',
    description:
      'Transactions, land disputes, leases and conveyancing handled with precision and speed.',
    tag: 'Property',
  },
  {
    title: 'Immigration Law',
    description:
      'Visas, permits, residency and citizenship — clear guidance through every requirement.',
    tag: 'Immigration',
  },
  {
    title: 'Litigation & Dispute Resolution',
    description:
      'Strategic advocacy in court and at the negotiation table to resolve conflicts decisively.',
    tag: 'Advocacy',
  },
];
