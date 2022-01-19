import { UseContext } from "../CartContext"
import Item from "../Item/Item"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
const Cart = () => {

    const {carrito, removeItem, clear, precio_total , cantidad} = UseContext()

    const borrarItem = (e) => {
        removeItem(e.target.id)
    } 
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
                        <Button variant="contained" onClick={clear} >Vaciar Carrito</Button>
                        <span>Total: ${precio_total}</span>
                        <Link to={"/checkout"}>
                            <Button variant="contained" >Siguiente</Button>
                        </Link> 
                    </div>
                    <div>

                    </div>
                    </> 
                )}
         </div>
        
    )
}

export default Cart