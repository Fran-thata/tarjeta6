import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API (Mock implementation for the UI demo)
// In a real app, strict env check: const apiKey = process.env.API_KEY || '';
const apiKey = process.env.API_KEY || 'demo-key'; 
const ai = new GoogleGenAI({ apiKey });

/**
 * Mocks a smart availability check using Gemini (conceptually).
 * In a real scenario, this would check a calendar API and use Gemini to format the response.
 */
export const checkAvailability = async (query: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return a hardcoded "smart" response for the demo
  return `Hola, he verificado la agenda para "${query}". Tengo disponibilidad este Jueves a las 10:00 AM o el Viernes a las 3:00 PM. ¿Te gustaría reservar alguno de estos horarios?`;
};