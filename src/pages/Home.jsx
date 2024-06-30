import { useContext } from "react"
import TodoAppContext from "../contexts/TodoAppContext"
const Home = () => {
  const {todos,setTodos,handleDelete} = useContext(TodoAppContext)
  return (
    <div className="todos-container">
        {todos && todos.map(todo => (
          <div key={todo.id} className="todos">
            <h3 className={todo.completed ?"completed":""}>{todo.title}</h3>
              <div className="btns">
              <input type="checkbox" name="completed" id="completed" className="completed-btn" onChange={() => setTodos(prevTodo => {
                return prevTodo.map(prev => {
                  if(prev.id === todo.id) {
                    return {
                      ...prev,
                      completed: !prev.completed
                    }
                  }
                  return prev
                })
              })}/>
              <button onClick={() => handleDelete(todo.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Home
