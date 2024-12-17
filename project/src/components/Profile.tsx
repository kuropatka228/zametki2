import React from 'react';
import { User } from '../types';
import { Settings } from 'lucide-react';

interface ProfileProps {
  user: User;
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <button className="ml-auto p-2 hover:bg-gray-100 rounded-full">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
}