import React from 'react';

interface MessageProps {
  text: string;
  language: 'tamil' | 'english';
  translation?: string;
}

export const Message: React.FC<MessageProps> = ({ text, language, translation }) => {
  return (
    <div
      className={`mb-6 max-w-2xl mx-auto ${
        language === 'tamil' ? 'text-right' : 'text-left'
      }`}
    >
      <div className="inline-block transform hover:scale-105 transition-all duration-300">
        <div
          className={`p-4 rounded-t-2xl shadow-lg backdrop-blur-sm ${
            language === 'tamil'
              ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-blue-500/25'
              : 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/25'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{language === 'tamil' ? '🇮🇳' : '🇺🇸'}</span>
            <span className="text-xs opacity-75 uppercase tracking-wide">
              {language === 'tamil' ? 'Tamil' : 'English'}
            </span>
          </div>
          <div className="text-base leading-relaxed">{text}</div>
        </div>
        {translation && (
          <div
            className={`p-3 text-sm rounded-b-2xl border-t backdrop-blur-sm ${
              language === 'tamil'
                ? 'bg-gradient-to-br from-blue-600/80 to-purple-700/80 text-blue-100 border-blue-400/30'
                : 'bg-gradient-to-br from-emerald-600/80 to-teal-700/80 text-emerald-100 border-emerald-400/30'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm">{language === 'tamil' ? '🇺🇸' : '🇮🇳'}</span>
              <span className="text-xs opacity-75 uppercase tracking-wide">
                {language === 'tamil' ? 'English' : 'Tamil'}
              </span>
            </div>
            <div className="leading-relaxed">{translation}</div>
          </div>
        )}
      </div>
    </div>
  );
};