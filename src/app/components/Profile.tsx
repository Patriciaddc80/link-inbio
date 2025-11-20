import { motion } from 'framer-motion';
import Verified from './icons/Verified';

export default function Profile() {
  return (
    <motion.div
      className="relative z-10 container mx-auto max-w-md px-6 pt-16 text-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-otterco font-bold mb-3 flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className='flex items-center gap-2'>
          <span className="bg-gradient-to-r from-gray-900 via-green-900 to-green-900 bg-clip-text text-transparent">
            PatriciaDiaz.dev
          </span>
          <Verified className='text-green-600 w-6 h-6 animate-pulse-slow' />
        </span>
      </motion.h1>
      <motion.p
        className="text-gray-600 max-w-md font-sans text-base leading-relaxed"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Desarrollo web y diseño web profesional para pymes. Creación de páginas web modernas y optimizadas para impulsar tu presencia digital.
      </motion.p>
    </motion.div>
  );
}