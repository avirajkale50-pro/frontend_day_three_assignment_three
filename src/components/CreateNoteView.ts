import type { Note } from '../types/Note'
import { notesStore } from '../store/notesStore'
import { navigateTo } from '../utils/navigation'

export function renderCreateNoteView(): string {
  return `
    <h1>Create Note</h1>
    <form id="create-note-form">
      <input type="text" placeholder="Title" required />
      <br /><br />
      <textarea placeholder="Content" required></textarea>
      <br /><br />
      <button type="submit">Save</button>
    </form>
    <br />
    <button id="back-btn">Back</button>
  `
}

export function attachCreateNoteEvents(router: () => void): void {
  const form = document.getElementById('create-note-form') as HTMLFormElement
  const backBtn = document.getElementById('back-btn')

  form?.addEventListener('submit', (e) => {
    e.preventDefault()

    const titleInput = form.querySelector('input') as HTMLInputElement
    const contentInput = form.querySelector('textarea') as HTMLTextAreaElement

    const newNote: Note = {
      id: Date.now(),
      title: titleInput.value,
      content: contentInput.value,
      createdAt: new Date(),
    }

    notesStore.addNote(newNote)
    navigateTo('/', router)
  })

  backBtn?.addEventListener('click', () => {
    navigateTo('/', router)
  })
}
