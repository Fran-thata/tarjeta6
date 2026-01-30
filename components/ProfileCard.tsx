import React, { useState } from 'react';
import { CalendarCheck, Star, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { GradientButton } from './GradientButton';
import { BookingModal } from './BookingModal';
import { 
  HEADER_IMAGE_URL, 
  PROFILE_IMAGE_URL, 
  PROFILE_NAME, 
  PROFILE_TITLE, 
  LINKS 
} from '../constants';

export const ProfileCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* 
        Main container changed from fixed card to full-screen responsive layout 
        min-h-screen ensures it fills the device height.
      */}
      <main className="relative w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
        
        {/* Header Image Area - Responsive height based on viewport */}
        {/* Removed bg-purple-100 to keep it neutral gray/white */}
        <div className="relative h-[35vh] min-h-[260px] w-full overflow-hidden bg-gray-50">
          {/* Removed the purple overlay (mix-blend-overlay) to show the true image colors */}
          <div className="absolute inset-0 bg-black/5 z-10"></div>
          <img 
            src={HEADER_IMAGE_URL} 
            alt="Abstract Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 
          Profile Content Wrapper
          Centers the content column on larger screens while maintaining full width on mobile 
        */}
        <div className="relative flex-1 bg-white px-6 pb-12 flex flex-col items-center w-full max-w-md mx-auto">
          
          {/* Profile Picture - Negative margin to overlap header */}
          <div className="relative -mt-[85px] mb-4 z-20">
            <div className="w-[170px] h-[170px] rounded-full p-1.5 bg-white shadow-2xl shadow-black/10">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt={PROFILE_NAME}
                className="w-full h-full rounded-full object-cover border-[6px] border-white"
              />
            </div>
          </div>

          {/* Text Info */}
          <div className="text-center mb-10 animate-in slide-in-from-bottom-4 duration-700 fade-in px-4">
            <h1 className="text-[32px] font-bold text-gray-900 leading-tight mb-2 tracking-tight">
              {PROFILE_NAME}
            </h1>
            <p className="text-gray-500 text-[19px] font-normal tracking-wide">
              {PROFILE_TITLE}
            </p>
          </div>

          {/* Action Buttons Container */}
          <div className="w-full flex flex-col gap-5 mb-auto">
            
            {/* WhatsApp Button (Icon Only) */}
            <GradientButton 
              icon={MessageCircle} 
              onClick={() => window.open(LINKS.whatsapp, '_blank')}
              delay={0.1}
              iconSize={34}
            />

            {/* Booking Button */}
            <GradientButton 
              label="Reservar cita" 
              icon={CalendarCheck} 
              onClick={() => setIsModalOpen(true)}
              delay={0.2}
            />
            
            {/* Reviews Button */}
            <GradientButton 
              label="Reseñas" 
              icon={Star} 
              onClick={() => console.log('Reviews clicked')}
              delay={0.3}
            />
          </div>

          {/* Footer Socials */}
          <div className="mt-12 flex items-center gap-8 opacity-60">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors transform hover:scale-110 p-2">
              <Linkedin size={30} strokeWidth={1.5} />
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors transform hover:scale-110 p-2">
              <Instagram size={30} strokeWidth={1.5} />
            </a>
          </div>

        </div>
      </main>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};