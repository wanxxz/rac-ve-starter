import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './root'

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <Root />
    </StrictMode>
  )
}
