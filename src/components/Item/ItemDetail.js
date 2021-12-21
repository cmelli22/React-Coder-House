import ItemCount from "./ItemCount"
import { useState } from "react"

const ItemDetail = ({productoDetail}) =>{

    let [cantidad, setcantidad] = useState(0)

    const onAdd = (cantidad) =>{
        console.log("ONADD")
        setcantidad(cantidad)
    }
    
    return(
        <>
            <div className="card">
                <h2>{productoDetail.tittle}</h2>
                <img src={productoDetail.pictureUrl}/>
                <p>{productoDetail.description}</p>
                <p>$ {productoDetail.price}</p>
                <div className="itemCount">
                    <p>Total : {cantidad}</p>
                    <ItemCount stock = {5} initial= {1} onAdd={onAdd}/>
                </div>
            </div>

        </>
    )
}

export default ItemDetail