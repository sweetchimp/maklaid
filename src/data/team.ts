/**
 * MAKLAID ADVOCATES attorney roster â€” single source of truth for the team
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
    bio: 'Kiconco Angella is a dedicated legal professional and accomplished postgraduate scholar advancing her expertise in international business law through her Master of Laws (LLM) studies. With a strong foundation in corporate law, real estate transactions, and commercial law, Angella brings intellectual rigor and strategic insight to complex legal matters. Her professional focus spans corporate transactions, international trade, intellectual property, real estate law, and the emerging intersection of law and technology. Angella is particularly passionate about regional integration and developing practical solutions at the nexus of law and innovation â€” positioning her as a forward-thinking advocate for her clients\' evolving needs. Beyond her legal practice, Kiconco Angella embodies the values that define MAKLAID: determination, resilience, and an unwavering commitment to excellence.',
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
    title: 'Legal and Tax Associate',
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
      'Bachelor of Business Administration (Accounting) â€“ Bugema University',
      'CPA Level One â€“ Completed',
      'CPA Level Two â€“ Currently pursuing',
    ],
    barAdmissions: [
      'Member, Institute of Certified Public Accountants of Uganda (ICPAU)',
      'Lay Representative â€“ Seventh-day Adventist Church in Uganda',
    ],
  },

  {
    slug: 'mugabi-yokana',
    name: 'Mugabi Yokana',
    title: 'Associate',
    photo: '/images/team/mugabi-yokana.jpg',
    shortBio: 'Seasoned and versatile professional who leads and advises on complex and high-profile transactions, disputes, tax consultancy and regulatory matters.',
    bio: 'Yokana Mugabi is a seasoned and versatile professional who leads and advises on complex and high-profile transactions, disputes, tax consultancy and regulatory matters. He is a well thought-out litigator with invaluable experience in corporate & commercial practice, including banking and finance.\n\nYokana also has experience in intellectual property rights and document registration, including trademarks, patents and copyrights. He brings elite experience in insurance practice, having worked with a leading insurance firm for over three years, enabling him to understand the general operations of the insurance business.\n\nHe has provided resourceful representation to a wide range of clients, advising on strategic guidance on various issues and initiatives.',
    practices: [
      'Corporate & Commercial Practice',
      'Litigation',
      'Employment',
      'Tax Consultancy',
      'Insurance Practice',
      'Intellectual Property',
      'Banking and Finance',
    ],
    specializations:
      'Corporate and commercial practice, litigation, employment, tax consultancy, insurance practice, intellectual property, and banking and finance.',
    education: [
      'Post Graduate Diploma in Legal Practice (Law Development Centre)',
      'LLM Candidate (University of Cape Town)',
      'AML & CFT (Trainingcred, Nairobi)',
    ],
    barAdmissions: [
      'Member, Uganda Law Society',
      'Member, East African Law Society',
    ],
  },
  {
    slug: 'izulya-emmanuel',
    name: 'Izulya Emmanuel',
    title: 'Associate',
    photo: '/images/team/izulya-emmanuel.jpg',
    shortBio: 'High Court Advocate with a distinguished track record in civil litigation and corporate and commercial advisory.',
    bio: 'Izulya Emmanuel is a High Court Advocate with a distinguished track record in civil litigation and corporate and commercial advisory. With qualifications spanning land management and legal practice, Emmanuel brings a unique perspective to complex legal matters.\n\nHis expertise spans civil litigation, corporate advisory, and high court advocacy. Emmanuel is committed to delivering strategic legal solutions for his clients across various practice areas.',
    practices: ['Civil Litigation', 'Corporate and Commercial Advisory', 'High Court Advocacy'],
    specializations:
      'Civil litigation, corporate and commercial advisory, and high court advocacy.',
    education: [
      'Masters Degree in Science and Land Management (Makerere University)',
      'Post Graduate Diploma in Legal Practice',
      'Bachelors Degree in Law',
    ],
    barAdmissions: [],
  },
  {
    slug: 'proscovia-shammah',
    name: 'Proscovia Aber Shammah',
    title: 'Legal Assistant',
    photo: '/images/team/proscovia-shammah.jpg',
    shortBio: 'Legal practitioner distinguished by her commitment to excellence, intellectual curiosity, and a thoughtful approach to the practice of law.',
    bio: 'Proscovia Aber Shammah is a legal practitioner distinguished by her commitment to excellence, intellectual curiosity, and a thoughtful approach to the practice of law. As a Legal Assistant at MAKLAID Advocates, she is involved in legal research and advisory, drafting pleadings, legal opinions and contracts, and supporting the effective preparation and management of legal matters.\n\nShammah has also served as a Legal Assistant at Chapter Four Uganda and the Parliament of Uganda, experiences that have strengthened her understanding of human rights, public interest litigation, legislative processes, and the administration of justice. She is committed to the rule of law and to maintaining the highest standards of integrity and professionalism in her work.',
    practices: [
      'Civil Litigation',
      'Alternative Dispute Resolution',
      'Legal Research and Advisory',
      'Human Rights and Access to Justice',
    ],
    specializations:
      'Civil litigation, alternative dispute resolution, legal research and advisory, and human rights and access to justice.',
    education: [
      'Bachelor of Laws (LL.B), Uganda Christian University',
      'Post Graduate Diploma in Legal Practice (Bar Course), Law Development Centre (in progress)',
    ],
    barAdmissions: [
      'Member, Uganda Christian Lawyers Fraternity (UCLF)',
    ],
  },
  {
    slug: 'muwanguzi-benson',
    name: 'Muwanguzi Benson',
    title: 'Legal Assistant',
    photo: '/images/team/benson.jpeg',
    shortBio:
      'A dedicated lawyer with a strong interest in legal advocacy, litigation, and dispute resolution.',
    bio: 'Muwanguzi Benson is a dedicated lawyer with a strong interest in legal advocacy, litigation, and dispute resolution. Committed to upholding the highest standards of professional integrity while striving for excellence throughout his legal career.\n\nBenson seeks to build practical expertise, pursue excellence in the practice of law, and deliver client-focused legal solutions. With expertise in corporate and commercial law, civil litigation, and property law, he brings a commitment to rigorous advocacy and comprehensive legal representation.\n\nBenson is dedicated to advancing access to justice and maintaining the highest standards of professionalism in all client engagements.',
    practices: [
      'Corporate and Commercial Law',
      'Civil Litigation and Dispute Resolution',
      'Property Law',
    ],
    specializations:
      'Corporate and commercial law, civil litigation and dispute resolution, and property law.',
    education: [
      'LLB (Hons) IUIU',
      'Postgraduate Diploma in Legal Practice (LDC)',
    ],
    barAdmissions: [
      'Member, Uganda Christian Lawyer\'s Fraternity',
      'Member, Uganda Young Lawyers\' Association',
    ],
  },
];


