import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {    
    return ( 
            <>
                <header>
                    <Header/>
                </header>
                <div>
                    <ItemListContainer/>
                </div>
            </>
        )
}
export default App