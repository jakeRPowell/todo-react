import React from 'react';

const Todo = ({setTodos, todos, todo, id, complete, text}) => {
    const deleteTodoHandler = () => {
        setTodos(todos.filter((el) => el.id !== id))
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, complete: !item.complete
                }
            }
            return item
        }))
    };

    const textChangeHandler = (e) => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, text: e.target.value
                }
            }
            return item
        }))
    }

    return (
        <div className={`todo ${complete ? "complete" : ""}`}>
            <li className="todo-item"><input type="text" value={text} onChange={textChangeHandler} /></li>
            <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteTodoHandler}><i className="fas fa-trash"></i></button>
            
        </div>
    )
}

export default Todo