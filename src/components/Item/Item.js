import { useState } from "react"
import ItemCount from "./ItemCount"

const Item = ({tittle, precio, imagen}) => {

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
                <div className="itemCount">
                    <p>Total : {item}</p>
                    <ItemCount stock = {5} initial= {1} onAdd={onAdd}/>
                </div>
            </div>

        </> 
    )
    
}

export default Item