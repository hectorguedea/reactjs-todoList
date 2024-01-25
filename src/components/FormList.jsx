import { useState } from "react"
import Mensaje  from './Mensaje'


function FormList({addTarea}){

 const [tarea, setTarea] = useState('')
 const [mensaje, setMensajes] = useState();


 const handleSubmit = () =>{
   
    if(tarea){
        addTarea(tarea);

        // limpia mensajes y input
        setMensajes('');
        setTarea(''); 
        
    }else{
        setMensajes({"texto":'No agregado, debes agregar texto', "tipo":"alerta"});
    }
   
 }

  const handleInputChange = (e) => {
    setTarea(e.target.value)
  }

    return (
        <>
            <input 
            type="text"
            name="tarea"
            className="inputForm"
            placeholder="Ingresa una tarea"
            onChange={handleInputChange}
            onKeyDown={ (e) => e.key == 'Enter' && handleSubmit() }
            value={tarea}
            />

            <button
            onClick={handleSubmit}
            >Agregar</button>

            { mensaje && <Mensaje mensaje={mensaje.texto} tipo={mensaje.tipo} /> }

        </>
    )
}

export default FormList; 