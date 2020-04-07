import React from 'react';


 const Todo = ({index,todo,completedTodo, deleteTodo}) => {
  return(
    <div 
    style={{textDecoration: todo.isCompleted ? "line-through" : " "}} className="todo">
   	{todo.text}
  
      <div>
      <button onClick={()=> completedTodo(index)}>Complete</button>
      <button onClick={()=> deleteTodo(index)}>x</button>
    </div>
   </div>
   
  )

}


export default Todo;