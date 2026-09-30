export default  function Header(){
    return(
        <header className="app-header">
            <div className="logo">Editor Imagenes</div>

            <div className="header-actions">
                <button className="btn-regresar">Regresar</button>
                <button className="btn-galeria">Galeria</button>
                <button className="btn-usuario">Usuario</button>
            </div>
        </header>
    );
}