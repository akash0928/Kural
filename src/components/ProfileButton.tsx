import React from 'react';
import { UserCircle } from 'lucide-react';

export const ProfileButton: React.FC = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 transition-all duration-300 hover:scale-105 transform shadow-sm hover:shadow-md backdrop-blur-sm">
      <UserCircle className="h-6 w-6 text-orange-600" />
      <span className="text-slate-700 font-medium ">Profile</span>
    </button>
  );
};