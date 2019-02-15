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

				