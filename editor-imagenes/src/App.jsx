import { useState } from 'react'
import './App.css'
import './styles/variables.css'
import Header from './components/Header'
import CargarFotografia from './components/CargarFotografia'
import { VistaPrevia } from './components/VistaPrevia'
import HerramientasEdicion from './components/HerramientasEdicion'

function App() {
  const [imagenOriginal, setImagenOriginal] = useState(null);

  return (
    <div className="app">
      <Header/>
      <main className="editor-layout">
        <CargarFotografia onImagenCargada={setImagenOriginal}/>
        <VistaPrevia/>
        <HerramientasEdicion/>
      </main>
    </div>
  )
}

export default App
