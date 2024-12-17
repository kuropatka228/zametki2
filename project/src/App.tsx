import React, { useState } from 'react';
import { Plus, User } from 'lucide-react';
import { Note, User as UserType } from './types';
import { NoteCard } from './components/NoteCard';
import { NoteForm } from './components/NoteForm';
import { Profile } from './components/Profile';

const mockUser: UserType = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  const handleCreateNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date(),
    };
    setNotes([newNote, ...notes]);
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const handleUpdateNote = (title: string, content: string) => {
    if (editingNote) {
      const updatedNotes = notes.map((note) =>
        note.id === editingNote.id ? { ...note, title, content } : note
      );
      setNotes(updatedNotes);
      setEditingNote(null);
    }
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Notes App</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              <Plus size={20} />
              New Note
            </button>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {showProfile ? (
          <div className="mb-8">
            <Profile user={mockUser} />
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEditNote}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>

        {notes.length === 0 && !showProfile && (
          <div className="text-center py-12">
            <p className="text-gray-500">No notes yet. Create your first note!</p>
          </div>
        )}

        {showForm && (
          <NoteForm
            onSubmit={editingNote ? handleUpdateNote : handleCreateNote}
            onClose={() => {
              setShowForm(false);
              setEditingNote(null);
            }}
            initialTitle={editingNote?.title}
            initialContent={editingNote?.content}
          />
        )}
      </main>
    </div>
  );
}

export default App;