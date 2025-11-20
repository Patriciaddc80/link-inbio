"use client";

import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import LocationMap from './components/LocationMap';
import Button from './components/Button';
import Header from './components/Header';
import Globe from './components/icons/Globe';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import { motion } from 'framer-motion';
// import Download from './components/icons/Download';


export default function Home() {
  return (
    <motion.main  
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen w-full relative bg-gradient-to-br from-green-500 to-emerald-500"
    >
      <div className="w-full min-h-screen bg-white">
        {/* Avatar Section with Gradient */}
        <Header />

        <div className='bg-white relative'>
          {/* Profile Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Profile />
          </motion.div>

          {/* White Content Section */}
          <motion.div
            className="bg-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="container mx-auto max-w-md px-6 pb-8">
              <div className="flex flex-col items-center space-y-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <SocialLinks />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0, width: '100%' }}
                  animate={{ y: 0, opacity: 1, width: '100%' }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <LocationMap />
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="w-full space-y-4 mt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Button
                    href="https://patriciadiaz.dev/portfolio"
                    leftIcon={Globe}
                    variant="gradient"
                  >
                    Visita mi portafolio
                  </Button>
                </motion.div>

                {/* Project Card */}
                <motion.div
                  className="w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <ProjectCard
                    href="https://prototipo-wedding1.netlify.app/"
                    image="/images/invitaciones-digitales.webp"
                    imageAlt="Invitaciones Digitales"
                    badge="INVITACIONES DIGITALES-DEMO"
                    title="Invitaciones Digitales"
                    description="Plataforma moderna para crear y personalizar invitaciones digitales para eventos especiales. Diseño elegante y fácil de usar."
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Footer Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
