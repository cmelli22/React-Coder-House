import NavBar from "./NavBar"

const Header = () => {
    return (
        <>
        <header className="main-header">
            <div className="brand">
                <img src="/logo192.png" alt="logo"/>
                <a href="#" className="brand-logo">Tienda Musical Cristian Mellibosky</a>
            </div>
            <NavBar/>
        </header>
    </>

    )
}

export default Header