/**
 * MAKLAID ADVOCATES attorney roster — single source of truth for the team
 * listing, individual profile routes (/team/[lawyer]) and article
 * author attribution across content collections.
 */

export interface TeamMember {
  /** URL segment for /team/[lawyer]; also the articles frontmatter `author` */
  slug: string;
  name: string;
  title: string;
  photo: string;
  /** One-liner used in cards and author chips */
  shortBio: string;
  /** Full narrative used on the profile page */
  bio: string;
  practices: string[];
  specializations: string;
  education: string[];
  barAdmissions: string[];
}

export const team: TeamMember[] = [
  {
    slug: 'kiconco-angella',
    name: 'Kiconco Angella M',
    title: 'Associate',
    photo: '/images/team/kiconco.jpeg',
    shortBio: 'Dedicated legal professional advancing expertise in international business law.',
    bio: 'Kiconco Angella is a dedicated legal professional and accomplished postgraduate scholar advancing her expertise in international business law through her Master of Laws (LLM) studies. With a strong foundation in corporate law, real estate transactions, and commercial law, Angella brings intellectual rigor and strategic insight to complex legal matters. Her professional focus spans corporate transactions, international trade, intellectual property, real estate law, and the emerging intersection of law and technology. Angella is particularly passionate about regional integration and developing practical solutions at the nexus of law and innovation — positioning her as a forward-thinking advocate for her clients\' evolving needs. Beyond her legal practice, Kiconco Angella embodies the values that define MAKLAID: determination, resilience, and an unwavering commitment to excellence.',
    practices: ['Corporate & Commercial', 'Real Estate & Conveyancing'],
    specializations:
      'Corporate transactions, international trade, intellectual property, real estate law, and the emerging intersection of law and technology.',
    education: [
      'LLB (Hons)',
      'PGL (Hons)',
      'LLM International Business Law',
    ],
    barAdmissions: ['Advocate of the High Court of Uganda'],
  },
  {
    slug: 'ttega-charles',
    name: 'Ttega Charles',
    title: 'Legal Assistant / Associate',
    photo: '/images/team/ttega.jpeg',
    shortBio: 'Dedicated law graduate with a strong commitment to providing practical and effective legal solutions.',
    bio: 'Ttega Charles is a law graduate with a strong interest in legal practice and a genuine passion for providing practical and effective legal solutions to clients. With professional training through his Postgraduate Diploma in Legal Practice, Ttega brings a comprehensive understanding of both substantive and procedural law to his work. His areas of expertise span civil litigation, corporate and commercial law, business registration, and general legal practice. Ttega is characterized by his commitment to professional excellence, continuous learning, and delivering quality legal services that meet and exceed client expectations. He believes that effective legal counsel requires not just knowledge of the law, but also the ability to translate complex legal concepts into practical, actionable solutions. As a member of the Uganda Young Lawyers Association, Ttega remains actively engaged with the broader legal community and is committed to contributing to the development of Uganda\'s legal profession. His approach to legal practice is grounded in integrity, diligence, and a genuine desire to help clients navigate their legal challenges with confidence.',
    practices: ['Civil Litigation', 'Corporate & Commercial'],
    specializations:
      'Civil litigation, corporate and commercial law, business registration, and general legal practice.',
    education: [
      'Bachelor of Laws (LL.B)',
      'Postgraduate Diploma in Legal Practice (PGDLP)',
    ],
    barAdmissions: ['Member, Uganda Young Lawyers Association'],
  },
  {
    slug: 'irene-kobusinge',
    name: 'Irene Kobusinge',
    title: 'Practice Manager',
    photo: '/images/team/irene.jpeg',
    shortBio: 'An accountant by profession with experience in accounting, financial management, administration, and organisational operations.',
    bio: 'Irene Kobusinge is an accountant by profession with experience in accounting, financial management, administration, and organisational operations. She began her professional career as a Junior Accountant at Ark Engineering Solutions Limited in Hoima and subsequently served as a School Bursar at St. Mark Kabwohe in Sheema. She currently serves as Practice Manager at Maklaid Advocates, where she oversees the firm\'s administrative and financial management functions. Irene is passionate about effective financial management, accurate record keeping, administrative efficiency, and continuous professional development. She is committed to applying her knowledge and experience to support organisational growth and efficient operations.',
    practices: ['Accounting & Financial Management', 'Office & Practice Management'],
    specializations:
      'Accounting and financial management, financial reporting and record keeping, budgeting and financial planning, tax and compliance administration, and office and practice management.',
    education: [
      'Bachelor of Business Administration (Accounting) – Bugema University',
      'CPA Level One – Completed',
      'CPA Level Two – Currently pursuing',
    ],
    barAdmissions: [
      'Member, Institute of Certified Public Accountants of Uganda (ICPAU)',
      'Lay Representative – Seventh-day Adventist Church in Uganda',
    ],
  },
];
