import './App.css'
import TodoAppContext from './contexts/TodoAppContext'
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import AddTodo from './pages/AddTodo'
import { useEffect, useState } from 'react'
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn Vue',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn Angular',
      completed: false,
    },
  ])

  useEffect(() => {
    if(todos) console.log(todos)

  },[todos])

  const handleAddTodo = (todo) => {
    setTodos([...todos, {id: todos.length + 1,completed:false, ...todo}])
  }

  

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoAppContext.Provider value={{todos,setTodos,handleAddTodo,handleDelete}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTodo />} />
          </Routes>
    </TodoAppContext.Provider>
  )
}

export default App
