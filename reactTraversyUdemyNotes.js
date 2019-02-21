Some Environment set-up:

Used the following extensions: 
    - bracket pair colorizer 
    - react redux graphql reactnative snippets
    - live server 
    - prettier

Installed packages for react
    > npm --version
    > sudo npm install -g create-react-app
    > create-react-app contactManager
    > cd contactManager
    > code .
    > npm start 
    > cntrl-c to stop it 
    > npm run build (to make the deployablable /complied version in build folder)


Added these settings in JSON of VScode: 

        "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
        "emmet.syntaxProfiles": {
        "javascript": "jsx",
            "javascript": "html"

ES 6 Refresher part 1


ES 6 Refresher part 2 and 3 

1. SPREAD
    - can open up arrays and objects
    eg. 
        const arr = [1,2,3];
        const arr2 = [...arr, 4]; -> [1,2,3,4]
        const arr3 = [...arr.filter(num => num !===2)];
            -> [1,3] // filters the contents of arr, takes each element(num) and filters out the elements that don't equal 2

        const person2 = {
            ...person1,
            email: "brad@gmail.com"
        };
        // adds the key/value email to the object person1

2. DESTRUCTURING
    - Pulling out and naming an objects key/values
    eg. 
        const profile = {
            name: "john",
            address: {
                street: '40 main st',
                city: "Boston"
            },
            hobbies: ['movies', music']
        };

        const { name, address, hobbies } = profile;
        console.log(name, adress.street, hobbies[0]);
        // --> John 40 main st movies
        const { street } = profile.address;
        console.log(street);
        // -->  40 main st 

            https://wesbos.com/destructuring-objects/

            const person = {
                first: 'Wes',
                last: 'Bos',
                country: 'Canada',
                city: 'Hamilton',
                twitter: '@wesbos'
            };
            const first = person.first;
            const last = person.last;
            You get the point.You’ve got this pretty much repetitive code over and over again, where you need to make a variable from something that is inside of an object or inside of an array.What we could do instead of creating multiple variables, we destructure them in a single line like so:

            const { first, last } = person;
            Curly bracket on the left of the equals sign ? !That is not a block.That is not an object.It’s the new destructuring syntax.

            The above code says, give me a variable called first, a variable called last, and take it from the person object.We’re taking the first property and the last property and putting them into two new variables that will be scoped to the parent block(or window!).

                Js
            console.log(first); // Wes
            console.log(last); // Bos
            Similarly, if I also wanted twitter, I would just add twitter into that, and I would get a third top level variable inside of my actual scope const { first, last, twitter } = person;

            That’s really handy in many use cases.This is just one nested level, but for example, in React.js often you want to use destructuring because the data is so deeply nested in props or state.

                Let’s say we have some deeply nested data like we might get back from a JSON api:

            Js
            const wes = {
                first: 'Wes',
                last: 'Bos',
                links: {
                    social: {
                        twitter: 'https://twitter.com/wesbos',
                        facebook: 'https://facebook.com/wesbos.developer',
                    },
                    web: {
                        blog: 'https://wesbos.com'
                    }
                }
            };
            I want to be able to pull out Twitter and Facebook URLs here.I could do this like it’s 1994 and we’re all running around with walkmans:

            Js
            const twitter = wes.links.social.twitter;
            const facebook = wes.links.social.facebook;
            // Annoying!
            We can use destructuring to do it one better!

            Js
            const { twitter, facebook } = wes.links.social;
            console.log(twitter, facebook); // logs the 2 variables 
            Notice how we destructure wes.links.social and not just wes ? That is important because we are destructuring a few levels deep.

3. CLASSES 
        - basically an object prototyper, specified the objects data and methods
    eg.
    class Person {
        constructor (name, age) {
            this.name = name;
            this.age = age;;
        }
        greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        } 
    }

    const person1 = new Person('Sara', 20);
    const person2 = new Person ('Bob', 45);

    console.log(person1.name); // 'Sara'
    console.log(person2.greet()); "Hello my name is Bob and I am 45 years old."

4. SUBCLASSES
        - using an existing class as part of a new class/subclass
    eg.
    class Customer extends Person {  / in react we do class Components extends React.component, ie we use one of react's classes as a base for our class 
        constructor(name, age, balance) {
            super(name, age); // calls the Person class and puts the required arguments(name, age)
            this.balance = balance;
        }
        info() {
            return `${this.name} owes $${this.balance}.`;
        }
    }
    const customer1 = new Customer('Kevin', 32, 300);
    console.log(customer1.name);  // 'Kevin'
    console.log(customer1.info()); "Kevin owes $300."

5. MODULES
    - way to share data between different files
    eg. 
    file 1 (file1.js)
        export const name = 'Jeff';
        export const nums = [1,2,3];
        export default Person; // Person class

    file 2 (file2.js)
        import {name, nums} from './file1';
        import Person from '.file1';  // no {} becuase we exported default
    import { resolveComponents } from 'uri-js';

Section 3 Components, JSX, and Props

14. JSX - a js extension that enables HTML in javascript.
        
    Some Rules:
            1. class=> className 
            2. for => htmlFor
            3. Need ending slashes <br> ==> <br/>
            4. Need to return only one parent element ("enclosing tag")

    JSX is just syntax sugar (kinda like how jquery makes js functions easier)
    eg. 

        class App extends Component {
            render() {
                return (
                    <div className='App'>
                        <hi>The App Component</hi>
                    </div>
                );
            }
        }
    // is the same as
        class App extends Component {
            render() {
                return React.createElement(
                    'div',
                    { className: 'App'},
                    React.createElement('h1', null, "The App Component")
                );
            }
        }
    // react creates an element with the property of className.
    // JSX just makes it easier to write and understand

15/16. Creating a component

        - in SRC 
            > mkdir components 
            > cd components 
            > touch Contact.js
        -  rcc+tab  - class based component snippet
            import/export it to app.js

        -  > touch Headers.js
           -  rfc+tab - functional component

           note that we can simply make a function like this: 

                    import React from 'react';

                    function Header() {
                        return (
                            <div>
                                    <h1>Contact Manager</h1>
                                </div>
                        );
                    }

                    export default Header; 

           // or same thing with arrows 
                    import React from 'react';
import { createDecipher } from 'crypto';

                    const Header = () => {
                        return (
                            <div>
                                <h1>Contact Manager</h1>
                            </div>
                        );
                    }

                    export default Header; 

17. Passing Props

    - Passing Props (in a functional component)

            in app.js we pass the props, here we call it branding
                    <Header branding='contact manager' />
            in Header.js we grab the props, we pass it the props in as a parameter and call it in the JSX
                    const Header = (props) => {
                        return (
                            <div>
                                <h1>{props.branding}</h1>
                            </div>
        - /* Passing  Props (in a class component we add this.props, and no need to put as a parameter) 

            in app.js
                    <Contact name='John Doe' email='jdoe@gmail.com'/>
                    <Contact name='Karen Smith' email='ksmith@gmail.com' />
            in Contact.js
                    <h4>{this.props.name}</h4>
                    <ul>
                        <li>Email: {this.props.email}</li>
                        <li>Phone: {this.props.phone}</li>
                    </ul>
             
         - destructure the this.props
         in Contact.js
         render() {
             const { name, email, phone } = this.props;
         }    //then change the calls to just {name} etc..
         in Header.js
            const { branding } = props; ...

18. Typechecking with PropTypes

         - default props in Header.js, so if you dont pass in anything, the default with show up

         just above export:

            Header.defaultProps = {
                branding: 'My App'
            };

        - import PropTypes from 'prop-types'; in Header.js
            // imp+tab is the snippet;

            Header.propTypes = {
                branding: PropTypes.object.isRequired
            };

         -import Proptypes from 'prop-types'; in Contact.js

            Contact.propTypes = {
                name: PropTypes.string.isRequeired,
                email: PropTypes.string.isRequeired
            };

            // alternatively, you can also put it in the class under class's firts line 
            // both ways work 

            class Contact extends Component {
                static propTypes = {
                    name: PropTypes.string.isRequired,
                    email: PropTypes.string.isRequeired
                };
                render...
            }

19. CSS in React

       3 ways:  
        - In-line by using double brackets, quotes, and camelCase styleNames(eg. fontSize)
            <h1 style={{color: 'red', fontSize: '50px'}}
        - Put it outside the JSX in a const in the same file
            <h1 style={headingStyle}>...

            const headingStyle = {
                color: 'green',
                fontSize: '50px'
            };
        - Separate .css file 
            // in contact.css add plain css 
                eg 
                    h4 {
                        color: blue;
                        text-transform: uppercase;
                    }
            // in contact.js, import it
                   import './contact.css'; 

        // brad tends to just use a global css in app.css

20. Adding Bootstrap
    
    > npm install bootstrap // then it should be in the package.json after 
    in App.js
        import 'bootstrap/dist/css/bootstrap/min.css';
    in Header.js
                    return (
                        <nav className='navbar navbar-expand-sm.navbar-dark bg-danger mb-3 py-0" /> 
                        //  mb (margin bottom) py (padding on y axis)
                            <div className='container'>
                                <a href='/' className="navbar-brand"> {branding} </a>
                                <div>
                                    <ul> className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <a href='/' className='nav-link'> Home </a> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    );
                    //  note li.nav-link + tab --> shortcut for snippet <li className='navlink'
                    // mr-auto (move right auto)
    in Contact.js */
                    class Contact extends Component {
                        render() {
                            const { name, email, phone } = this.props;

                            return (
                                <div className='card card-body mb-3'>
                                    <h4>{name}</h4>
                                    <ul className='list-group'>
                                        <li className='list-group-item'Email: {email}></li>
                                        <li className='list-group-item'Phone: {phone}></li>
                                    </ul>
                                </div>
                            );
                        }
                    }

    in App.js wrap everything under the header in a container class, to make it line up better
                    <div className="container">..all the other stuff...</div>

SECTION 4 
STATE AND THE CONTEXT API

21. Creating State

    - make Contacts.js class-based component  
       - rcc+tab 
       - state = {
               contacts: [
                   {
                       id: 1,
                       name: 'john doe',
                       email: 'jdoe@gmail.com',
                       phone: '555-5555-5555'
                   },
                   // add more people...
               ]
           } 
        render() {
            const { contacts } = this.state; // destructuring
            return (
                <div> 
                    {contacts.map(contact => ( // loop thru it with map
                        <h1>{contact.name}</h1> 
                    ))}
                </div>
            )
        }
    - in App.js change contact.js import to contacts

    - imp+tab for import shortcut 
      in Contacts,  import contact from contact
import { ENOTCONN } from 'constants';
import { convertPatternGroupToTask } from 'fast-glob/out/managers/tasks';
        then change < h1 > { contact.name }</h1 >  to 
        <Contact key={conact.id} name={contact.name} email={contact.email} phone={contact.phone} />
        // we brought it the contact component into the contacts component 
        // passing along the state props
    
    - pass in entire contact object instead
        <Contact key={contact.id} contact={contact} />
    - change contact.js to expect an object instead of name,email,tel
        change const { name, email, phone } = this.props;
         to    const { contact } = this.props;
        change the name to contact.name etc... 

        or simply change to 
            const { name, email, phone } = this.props.contact;
     - then change proptypes in contact.js to object
     
22. Events in React

        - get fontaweosome, put CDN link in index.html 
            next to {name} in Contact add <i className= 'fas fa-sort-down' />
        - add < i onClick={this.onShowClick}... 
            make the onShowClick method