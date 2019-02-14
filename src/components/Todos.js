import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        console.log(this.props.todos);
        return this.props.todos.map( (todo)=> (
            // <h3>{ todo.title} </h3>
            <TodoItem />
        ));
        
    }
}

export default Todos;
