import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Happy Puppy Pets Clinic | Veterinary Clinic in Ulwe',
  description: 'Learn about Happy Puppy Pets Clinic and Dr. Dinesh Kumar, providing veterinary consultation and pet care services for families in Ulwe, Navi Mumbai.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}