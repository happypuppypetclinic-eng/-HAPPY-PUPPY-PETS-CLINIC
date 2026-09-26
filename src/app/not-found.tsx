"use client";
import { motion } from 'framer-motion';
import { BaseButton, CallButton } from '@/components/ui/Buttons';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-secondary">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
      >
        <span className="text-accent font-bold tracking-wider uppercase mb-4 block">Error 404</span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Page Not Found
        </h1>
        <p className="text-lg text-textLight mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <BaseButton asAnchor href="/" variant="primary">
            Back to Home
          </BaseButton>
          <CallButton />
        </div>
      </motion.div>
    </div>
  );
}