import React from 'react';
import { Mic, StopCircle } from 'lucide-react';

interface RecordButtonProps {
  language: 'tamil' | 'english';
  isRecording: boolean;
  disabled: boolean;
  onClick: () => void;
}

export const RecordButton: React.FC<RecordButtonProps> = ({
  language,
  isRecording,
  disabled,
  onClick,
}) => {
  const getButtonStyles = () => {
    if (isRecording) {
      return language === 'tamil'
        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 pulse-recording'
        : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 pulse-recording';
    }
    
    return language === 'tamil'
      ? 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 hover:scale-105'
      : 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 hover:scale-105';
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 transform shadow-lg backdrop-blur-sm ${getButtonStyles()} text-white font-medium`}
      disabled={disabled}
    >
      <span className="text-xl">{language === 'tamil' ? '🇮🇳' : '🇺🇸'}</span>
      {isRecording ? (
        <StopCircle className="animate-pulse" size={24} />
      ) : (
        <Mic size={24} />
      )}
      <span className="text-lg">{language === 'tamil' ? 'Tamil' : 'English'}</span>
    </button>
  );
};