import { useState } from 'react'
import Header from './components/Header';
import CargarFotografia from './components/CargarFotografia';
import VistaPrevia from './components/VistaPrevia';
import './App.css'

function App() {
  const [imagenOriginal, setImagenOriginal] = useState(null);
  const [imagenProcesada, setImagenProcesada] = useState(null);
  const [rotacion, setRotacion] = useState(0);
  const [volteoH, setVolteoH] = useState(false);
  const [volteoV, setVolteoV] = useState(false);
  const [filtroActivo, setFiltroActivo] = useState('Original');
  const [brillo, setBrillo]  = useState(100);
  const [contraste, setContraste] = useState(100);
  const [saturacion, setSaturacion] = useState(100);


  function rotar(grados){
    setRotacion(prev=>(prev+grados+360)%360);
  }

  return(
    <div className="app">
      <Header/>
      <CargarFotografia onImagenCargada={setImagenOriginal} />
      <VistaPrevia
        imagenOriginal={imagenOriginal}
      />
    </div>
  );
  

}

export default App
