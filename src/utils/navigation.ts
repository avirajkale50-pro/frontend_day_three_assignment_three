export function navigateTo(path: string, router: () => void): void {
  history.pushState({}, '', path)
  router()
}
