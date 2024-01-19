import { StrictMode } from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import { setupStore } from './store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
const store = setupStore()

root.render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>
)
