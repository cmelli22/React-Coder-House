import Header from "./components/Header"
import ItemDetailContainer from "./components/Item/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"

const mensaje = "Tienda Musical"
 
const App = () => {    
    return ( 
            <>
                <header>
                    <Header/>
                </header>
                <div className="Item">
                    <ItemListContainer greeting={mensaje}>
                    </ItemListContainer>
                    <ItemDetailContainer/>
                </div>
            </>
        )
}
export default App