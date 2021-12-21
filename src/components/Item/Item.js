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
            </div>

        </> 
    )
    
}

export default Item