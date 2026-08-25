/**
 * MAKLAID practice areas — single source of truth for the services
 * listing, homepage preview and individual service routes
 * (/services/[service]).
 */

export type ServiceIconName =
  | 'briefcase'
  | 'heart-handshake'
  | 'shield'
  | 'home'
  | 'globe'
  | 'scale';

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  /** URL segment for /services/[service]; matches legacy footer anchors */
  slug: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  tag: string;
  overview: [string, string];
  process: ServiceStep[];
  outcomes: string[];
  faq: ServiceFaq[];
}

export const services: ServiceItem[] = [
  {
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial',
    description:
      'Formation, governance, M&A and commercial contracts that keep your business protected.',
    icon: 'briefcase',
    tag: 'Business',
    overview: [
      'Your company\u2019s legal architecture should enable growth, not constrain it. We advise on incorporation and restructuring, shareholder arrangements, governance frameworks and the full lifecycle of commercial contracts — from supplier terms to complex distribution and joint-venture agreements.',
      'The team regularly acts for listed companies, family businesses and foreign investors entering the Kenyan market, combining technical precision with a commercial instinct for what a deal actually needs.',
    ],
    process: [
      {
        title: 'Discovery & structuring',
        description:
          'We map your objectives, risk appetite and regulatory exposure, then recommend the vehicle and structure that fit.',
      },
      {
        title: 'Drafting & negotiation',
        description:
          'Agreements are drafted tight and negotiated hard, with plain-language summaries so you always know what you are signing.',
      },
      {
        title: 'Execution & registration',
        description:
          'We handle filings with the Registrar of Companies, sector regulators and county authorities through to issuance.',
      },
      {
        title: 'Ongoing counsel',
        description:
          'Board support, compliance calendars and contract reviews keep the structure healthy as the business scales.',
      },
    ],
    outcomes: [
      'Company or subsidiary incorporated with a clean capitalisation table',
      'Shareholder and joint-venture agreements that prevent future deadlocks',
      'Transactions closed on schedule with regulatory approvals secured',
      'A compliance calendar that keeps filings and licences current',
    ],
    faq: [
      {
        question: 'How long does company incorporation take in Kenya?',
        answer:
          'A standard private limited company is typically registered within 7–10 working days once we have the proposed names, director details and shareholding. Companies requiring sector licences — banking, insurance, telecoms — take longer because of regulator clearance, which we manage end-to-end.',
      },
      {
        question: 'Do you handle foreign-owned companies?',
        answer:
          'Yes. We incorporate locally owned and wholly foreign-owned subsidiaries alike, advise on minimum local-shareholding rules where they apply, and coordinate investor and work permits through our immigration practice.',
      },
      {
        question: 'What does an ongoing retainer cover?',
        answer:
          'Retainer clients receive board and AGM secretarial support, contract review within agreed turnaround times, priority access to the partners and a fixed monthly fee that makes legal spend predictable.',
      },
    ],
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    description:
      'Compassionate, discreet representation in divorce, custody and matrimonial property matters.',
    icon: 'heart-handshake',
    tag: 'Personal',
    overview: [
      'Family matters demand both legal precision and emotional intelligence. Whether you are facing a divorce, negotiating custody, or protecting assets earned over a lifetime of marriage, we handle every file with discretion and a genuine duty of care.',
      'Wherever possible we resolve matters through mediation and negotiated settlement — faster, cheaper and kinder to everyone involved. Where court is unavoidable, we prepare thoroughly and advocate firmly.',
    ],
    process: [
      {
        title: 'Confidential consultation',
        description:
          'We listen first — understanding your family, finances and priorities before any advice is given.',
      },
      {
        title: 'Strategy & mediation plan',
        description:
          'You receive a clear roadmap: likely timelines, realistic outcomes and whether mediation can get you there sooner.',
      },
      {
        title: 'Negotiation or filing',
        description:
          'We negotiate settlements directly with your spouse\u2019s representatives, or file and litigate when agreement proves impossible.',
      },
      {
        title: 'Resolution & aftercare',
        description:
          'Orders are drafted precisely and registered, with follow-up support for implementation and any future variations.',
      },
    ],
    outcomes: [
      'Custody and maintenance arrangements centred on the child\u2019s best interests',
      'Matrimonial property divided fairly and transparently',
      'Protection orders secured swiftly where safety requires it',
      'Settlements reached without a courtroom where families allow it',
    ],
    faq: [
      {
        question: 'How long does a divorce take in Kenya?',
        answer:
          'A joint (undefended) divorce typically concludes in 6–9 months. A contested divorce where parties disagree on grounds, custody or property can run 18 months or more. Mediation shortens most disputes considerably.',
      },
      {
        question: 'Will my children have a say in custody decisions?',
        answer:
          'Courts consider the views of children old enough to express them, but the controlling principle is the child\u2019s best interests. We help present parenting proposals that courts recognise as stable and practical.',
      },
      {
        question: 'What will the whole process cost?',
        answer:
          'After the initial consultation you receive a written estimate with staged fees. Most family files are billed per stage, so costs track progress rather than surprise you.',
      },
    ],
  },
  {
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    description:
      'Vigorous defense of your rights and freedom — investigation through trial and appeal.',
    icon: 'shield',
    tag: 'Defense',
    overview: [
      'An arrest or criminal investigation changes everything overnight. Our first job is immediate: protect your rights at the station, secure reasonable bond terms and stop avoidable self-incrimination before it happens.',
      'From there we build the defense methodically — dissecting the evidence, briefing experienced counsel for trial, and pressing every lawful advantage until the matter resolves.',
    ],
    process: [
      {
        title: 'Urgent response',
        description:
          'Bail applications, station visits and rights protection begin the moment we are instructed — day or night.',
      },
      {
        title: 'Evidence review',
        description:
          'We obtain and interrogate the prosecution file, witness statements and exhibits for weaknesses worth exploiting.',
      },
      {
        title: 'Pre-trial strategy',
        description:
          'Many charges weaken before trial. We pursue withdrawals, diversions or charge reduction wherever the evidence allows.',
      },
      {
        title: 'Trial & appeal',
        description:
          'Fully prepared trials before competent fora, with appellate grounds preserved from day one in case they are needed.',
      },
    ],
    outcomes: [
      'Release on fair bond and bail terms without unnecessary remand',
      'Charges withdrawn, reduced or diverted where evidence is weak',
      'Acquittals won on preparation rather than luck',
      'Appeal rights and records preserved for every conviction challenged',
    ],
    faq: [
      {
        question: 'Someone was just arrested — what do we do right now?',
        answer:
          'Call us immediately. Within hours we can locate the detainee, attend the station, ensure constitutional protections are observed and move for bond. Early intervention consistently produces better outcomes than waiting.',
      },
      {
        question: 'Must I make a police statement?',
        answer:
          'You are protected against self-incrimination. We advise when a statement helps and when silence is the stronger strategy — never give one before speaking to us.',
      },
      {
        question: 'Can a criminal record be cleared later?',
        answer:
          'Depending on the offence and outcome, records may qualify for expungement or a certificate of good conduct unaffected by the history. We assess eligibility and handle the application process.',
      },
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Property',
    description:
      'Transactions, land disputes, leases and conveyancing handled with precision and speed.',
    icon: 'home',
    tag: 'Property',
    overview: [
      'Kenyan property moves fast, and mistakes are expensive. Every transaction we touch runs layered due diligence — official searches, encumbrance checks, rates and rent clearance — before a client commits money.',
      'From first-time buyers to institutional developers, we deliver clean titles, watertight leases and registrations that hold up under scrutiny years later.',
    ],
    process: [
      {
        title: 'Title due diligence',
        description:
          'Registry searches, survey verification and encumbrance tracing confirm exactly what you are buying.',
      },
      {
        title: 'Structuring & negotiation',
        description:
          'Price mechanisms, conditions precedent and completion obligations negotiated into the sale agreement.',
      },
      {
        title: 'Conveyancing & stamping',
        description:
          'Transfers, consents, stamping and land-control consents processed while your deposit sits safely in escrow.',
      },
      {
        title: 'Registration & handover',
        description:
          'We complete registration, confirm the new title issues correctly and manage keys, possession and utilities handover.',
      },
    ],
    outcomes: [
      'Clean title transferred and registered without post-completion surprises',
      'Charges, discharges and securities perfected on schedule',
      'Leases that protect landlords and tenants in equal measure',
      'Boundary and title disputes resolved — or avoided entirely',
    ],
    faq: [
      {
        question: 'What searches do you run before I buy?',
        answer:
          'At minimum: official registry search, encumbrances, rates and rent clearance, survey/registry-index-map verification and, for companies, a company search on the seller. Suspicious parcels fail early and cheaply.',
      },
      {
        question: 'Is buying off-plan safe?',
        answer:
          'It can be, with the right protections: verified approvals, staged payments tied to construction milestones, and performance security from the developer. We negotiate all three routinely.',
      },
      {
        question: 'Leasehold or freehold — does it matter?',
        answer:
          'Very much. Leaseholds carry renewal terms, ground rent and user restrictions; freeholds carry different control. We explain the practical consequences before you commit, not after.',
      },
    ],
  },
  {
    slug: 'immigration-law',
    title: 'Immigration Law',
    description:
      'Visas, permits, residency and citizenship — clear guidance through every requirement.',
    icon: 'globe',
    tag: 'Immigration',
    overview: [
      'Kenyan immigration rules reward precise applications and punish guesswork. We map the correct pathway for each client — special passes, work permits, dependant passes, permanent residency or citizenship — then prepare files that pass first time.',
      'Employers rely on us for workforce mobility programmes; families trust us to keep households together across borders.',
    ],
    process: [
      {
        title: 'Eligibility mapping',
        description:
          'An honest assessment of which category fits your purpose, timeline and profile — before any fee is paid.',
      },
      {
        title: 'Application preparation',
        description:
          'Every supporting document sourced, certified and packaged to the standard immigration officers expect.',
      },
      {
        title: 'Submission & liaison',
        description:
          'We lodge, track and follow up directly with Immigration, answering queries before they become refusals.',
      },
      {
        title: 'Approval & compliance',
        description:
          'Approvals are activated correctly, and renewal dates enter a monitored diary so status never lapses.',
      },
    ],
    outcomes: [
      'Work permits and passes issued with minimal back-and-forth',
      'Dependants covered under coherent, compliant applications',
      'Residency and citizenship pathways mapped step-by-step',
      'Renewals diarised and filed before deadlines bite',
    ],
    faq: [
      {
        question: 'What is a special pass and when is it used?',
        answer:
          'A special pass is short-term authorisation to be in Kenya lawfully while a longer permit is processed — often used for incoming employees or investors who must start immediately. We coordinate pass and permit timing so no gap in status occurs.',
      },
      {
        question: 'How long do work permits take?',
        answer:
          'Most categories issue within 4–8 weeks of a complete application. Incomplete files are the main cause of delay, which is why our preparation checklist is exhaustive.',
      },
      {
        question: 'My application was refused — can it be fixed?',
        answer:
          'Frequently yes. We review the refusal grounds, cure the deficiencies and either reapply or pursue review/appeal within statutory windows. Refusals are setbacks, not verdicts.',
      },
    ],
  },
  {
    slug: 'litigation',
    title: 'Litigation & Dispute Resolution',
    description:
      'Strategic advocacy in court and at the negotiation table to resolve conflicts decisively.',
    icon: 'scale',
    tag: 'Advocacy',
    overview: [
      'Disputes are resolved in two rooms: the courtroom and the negotiation room. Winning means knowing which one serves you better — and being fully prepared for either. We assess every matter on its merits, budget and business context before recommending a path.',
      'When advocacy is required, our courtroom record speaks for itself; when settlement is smarter, we negotiate from strength rather than fatigue.',
    ],
    process: [
      {
        title: 'Case assessment',
        description:
          'An unvarnished evaluation of merits, evidence, cost exposure and the realistic range of outcomes.',
      },
      {
        title: 'Pleadings & discovery',
        description:
          'Precise pleadings frame the fight on our terms; disciplined discovery locks in the documentary record.',
      },
      {
        title: 'Hearing advocacy',
        description:
          'Interim relief where urgent, then trial advocacy with every witness and exhibit rehearsed.',
      },
      {
        title: 'Judgment & enforcement',
        description:
          'Winning judgments are enforced — decrees executed, attachments pursued and settlements papered properly.',
      },
    ],
    outcomes: [
      'Favourable judgments or commercial settlements that stick',
      'Interim injunctions and conservatory orders when urgency demands',
      'Costs recovered against losing parties wherever order allows',
      'Decrees converted into actual recovery, not paper victories',
    ],
    faq: [
      {
        question: 'Should we arbitrate or go to court?',
        answer:
          'Arbitration offers confidentiality, speed and party-appointed decision-makers; courts offer precedent, precedent-based leverage and enforceable interim powers. Contract clauses decide much of this — we advise both on drafting and on strategy once a dispute exists.',
      },
      {
        question: 'How long will my case take?',
        answer:
          'Interim applications move in weeks; full trials commonly take 1–3 years depending on the forum and complexity. You receive a realistic timeline at assessment — not an optimistic one.',
      },
      {
        question: 'Who bears the costs if we win?',
        answer:
          'Kenyan courts usually award party-and-party costs to the winner, taxed to a schedule. Recovery rarely covers everything, so budgets always assume some unrecovered spend.',
      },
    ],
  },
];
