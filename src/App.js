import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import TodoList from './components/todoList/ToDoList'

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)
  
  
  const filterHandler = () => {
    switch(status) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.complete === true));
        
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.complete === false));
        
        break;
      default:
        setFilteredTodos(todos)
        
    }
  }  

  useEffect(() => {
    filterHandler();
  }, [todos,status])

  const retrieveStoredTodos = () => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"))
  }

  useEffect(() => {
    retrieveStoredTodos();
  }, [])

  const writeTodoToLocalStorage = () => {
    //setTodos(JSON.parse(localStorage.getItem("users") || "[]"))
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  useEffect(() => {
    writeTodoToLocalStorage();
  }, [todos])




  return (
    <div className="App">
      <header>
        <h1>To do list</h1>
        
      </header>
      <Form 
        setInputText={setInputText} 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus}
        
        />
      <TodoList 
        todos={todos}  
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
