import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatInterface } from './components/ChatInterface';
import { TopBar } from './components/TopBar';
import { HelpModal } from './components/HelpModal';
import { HelpCircle } from 'lucide-react';
import { useStore } from './store/useStore';

function App() {
  const { addChat, currentChat } = useStore();
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  useEffect(() => {
    if (!currentChat) {
      addChat();
    }
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <ChatInterface />
      </div>
      
      {/* Help Button */}
      <button
        onClick={() => setIsHelpOpen(true)}
        className="fixed left-6 bottom-6 flex items-center justify-center gap-3 w-48 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform backdrop-blur-sm"
      >
        <HelpCircle size={22} />
        <span className="font-medium text-lg">Help</span>
      </button>

      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}

export default App;