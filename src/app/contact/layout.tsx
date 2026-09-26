import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Happy Puppy Pets Clinic | Book a Veterinary Appointment',
  description: 'Contact Happy Puppy Pets Clinic in Ulwe, Navi Mumbai to enquire about veterinary appointments, pet care and home visits.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}