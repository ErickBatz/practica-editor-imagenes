import { useState } from 'react'
import Header from './components/Header';
import CargarFotografia from './components/CargarFotografia';
import VistaPrevia from './components/VistaPrevia';
import './App.css'
import './styles/variables.css'
import HerramientasEditor from './components/HerramientasEditor';

function App() {
  const [imagenOriginal, setImagenOriginal] = useState(null);
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
  function voltearHorizontal(){
    setVolteoH(prev=>!prev);
  }

  function voltearVertical (){
    setVolteoV(prev=>!prev);
  }

  function restablecer(){
    setRotacion(0);
    setVolteoH(false);
    setVolteoV(false);
    setFiltroActivo('Original');
    setBrillo(100);
    setContraste(100);
    setSaturacion(100);
  }


  return(
    <div className="app">
      <Header/>
        <main className="editor-layout">
          <CargarFotografia onImagenCargada={setImagenOriginal} />
          <VistaPrevia
            imagenOriginal={imagenOriginal}
            rotacion={rotacion}
            volteoH={volteoH}
            volteoV={volteoV}
            filtroActivo={filtroActivo}
            brillo={brillo}
            contraste={contraste}
            saturacion={saturacion}
          
          />
          <HerramientasEditor
            imagenCargada={!!imagenOriginal}
            filtroActivo={filtroActivo}
            brillo={brillo}
            contraste={contraste}
            saturacion={saturacion}
            onCambiarBrillo={setBrillo}
            onCambiarSaturacion={setSaturacion}
            onCambiarContraste={setContraste}
            onRotarIzquierda={()=>rotar(-90)}
            onRotarDerecha={()=>rotar(90)}
            onRotar180 ={()=> rotar(180)}
            onRegresarRotacion={()=> setRotacion(0)}
            onVoltearHorizontal={voltearHorizontal}
            onVoltearVertical={voltearVertical}
            onSeleccionarFiltro={setFiltroActivo}
            onRestablecer={restablecer}      
          />
        </main>
    </div>
  );
  

}

export default App
