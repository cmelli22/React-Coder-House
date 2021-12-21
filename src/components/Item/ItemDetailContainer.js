import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"

const ItemDetailContainer = () =>{

    const producto = {
        id:1, 
        tittle:"Guitarra",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" ,
        price:10000,
        pictureUrl:"https://static3.depositphotos.com/1000958/128/i/600/depositphotos_1282420-stock-photo-classical-acoustic-guitar.jpg"
        }
    
    let [item, setItem] = useState({})

    useEffect(() => {

        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
              res(producto)  
            }, 2000);
        })

        promesa.then((respuesta) =>{
            setItem(respuesta)
            console.log("entreeee a then")
        })
        .catch(()=>{
            console.log("no hay productos")
        })
    }, [])

    return(
        <ItemDetail productoDetail={item}/>
    )


}

export default ItemDetailContainer