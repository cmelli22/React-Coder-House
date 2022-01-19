import { TextField, MenuItem , Button} from "@mui/material"
import { addDoc, collection , serverTimestamp , updateDoc } from "firebase/firestore"
import { db } from "../firebase"
import { UseContext } from "../components/CartContext"
import { useState } from "react"


const Formulario = () => {

    const [idCompra, setIdCompra] = useState("")
    const {carrito,clear, precio_total } = UseContext()

    const buyer = {dni:{type:"", number:""}}

    const setbuyer = (e) =>{
        switch(e.target.id){
            case 'Nombre':
                buyer.name = e.target.value
                break;
            case 'Apellido':
                buyer.lastname = e.target.value
                break;
            case 'Email':
                buyer.email = e.target.value
                break;
            case 'Telefono':
                buyer.phone = e.target.value
                break;
            // case 'typeDni':
            //     buyer.dni.type = e.target.value
            //     break;
            case 'numberDni':
                buyer.dni.number= e.target.value
                break;
        }
        console.log(buyer)
    }

    const finalizarCompra = () =>{
        const ventasCollection = collection(db, "ordenes")
        addDoc(ventasCollection,{
            buyer : buyer,
            items : carrito ,
            date : serverTimestamp(),
            total : precio_total
        })
        .then((resultado)=>{
            console.log(resultado)
            setIdCompra(resultado.id)
            clear()
        })
    }

    return (
        <>
            {
                idCompra !== "" ?(
                <div>
                    <h5>Gracias por su Compra!</h5>
                    <span>Numero de orden es: {idCompra}</span>
                </div>):
                (
                <div className="form-container">
                    <span>Completa tus datos</span>
                    <div className="">
                        <TextField onBlur={(e)=> {setbuyer(e)}} color="primary" margin="normal" id="Nombre" label="Nombre" variant="outlined" />
                        <TextField color="primary" onBlur={(e)=> {setbuyer(e)}} margin="normal" id="Apellido" label="Apellido" variant="outlined" />
                    </div>
                    <div style={{widht:'100%'}}>
                        <TextField margin="normal" onBlur={(e)=> {setbuyer(e)}} type={"email"} label="Mail" id="Email" variant="outlined" color="primary" fullWidth="true"/>
                    </div>
                    <div >  
                        <TextField color="primary" fullWidth="true" onBlur={(e)=> {setbuyer(e)}} margin="normal" id="Telefono" label="Telefono" variant="outlined" />
                    </div>
                    <span>DNI</span>
                    <div className="dni">
                        <TextField color="primary" onChange={(e)=> {setbuyer(e)}} select="true" className="typeDni" margin="normal" id="typeDni" label="Tipo" variant="outlined" >
                            <MenuItem value="DNI">DNI</MenuItem>
                            <MenuItem value="LC">LC</MenuItem>
                        </TextField>    
                        <TextField color="primary" fullWidth="true" onBlur={(e)=> {setbuyer(e)}} margin="normal" id="numberDni" label="Numero" variant="outlined" />
                    </div>
                    <span>Domicilio</span>
                    <div className="domicilio">
                        <TextField className="calle" label="Calle" color="primary" variant="outlined" margin="normal"/>
                        <TextField label="Altura" color="primary" variant="outlined" type={'number'} margin="normal"/>
                    </div>
                    <div>
                        <TextField margin="normal" fullWidth="true" label="Barrio" color="primary" variant="outlined" margin="normal"/>
                    </div>
                    <Button variant="contained" onClick={finalizarCompra} >Finalizar Compra</Button>
                </div>)
            }
        </>
    )
}

export default Formulario


