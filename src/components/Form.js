import React, {useState} from 'react';
import idHandler from '../helpers/idHandler'

const Form = ({setInputText,inputText,todos,setTodos,setStatus}) => {
    
    const [idState, setIdState] = useState(0)
    
    const inputChangeHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        setIdState(idState + 1)
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText, 
                id: idHandler(), 
                complete: false
            }
        ])
        setInputText('')
        
    }
    
    const selectStatusHandler = (e) => {
        setStatus(e.target.value)
    }

    const deleteAllHandler = (e) => {
        e.preventDefault()
        setTodos([])
    }

    return(
        <form>
        <input 
            
            value={inputText} 
            type="text" 
            className="todo-input" 
            onChange={inputChangeHandler} 
            />
        <button className="todo-button" type="submit" onClick={submitTodoHandler}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo" onChange={selectStatusHandler}>
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
            </select>
        </div>
        <button className="delete-all-button" onClick={deleteAllHandler}>
            <i className="fas fa-skull-crossbones"></i>
            </button>
        </form>
    )
}

export default Form