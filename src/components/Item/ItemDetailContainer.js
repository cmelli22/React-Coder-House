import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase"
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () =>{

    const { id } = useParams()
    
    let [item, setItem] = useState({})

    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const refDoc = doc(productosCollection, id)
        getDoc(refDoc)
            .then((resultado) => {
                setItem({id:resultado.id, ...resultado.data()})
            })
            .catch((error) => {

            })

    }, [id])

    return(
        <div className="Item">
            <ItemDetail productoDetail={item}/>
        </div>

    )


}

export default ItemDetailContainer