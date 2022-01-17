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
        onAdd(count)
    }

    return (
        <div className="count">
            <div className = "contador">
                <button className="button buttonCounter" onClick={restar}>-</button>
                <p>{count}</p>
                <button className="button buttonCounter" onClick={sumar}>+</button>
            </div>
            <div >
                <button className="button buttonAdd" onClick={agregarItem}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount