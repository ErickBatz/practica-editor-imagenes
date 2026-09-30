export default function HerramientasEdicion(){
    return(
        <section className="panel">
            <h3>Herramientas de Edicion </h3>
            <div className="grupo">
                <p className="grupo-titulo">Filtros</p>
                <div className="filtros-grid">
                    <button>Filtro</button>
                </div>
            </div>

            <div className="grupo">
                <p className="grupo-titulo">Ajustes</p>
                <label>Brillo</label>
                <input type="range"/>
                
                <label>Contraste</label>
                <input type="range"/>
                
                <label>Saturacion</label>
                <input type="range"/>
            </div>

            <div className="grupo">
                <p className="grupo-titulo">Tranformar</p>
                <div className="botones-transformar">
                    <button>°90 Izquierda</button>
                    <button>°180 Izquierda</button>
                    <button>°90 Derecha</button>
                    <button>Original</button>
                </div>
            </div>

            <div className="botones-tranformacion">
                <button>Horizontal</button>
                <button>Vertical</button>
            </div>

            <div className="acciones-finales">
                <button>Restablecer</button>
                <button>Agregar Galeria</button>
            </div>
        </section>
    );
}