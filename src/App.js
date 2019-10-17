import React, { useState } from 'react';
import './App.css'

function Todo({todo, index}) {
return <div className="todo">{`${index+1} `+todo.text}</div>
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit =  e => {
    e.preventDefalut()
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
  const [todos, setTodo] = useState([
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
    const newTodos = [...todos, text]
    setTodo(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;