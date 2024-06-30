import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import TodoAppContext from "../contexts/TodoAppContext"
const AddTodo = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const {handleAddTodo} = useContext(TodoAppContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!input) return
    handleAddTodo({
      title: inputRef.current.value
    })
    setInput('')
    navigate('/')
  }


  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit} className="todo-form">
          <input
          className="todo-input"
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleChange}
          name="addTodo" />
      </form>
      <button onClick={handleSubmit} className="todo-add-btn" type="submit">Add</button>
    </div>
  )
}

export default AddTodo
