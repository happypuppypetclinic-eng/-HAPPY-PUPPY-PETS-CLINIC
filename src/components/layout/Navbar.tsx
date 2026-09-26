"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CallButton } from '../ui/Buttons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Vet At Home', href: '/vet-at-home' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-secondary/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
             {/* Logo Placeholder */}
            <div className="h-20  rounded-full flex items-center justify-center text-white font-bold text-xs">
              <img src="/images/logo.png" alt="Happy Puppy Pets Logo" className="h-14" />
            </div>
            <span className="font-bold text-xl text-primary hidden sm:block tracking-tight">HAPPY PUPPY PETS CLINIC</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-textMain hover:text-primary font-medium transition-colors">
                {link.name}
              </Link>
            ))}
            <CallButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-textMain p-2 focus:outline-none aria-label='Toggle menu'">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-textMain hover:bg-secondary rounded-lg">
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <CallButton className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}