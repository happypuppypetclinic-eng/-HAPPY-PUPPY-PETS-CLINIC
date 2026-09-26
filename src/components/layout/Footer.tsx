import Link from 'next/link';
import { clinicData } from '@/config/clinic';
import { WhatsAppButton, CallButton } from '../ui/Buttons';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{clinicData.name}</h3>
            <p className="text-blue-200 mb-6 max-w-sm">
              Providing premium, compassionate, and professional veterinary care for your beloved pets in Navi Mumbai.
            </p>
            <div className="flex space-x-4">
              <WhatsAppButton className="text-sm px-4 py-2" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Vet At Home', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`} className="text-blue-200 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-blue-200">
              <li>{clinicData.address.full}</li>
              <li><a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">{clinicData.phone}</a></li>
              <li><a href={`mailto:${clinicData.email}`} className="hover:text-white transition-colors">{clinicData.email}</a></li>
            </ul>
            <div className="mt-6">
              <CallButton variant="white" className="w-full" />
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} {clinicData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}