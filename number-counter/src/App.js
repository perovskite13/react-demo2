import React from "react";
//import ChangeNumber from "./components/ChangeNumber"; 
import logo from './logo.svg';
import './App.css';

//app.js
//import Form from "./components/Form";

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          count: 0
      }
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)


  }
  
  increment() {
    //this.setState({ count: 1 })
    this.setState(prevState => {
      return {
          count: prevState.count + 1
      }
  })
  }

  decrement() {
    //this.setState({ count: 1 })
    this.setState(prevState => {
      return {
          count: prevState.count - 1
      }
  })
  }
  
  render() {
      return (
          <div className = "App">
            <div className = "App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1> Cool Number Counter</h1>
              <h2>Plus or Minus?:</h2>
              <h1>{this.state.count}</h1>
              <div >
                <button className = "button" onClick={this.decrement}> - </button>
                <p>  </p>
                <button className = "button" onClick={this.increment}> + </button>
              </div>
              
              </div>
          </div>
      )
  }
}

// function App(){
//   //variables //storing the information in variables
//   const [number, setNumber] = useState(
//     0
//   );


//   // function handleClick(){
//   //   setNumber(number);
//   // }

//   // const change = (index) =>{
//   //   console.log(index);
//   //   const newNumber = [...number];
//   //   setNumber(newNumber)
//   // };

//   //template
//   return (
//   <div className = "App"> 
//   <div className = "App-header">
//     <h1> Cool Number Counter</h1>
//     <h2>Plus or Minus?:</h2>
//     <button onClick={this}
//     {/* <ChangeNumber number={number} n={1}/> */}
//     <img src={logo} className="App-logo" alt="logo" />
//   </div>
// </div>
//   );
// }

export default App;


