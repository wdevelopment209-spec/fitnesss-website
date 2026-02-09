
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, WorkoutPlan } from "./types";

// Always initialize the client using the API key from process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkoutPlan = async (profile: UserProfile): Promise<WorkoutPlan> => {
  const prompt = `Generate a highly professional, science-based 1-week workout plan for a user with the following profile:
    Weight: ${profile.weight}kg, Height: ${profile.height}cm, Age: ${profile.age}, Goal: ${profile.goal}, Level: ${profile.level}.
    
    IMPORTANT RULES:
    1. DO NOT include any 'Chest' exercises (e.g., no bench press, no pushups).
    2. DO NOT include any 'Core' or 'Abdominal' exercises (e.g., no crunches, no planks).
    3. Focus on Full Body, Legs, Back, and Arms.
    4. Provide specific exercises, sets, reps, and tips for each.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          durationWeeks: { type: Type.NUMBER },
          exercises: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                sets: { type: Type.STRING },
                reps: { type: Type.STRING },
                rest: { type: Type.STRING },
                tips: { type: Type.STRING }
              },
              required: ["name", "sets", "reps"]
            }
          }
        },
        required: ["title", "description", "exercises"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const getAIFitnessAdvice = async (userMessage: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    // Maintain conversational context by passing the message history
    history: history,
    config: {
      systemInstruction: "You are Aura, an elite AI fitness coach. You provide professional, encouraging, and science-based fitness and sports advice. IMPORTANT: You must NEVER suggest Chest or Core exercises. Focus on all other muscle groups. Keep responses concise and use formatting like bold text for key points.",
    }
  });

  const response = await chat.sendMessage({ message: userMessage });
  return response.text;
};

export const generateDietPlan = async (profile: UserProfile) => {
    const prompt = `Create a 1-day sample elite nutrition plan for: ${profile.goal}. Current stats: ${profile.weight}kg, ${profile.height}cm. Provide meal names and primary macros (Protein, Carbs, Fats).`;
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    meals: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                name: { type: Type.STRING },
                                items: { type: Type.ARRAY, items: { type: Type.STRING } },
                                macros: { type: Type.STRING }
                            }
                        }
                    },
                    dailyTotal: { type: Type.STRING }
                }
            }
        }
    });
    return JSON.parse(response.text);
}
