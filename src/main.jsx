import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import ContextApi from './contextApi/ContextApi.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
      <App />
     <Toaster position="top-right" />
    </ContextApi>
    
  </StrictMode>,
)
