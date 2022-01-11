import { createContext , useContext, useState} from "react";

const context = createContext();

export const {Provider} = context

export const UseContext = () => {
    return useContext(context)
}


const CustomProvider = ({children}) => {
    const [cantidad , setCantidad] = useState(0)    
    const [carrito , setCarrito] = useState([])


    const addItem = (item,quantity) =>{
        let copyCarrito = carrito.slice()
        copyCarrito.push(item)
        item.cantidad = quantity
        if(!isInCart(item.id)){
            setCarrito(copyCarrito)
            setCantidad(cantidad+quantity)
        }

    }

    const removeItem = (id) =>{

        let itemToRemove = carrito.find(item => item.id === Number(id))
        console.log(itemToRemove.cantidad)
        let copyCarrito = carrito.filter(item => item.id!=id)
        console.log(copyCarrito)
        setCarrito(copyCarrito)
        setCantidad(cantidad-itemToRemove.cantidad)

    }


    const clear = () =>{
        setCarrito([])
    }

    const isInCart= (id) => {
        return carrito.some((element) => element.id === id )
    }

    const contextvalue={
        cantidad : cantidad,
        carrito : carrito,
        addItem,
        removeItem,
        clear
    }

    return(
        <Provider value={contextvalue}>
            {children}
        </Provider>
    ) 
}

export default CustomProvider