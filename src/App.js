import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Throw trash',
        completed: false
      },
      {
        id: 2,
        title: 'Wash Dishes',
        completed: false
      },
      {
        id: 3,
        title: 'Shovel Snow',
        completed: false
      }
    ]
  };

  // this toggles complete when checkbox is clicked
  markComplete = id => {
    // console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    // console.log(id); to test it first
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    console.log(this.state.todos); // just to show the state in console
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
