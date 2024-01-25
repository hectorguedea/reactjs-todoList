
function TodoList({tareas}){
 return (
    <>
     <h3>Lista de Tareas</h3>
    <ul className="tareas">
        {
            tareas.map((tarea) => (
            <li key={ tarea }>{tarea}</li>
            ))
        }
      </ul>
    </>
 );

}

export default TodoList;