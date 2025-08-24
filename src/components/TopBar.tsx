import React from 'react';
import { Languages } from 'lucide-react';
import { ProfileButton } from './ProfileButton';

export const TopBar: React.FC = () => {
  return (
    <div className="h-16 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 backdrop-blur-md border-b border-orange-200/50 px-4 shadow-lg">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
            <Languages className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">
            VoiceTranslate
          </span>
        </div>
        <ProfileButton />
      </div>
    </div>
  );
};