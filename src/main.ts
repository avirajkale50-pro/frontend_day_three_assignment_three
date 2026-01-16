interface Note {
  id: number
  title: string
  content: string
  createdAt: Date
}

const notes: Note[] = []

const app = document.querySelector<HTMLDivElement>('#app')!

function HomeView() {
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



function CreateNoteView() {
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

function router(){
  const path = window.location.pathname
  if(path === '/create'){
    app.innerHTML = CreateNoteView()
    attachCreateNoteEvents()
  }else{
    app.innerHTML = HomeView()
    attachHomeEvents()
  }

}

function navigateTo(path : string){
  history.pushState({},'',path)
  router()
}


function attachHomeEvents(){
  const btn = document.getElementById('create-note-btn')
  btn?.addEventListener('click',()=>{
    navigateTo('/create')
  })
}

function attachCreateNoteEvents() {
  const form = document.getElementById(
    'create-note-form'
  ) as HTMLFormElement

  const backBtn = document.getElementById('back-btn')

  form?.addEventListener('submit', (e) => {
    e.preventDefault()

    const titleInput = form.querySelector(
      'input'
    ) as HTMLInputElement
    const contentInput = form.querySelector(
      'textarea'
    ) as HTMLTextAreaElement

    const newNote: Note = {
      id: Date.now(),
      title: titleInput.value,
      content: contentInput.value,
      createdAt: new Date(),
    }

    notes.push(newNote)

    navigateTo('/')
  })

  backBtn?.addEventListener('click', () => {
    navigateTo('/')
  })
}


window.addEventListener('popstate',router)

router()