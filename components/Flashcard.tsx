
import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';
import { RotateCcwIcon } from './Icons';

interface FlashcardProps {
  flashcard: FlashcardType;
}

const Flashcard: React.FC<FlashcardProps> = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-80 perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden bg-slate-800 border border-slate-700 rounded-xl shadow-2xl shadow-slate-950/50 flex flex-col justify-center items-center p-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-sky-400 mb-2">QUESTION</p>
            <p className="text-xl sm:text-2xl font-medium text-slate-200">{flashcard.question}</p>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-slate-500">
            <RotateCcwIcon className="w-3 h-3"/>
            <span>Click to flip</span>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-700 border border-slate-600 rounded-xl shadow-2xl shadow-slate-950/50 flex flex-col justify-center items-center p-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-green-400 mb-2">ANSWER</p>
            <p className="text-lg sm:text-xl font-medium text-slate-200">{flashcard.answer}</p>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-slate-400">
            <RotateCcwIcon className="w-3 h-3"/>
            <span>Click to flip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
