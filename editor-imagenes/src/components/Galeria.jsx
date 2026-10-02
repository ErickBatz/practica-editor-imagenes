import {Link} from 'react-router-dom'
import '../styles/variables.css'
import '../styles/galeria.css'

export default function Galeria(){
    const items =[
        {id:1, titulo: "proyecto alpha", imagen:"https://media.vandalsports.com/i/1200x675/7-2026/202672102745_1.jpg"},
        {id:2, titulo: "proyecto alpha 2", imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfn1EiSgcvg4pkeg_q7txxH1dBjMGEn0CJ0E-DKT4gYK7N9yW-ZYI8zc3g&s=10"},
        {id:3, titulo: "proyecto alpha 3", imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLp2KLLy19fjilttkcrCDOKPspE91K-ERDvMftcEZEftpv9Yit2PyVF9E&s=10"},
        {id:4, titulo: "proyecto alpha 4", imagen:"https://images4.alphacoders.com/110/thumb-1920-1105143.jpg"},
    ]

    return(
        <div className="galeria">
            {items.map((item) =>(
                <div key={item.id} className="card">
                    <div className="card-titulo">
                        <h2>{item.titulo}</h2>
                    </div>
                    <div className="card-body">
                        <div className="img">
                            <img src={item.imagen} alt={item.titulo}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}