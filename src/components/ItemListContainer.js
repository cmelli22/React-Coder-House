import { useState , useEffect} from "react"
import ItemCount from "./Item/ItemCount"
import ItemList from "./Item/ItemList"
const ItemListContainer = ({greeting}) => {
    
    let [item, setItem] = useState(0)
    let  [lista, setLista] = useState([])

    const onAdd = (cantidad) =>{
        console.log("ONADD")
        setItem(cantidad)
    }

    const items = [
        {id:1, tittle:"Guitarra", price:10000, pictureUrl:"https://static3.depositphotos.com/1000958/128/i/600/depositphotos_1282420-stock-photo-classical-acoustic-guitar.jpg"},
        {id:2, tittle:"Piano", price:20000, pictureUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/3hd31-b13fb807f26f73a5de15725640161460-640-0.jpg"}
    ]

    useEffect(() => {
        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
              res(items)  
            }, 2000);
        })

        promesa.then((respuesta) =>{
            setLista(respuesta)
        })
        .catch(()=>{
            console.log("no hay productos")
        })
    }, [])



    return (
        <>
            <div className="Item">
                <ItemList items={lista}/>
            </div>
            {/* <div className="itemCount">
                <p>Cantidad Seleccionada : {item}</p>
                <ItemCount stock = {5} initial= {1} onAdd={onAdd}/>
            </div> */}
            <p>
                {greeting}
            </p>
        </>
            )
}

export default ItemListContainer