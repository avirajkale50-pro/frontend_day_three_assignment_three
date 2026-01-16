import { renderHomeView, attachHomeEvents } from '../components/HomeView'
import { renderCreateNoteView, attachCreateNoteEvents } from '../components/CreateNoteView'

export function createRouter(app: HTMLDivElement) {
  function router() {
    const path = window.location.pathname

    if (path === '/create') {
      app.innerHTML = renderCreateNoteView()
      attachCreateNoteEvents(router)
    } else {
      app.innerHTML = renderHomeView(router)
      attachHomeEvents(router)
    }
  }

  return router
}
