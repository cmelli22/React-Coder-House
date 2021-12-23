import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{

    const { id } = useParams()
    const productos = [
        {
        id:1, 
        tittle:"Guitarra",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" ,
        price:10000,
        pictureUrl:"https://static3.depositphotos.com/1000958/128/i/600/depositphotos_1282420-stock-photo-classical-acoustic-guitar.jpg"
        },
        {
            id:2, 
            tittle:"Piano",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" ,
            price:20000,
            pictureUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/078/394/products/3hd31-b13fb807f26f73a5de15725640161460-640-0.jpg"
        },
        {
            id:3,
            tittle:"Bateria", 
            price:80000,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" , 
            pictureUrl:"https://mla-s1-p.mlstatic.com/997402-MLA42824421450_072020-F.jpg"
        }

    ]
    
    let [item, setItem] = useState({})

    useEffect(() => {

        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {
              res(productos.find(producto => producto.id === Number(id)))  
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
        <div className="Item">
            <ItemDetail productoDetail={item}/>
        </div>

    )


}

export default ItemDetailContainer