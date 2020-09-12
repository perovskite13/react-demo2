import React, {useState} from "react";
import TodoItem from "./components/TodoItem/TodoItem"; 
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";


function App(){
  //variables //storing the information in variables
  const [todos, setTodos] = useState([
    "Finish plus project",
    "Feed peggy",
    "Sleep",
  ]);

  //methods
  const addTodo= (text) => {
    const newTodos = [...todos, text]; //unpacking existing default todos, then append new todo input to the new const
    setTodos(newTodos); //update the state
  };


  //template
  return (
    //adding html element which links css
  <div className = "app"> 
  <div className = "todo-list">
    <h1> My todo list</h1>
    {todos.map((todo, index) =>(
      <TodoItem todo = {todo} key = {index}/> //loop through the variables and print them all out
    ))}
    <TodoForm addTodo = {addTodo}/>
  </div>
  </div>

  );
}

export default App;