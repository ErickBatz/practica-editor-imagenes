import { useEffect } from "react";
import { useRef } from "react";




export default function VistaPrevia({imagenOriginal}){
    const canvasRef = useRef(null)

    useEffect(()=>{
        if(!imagenOriginal) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload=()=>{
            const deCostado = rotacion === 90 || rotacion ===270;
            canvas.width = deCostado ? img.height : img.width;
            canvas.height =  deCostado ? img.width : img.height;
            ctx.save();
            ctx.clearRect(0,0,canvas.width, canvas.height);

            ctx.drawImage(img,  -img.width / 2 , -img.height / 2 );
            ctx.restore();
        };
        img.src = imagenOriginal;
    },[imagenOriginal] );

    return(
        <section className="panel">
            <h3>Vista previa</h3>
            <div className="vista-previa-area">
                {imagenOriginal ? (
                    <canvas ref={canvasRef} className="canvas-editor" />
                ):(
                    <p className="placeholder">Aqui aparece tu imagen</p>
                )}
            </div>
        </section>
    );
}