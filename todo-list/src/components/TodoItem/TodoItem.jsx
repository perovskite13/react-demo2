import React from "react";
import "./TodoItem.css";

function Todo(props){
    const { todo } = props;
    return <div className = "todo"> {todo}</div>;
}

export default Todo;