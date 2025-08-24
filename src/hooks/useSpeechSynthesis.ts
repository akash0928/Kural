import { useCallback, useEffect, useState } from 'react';

type Language = 'tamil' | 'english';

export function useSpeechSynthesis() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    // Load voices when the component mounts
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = useCallback((text: string, language: Language) => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    if (language === 'tamil') {
      // Try to find a Tamil voice
      const tamilVoice = voices.find(voice => 
        voice.lang.toLowerCase().includes('ta') || 
        voice.lang.toLowerCase().includes('hi')  // Fallback to Hindi if Tamil not available
      );
      
      if (tamilVoice) {
        utterance.voice = tamilVoice;
      }
      utterance.lang = 'ta-IN';
    } else {
      // For English, try to find a clear English voice
      const englishVoice = voices.find(voice => 
        voice.lang.startsWith('en-')
      );
      
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      utterance.lang = 'en-US';
    }

    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  }, [voices]);

  return { speak };
}