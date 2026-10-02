import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import './styles/variables.css'
import App from './App.jsx'
import Galeria from './components/Galeria.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/galeria' element={<Galeria/>}/>
        <Route path='/' element={<App/>} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>
)
