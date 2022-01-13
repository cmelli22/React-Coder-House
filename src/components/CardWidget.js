import { UseContext } from "./CartContext"
import { Link } from "react-router-dom"
const CardWidget = () => {

const {cantidad} = UseContext()
    console.log(cantidad)
    return(
        <>
        <Link to={"/cart"}>
            <div className="cartWidget">
                <span className="material-icons cart">shopping_cart</span>
                <span>{cantidad}</span>
            </div>
        </Link>
        
        </>
    )
}

export default CardWidget