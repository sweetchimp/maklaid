/**
 * MAKLAID contact information — single source of truth for
 * phone, email, WhatsApp, address and office hours.
 */

export interface HourEntry {
  days: string;
  time: string;
}

export const contactInfo = {
  phone: '+254 (0) 700 000 000',
  phoneLink: '+254700000000',
  email: 'info@maklaid.co.ke',
  whatsappMessage: 'Hi MAKLAID, I need legal assistance',
  address: 'Riverside Chambers, 12th Floor, Riverside Drive, Nairobi',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Riverside+Chambers+Nairobi',
  hours: [
    { days: 'Monday – Friday', time: '8:30 AM – 5:30 PM' },
    { days: 'Saturday', time: '9:00 AM – 1:00 PM' },
    { days: 'Sunday & Public Holidays', time: 'Closed (emergencies by phone)' },
  ] as HourEntry[],
};
