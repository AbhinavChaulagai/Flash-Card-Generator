
import React, { useState, useCallback } from 'react';
import { Flashcard } from './types';
import * as geminiService from './services/geminiService';
import Header from './components/Header';
import TextInputArea from './components/TextInputArea';
import FlashcardViewer from './components/FlashcardViewer';
import { SparklesIcon } from './components/Icons';

type View = 'input' | 'cards';

const App: React.FC = () => {
  const [view, setView] = useState<View>('input');
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (text: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedCards = await geminiService.generateFlashcards(text);
      if (generatedCards && generatedCards.length > 0) {
        setFlashcards(generatedCards);
        setView('cards');
      } else {
        setError("The AI couldn't generate flashcards from the provided text. Please try with a different or more detailed text.");
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred while generating flashcards. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleStartOver = useCallback(() => {
    setView('input');
    setFlashcards([]);
    setError(null);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Header />
        <main className="mt-8">
          {view === 'input' && (
            <TextInputArea onGenerate={handleGenerate} isLoading={isLoading} />
          )}

          {view === 'cards' && flashcards.length > 0 && (
            <FlashcardViewer flashcards={flashcards} onStartOver={handleStartOver} />
          )}

          {error && (
            <div className="mt-6 bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
              <p className="font-semibold">Generation Failed</p>
              <p className="text-sm">{error}</p>
            </div>
          )}
          
          {view === 'input' && !isLoading && !error && (
              <div className="mt-12 text-center text-slate-500">
                  <SparklesIcon className="w-12 h-12 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-slate-400">Unlock Knowledge</h2>
                  <p className="max-w-xl mx-auto mt-2">
                      Paste any text—your class notes, an interesting article, or a complex document—and our AI will create a set of flashcards to help you learn and remember the key information.
                  </p>
              </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
