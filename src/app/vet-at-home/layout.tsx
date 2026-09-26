import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veterinary Home Visits in Ulwe | Happy Puppy Pets Clinic',
  description: 'Happy Puppy Pets Clinic offers veterinary home visit consultations for pet parents in Ulwe, Navi Mumbai. Contact the clinic to enquire about home visit availability.',
};

export default function VetAtHomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}