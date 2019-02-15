import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Throw trash",
        completed: false
      },
      {
        id: 2,
        title: "Wash Dishes",
        completed: true
      },
      {
        id: 3,
        title: "Shovel Snow",
        completed: false
      }
    ]
  };

  markComplete = () => {
    console.log("from app.js")
  }
  render() {
    console.log(this.state.todos); // just to show the state in console
    return (
      <div className="App">
        <h1> 🦐MY REACT APP🦀 </h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
