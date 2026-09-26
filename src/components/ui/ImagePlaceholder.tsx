"use client";
import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  filename: string;
  className?: string;
}

export function ImagePlaceholder({ filename, className = '' }: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`bg-gray-100 flex flex-col items-center justify-center text-textLight border-2 border-dashed border-gray-200 rounded-2xl p-4 ${className}`}>
        <ImageIcon className="w-10 h-10 mb-3 opacity-40 text-primary" />
        <span className="text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm text-center break-all">
          {filename}
        </span>
        <span className="text-xs mt-2 opacity-60 text-center">Image not found in folder</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Using standard img prevents Next.js server-side 404 crashes */}
      <img 
        src={filename} 
        alt="Happy Puppy Pets Clinic"
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}