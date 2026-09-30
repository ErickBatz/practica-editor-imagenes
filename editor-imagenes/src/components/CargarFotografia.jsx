import { useState } from "react";

const FORMATO_PERMITIDOS=['image/jpeg','image/jpg','image/png','image/webp'];
const TAMANIO_MAXIMO_MB=10;

function validarArchivo(Archivo){
    if(!FORMATO_PERMITIDOS.includes(Archivo.type)){
        return 'Formaro no permitido debe ser JPG,PNG, WEBP';
    }
    const tamanoMB = Archivo.size/(1024*1024);

    if(tamanoMB > TAMANIO_MAXIMO_MB){
        return (`El archivo pesa: ${tamanoMB} y el peso maximo es ${TAMANIO_MAXIMO_MB}`);
    }
    return null;
}

export default function CargarFotografia({onImagenCargada}){
    const [error, setError] = useState('');
    const[arrastrado,setArrastrado]= useState(false);

    function procesarArchivo(Archivo){
        const mensajeError = validarArchivo(Archivo);
        if(mensajeError){
            serError(mensajeError);
            return;
        }
        setError('');
        
        const lector = new FileReader();
        lector.onload=()=>{
            onImagenCargada(lector.result)
        };
        lector.readAsDataURL(Archivo);
    }

    function manejarSeleccion(evento){
        const Archivo = evento.target.files[0];
        if(Archivo) procesarArchivo(Archivo);
    }

    return(
        <section className="panel">
            <h3>Cargar Fotos</h3>
            <div className="dropzone">
                <p>subir</p>
                <p>Arrastrar una Imagen</p>
                <p>o</p>
                <button className="btn-primario" >
                    seleccinar Archivo
                    <input 
                        type="file"
                        accept="image/*"
                        onChange={manejarSeleccion}
                        style={{display:"none"}}
                        />
                </button>
                <p className="hint">Formatos permitidos: JPG * PNG * WEBP</p>
            </div>
           
            {error && <p className="error-msg" >{error}</p>}

                <p className="hint-small">
                    El tamaño maximo de imagnes permitido es de 10MB. La imagen se procesa en su navegador
                </p>
        </section>
    );
}