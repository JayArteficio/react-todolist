import upperCase = require("upper-case");
import { template } from "handlebars";

Traversy React Crash Course 2019

https://www.youtube.com/watch?v=sBws8MSXN7A&t=0s&index=2&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8

1. Code run in the client instead of the server.  View in MVC (model view controller).

2. Benefits: 
	- more organized, easier to build intricate components, faster as it only updates modified parts,
	- JSX enables using JS in markup.
	- Easier for teams to work on.
	
3. Pre-reqs:
	Classes, Destructing, forEach, map, filter, Arrow functions, Fetch API and promises. 
	
4. State 
	 - object that determines a component's behaviour, events can then dynamically update the state.
	 - Application level state is handled by React's context API or Redux.
	 
5. CLI tool to start Create-React-App 
	- uses webpack
	- hot reload,
	- "> npm run build" to compile
	
6. Components 

	- functional components uses react hooks for state
	- class-based component anatomy
		
		Class Post extends React.Component {
			// here is the state
			state = {
				title: "Post One",
				body: "This is my first Post"
			}
			
			render() {
				return (
				// here is the JSX (like JS embedded HTML/CSS
					<div>
						<h3>{ this.state.title }</h3>
						<p>{ this.state.body }</p>
					</div>
				)
			}
		}
		
7. Project is a TODO LIST APP

	- download react dev tools for chrome
	- on create-react-app github page 
		(in the folder you want, and update node if needed, download from the site)
		> npx create-react-app yourappname (npx only installs in app and not system vs npm)
		> cd YOUR-APP-NAME
		> code . (to open in Visual Code Studio)
		> npm start 
		then open localhost 3000 to see app
		
8. React Skeleton

	- public/index.html has id=root. main app goes into this. 
		and other components go into the main app. 
		fontawesome, bootstrap etc goes into this file
		
	-  src/index.js entery point of react. this puts app.js into index.html
		(serviceworker for progreesive webapps and offline content)
		
	public/index.html <-- src/index.js <-- src/App.js <-- components
	
9. Clean up:
		1. delete index.css, stop importing it into index.js
		2. delete the logo.svg, stop importing it in app.js
		3. delete all the other JSX in app.js , just have the main div 
		4. update app.css as to your liking
		5. take out service worker in index.js and file
		6. take out image files
	
10. make component folder
		- in src, mkdir components, cd components, touch Todo.js (first componenent)
		  (convention for components files is UpperCase.js)
		- copy app.js as a template
		- replace app with todos, remove css 
		
		Todos.js
				import React, { Component } from 'react';
				// removed css 

				class 👉 Todos extends Component { //replaced App with Todos
					render() {
						return (
							<div>
								<h1> Todos </h1>
							</div>
						);
					}
				}

				export default 👉 Todos; //replaced App with Todos

			- in app.js, import Todos.js

			App.js

import React, { Component } from 'react';
import Todos from './components/Todos'; // 👈 added this

import './App.css';
import TodoItem from "./src/components/TodoItem";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1> 🦐my react app🦀 </h1>
				<Todos />  // 👈 added components like a custom HTML tag
			</div>
		);
	}
}

export default App;

11. Making State in main App compoenent. 

	- simply an object with values of an array of objects like so:
	in App.js before render

		state = {
			todos: [
				{
					id : 1,
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
		}

		- can show state by console.logging or using React chrome dev tools 
		render() {
			console.log(this.state.todos); // will show the state in console
12. Passing the state into the Todos component as a property
	in app.js still:
		< Todos todos={this.state.todos} />
	in Todos.js 
	render() {
		console.log(this.props.todos);
		will show that the props have been passed, also in React dev tools

13. Displaying state in the markup
		- replace Todos return statement markup with a map of the todos array, that will give us desired JSX output 
		eg.
			return this.props.todos.map((todo) => (
				<h3>{todo.title} </h3>
			));
14. Install in VSCode to generate components more easily
		ES7 React / Redux / GraphQL / React - Native snippets

		in components folder, make TodoItem.js, and rec+TAB to generate a skeleton for a class-based component 

15. import TodoItem.js in Todos.js
		import TodoItem from './TodoItem';

16. Pass in Todos to todoitem as a prop, same pattern 
				in Todos.js 
			< TodoItem todo = { todo } />
				in TodoItem.js
			<p> {this.props.todo.title} </p>

17. Add unique id in list to avoid the error

			< TodoItem key = { todo.id } todo = { todo } />

18. PropTypes: validation tool for props 
		in Todos.js 
		import PropTypes from 'prop-types';

		and before export add 
		Todos.propTypes = {
			todos: PropTypes.array.isRequired
		}

19. do the same thing for todoItem 
		in TodoItem.js 
		import PropTypes from 'prop-types';
		//now, change the Todos to TodoItem (name of the class) and todos to todo and array to object
	👉	TodoItem.propTypes = {
	👉		todo: PropTypes.object.isRequired
		}

20. Recap for passing in props: 

		App.js 
			- has the state object
			- Passes that state.todos to the Todos.js component
				<Todos todos ={this.state.todos} />
		Todos.js
			- receives the todos prop (which is an array of objects) and can call it with
				this.props.todos
			- maps over it and passes the each todo item object into TodoItem.js with 
				<TodoItem todo={todo}/>
		TodoItem.js
			- recieves the todo prop with (which is an object)
				this.props.todo (in this case we get the .title)

21.  Adding styling inline to todoitems
			in todoItem.js
		A.		< div style = {{ backgroundColor: "#f4f4f4" }}>
			// use {{}} doubvle brackets for inline
			// instead of hyphens in CSS, use camelCase
		B. Using a variable
			// declare the variable
			const = itemStyle = {
				backgroundColor: '#f4f4f4'
			}
			// only use single brackets {} to call that variable
			< div style = { itemStyle }>

21. Adding style via function/method to make it dynamic (ie. change depending on state)

		A. simple way
			// make the styling method
				getStyle = () => {
					if (this.props.todo.completed) {
						return {
							backgroundColor: "red",
							textDecoration: "line-through"
						}
					} else {
						return {
							textDecoration: 'none'
						}
					}
				}
			// run it in the div's style 
				<div style={this.getStyle()}>
		
		B. Using a ternary operator 
				return {
					padding: '10px',
					borderBottom: '1px #ccc dotted',
					textDecoration: this.props.todo.completed ? "line-through" : "none",
					backgroundColor: this.props.todo.completed ? "red" : "#f4f4f4",
				}	
40 minutes

21. Add a check box input in TodoItem.js
				      <div style={this.getStyle()}>
						<input type="checkbox" />

22. Need events to trigger the checkbox
						
				// add event listener on input type 
		        <input type="checkbox" onChange={this.markComplete()} />

				// add the markComplete function, use arrows to avoid using bind.this

				markComplete = (e) => {
					console.log(this.props)
				}

43min

23. Without redux or webcontext api, we will have to "climb the ladder" or pass props down stream. 
	So in order to markComplete the checkbox, 
	we need to pass the state from app.js->Todo.js->TodoItem.js
	via props: 
				a. move markComplete() from TodoItem to Todos. 
				b. change this.markComplete() to this.props.markComplete
				c. in Todos.js,  add markComplete function just above render
					markComplete = () => {
						console.log("markComplete")
					}
				d. then  pass in the props,
					< TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} />
				e. Now we really want it to come from app.js' state so it has to go one more step up.
					- delete the markComplete() in Todos.js
					- still in Todos.js, change markComplete={this.markComplete} to 
											-->	markComplete={this.props.markComplete}
					- in App.js create markComplete() and pass in the function to Todos.js
						        <Todos todos={this.state.todos} markComplete={this.markComplete} />
					- Still in App.js, add the markComplete()
						markComplete = () => {
							console.log("from app.js")
						}

Aside: in keybindings.json I added this for custom console.log 
		// custom keybinding to make console.log with cursor inside
			"key": "cmd+l",
			"command": "editor.action.insertSnippet",
			"when": "editorTextFocus",
			"args": {"snippet": "console.log('$0');"}
			
24. Add id when we click on the check, we need to bind the id;
		in TodoItem.js change this 
			<input type="checkbox" onChange={this.props.markComplete} />
		to 
			<input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />

25. Use destructing to simplify the code (Todo: need to fully undertsand how the props are passed up)

		in TodoItem.js above return:
			const { id, title } = this.props.todo;
		change         <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />
						<p> Todo Item: {this.props.todo.title} </p>

		to 		        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        				<p> Todo Item: {title} </p>

		this passed the id up, so now in app.js, can now pass in id in markcomplete
		  markComplete = (id) => {
							console.log(id)
						}

26. Now  we can change the state in App.js and toggle completed to true and false 

	markComplete = (id) => {
		// console.log(id)
		this.setState({ todos: this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		}) })
	}

Need to understand setSate better.
// React dev interview questions
NOTE: https://medium.com/@baphemot/a-react-job-interview-recruiter-perspective-f1096f54dd16

note: Best setState link so far:
		https://css-tricks.com/understanding-react-setstate

		Wrapping Up
		When working with setState(), these are the major things you should know:

		Update to a component state should be done using setState()
		You can pass an object or a function to setState()
		Pass a function when you can to update state multiple times
		Do not depend on this.state immediately after calling setState() and make use of the updater function instead.

min 50. 

Okay, I got it. 
		{/* setState is a function that takes in an object or a function that 
		returns an object that will update state. Often times we use a function to 
		determine the value.  (aside, we use functions to avoid problems with setState's 
		asynchronous nature) */}
		// in the state object, we set the key 'todos' with a map function 
		// ie. we are passing in an object with a method as the value
		this.setState({ todos: this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		}) })

27. Adding Delete Button 

		in TodoItem.js add a button after the title
		<button style={btnStyle}>delete</button>

		const btnStyle = {
			background: '#ff0000',
			color: '#fff',
			border: '2px 0px',
			padding: '7px 10px',
			borderRadius: '10%',
			cursor: 'pointer',
			float: 'right'
		}

		add onClick on the button
			<button onClick={this.props.delTodo.bind(this, id)} style=... // remeber to bind 

		in Todos.js  add the go-between in TodoItem 
			<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />

		in App.js in todos make the function and pass it down add above render 
			<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />							

			delTodo = (id) => {
				// console.log(id); to test it first 
				this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
			}
					  
28. Make Header function-based Component (only has a return)

		in components folder, mkdir layout, cd to it, touch Header.js
						
		rfc+tab( just return an h1 for now 

		import it in the app.js, add it above the todos <Header />

		add some styling

29.  Adding Todo Function Component

		- make AddTodo.js component 
			import React, { Component } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            style={{ flex: '10' }}
        />
        <input
            type='submit'
            value='Submit'
            className='btn'
            style={{flex: '1'}}
        />
     </form>
    );
					  }
					}
								
							- Import then add it in App.js 
					
							import AddTodo from './components/AddTodo';
      <div className="App">
							<Header />
							<AddTodo />
					(wrap it all in a container as well)
		- Put some styling for btn in  App.css 
		
.container {
	padding: 0 1rem;
}

.btn {
	display: inline-block;
	border: none;
	background: #555;
	color: #fff;
	padding: 7px 20px;
	cursor: pointer;
}

.btn:hover {
	backgorund: #667;
}