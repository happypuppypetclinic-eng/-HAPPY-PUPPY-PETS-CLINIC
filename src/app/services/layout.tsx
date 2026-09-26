import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veterinary Services in Ulwe | Happy Puppy Pets Clinic',
  description: 'Explore veterinary consultation, preventive pet care, vaccination, health guidance and home visit services from Happy Puppy Pets Clinic in Ulwe, Navi Mumbai.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}