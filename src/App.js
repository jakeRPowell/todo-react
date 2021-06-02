import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/todoList/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    (function filterHandler() {
      switch (status) {
        case "complete":
          setFilteredTodos(todos.filter((todo) => todo.complete === true));

          break;
        case "incomplete":
          setFilteredTodos(todos.filter((todo) => todo.complete === false));

          break;
        default:
          setFilteredTodos(todos);
      }
    })();
  }, [todos, status]);

  useEffect(() => {
    //retrieveStoredTodos
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  useEffect(() => {
    //writeTodoToLocalStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>To do list</h1>
        <div className="link-to-github">
          {" "}
          <a href="https://github.com/jakeRPowell/todo-react">
            {" "}
            See on GitHub{" "}
          </a>
        </div>
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
