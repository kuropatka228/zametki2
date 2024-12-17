import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

export function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{new Date(note.createdAt).toLocaleDateString()}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(note)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="p-2 hover:bg-gray-100 rounded-full text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}