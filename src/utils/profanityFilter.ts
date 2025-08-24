import englishProfanityList from '../data/english-profanity.txt?raw';
import tamilProfanityList from '../data/tamil-profanity.txt?raw';

const ENGLISH_PROFANITY = new Set(
  englishProfanityList.toLowerCase().split('\n').filter(Boolean).map(word => word.trim())
);

const TAMIL_PROFANITY = new Set(
  tamilProfanityList.split('\n').filter(Boolean).map(word => word.trim())
);

interface ProfanityCheckResult {
  hasProfanity: boolean;
  errorMessage: string;
}

export function checkProfanity(text: string, language: 'tamil' | 'english'): ProfanityCheckResult {
  const normalizedText = text.toLowerCase().trim();
  const profanityList = language === 'english' ? ENGLISH_PROFANITY : TAMIL_PROFANITY;
  
  // Check if any profanity word is included in the text
  const hasProfanity = Array.from(profanityList).some(badWord => 
    normalizedText.includes(badWord.toLowerCase().trim())
  );

  return {
    hasProfanity,
    errorMessage: language === 'english' 
      ? "Please maintain respectful and appropriate language in English"
      : "தயவுசெய்து மரியாதையான மொழியைப் பயன்படுத்தவும்"
  };
}