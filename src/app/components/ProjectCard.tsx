import { motion } from 'framer-motion';
import Image from 'next/image';
import Arrow from './icons/Arrow';

interface ProjectCardProps {
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  href,
  image,
  imageAlt,
  badge,
  title,
  description,
}: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-200 hover:border-green-500 transition-all duration-300 shadow-elevation-1 hover:shadow-elevation-3 group"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {/* Badge */}
      <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 px-4 py-2 text-center">
        <span className="text-white font-otterco font-bold text-sm tracking-wide">
          {badge}
        </span>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-otterco font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex items-center text-green-600 font-medium text-sm">
          <span>Ver proyecto</span>
          <Arrow className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );
}

