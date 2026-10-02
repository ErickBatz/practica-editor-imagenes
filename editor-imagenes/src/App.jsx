import { useState } from 'react'
import './App.css'
import './styles/variables.css'
import Header from './components/Header'
import CargarFotografia from './components/CargarFotografia'
import { VistaPrevia } from './components/VistaPrevia'
import HerramientasEdicion from './components/HerramientasEdicion'

function App() {
  const [imagenOriginal, setImagenOriginal] = useState(null);
  const [imagenProcesada, setImagenProcesada] = useState(null);
  const [rotacion, setRotacion] = useState(0);
  const [volteoH,setVolteoH]=useState(false);
  const [voletoV,setVolteoV]= useState(false);
  const [filtroActivo, setFiltroActivo] = useState('Original');
  const[brillo,setBrillo] = useState(100);
  const [contraste, setContraste]=useState(100);
  const[saturacion,setSaturacion] = useState(100);
  const[galeria,setGaleria] = useState([]);

  function rotar(grados){
    setRotacion(prev=>(prev+grados+360)%360);
  }

  function voltearHorizontal(){
    setVolteoH(prev=>!prev);
  }

  function voltearVertical(){
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

  function agregarGaleria(){
    if(!imagenProcesada) return;

    setGaleria(prev=>[...prev,imagenProcesada]);
    console.log('Galeria Actualizada, total de imagenes', galeria.length+1);

    setImagenOriginal(null);
    setImagenProcesada(null);
    restablecer();

  }

  return (
    <div className="app">
      <Header/>
      <main className="editor-layout">
        <CargarFotografia onImagenCargada={setImagenOriginal}/>
        <VistaPrevia 
          imagenOriginal={imagenOriginal}
          rotacion={rotacion}
          volteoH={volteoH}
          volteoV={voletoV}
          filtroActivo={filtroActivo}
          brillo={brillo}
          contraste={contraste}
          saturacion={saturacion}
          onImagenProcesada={setImagenProcesada}
          />
        
        <HerramientasEdicion
          imagenCargada={!!imagenOriginal}
          filtroActivo={filtroActivo}
          brillo={brillo}
          contraste={contraste}
          saturacion={saturacion}
          onCambiarBrillo={setBrillo}
          onCambiarSaturacion={setSaturacion}
          onCambiarContraste={setContraste}
          onRotacionIzquierda={()=>rotar(-90)}
          onRotacionDerecha={()=>rotar(90)}
          onRotar180={()=>rotar(180)}
          onRegresarRotacion={()=>setRotacion(0)}
          onVoltearHorizontal={voltearHorizontal}
          onVoltearVertical={voltearVertical}
          onSeleccionarFiltro={setFiltroActivo}
          onRestablecer={restablecer}
          onAgregarGaleria={agregarGaleria}
        />
      </main>
    </div>
  )
}

export default App
