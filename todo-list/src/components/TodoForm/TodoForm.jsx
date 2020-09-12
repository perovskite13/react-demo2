import React, {useState} from "react";

function TodoForm(props){
    //variables
    const {addTodo} = props; //pass in argument i.e. the new appended list
    const [value, setValue] = useState("") //update the state (existing and new)

    //methods
    const handleSubmit = (event) => {
        event.preventDefault(); //prevent any default behaviour so we have control
        if(!value){ //if there is no value when trigger handleSubmit, dont add anything
            return;
        }
        addTodo(value); //if there is value, add to the list
        setValue(""); //reinitialise the useState

    };

    return( //trigger handleSubmit
        <form onSubmit={handleSubmit}> 
            <input 
            value = {value} //get useState default value
            type="text" 
            placeholder = "Add Todo..." 
            onChange={(event) => setValue(event.target.value)} //trigger setvalue
            />
        </form>
    );
}

export default TodoForm;