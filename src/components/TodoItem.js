// created with ES7 React / Redux / GraphQL / React - Native snippets
// keystroke: rec+TAB
import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p> Todo Item: {this.props.todo.title} </p>
      </div>
    );
  }
}

export default TodoItem;
