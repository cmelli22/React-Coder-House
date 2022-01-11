import Header from "./components/Header"
import ItemDetailContainer from "./components/Item/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Cart from "./components/Cart/Cart"
import CustomProvider, { UseContext } from "./components/CartContext"


const mensaje = "Tienda Musical"
 
const App = () => {    

    return ( 
        <CustomProvider>
            <BrowserRouter>
                <header>
                    <Header/>
                </header>
                <main className="main">  
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
                        <Route path="/category/:id" element={<ItemListContainer greeting={mensaje}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    </Routes>
                </main>
                {/* <Footer/> */}
            </BrowserRouter>
        </CustomProvider>          
        )

}
export default App