/* @refresh reload */
import { render } from 'solid-js/web'

import App from './App'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  )
}

if (import.meta.env.DEV) {
  const { fakeApi } = await import('fake-api/server')

  fakeApi()
}

render(() => <App />, root)
