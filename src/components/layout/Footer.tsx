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
          {/* Contact Us Column */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-6">Contact Us</h4>
            <div className="space-y-6">
              {clinicData.locations.map((loc) => (
                <div key={loc.id} className="space-y-2">
                  <h5 className="font-semibold text-white">{loc.name}</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{loc.address}</p>
                  <a href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-300 hover:text-white block text-sm transition-colors">
                    {loc.phone}
                  </a>
                </div>
              ))}
              <div className="pt-2 border-t border-white/10">
                <a href={`mailto:${clinicData.email}`} className="text-gray-300 hover:text-white text-sm transition-colors">
                  {clinicData.email}
                </a>
              </div>
              <CallButton variant="white" className="w-full mt-4" />
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