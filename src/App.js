import Header from "./components/Header"
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
                </div>
            </>
        )
}
export default App