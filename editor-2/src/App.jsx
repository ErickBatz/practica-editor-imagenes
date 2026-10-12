import { useState } from "react";
import Header from  './components/Header'
import CargarFotografia from './components/CargarFotografia'
import HerramientasEditor from './components/HerramientasEditor'
import VistaPrevia from './components/VistaPrevia'
import './styles/variables.css'
import './App.css'

export default function App(){
  const [imagenOriginal, setImagenOriginal] = useState(null);
  const [rotacion, setRotacion] = useState(0);
  const [volteoH, setVolteoH] = useState(false);
  const [volteoV, setVolteoV] = useState(false);
  const [filtroActivo, setFilroActivo] = useState('Original')
  const [brillo, setBrillo] = useState(100);
  const [contraste, setContraste] = useState(100);
  const [saturacion, setSaturacion] = useState(100);
  const [desenfoque, setDesenfoque] = useState(0);

  function rotar(grados){
    setRotacion(prev => (prev + grados + 360 ) % 360);
  }
  function voltearHorizontal(){
    setVolteoH(prev=>!prev);
  }
  function volteoVertical(){
    setVolteoV(prev=>!prev);
  }
  function Restablecer(){
    setRotacion(0);
    setVolteoH(false);
    setVolteoV(false);
    setFilroActivo('Original');
    setBrillo(100);
    setSaturacion(100);
    setContraste(100);
    setDesenfoque(0);
  }

  return(
    <div className="app">
      <Header/>
      <main className="editor-layout">
        <CargarFotografia
          onImagenCargada={setImagenOriginal}
        />
        <VistaPrevia
          imagenOriginal={imagenOriginal}
          rotacion={rotacion}
          volteoH={volteoH}
          volteoV={volteoV}
          filtroActivo={filtroActivo}
          brillo={brillo}
          contraste={contraste}
          saturacion={saturacion}
          desenfoque={desenfoque}
        
        />
        <HerramientasEditor
          imagenCargada={!!imagenOriginal}
          filtroActivo={filtroActivo}
          brillo={brillo}
          saturacion={saturacion}
          contraste={contraste}
          onCambiarBrillo={setBrillo}
          onCambiarSaturacion={setSaturacion}
          onCambiarContraste={setContraste}
          onRotarIzquierda={()=>rotar(-90)}
          onRotarDerecha={()=>rotar(90)}
          onRotar180={()=>rotar(180)}
          onVoltearHorizontal={voltearHorizontal}
          onVoltearVertical={volteoVertical}
          onRegresarRotacion={()=>setRotacion(0)}
          onSeleccionarFiltro={setFilroActivo}
          onCambiarDesenfoque = {setDesenfoque}
          desenfoque={desenfoque}
          onRestablecer={Restablecer}
        />
      </main>
    </div>

  );

}