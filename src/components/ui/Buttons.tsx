"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { clinicData } from '@/config/clinic';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'white';
  className?: string;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const BaseButton = ({ children, variant = 'primary', className = '', asAnchor, href, target, rel, ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-900 focus:ring-primary shadow-soft",
    secondary: "bg-accent text-white hover:bg-amber-600 focus:ring-accent shadow-soft",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1DA851] focus:ring-[#25D366] shadow-soft border-none",
    white: "bg-white text-primary hover:bg-gray-100 focus:ring-white shadow-soft", // New white variant added
  };

  const Content = (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center w-full h-full">
      {children}
    </motion.div>
  );

  if (asAnchor) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {Content}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {Content}
    </button>
  );
};

export const CallButton = ({ className, variant = 'primary' }: { className?: string, variant?: ButtonProps['variant'] }) => (
  <BaseButton asAnchor href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`} variant={variant} className={className}>
    <Phone className="w-4 h-4 mr-2" />
    Call Now
  </BaseButton>
);

export const WhatsAppButton = ({ className }: { className?: string }) => (
  <BaseButton asAnchor href={clinicData.links.whatsapp} target="_blank" rel="noopener noreferrer" variant="whatsapp" className={className}>
    <MessageCircle className="w-4 h-4 mr-2" />
    WhatsApp Us
  </BaseButton>
);