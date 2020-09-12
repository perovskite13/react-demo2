import React, {useState} from "react";
import TodoItem from "./components/TodoItem/TodoItem"; 
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";


function App(){
  //variables //storing the information in variables
  const [todos, setTodos] = useState([
    {text: "Finish plus project", isCompleted: false}, //object and attribute
    {text: "Feed peggy",isCompleted: false},
    {text: "Sleep",isCompleted: false},
  ]);

  //methods
  const addTodo= (text) => { //initially was a string, just turn to object with curly braces
    const newTodos = [...todos, {text}]; //unpacking existing default todos, then append new todo input to the new const
    setTodos(newTodos); //update the state
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true; //render selected todo [index] is completed
    setTodos(newTodos);
  }

  //template
  return (
    //adding html element which links css
  <div className = "app"> 
  <div className = "todo-list">
    <h1> My todo list</h1>
    {todos.map((todo, index) =>(
      <TodoItem 
      todo = {todo} 
      key = {index}
      index = {index}
      completeTodo = {completeTodo}
      /> //loop through the variables and print them all out
    ))}
    <TodoForm addTodo = {addTodo}/>
  </div>
  </div>

  );
}

export default App;