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
        title: "Throw trash",
        completed: false
      },
      {
        id: 3,
        title: "Throw trash",
        completed: false
      }
    ]
  };

  render() {
    console.log(this.state.todos); // just to show the state in console
    return (
      <div className="App">
        <h1> 🦐MY REACT APP🦀 </h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
