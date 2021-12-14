import { useState } from "react"
import ItemCount from "./Item/ItemCount"
const ItemListContainer = ({greeting}) => {
    
    let [item, setItem] = useState(0)
    const onAdd = (cantidad) =>{
        console.log("ONADD")
        setItem(cantidad)
    }

    return (
        <>
            <div className="itemCount">
                <p>Cantidad Seleccionada : {item}</p>
                <ItemCount stock = {5} initial= {1} onAdd={onAdd}/>
            </div>
            <p>
                {greeting}
            </p>
        </>
            )
}

export default ItemListContainer