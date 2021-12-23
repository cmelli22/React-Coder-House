import Header from "./components/Header"
import ItemDetailContainer from "./components/Item/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"


const mensaje = "Tienda Musical"
 
const App = () => {    
    return ( 
            <BrowserRouter>
                <header>
                    <Header/>
                </header>
                <main className="main">  
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
                        <Route path="/category/:id" element={<ItemListContainer greeting={mensaje}/>}/>
                        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    </Routes>
                </main>
                {/* <Footer/> */}
            </BrowserRouter>

            
        )
}
export default App