import { ErrorBoundary } from 'solid-js'

import { Toaster } from 'solid-toast'

import { GlobalStyle } from 'styles/global'

import { Dashboard } from 'pages/Dashboard'

function App () {
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary fallback={err => <div>{err.toString()}</div>}>
        <Dashboard />
      </ErrorBoundary>
      <Toaster />
    </>
  )
}

export default App
