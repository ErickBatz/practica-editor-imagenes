import { useEffect, useRef } from "react";

export  function VistaPrevia({imagenOriginal}){
    
    const canvasRef = useRef(null);

    useEffect(()=>{
        if(!imagenOriginal) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload=()=>{
            canvas.save();
        }
    })

    
    return(
        <section className="panel">
            <h3>Vista Previa</h3>
            <div className="vista-previa-area">
                {imagenOriginal ?(
                    <canvas Ref={canvasRef} className="canvas-editor"/>
                ):(
                <p className="placeholder">Aqui aparece tu imagen</p>
                )}
            </div>
        </section>
    );
}