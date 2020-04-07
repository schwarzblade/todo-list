import React, {useState} from 'react';
import './App.css';
import Todo from './Todo';
import Todoform from './Todoform'





function App() {

  const [todos, setTodos] = useState ([
    {
      text: "learn React",
      isCompleted: false
    },
    {
      text: "smoke joint",
      isCompleted: false
    },
    {
      text: "drink beers",
      isCompleted: false
    }

  ])


  const addTodo = text => {
    const NewTodos = [...todos, {text}];
    setTodos(NewTodos);
  }

  const completedTodo = (index) => {
    const NewTodos = [...todos];
    NewTodos[index].isCompleted = true;
    setTodos(NewTodos);
  } 

  const deleteTodo = (index) => {
    const NewTodos = [...todos];
    NewTodos.splice(index,1);
    setTodos(NewTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
          {todos.map((todo,index) =>(
            <Todo key={index} index={index} todo={todo} completedTodo={completedTodo} deleteTodo={deleteTodo}/> 
          ))}
        <Todoform addTodo={addTodo} />
      </div>

    </div>

  )
}

export default App; 


