import { create } from 'zustand';
import { Chat, Message } from '../types';

interface Store {
  chats: Chat[];
  currentChat: Chat | null;
  addChat: () => void;
  addMessage: (message: Omit<Message, 'id'>) => void;
  setCurrentChat: (chatId: string) => void;
}

export const useStore = create<Store>((set) => ({
  chats: [],
  currentChat: null,
  addChat: () => {
    const newChat: Chat = {
      id: crypto.randomUUID(),
      title: 'New Chat',
      messages: [],
      timestamp: new Date(),
    };
    set((state) => ({
      chats: [newChat, ...state.chats],
      currentChat: newChat,
    }));
  },
  addMessage: (message) => {
    set((state) => {
      if (!state.currentChat) return state;
      const newMessage: Message = {
        ...message,
        id: crypto.randomUUID(),
      };
      const updatedChat = {
        ...state.currentChat,
        messages: [...state.currentChat.messages, newMessage],
      };
      return {
        currentChat: updatedChat,
        chats: state.chats.map((chat) =>
          chat.id === updatedChat.id ? updatedChat : chat
        ),
      };
    });
  },
  setCurrentChat: (chatId) => {
    set((state) => ({
      currentChat: state.chats.find((chat) => chat.id === chatId) || null,
    }));
  },
}));