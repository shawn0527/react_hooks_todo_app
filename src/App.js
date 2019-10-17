import React, { useState } from 'react';
import './App.css'

function Todo({todo, index, completeTodo}) {
return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} 
className="todo">
{`${index+1} `+todo.text}
  <div>
    <button onClick={() => completeTodo(index)}>Complete</button>
  </div>
  </div>
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit =  e => {
    e.preventDefault()
    if(!value) return;
    addTodo(value);
    setValue('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add todo..." onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet with friends',
      isCompleted: false
    },
    {
      text: 'Build a really cool todo app',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos.isCompleted = true
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;