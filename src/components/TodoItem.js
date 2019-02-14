// created with ES7 React / Redux / GraphQL / React - Native snippets
// keystroke: rec+TAB
import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <p> Todo Item: {this.props.todo.title} </p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
export default TodoItem;
