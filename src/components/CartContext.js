import { createContext , useContext, useState} from "react";

const context = createContext();

export const {Provider} = context

export const UseContext = () => {
    return useContext(context)
}


const CustomProvider = ({children}) => {
    const [cantidad , setCantidad] = useState(0)    
    const [carrito , setCarrito] = useState([])
    const [precio_total , setPrecioTotal] = useState(0)


    const addItem = (item,quantity) =>{
        let copyCarrito = carrito.slice()
        if(!isInCart(item.id)){
            item.cantidad = quantity        
            copyCarrito.push(item)
            console.log(copyCarrito)
            setCarrito(copyCarrito)
            setCantidad(cantidad+quantity)
            setPrecioTotal(precio_total+ (item.price*quantity))
        }
        else{
            console.log("entre a repetido")
            let i = copyCarrito.filter(i => i.id === item.id)
            i[0].cantidad = i[0].cantidad + quantity
            console.log(copyCarrito)
            setCarrito(copyCarrito)
            setCantidad(cantidad+quantity)
            setPrecioTotal(precio_total+ (item.price*quantity))
        }

    }

    const removeItem = (id) =>{

        let itemToRemove = carrito.find(item => item.id === id)
        console.log(itemToRemove.cantidad)
        let copyCarrito = carrito.filter(item => item.id!=id)
        console.log(copyCarrito)
        setCarrito(copyCarrito)
        setCantidad(cantidad-itemToRemove.cantidad)
        setPrecioTotal(precio_total- (itemToRemove.price*itemToRemove.cantidad))
    }


    const clear = () =>{
        setCarrito([])
        setCantidad(0)
        setPrecioTotal(0)

    }

    const isInCart= (id) => {
        return carrito.some((element) => element.id === id )
    }

    const contextvalue={
        cantidad : cantidad,
        carrito : carrito,
        precio_total,
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