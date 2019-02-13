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
		
	Index.html <-- index.js <-- App.js <-- components
	
	- Clean up:
		1. delete index.css, stop importing it into index.js
		2. delete the logo.svg, stop importing it in app.js
		3. delete all the other JSX, just have the main div 
		4. update app.css
		
		