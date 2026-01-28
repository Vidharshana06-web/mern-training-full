import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>//it is used to render the components...it will check initially whether the UI runs crctly or not...it throws the useEffect..fo the mount,update,unmount functions.
    <BrowserRouter>
         <App />
    </BrowserRouter>
  </StrictMode>,
)
