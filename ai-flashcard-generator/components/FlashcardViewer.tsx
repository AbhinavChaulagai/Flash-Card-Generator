
import React, { useState, useEffect } from 'react';
import { Flashcard as FlashcardType } from '../types';
import Flashcard from './Flashcard';
import { ArrowLeftIcon, ArrowRightIcon, RefreshCwIcon } from './Icons';

interface FlashcardViewerProps {
  flashcards: FlashcardType[];
  onStartOver: () => void;
}

const FlashcardViewer: React.FC<FlashcardViewerProps> = ({ flashcards, onStartOver }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // Used to force re-render of Flashcard to reset flip state

  const goToNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  useEffect(() => {
      // When the current card changes, update the key to reset the Flashcard component's internal state
      setKey(prevKey => prevKey + 1);
  }, [currentIndex]);

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full max-w-2xl">
        <Flashcard key={key} flashcard={currentFlashcard} />
      </div>

      <div className="text-lg font-semibold text-slate-400">
        Card {currentIndex + 1} of {flashcards.length}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="p-3 bg-slate-700 rounded-full text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous Card"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex === flashcards.length - 1}
          className="p-3 bg-slate-700 rounded-full text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next Card"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>

      <button
        onClick={onStartOver}
        className="mt-4 flex items-center gap-2 px-6 py-2 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200"
      >
        <RefreshCwIcon className="w-5 h-5"/>
        Start Over
      </button>
    </div>
  );
};

export default FlashcardViewer;
