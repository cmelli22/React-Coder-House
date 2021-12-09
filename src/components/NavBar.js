import CardWidget from "./CardWidget"

const NavBar = () => {    
    return ( 
            <>

            <nav className="nav-bar">
                <div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Instrumentos</a></li>
                        <li><a href="badges.html">Clases On Line</a></li>
                        <li><a href="collapsible.html">Contacto</a></li>
                        <li><CardWidget/></li>
                    </ul>
                </div>
            </nav>
            </>
        )
}

export default NavBar