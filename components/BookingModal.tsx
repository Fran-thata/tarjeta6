import React, { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { checkAvailability } from '../services/geminiService';
import { BookingState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<BookingState>(BookingState.IDLE);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus(BookingState.LOADING);
    try {
      const result = await checkAvailability(query);
      setResponse(result);
      setStatus(BookingState.SUCCESS);
    } catch (error) {
      setResponse("Lo siento, hubo un error al consultar la disponibilidad.");
      setStatus(BookingState.ERROR);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl p-6 relative flex flex-col gap-4 animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-xl font-bold text-gray-800 text-center mt-2">Reservar Cita</h3>
        
        {status === BookingState.IDLE && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-gray-500 text-center text-sm">
              ¿Para cuándo te gustaría agendar tu consulta?
            </p>
            <textarea
              className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none text-gray-700"
              rows={3}
              placeholder="Ej: Mañana por la tarde..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              disabled={!query.trim()}
              className="w-full h-12 bg-[#BFA4F5] hover:bg-[#a98ce6] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Consultar</span>
              <Send size={18} />
            </button>
          </form>
        )}

        {status === BookingState.LOADING && (
          <div className="py-8 flex flex-col items-center justify-center gap-3 text-purple-500">
            <Loader2 className="animate-spin" size={40} />
            <p className="text-sm font-medium">Consultando agenda...</p>
          </div>
        )}

        {status === BookingState.SUCCESS && (
          <div className="flex flex-col gap-4">
             <div className="bg-purple-50 p-4 rounded-xl text-gray-700 text-sm leading-relaxed">
               {response}
             </div>
             <button
               onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(response || '')}`, '_blank')}
               className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
             >
               Confirmar por WhatsApp
             </button>
          </div>
        )}
      </div>
    </div>
  );
};