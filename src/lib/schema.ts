/**
 * MAKLAID Schema.org — JSON-LD structured data helpers.
 *
 * Each function returns a plain object that can be serialised
 * with JSON.stringify and injected via <script type="application/ld+json">.
 */

const SITE_URL = 'https://maklaidadvoctes.com';
const ORG_NAME = 'MAKLAID';
const LOGO = `${SITE_URL}/images/maklaid-logo.jpg`;

/* -------------------------------------------------------------------------- */
/*  Organization / LocalBusiness                                             */
/* -------------------------------------------------------------------------- */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: ORG_NAME,
    url: SITE_URL,
    logo: LOGO,
    description:
      'MAKLAID is a full-service law firm delivering trusted counsel and results-driven representation across corporate, family, criminal and property matters in Kenya.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Riverside Chambers, 12th Floor, Riverside Drive',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+254-700-000-000',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        email: 'info@maklaid.co.ke',
        contactType: 'customer service',
      },
    ],
    sameAs: ['https://www.linkedin.com/company/maklaid'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
  };
}

/* -------------------------------------------------------------------------- */
/*  Service (individual practice area)                                       */
/* -------------------------------------------------------------------------- */

export function serviceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} — ${ORG_NAME}`,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Person (team member)                                                     */
/* -------------------------------------------------------------------------- */

export function personSchema(member: {
  name: string;
  title: string;
  slug: string;
  shortBio: string;
  photo: string;
}) {
  const photoUrl = member.photo.startsWith('http')
    ? member.photo
    : `${SITE_URL}${member.photo}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.title,
    description: member.shortBio,
    url: `${SITE_URL}/team/${member.slug}`,
    image: photoUrl,
    worksFor: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Article (insight post)                                                   */
/* -------------------------------------------------------------------------- */

export function articleSchema(post: {
  title: string;
  excerpt: string;
  image: string;
  pubDate: Date | string;
  authorName: string;
  slug: string;
}) {
  const imageUrl = post.image.startsWith('http')
    ? post.image
    : `${SITE_URL}${post.image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: new Date(post.pubDate).toISOString(),
    author: {
      '@type': 'Person',
      name: post.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO,
      },
    },
    url: `${SITE_URL}/insights/${post.slug}`,
  };
}

/* -------------------------------------------------------------------------- */
/*  BreadcrumbList                                                           */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
