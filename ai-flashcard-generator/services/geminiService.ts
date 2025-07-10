
import { GoogleGenAI, Type } from "@google/genai";
import { Flashcard } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const flashcardSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            question: {
                type: Type.STRING,
                description: "A concise and clear question based on a key concept from the text.",
            },
            answer: {
                type: Type.STRING,
                description: "The corresponding answer to the question, also derived from the text.",
            },
        },
        required: ["question", "answer"],
    },
};

export const generateFlashcards = async (text: string): Promise<Flashcard[]> => {
    const prompt = `
        Based on the following text, generate a set of flashcards to help a user study the key information.
        Each flashcard should consist of a clear question and a concise answer.
        Focus on the most important concepts, definitions, and facts in the text.
        
        TEXT:
        ---
        ${text}
        ---
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: flashcardSchema,
            },
        });

        const responseText = response.text.trim();
        const flashcards = JSON.parse(responseText);

        // Basic validation
        if (!Array.isArray(flashcards)) {
            throw new Error("API did not return an array.");
        }
        
        return flashcards.filter(
            (card): card is Flashcard =>
                typeof card === 'object' &&
                card !== null &&
                'question' in card &&
                'answer' in card &&
                typeof card.question === 'string' &&
                typeof card.answer === 'string'
        );
    } catch (error) {
        console.error("Error generating flashcards with Gemini:", error);
        throw new Error("Failed to parse flashcards from AI response.");
    }
};
