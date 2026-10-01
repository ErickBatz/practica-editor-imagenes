const FILTROS=['Original','Gris','Sepia','Blanco y Negro','Desenfoque'];


export default function HerramientasEdicion({
    brillo,
    contraste,
    saturacion,
    imagenCargada,
    filtroActivo,
    onRotacionIzquierda,
    onRotacionDerecha,
    onRotar180,
    onRegresarRotacion,
    onVoltearHorizontal,
    onVoltearVertical,
    onSeleccionarFiltro,
    onCambiarBrillo,
    onCambiarSaturacion,
    onCambiarContraste,
    onRestablecer,
    onAgregarGaleria

}){
    
    
    
    
    return(
        <section className="panel">
            <h3>Herramientas de Edicion </h3>
            <div className="grupo">
                <p className="grupo-titulo">Filtros</p>
                <div className="filtros-grid">
                    {FILTROS.map(filtro =>(
                        <button
                            key={filtro}
                            className={`filtro-item ${filtroActivo === filtro ? 'filtro-activo':'' }`}
                            disabled ={!imagenCargada}
                            onClick={()=> onSeleccionarFiltro(filtro)}
                        >
                            {
                                filtro
                            }
                        </button>
                    ))}
                   
                </div>
            </div>

            <div className="grupo">
                <p className="grupo-titulo">Ajustes</p>
                <label>Brillo:{brillo}</label>
                <input 
                    type="range"
                    min="0"
                    max="200"
                    value={brillo}
                    disabled={!imagenCargada}
                    onChange={(e)=> onCambiarBrillo(Number(e.target.value))}
                    />
                
                <label>Contraste{contraste}</label>
                <input 
                    type="range"
                    min="0"
                    max="200"
                    value={contraste}
                    disabled={!imagenCargada}
                    onChange={(e)=> onCambiarContraste(Number(e.target.value))}
                    />
                
                <label>Saturacion{saturacion}</label>
                <input 
                    type="range"
                    min="0"
                    max="200"
                    value={saturacion}
                    disabled={!imagenCargada}
                    onChange={(e)=>onCambiarSaturacion(Number(e.target.value))}
                    />
            </div>

            <div className="grupo">
                <p className="grupo-titulo">Tranformar</p>
                <div className="botones-transformar">
                    <button disabled={!imagenCargada} onClick={onRotacionIzquierda} >°90 Izquierda</button>
                    <button disabled={!imagenCargada} onClick={onRotar180} >180° rotar</button>
                    <button disabled={!imagenCargada} onClick={onRotacionDerecha} >°90 derecha</button>
                    <button disabled={!imagenCargada} onClick={onRegresarRotacion} >Original</button>
                   
                </div>
            </div>

            <div className="botones-tranformacion">
                <button disabled={!imagenCargada} onClick={onVoltearHorizontal} >Horizontal</button>
                <button disabled={!imagenCargada} onClick={onVoltearVertical} >Vertical</button>
            </div>

            <div className="acciones-finales">
                <button className="btn-secundario" disabled={!imagenCargada} onClick={onRestablecer}>Restablecer</button>
                <button className="btn-accion" disabled={!imagenCargada} onClick={onAgregarGaleria}>Agregar Galeria</button>
            </div>
        </section>
    );
}