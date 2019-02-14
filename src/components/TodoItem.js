// created with ES7 React / Redux / GraphQL / React - Native snippets
// keystroke: rec+TAB
import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        // using ternary
        return {
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            backgroundColor: this.props.todo.completed ? "red" : "none",

        }
        // using if/else
        // if(this.props.todo.completed) {
        //     return {
        //         backgroundColor: "red",
        //         textDecoration: "line-through"
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    }
  
    render() {
    return (
    //<div style={{ backgroundColor: "#f4f4f4" }}>
      <div style={ this.getStyle() }>
         <p> Todo Item: {this.props.todo.title} </p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

//Style
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }
export default TodoItem;
