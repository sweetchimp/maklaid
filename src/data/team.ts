/**
 * MAKLAID attorney roster — single source of truth for the team
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
    slug: 'am-maklaid',
    name: 'A. M. Maklaid',
    title: 'Managing Partner',
    photo: '/images/team/maklaid.svg',
    shortBio: 'Two decades steering complex corporate transactions and governance mandates.',
    bio: 'A. M. Maklaid founded MAKLAID to close the gap between world-class commercial advice and the businesses that need it. Over twenty years he has led cross-border acquisitions, restructurings and governance programmes for listed companies, family groups and private equity investors across East Africa. Clients value his habit of translating dense legal risk into plain commercial language — and staying reachable long after papers are signed.',
    practices: ['Corporate & Commercial'],
    specializations:
      'Mergers & acquisitions, shareholder structures, joint ventures, corporate governance and commercial contracting for regulated industries.',
    education: [
      'LLB (Hons), University of Nairobi',
      'LLM, Commercial Law, Queen Mary University of London',
      'Postgraduate Diploma in Law, Kenya School of Law',
    ],
    barAdmissions: [
      'Advocate of the High Court of Kenya, 2004',
      'Member, Chartered Institute of Arbitrators (MCIArb)',
    ],
  },
  {
    slug: 'jw-achieng',
    name: 'J. W. Achieng',
    title: 'Senior Associate',
    photo: '/images/team/achieng.svg',
    shortBio: 'Fearless courtroom advocate with decisive outcomes in high-stakes disputes.',
    bio: 'J. W. Achieng has argued — and won — some of the firm\u2019s most demanding matters, from multi-million-shilling commercial suits to sensitive criminal trials. Trained as a certified mediator, she is equally at home settling a dispute quietly at the negotiation table when that serves the client best. Her files move fast because her preparation is exhaustive: every witness, exhibit and authority rehearsed before anyone sets foot in court.',
    practices: ['Litigation & Disputes'],
    specializations:
      'Commercial litigation, employment disputes, criminal defense, probate and estate contests, arbitration and mediated settlements.',
    education: [
      'LLB, Moi University',
      'Postgraduate Diploma in Law, Kenya School of Law',
      'Certified Mediator, Strathmore Dispute Resolution Centre',
    ],
    barAdmissions: ['Advocate of the High Court of Kenya, 2012'],
  },
  {
    slug: 'dk-mutua',
    name: 'D. K. Mutua',
    title: 'Associate',
    photo: '/images/team/mutua.svg',
    shortBio: 'Meticulous conveyancer trusted for fast, clean property transactions.',
    bio: 'D. K. Mutua handles the transfers, leases and charges that keep Nairobi property moving. Known for pre-empting the registry delays and title defects that stall ordinary conveyances, he runs layered due diligence on every parcel before a client commits a shilling. Developers retain him for phased project documentation; families rely on him for succession plans that spare their heirs future courtrooms.',
    practices: ['Real Estate & Conveyancing'],
    specializations:
      'Conveyancing and title due diligence, commercial leases, development documentation, charges and securities, succession planning.',
    education: [
      'LLB, University of Nairobi',
      'Postgraduate Diploma in Law, Kenya School of Law',
    ],
    barAdmissions: ['Advocate of the High Court of Kenya, 2018', 'Member, Law Society of Kenya'],
  },
];
