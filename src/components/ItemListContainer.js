import { useState , useEffect} from "react"
import ItemCount from "./Item/ItemCount"
import ItemList from "./Item/ItemList"
import { db } from "../firebase"
import { getDocs, query, collection , where } from "firebase/firestore"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    
    let [item, setItem] = useState(0)
    let  [lista, setLista] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(() => {

        const productosCollection = collection(db, "productos")

        if(id){
            const consulta = query(productosCollection,where("category","==",id))

            getDocs(consulta)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })

        }
        else{
            getDocs(productosCollection)
            .then(({ docs }) => {
                setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }, [id])



    return (
        <>
            <div className="itemContainer">
                <h1>Nuestro Catalogo</h1>
                <ItemList items={lista}/>
                <p>
                {greeting}
                </p>
            </div>
        </>
            )
}

export default ItemListContainer