import { notesStore } from '../store/notesStore'
import { navigateTo } from '../utils/navigation'

export function renderHomeView(router: () => void): string {
  const notes = notesStore.getAllNotes()

  return `
    <h1>Notes App</h1>
    <button id="create-note-btn">Create Note</button>
    <hr />

    ${
      notes.length === 0
        ? '<p>No notes yet.</p>'
        : `
          <ul>
            ${notes
              .map(
                (note) => `
                  <li>
                    <strong>${note.title}</strong><br />
                    <small>${note.createdAt.toLocaleString()}</small>
                  </li>
                `
              )
              .join('')}
          </ul>
        `
    }
  `
}

export function attachHomeEvents(router: () => void): void {
  const btn = document.getElementById('create-note-btn')
  btn?.addEventListener('click', () => {
    navigateTo('/create', router)
  })
}
