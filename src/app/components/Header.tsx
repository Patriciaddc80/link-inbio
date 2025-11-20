import Image from 'next/image';
import BackgroundGradient from './BackgroundGradient';

export default function Header() {
  return (
    <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 overflow-hidden">
      <BackgroundGradient/>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent)] mix-blend-overlay" />

      {/* Sparkle effects */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse-slow opacity-60" />
      <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow opacity-50" />

      {/* Avatar Content */}
      <div className="relative z-10 container mx-auto max-w-md px-4 pt-8">
        <div className="flex flex-col items-center text-center relative z-10 top-12">
          {/* Avatar with animated gradient border */}
          <div className="relative w-56 h-56 mb-4 rounded-full p-1 bg-gradient-to-br from-white via-green-200 to-emerald-200 shadow-glow animate-glow">
            <div className="w-full h-full bg-white rounded-full p-1">
              <Image
                src="/images/image-profile.jpg"
                alt="Profile Avatar"
                width={220}
                height={220}
                className="rounded-full overflow-hidden"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Shape */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[100px]">
          <path
            d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}
