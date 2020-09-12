import React from "react";
import "./TodoItem.css";

function Todo(props){ //pass in individual todo index and whether complete or not info //return complete css format if true (trigger attribute to True); if false, return empty css string
    const { todo, index, completeTodo } = props;
    return (
    <div className = {`todo ${todo.isCompleted ? "complete" : ""}`}> 
        {todo.text}
        <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
        </div>
    </div>
    ); //pass in text attribute
}

export default Todo;