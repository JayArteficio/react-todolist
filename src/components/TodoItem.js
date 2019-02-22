// created with ES7 React / Redux / GraphQL / React - Native snippets
// keystroke: rec+TAB
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    // using ternary
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: this.props.todo.completed ? 'red' : '#f4f4f4'
    };
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
  };

  //   markComplete = e => {
  //     console.log(this.props);
  //   };

  render() {
    const { id, title } = this.props.todo;
    return (
      //<div style={{ backgroundColor: "#f4f4f4" }}>
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>delete</button>
        </p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: '2px 0px',
  padding: '7px 10px',
  borderRadius: '10%',
  cursor: 'pointer',
  float: 'right',
}

//Style
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }
export default TodoItem;
