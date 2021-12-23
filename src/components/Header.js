import NavBar from "./NavBar"

const Header = () => {
    return (
        <>
        <header className="main-header">
            <div className="brand">
                <img src="/logo192.png" alt="logo"/>
                <a href="/" className="brand-logo">Mi Tienda Musical</a>
            </div>
            <NavBar/>
        </header>
    </>

    )
}

export default Header