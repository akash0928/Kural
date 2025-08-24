import React, { useState } from 'react';
import { Plus, HelpCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { formatTimestamp } from '../utils/formatDate';
import { HelpModal } from './HelpModal';

export const Sidebar: React.FC = () => {
  const { chats, currentChat, addChat, setCurrentChat } = useStore();
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      <div className="w-64 h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white p-4 flex flex-col shadow-2xl backdrop-blur-sm">
        <button
          onClick={addChat}
          className="flex items-center gap-2 w-full p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 mb-4 shadow-lg hover:shadow-xl hover:scale-105 transform"
        >
          <Plus size={20} />
          <span>New Chat</span>
        </button>

        <div className="flex-1 overflow-y-auto space-y-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setCurrentChat(chat.id)}
              className={`w-full p-3 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-102 transform ${
                currentChat?.id === chat.id
                  ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30 shadow-lg backdrop-blur-sm'
                  : 'hover:bg-white/10 hover:backdrop-blur-sm'
              }`}
            >
              <span className="truncate">
                Chat {chat.messages.length ? `(${chat.messages.length})` : ''}
              </span>
              <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                {formatTimestamp(chat.timestamp)}
              </span>
            </button>
          ))}
        </div>

        <button 
          onClick={() => setIsHelpOpen(true)}
          className="flex items-center gap-2 w-full p-3 rounded-xl hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300 mt-4 hover:scale-105 transform"
        >
          <HelpCircle size={20} />
          <span>Help</span>
        </button>
      </div>

      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </>
  );
};