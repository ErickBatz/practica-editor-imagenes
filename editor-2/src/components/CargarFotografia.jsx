import { useState } from "react";

const FORMATO_PERMITIDO=['image/jpeg','image/jpg','image/png','image/webp'];
const TAMANIO_MAXIMO_MB= 10;

function validadArchivo(Archivo){
    if(!FORMATO_PERMITIDO.includes(Archivo.type)){
        return 'Formato no permitido, debe ser JPG,PNG,WEBP';
    }
    const tamanoMB = Archivo.size(1024*1024);
    
    if(tamanoMB>TAMANIO_MAXIMO_MB){
        return (`El archivo pesa: ${tamanoMB} y el peso maximo es ${TAMANIO_MAXIMO_MB}`);
    }
    return null;
}

export default function CargarFotografia({onImagenCargada}){
    const [error, setError] = useState('');
    const [arrastrado, setArrastrado] = useState(false);

    function procesarArchivo(Archivo){
        const mensajeError = validadArchivo(Archivo);
        if(mensajeError){
            setError(mensajeError);
            return
        }
        setError('');

        const lector = new FileReader();
        lector.onload=() =>{
            onImagenCargada(lector.result);
        };
        lector.readAsDataURL(Archivo);
    }

    function manejarSeleccion(evento){
        const Archivo = evento.target.files[0];
        if(Archivo) procesarArchivo(Archivo);
    }

    function manejarDrop(evento){
        evento.preventDefault();
        setArrastrado(false);
        const Archivo = evento.dataTransfer.files[0];
        if(Archivo) procesarArchivo(Archivo);
    }
    function manejarDragOver(evento){
        evento.preventDefault();
        setArrastrado(true);
    }
    function manejarDragLeave(){
        setArrastrado(false);
    }

    return(
        <section className="panel">
            <h3>Cargar FotoGrafia</h3>
            <div
                className={`dropzone ${arrastrado ? 'dropzone-activo':''}`}
                onDrop={manejarDrop}
                onDragOver={manejarDragOver}
                onDragLeave={manejarDragLeave}
            >
                <p>Subir</p>
                <p>Arrastrar una Imagen</p>
                <p>o</p>
                <label className="btn-primario" >
                    seleccionar Archivo
                    <input 
                        type="file"
                        accept="image/*"
                        onChange={manejarSeleccion}
                        style={{display:"none"}}
                        />
                </label>
                <p className="hint" > Formatos permitidos: JPG * PNG * WEBP</p>
            </div>
            {error && <p className="error-msg" > {error}</p>}

            <p className="hint-small">
                El tamaño maximo de las imagenes permitidos es de 10MB. la imagen se procesa en su navegador
            </p>
        </section>
    );

}