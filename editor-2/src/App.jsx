import { useState } from "react";


function App(){
  const [imagenOriginal, setImagenOriginal] = useState(null);
  const [imagenProcesada, setImagenProcesada] = useState(null);
  const [rotacion, setRotacion] = useState(0);
  const [volteoH, setVolteoH] = useState(false);
  const [volteoV, setVolteoV] = useState(false);
  const [filtroActivo, setFiltroActivo] = useState('Original');
  const [brillo,setBrillo] = useState(100);
  const [contraste, setContraste] = useState(100);
  const [saturacion, setSaturacion] = useState(100);


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

return(
  <div className="app">
    <header/>
    <main className="editor-layout">
      <CargarFotografia
        onImagenCargada={setImagenOriginal}
      />


    </main>
  </div>
);

}