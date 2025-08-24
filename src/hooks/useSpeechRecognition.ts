import { useState, useRef, useCallback } from 'react';

type Language = 'tamil' | 'english';

interface UseSpeechRecognitionProps {
  onResult: (text: string, language: Language) => void;
}

export function useSpeechRecognition({ onResult }: UseSpeechRecognitionProps) {
  const [isRecording, setIsRecording] = useState<Language | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startRecording = useCallback((language: Language) => {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.lang = language === 'tamil' ? 'ta-IN' : 'en-US';
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');

        if (event.results[0].isFinal) {
          onResult(transcript, language);
        }
      };

      recognitionRef.current.start();
      setIsRecording(language);
    } catch (error) {
      console.error('Speech recognition error:', error);
    }
  }, [onResult]);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(null);
    }
  }, []);

  return {
    isRecording,
    startRecording,
    stopRecording
  };
}