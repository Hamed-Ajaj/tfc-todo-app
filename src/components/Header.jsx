import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <h1>Todo App</h1>
        <nav className='links'>
            <Link to="/">Home</Link>
            <Link to="/add">Add Todo</Link>
        </nav>
    </header>
  )
}

export default Header
