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
                {isCarrito ? (
                        <span>Cantidad : {cantidad}</span>) : <></> }
                <Link className="linkDetalle" to={`/item/${id}`}>ver detalle</Link>
                {isCarrito ? (
                        <button onClick={borrarItem}>Borrar</button> ) : <></> }
            </div>
        </> 
    )
    
}

export default Item