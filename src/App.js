import React, {Component} from 'react';

import Person from './components/person/Person'
import './App.css';
class App extends Component {
    state = {
        persons:[
            { name:"Aromal", age:28 },
            { name:"Adarsh", age:30 },
            { name:"Shiju", age:40 }
        ],
    }
    switchTextHandler = () => {
        console.log("Hello");
    }
    render() {
        return (
            <div className="App">
                <h1>Hello from react app</h1>
                <p>This is really working!</p>
                <button onClick={this.switchTextHandler}>Switch text</button>
                <Person data={this.state.persons[0]}/>
                <Person data={this.state.persons[1]}/>
                <Person data={this.state.persons[2]}> my hobby</Person>
            </div>
        );
    }
}

export default App;
