import { useState, useEffect } from 'react'
import FormList  from './components/FormList'
import TodoList  from './components/TodoList'
import Mensaje  from './components/Mensaje'


import './App.css'

function App() {

  const [tareas, setTareas] = useState([])
  const [mensaje, setMensajes] = useState();

  const addTarea = (nueva_tarea) => {
    setTareas([...tareas, nueva_tarea])
  }

  const handleReset = () =>{
    setTareas([]);
    setMensajes();
  }

useEffect(()=>{
  if (tareas.length === 10) {
     setMensajes({"texto":'Llegaste a 10 tareas', "tipo":"alerta"});
   }
}, [tareas]);

  return (
    <>
     <h1>TodoList</h1> 

     <FormList addTarea={addTarea} />
     {tareas.length > 0 && <TodoList tareas={tareas} /> }

     { mensaje && <Mensaje mensaje={mensaje.texto} tipo={mensaje.tipo} /> }
     { mensaje && <button onClick={handleReset}>Reset</button>  }
    </>
  );
}

export default App
