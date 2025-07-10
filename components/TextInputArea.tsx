
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { SparklesIcon } from './Icons';

interface TextInputAreaProps {
  onGenerate: (text: string) => void;
  isLoading: boolean;
}

const TextInputArea: React.FC<TextInputAreaProps> = ({ onGenerate, isLoading }) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onGenerate(text);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here..."
              className="w-full h-64 p-4 bg-slate-800 border-2 border-slate-700 rounded-lg text-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 resize-none"
              disabled={isLoading}
            />
            <label htmlFor="text-input" className="sr-only">Text Input</label>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            disabled={isLoading || !text.trim()}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-sky-600 text-white font-bold rounded-lg shadow-lg hover:bg-sky-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:scale-100"
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                Generating...
              </>
            ) : (
                <>
                <SparklesIcon className="w-5 h-5" />
                Generate Flashcards
                </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextInputArea;
