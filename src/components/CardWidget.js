import { UseContext } from "./CartContext"

const CardWidget = () => {

const {cantidad} = UseContext()
    console.log(cantidad)
    return(
        <>
        <span className="material-icons cart">shopping_cart</span>
        <span>{cantidad}</span>
        </>
    )
}

export default CardWidget