import { useState } from "react"
import { Link } from "react-router-dom";

const Item = ({id, tittle, precio, imagen}) => {

    let [item, setItem] = useState(0)

    const onAdd = (cantidad) =>{
        console.log("ONADD")
        setItem(cantidad)
    }
    return(
        <>
            <div className="item">
                <img src={imagen}/>
                <p>{tittle}</p>
                <p>$ {precio}</p>
                <Link className="linkDetalle" to={`/item/${id}`}>ver detalle</Link>
            </div>
        </> 
    )
    
}

export default Item