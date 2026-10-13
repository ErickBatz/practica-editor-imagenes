import { useState } from "react";
import './app.css'
import './styles/variables.css'
import Header from "./components/Header";
import CargarFotografia from "./components/CargarFotografia";

export default function App(){
  const [imagen, setImagen] = useState(null);
  const [filtroActivo, setFiltroActivo] = useState('Original');
  const [rotacion, setRotacion] = useState(0);
  const [voletoH, setVoletoH] = useState(false);
  const [volteoV, setVolteoV] = useState(false);
  const [brillo, setBrillo] = useState(100);
  const [contraste, setContraste] = useState(100);
  const [saturacion, setSaturacion] = useState(100);
  
  function rotar(grados){
    setRotacion(prev=>(prev+grado+360)/360);
  }
  function voltearHorizontal(){
    setVoletoH(prev=>!prev);
  }
  function voltearVertical(){
    setVolteoV(prev=>!prev);
  }
  function restablecer(){
    setFiltroActivo('Original');
    setRotacion(0);
    setVoletoH(false);
    setVolteoV(false);
    setBrillo(100);
    setContraste(100);
    setSaturacion(100);
  }

  return(
    <div className="app">
      <Header/> 
      <main className="layout-panel">
        <CargarFotografia
          imagenCargada = {setImagen}
        />
      </main>
    </div>


  );


}