import type { Note } from '../types/Note'

class NotesStore {
  private notes: Note[] = []

  getAllNotes(): Note[] {
    return this.notes
  }

  addNote(note: Note): void {
    this.notes.push(note)
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find((note) => note.id === id)
  }
}

export const notesStore = new NotesStore()
