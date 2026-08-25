/**
 * MAKLAID ADVOCATES contact information — single source of truth for
 * phone, email, WhatsApp, address and office hours.
 */

export interface HourEntry {
  days: string;
  time: string;
}

export const contactInfo = {
  firmName: 'MAKLAID ADVOCATES',
  phone: ['+256 757 401962', '+256 784186862'],
  phonePrimary: '+256757401962',
  email: 'info@maklaidadvocates.com',
  whatsappMessage: 'Hi MAKLAID Advocates, I need legal assistance',
  whatsappNumber: '256757401962',
  address: '2nd Floor, Left Wing, Africourts, Plot 69, Buganda Road, P.O.Box 150700, Kampala, Uganda',
  mapUrl: 'https://maps.google.com/?q=Africourts+Buganda+Road+Kampala',
  hours: [
    { days: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ] as HourEntry[],
  yearEstablished: 2024,
};
