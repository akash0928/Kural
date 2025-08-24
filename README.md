# Kural

A real-time voice translation platform designed to break down language barriers between English and Tamil speakers. Kural enables natural conversations by instantly translating spoken words, making communication seamless and effortless.

## Live Demo [Visit the app here](https://kural-chi.vercel.app/)

## Features

- **Real-time Translation**: Instant voice-to-text and translation between English and Tamil
- **Voice Output**: Hear translations spoken in the target language using speech synthesis
- **Conversation History**: Access and manage past conversations from the sidebar
- **Keyboard Shortcuts**: Use spacebar for quick English recording
- **Profanity Filter**: Built-in content filtering for appropriate language use
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Bilingual Help**: Comprehensive help documentation in both English and Tamil

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Speech Recognition**: Web Speech API
- **Speech Synthesis**: Web Speech Synthesis API
- **Translation**: Lingva Translate API (open source)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager
- A modern web browser with speech recognition support

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/akash0928/VoiceTranslate.git
cd Kural
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

```bash
npm run build
```
## Privacy & Security

- **No Data Storage**: Conversations are stored locally in your browser
- **Open Source Translation**: Uses Lingva Translate API (privacy-focused)
- **Content Filtering**: Built-in profanity filter for appropriate language use
- **Browser-Based**: All speech processing happens in your browser

## Browser Compatibility

Kural works best with modern browsers that support:
- Web Speech API (Chrome, Edge, Safari)
- Speech Synthesis API (Most modern browsers)
- ES6+ JavaScript features

### Recommended Browsers:
- Google Chrome (recommended)
- Microsoft Edge


---

**Made with ❤️ for breaking down language barriers**
