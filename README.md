# VoiceTranslate 🗣️

A real-time voice translation platform designed to break down language barriers between English and Tamil speakers. VoiceTranslate enables natural conversations by instantly translating spoken words, making communication seamless and effortless.

![VoiceTranslate Demo](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop)

## 🌟 Features

- **Real-time Translation**: Instant voice-to-text and translation between English and Tamil
- **Voice Output**: Hear translations spoken in the target language using speech synthesis
- **Conversation History**: Access and manage past conversations from the sidebar
- **Keyboard Shortcuts**: Use spacebar for quick English recording
- **Profanity Filter**: Built-in content filtering for appropriate language use
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Bilingual Help**: Comprehensive help documentation in both English and Tamil

## 🚀 Use Cases

### Personal Communication
- **Family Conversations**: Bridge language gaps between generations
- **Travel**: Communicate with locals while traveling in Tamil-speaking regions
- **Language Learning**: Practice pronunciation and learn new vocabulary

### Business Applications
- **Customer Service**: Assist Tamil-speaking customers in real-time
- **International Meetings**: Facilitate communication in multilingual teams
- **Healthcare**: Help medical professionals communicate with Tamil-speaking patients

### Educational Purposes
- **Language Classes**: Interactive tool for Tamil language learning
- **Cultural Exchange**: Facilitate communication in cultural programs
- **Academic Research**: Support linguistic and cultural studies

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Speech Recognition**: Web Speech API
- **Speech Synthesis**: Web Speech Synthesis API
- **Translation**: Lingva Translate API (open source)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager
- A modern web browser with speech recognition support

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/voicetranslate.git
cd voicetranslate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (already included):

```env
# Translation API Configuration
VITE_LINGVA_API_URL=https://lingva.ml/api/v1

# Speech Recognition Configuration
VITE_SPEECH_RECOGNITION_ENABLED=true
VITE_SPEECH_SYNTHESIS_ENABLED=true

# Application Configuration
VITE_APP_NAME=VoiceTranslate
VITE_APP_VERSION=1.0.0

# Development Configuration
VITE_DEV_MODE=true
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

## 🎯 How to Use

### Quick Start Guide

1. **Select Your Language**: Choose either the English or Tamil recording button at the bottom of the screen
2. **Start Speaking**: 
   - Click the language button or press spacebar to start recording
   - Speak clearly into your microphone
   - Release the spacebar or click the button again to stop
3. **View Translation**: Your message will appear with its translation immediately below it
4. **Listen**: The translation will be automatically spoken in the target language

### Keyboard Shortcuts

- **Spacebar**: Hold to record in English, release to stop
- **Click Buttons**: Use Tamil/English buttons for respective language recording

### Tips for Best Results

- Use a good quality microphone
- Speak clearly and at a normal pace
- Minimize background noise
- Keep sentences concise for better translation accuracy

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ChatInterface.tsx    # Main chat interface
│   ├── HelpModal.tsx       # Help documentation modal
│   ├── Message.tsx         # Message display component
│   ├── ProfileButton.tsx   # User profile button
│   ├── RecordButton.tsx    # Voice recording button
│   ├── Sidebar.tsx         # Chat history sidebar
│   └── TopBar.tsx          # Application header
├── hooks/              # Custom React hooks
│   ├── useKeyPress.ts      # Keyboard event handling
│   ├── useSpeechRecognition.ts  # Speech recognition logic
│   └── useSpeechSynthesis.ts    # Speech synthesis logic
├── store/              # State management
│   └── useStore.ts         # Zustand store configuration
├── types/              # TypeScript type definitions
│   └── index.ts            # Application types
├── utils/              # Utility functions
│   ├── formatDate.ts       # Date formatting utilities
│   ├── profanityFilter.ts  # Content filtering
│   └── translator.ts       # Translation API integration
├── data/               # Static data files
│   ├── english-profanity.txt   # English profanity filter list
│   └── tamil-profanity.txt     # Tamil profanity filter list
└── App.tsx             # Main application component
```

## 🔒 Privacy & Security

- **No Data Storage**: Conversations are stored locally in your browser
- **Open Source Translation**: Uses Lingva Translate API (privacy-focused)
- **Content Filtering**: Built-in profanity filter for appropriate language use
- **Browser-Based**: All speech processing happens in your browser

## 🌐 Browser Compatibility

VoiceTranslate works best with modern browsers that support:
- Web Speech API (Chrome, Edge, Safari)
- Speech Synthesis API (Most modern browsers)
- ES6+ JavaScript features

### Recommended Browsers:
- Google Chrome (recommended)
- Microsoft Edge
- Safari (macOS/iOS)
- Firefox (limited speech recognition support)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Lingva Translate](https://lingva.ml/) for providing open-source translation services
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- The open-source community for various tools and libraries

## 📞 Support

If you encounter any issues or have questions:

1. Check the Help modal within the application
2. Review this README file
3. Open an issue on GitHub
4. Contact the development team

## 🚀 Deployment

The application is deployed on Netlify and can be accessed at: [Your Deployment URL]

To deploy your own instance:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting service
3. Ensure environment variables are configured in your hosting platform

---

**Made with ❤️ for breaking down language barriers**