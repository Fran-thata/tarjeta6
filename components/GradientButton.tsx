import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GradientButtonProps {
  label?: string;
  icon: LucideIcon;
  onClick?: () => void;
  delay?: number;
  iconSize?: number;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ 
  label, 
  icon: Icon, 
  onClick, 
  delay = 0,
  iconSize = 24
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full h-16 rounded-[20px] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 shadow-md shadow-purple-100"
      style={{
        // Gradient matching the screenshot: Soft Lavender -> Pale Pink/White
        background: 'linear-gradient(95deg, #CDB4DB 0%, #FFC8DD 100%)', 
        animation: `fadeInUp 0.6s ease-out ${delay}s backwards`
      }}
    >
      {/* Glossy top highlight for glassmorphism/3D effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
      
      {/* Interactive hover overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      <div className={`flex items-center justify-center gap-3 relative z-10 h-full px-6 ${!label ? 'w-full' : ''}`}>
        {/* Icon with "Silver/Metallic" look via color and shadow */}
        <div className="text-gray-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)] filter">
          <Icon size={iconSize} strokeWidth={1.5} className="fill-white/10" />
        </div>
        
        {/* Label text */}
        {label && (
          <span className="text-[#374151] font-medium text-[17px] tracking-tight drop-shadow-sm">
            {label}
          </span>
        )}
      </div>
    </button>
  );
};