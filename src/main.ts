import { createRouter } from './router/router'

const app = document.querySelector<HTMLDivElement>('#app')!

if (!app) {
  throw new Error('App element not found')
}

const router = createRouter(app)

window.addEventListener('popstate', router)
router()
