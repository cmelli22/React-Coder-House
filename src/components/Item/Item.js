import { useState } from "react"
import { Link } from "react-router-dom";
import { UseContext } from "../CartContext"

const Item = ({id, tittle, precio, imagen, isCarrito, cantidad}) => {

    let [item, setItem] = useState(0)

    const {carrito, removeItem} = UseContext()

    const borrarItem = () => {
        removeItem(id)
    } 

    return(
        <>
            <div className="item">
                <img src={imagen}/>
                <p>{tittle}</p>
                <p>$ {precio}</p>
                <Link className="linkDetalle" to={`/item/${id}`}>ver detalle</Link>
                {isCarrito ? (
                    <>
                        <button onClick={borrarItem}>Borrar</button>
                        <span>Cantidad Total : {cantidad}</span>
                    </> )
                : <></> }
            </div>
        </> 
    )
    
}

export default Item