import { useState } from "react";



function App(){
  const [imagenOriginal, setImagenOriginal] = useState(null);
  const [rotacion, setRotacion] = useState(0);
  const [volteoH, setVolteoH] = useState(false);
  const [volteoV, setVolteoV] = useState(false);
  const [filtroActivo, setFilroActivo] = useState('Original')
  const [brillo, setBrillo] = useState(100);
  const [contraste, setContraste] = useState(100);
  const [saturacion, setSaturacion] = useState(100);

  function rotar(grados){
    setRotacion(prev=>(rotacion+grados+360)%360);
  }
  function voltearHorizontal(){
    setVolteoH(prev=>!prev);
  }
  function volteoVertical(){
    setVolteoV(prev=>prev);
  }
  function Restablecer(){
    setRotacion(0);
    setVolteoH(false);
    setVolteoV(false);
    setFilroActivo('Original');
    setBrillo(100);
    setSaturacion(100);
    setContraste(100);
  }

  return(
    <div className="app">
      <Header/>
      <main className="editor-layout">
        <CargarFotografia
          imagenOriginal ={setImagenOriginal}
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
        
        />
        <HerramientasEdioion
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
          onRegresarRotacion
        />
      </main>
    </div>

  );

}