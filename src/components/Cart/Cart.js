import { UseContext } from "../CartContext"
import Item from "../Item/Item"
const Cart = () => {



    const {carrito, removeItem} = UseContext()

    const borrarItem = (e) => {
        removeItem(e.target.id)
    } 
    console.log("soy carrito");
    console.log(carrito[0])
    return(
        carrito.map((element,index) => {
            return (
                    <Item id={element.id} tittle={element.tittle} precio={element.price} imagen={element.pictureUrl} isCarrito={true} cantidad={element.cantidad} />
            )
        })
    )
}

export default Cart