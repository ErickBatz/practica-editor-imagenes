import {Link} from 'react-router-dom'
export default  function Header(){
    return(
        <header className="app-header">
            <div className="logo">Editor Imagenes</div>

            <div className="header-actions">
                <button className="btn-regresar">Regresar</button>
                <Link to="/galeria" >
                    <button className="btn-galeria">Galeria</button>
                </Link>
                <button className="btn-usuario">Usuario</button>
            </div>
        </header>
    );
}