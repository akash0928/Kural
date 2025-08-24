import React, { useState } from 'react';
import { X, Languages } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');
  
  if (!isOpen) return null;

  const content = {
    english: {
      title: "Welcome to VoiceTranslate",
      intro: [
        "VoiceTranslate is a real-time voice translation platform designed to break down language barriers between English and Tamil speakers.",
        "Our application enables natural conversations by instantly translating spoken words, making communication seamless and effortless.",
        "Whether you're connecting with family, conducting business, or learning a new language, VoiceTranslate helps bridge the communication gap."
      ],
      quickStart: "Quick Start Guide",
      selectLanguage: "1. Select Your Language",
      selectLanguageDesc: "Choose either the English or Tamil recording button at the bottom of the screen.",
      startSpeaking: "2. Start Speaking",
      startSpeakingSteps: [
        "Click the language button or press spacebar to start recording",
        "Speak clearly into your microphone",
        "Release the spacebar or click the button again to stop"
      ],
      viewTranslation: "3. View Translation",
      viewTranslationDesc: "Your message will appear with its translation immediately below it.",
      features: "Key Features",
      featuresList: [
        { title: "Real-time Translation", desc: "Instant voice-to-text and translation between English and Tamil" },
        { title: "Voice Output", desc: "Hear translations spoken in the target language" },
        { title: "Conversation History", desc: "Access past conversations from the sidebar" },
        { title: "Keyboard Shortcuts", desc: "Use spacebar for quick English recording" }
      ],
      tips: "Tips for Best Results",
      tipsList: [
        "Use a good quality microphone",
        "Speak clearly and at a normal pace",
        "Minimize background noise",
        "Keep sentences concise for better translation accuracy"
      ]
    },
    tamil: {
      title: "VoiceTranslate-க்கு வரவேற்கிறோம்",
      intro: [
        "VoiceTranslate என்பது ஆங்கிலம் மற்றும் தமிழ் பேசுபவர்களுக்கு இடையேயான மொழித் தடைகளை உடைக்க வடிவமைக்கப்பட்ட நேரடி குரல் மொழிபெயர்ப்பு தளமாகும்.",
        "எங்கள் பயன்பாடு பேசப்படும் சொற்களை உடனடியாக மொழிபெயர்ப்பதன் மூலம் இயல்பான உரையாடல்களை இயலச்செய்கிறது.",
        "குடும்பத்துடன் இணைவது, வணிகம் செய்வது அல்லது புதிய மொழியைக் கற்றுக்கொள்வது என எதுவாக இருந்தாலும், VoiceTranslate தொடர்பு இடைவெளியை இணைக்க உதவுகிறது."
      ],
      quickStart: "விரைவு தொடக்க வழிகாட்டி",
      selectLanguage: "1. உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      selectLanguageDesc: "திரையின் கீழே உள்ள ஆங்கிலம் அல்லது தமிழ் பதிவு பொத்தானைத் தேர்வுசெய்யவும்.",
      startSpeaking: "2. பேச தொடங்கவும்",
      startSpeakingSteps: [
        "மொழி பொத்தானை கிளிக் செய்யவும் அல்லது பதிவு செய்ய ஸ்பேஸ்பார் ஐ அழுத்தவும்",
        "உங்கள் மைக்ரோஃபோனில் தெளிவாகப் பேசவும்",
        "நிறுத்த ஸ்பேஸ்பார் ஐ விடவும் அல்லது பொத்தானை மீண்டும் கிளிக் செய்யவும்"
      ],
      viewTranslation: "3. மொழிபெயர்ப்பைப் பார்க்கவும்",
      viewTranslationDesc: "உங்கள் செய்தி அதன் மொழிபெயர்ப்புடன் உடனடியாக கீழே தோன்றும்.",
      features: "முக்கிய அம்சங்கள்",
      featuresList: [
        { title: "நேரடி மொழிபெயர்ப்பு", desc: "ஆங்கிலம் மற்றும் தமிழுக்கு இடையே உடனடி குரல்-உரை மற்றும் மொழிபெயர்ப்பு" },
        { title: "குரல் வெளியீடு", desc: "இலக்கு மொழியில் மொழிபெயர்ப்புகளைக் கேளுங்கள்" },
        { title: "உரையாடல் வரலாறு", desc: "பக்கப்பட்டியில் இருந்து கடந்த உரையாடல்களை அணுகவும்" },
        { title: "விசைப்பலகை குறுக்குவழிகள்", desc: "விரைவான ஆங்கில பதிவுக்கு ஸ்பேஸ்பார் ஐப் பயன்படுத்தவும்" }
      ],
      tips: "சிறந்த முடிவுகளுக்கான குறிப்புகள்",
      tipsList: [
        "நல்ல தரமான மைக்ரோஃபோனைப் பயன்படுத்தவும்",
        "தெளிவாகவும் சாதாரண வேகத்திலும் பேசவும்",
        "பின்னணி சத்தத்தைக் குறைக்கவும்",
        "சிறந்த மொழிபெயர்ப்பு துல்லியத்திற்கு வாக்கியங்களை சுருக்கமாக வைக்கவும்"
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl w-full max-w-2xl mx-4 p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{currentContent.title}</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'english' ? 'tamil' : 'english')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              <Languages size={20} />
              <span>{language === 'english' ? 'தமிழ்' : 'English'}</span>
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition-colors hover:scale-110 transform">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="space-y-6 text-gray-700">
          <section className="border-b border-gradient-to-r from-orange-200 to-red-200 pb-6">
            {currentContent.intro.map((text, index) => (
              <p key={index} className="text-lg leading-relaxed mb-4 text-slate-700">{text}</p>
            ))}
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{currentContent.quickStart}</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl shadow-sm border border-orange-100">
                <h4 className="font-bold mb-3 text-orange-700">{currentContent.selectLanguage}</h4>
                <p className="text-slate-600">{currentContent.selectLanguageDesc}</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl shadow-sm border border-orange-100">
                <h4 className="font-bold mb-3 text-orange-700">{currentContent.startSpeaking}</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  {currentContent.startSpeakingSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl shadow-sm border border-orange-100">
                <h4 className="font-bold mb-3 text-orange-700">{currentContent.viewTranslation}</h4>
                <p className="text-slate-600">{currentContent.viewTranslationDesc}</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{currentContent.features}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.featuresList.map((feature, index) => (
                <li key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-3 text-orange-700">{feature.title}</h4>
                  <p className="text-slate-600">{feature.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{currentContent.tips}</h3>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              {currentContent.tipsList.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};