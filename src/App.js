import React, { useState } from 'react';

function Todo({todo, index}) {
return(
  <div className="todo">
    {`${index+1} `+todo.text}
  </div>
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

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App;