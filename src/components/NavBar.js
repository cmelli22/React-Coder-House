import CardWidget from "./CardWidget"
import { Link } from "react-router-dom";
import { UseContext } from "./CartContext";

const NavBar = () => {  
    const {cantidad} = UseContext()  
    return ( 
            <>

            <nav className="nav-bar">
                <div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/category/1"}>Instrumentos</Link></li>
                        <li><Link to={"/"}>Clases On Line</Link></li>
                        <li><Link to={"/"}>Contacto</Link></li>
                        {cantidad > 0? <li><CardWidget/></li>: <></>}                       
                    </ul>
                </div>
            </nav>
            </>
        )
}

export default NavBar