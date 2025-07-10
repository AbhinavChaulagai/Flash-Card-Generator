
import React from 'react';
import { BrainCircuitIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-3">
        <BrainCircuitIcon className="w-10 h-10 text-sky-400" />
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 text-transparent bg-clip-text">
          AI Flashcard Generator
        </h1>
      </div>
      <p className="mt-3 text-lg text-slate-400">
        Transform any text into interactive flashcards instantly.
      </p>
    </header>
  );
};

export default Header;
