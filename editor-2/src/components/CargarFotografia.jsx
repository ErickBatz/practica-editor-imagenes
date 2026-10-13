import { useEffect, useState } from "react";

const FORMATO_PERMITIDO = ['image/jpeg','image/png','image/jpg','image/webp'];
const TAMANIO_MAXIMO = 10;

function validarArchivo(Archivo){
    if(!FORMATO_PERMITIDO.includes(Archivo.type)){
        return 'formato no permitido '
    }
    const tamanioMB = Archivo.size/(1024*1024);
    if(tamanioMB>TAMANIO_MAXIMO){
        return(`Tamanio de Archivo ${tamanioMB} debe ser ${TAMANIO_MAXIMO}`);
    }
    return(null);
}

export default function CargarFotografia({imagenCargada}){
    const [error, setError] = useState('');
    
    function procesarArchivo(Archivo) {
        const mensajeError = validarArchivo(Archivo);
        if(mensajeError){
            setError(mensajeError)
            return;
        }   
        setError('');

        const lector = new FileReader();
        lector.onload = () =>{
            imagenCargada(lector.result);
            lector.readAsDataURL(Archivo);
        }
    }

    function manejarSeleccion(event){
        event.preventDefault();
        const Archivo = event.target.files[0];
        if(Archivo) procesarArchivo(Archivo)
    }
}