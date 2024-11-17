import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import { Button } from './components/Button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button />
  </StrictMode>
)
