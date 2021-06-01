import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
  
    

    return(
      <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
              
                <Todo 
                    todos={todos} 
                    todo={todo}
                    setTodos={setTodos} 
                    key={todo.id} 
                    id={todo.id} 
                    text={todo.text} 
                    complete={todo.complete} 
                />
            ))}
        </ul>
      </div>
    )
}

export default TodoList