import React from "react";

function ChangeNumber(props){

    console.log(props);
    const { number, n} = props;
    const num = n;
    var newNumber = number + n;
    console.log(newNumber);
    //return <div> {newNumber}</div>;
    return (
    <div> 
        <button onClick={() => newNumber}> Change</button>
    </div>
    );
}

export default ChangeNumber;