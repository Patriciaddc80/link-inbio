"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const LocationPin = () => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 20 20" 
    className="w-6 h-6"
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fillRule="evenodd" 
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
      clipRule="evenodd"
    />
  </svg>
);

export default function LocationMap() {
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/67pwxamtACJtwaVT9', '_blank');
  };

  return (
    <div className="w-full max-w-md">
      <motion.div 
        className="relative w-full h-56 rounded-2xl overflow-hidden shadow-elevation-2 cursor-pointer group"
        onClick={handleMapClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {/* Map Image */}
        <Image
          src="/images/map.png"
          alt="Location Map"
          fill
          className="object-cover pointer-events-none user-select-none transition-transform duration-300 group-hover:scale-105"
          priority
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Container for marker and animations */}
          <div className="relative flex flex-col items-center">
            {/* Marker container with pulse */}
            <div className="relative w-6 h-6">
              {/* Pulse animations */}
              <motion.div
                className="absolute left-1/2 top-1/2 bg-green-500/30 rounded-full will-change-transform"
                style={{ 
                  width: '48px', 
                  height: '48px',
                  x: '-50%',
                  y: '-50%'
                }}
                initial={{ scale: 0.5, opacity: 0.6 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  repeatDelay: 0.2
                }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 bg-green-500/20 rounded-full will-change-transform"
                style={{ 
                  width: '48px', 
                  height: '48px',
                  x: '-50%',
                  y: '-50%'
                }}
                initial={{ scale: 0.5, opacity: 0.5 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                  repeatDelay: 0.2
                }}
              />
              
              {/* Marker */}
              <motion.div 
                className="absolute inset-0 text-green-600 drop-shadow-lg flex items-center justify-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.6
                }}
              >
                <LocationPin />
              </motion.div>
            </div>

            {/* Location text with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4"
            >
              <span className="text-xs font-semibold text-white bg-green-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-elevation-2 border border-white/20">
                📍 Ver ubicación
              </span>
            </motion.div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </div>
  );
}
