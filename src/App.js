import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
     todos: [
    //   {
    //     id: uuid.v4(),
    //     title: 'Throw trash',
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: 'Wash Dishes',
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: 'Shovel Snow',
    //     completed: false
    //   }
    ]
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      // .then(res => console.log(res.data))
      .then(res => this.setState({ todos: res.data }))
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

  addTodo = title => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    console.log(this.state.todos); // just to show the state in console
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
