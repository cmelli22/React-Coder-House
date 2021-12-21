import { useState } from "react"

const ItemCount = ({stock , initial, onAdd }) =>{

    let [count, setCount] = useState(initial)
    
    const sumar =() =>{
        if(count < stock){
            setCount(count +1)    
        }

    }

    const restar =() =>{
        if(count > 0)
        setCount(count - 1)    
    }

    const agregarItem = () => {
        console.log("agrego item")
        onAdd(count)
    }

    return (
        <div className="count">
            <div className = "contador">
                <button className="buttonCounter" onClick={restar}>-</button>
                <p>{count}</p>
                <button className="buttonCounter" onClick={sumar}>+</button>
            </div>
            <div className="buttonAdd">
                <button onClick={agregarItem}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount