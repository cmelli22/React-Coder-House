import { UseContext } from "../CartContext"
import Item from "../Item/Item"
import { Link } from "react-router-dom"
const Cart = () => {

    const {carrito, removeItem, clear, precio_total , cantidad} = UseContext()

    const borrarItem = (e) => {
        removeItem(e.target.id)
    } 
    console.log("soy carrito");
    console.log(carrito[0])
    return(
        
        <div className="cartContainer"> 
            {cantidad === 0 ?
             (
                 <div className="NotElementCart">
                    <span>No hay elementos para mostrar en el carrito</span>
                    <Link to={"/"}><button>Ir a comprar</button></Link>  
                 </div>
            ) :          
                ( <>
                    <div className="itemContainer">
                        {carrito.map((element,index) => {
                            return (
                                <Item id={element.id} tittle={element.tittle} precio={element.price} imagen={element.pictureUrl} isCarrito={true} cantidad={element.cantidad} />
                            )
                        })}
                    </div>
                    <div className="footerCart">
                        <button onClick={clear}>Vaciar Carrito</button>
                        <span>Total: ${precio_total}</span>
                    </div> 
                    </> 
                )}
         </div>
        
    )
}

export default Cart