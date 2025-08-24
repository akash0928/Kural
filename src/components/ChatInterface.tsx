import React, { useState, useCallback } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translateText } from '../utils/translator';
import { checkProfanity } from '../utils/profanityFilter';
import { Message } from './Message';
import { RecordButton } from './RecordButton';
import { useKeyPress } from '../hooks/useKeyPress';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

export const ChatInterface: React.FC = () => {
  const { currentChat, addMessage } = useStore();
  const [isTranslating, setIsTranslating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { speak } = useSpeechSynthesis();

  const handleSpeechResult = useCallback(async (text: string, language: 'tamil' | 'english') => {
    const profanityCheck = checkProfanity(text, language);
    
    if (profanityCheck.hasProfanity) {
      setErrorMessage(profanityCheck.errorMessage);
      setTimeout(() => setErrorMessage(null), 3000);
      return;
    }

    setIsTranslating(true);
    try {
      const translation = await translateText(
        text,
        language === 'tamil' ? 'ta' : 'en',
        language === 'tamil' ? 'en' : 'ta'
      );

      addMessage({
        text,
        translation,
        language,
        timestamp: new Date()
      });

      speak(translation, language === 'english' ? 'tamil' : 'english');
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [addMessage, speak]);

  const { isRecording, startRecording, stopRecording } = useSpeechRecognition({
    onResult: handleSpeechResult
  });

  useKeyPress(' ', {
    onKeyDown: () => {
      if (!isRecording) {
        startRecording('english');
      }
    },
    onKeyUp: () => {
      if (isRecording) {
        stopRecording();
      }
    }
  });

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto p-6">
        {currentChat?.messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            translation={message.translation}
            language={message.language}
          />
        ))}
        {isTranslating && (
          <div className="flex justify-center items-center py-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <Loader2 className="animate-spin text-orange-500" size={32} />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-gray-200 bg-gray-100">
        {errorMessage && (
          <div className="mb-6 bg-gradient-to-r from-red-500/90 to-pink-500/90 backdrop-blur-sm border border-red-300/50 text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg">
            <AlertCircle className="h-5 w-5" />
            <p>{errorMessage}</p>
          </div>
        )}
        
        <div className="flex justify-center items-center gap-8">
          <RecordButton
            language="english"
            isRecording={isRecording === 'english'}
            disabled={isRecording !== null && isRecording !== 'english'}
            onClick={() => isRecording === 'english' ? stopRecording() : startRecording('english')}
          />
          <RecordButton
            language="tamil"
            isRecording={isRecording === 'tamil'}
            disabled={isRecording !== null && isRecording !== 'tamil'}
            onClick={() => isRecording === 'tamil' ? stopRecording() : startRecording('tamil')}
          />
          
        </div>
       
      </div>
    </div>
  );
};