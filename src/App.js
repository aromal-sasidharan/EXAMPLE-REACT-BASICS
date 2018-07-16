import React, {Component} from 'react';

import Person from './components/person/Person'
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: "Aromal", age: 28, id:Math.random()},
            {name: "Adarsh", age: 30, id:Math.random()},
            {name: "Shiju", age: 40,  id:Math.random()},
        ],
        showPersons: true
    };
    onPersonDelete = (key) => {
        this.setState(prevState => {
                return {
                    persons: prevState.persons.filter((person) => {
                        return person.id !== key
                    })
                }
            }
        );

    };
    onChangeHandler = (event,id) => {

        const persons = [...this.state.persons];
        const index = persons.findIndex( person =>{
           return person.id === id
        });
        if (persons[index]) {
            persons[index].name = event.target.value;
            this.setState({
                persons: persons
            });
        }
    };
    togglePersonsList = () => {
        const doShow = this.state.showPersons;
        this.setState(
            {
                showPersons: !doShow
            }
        );
    };

    render() {
        const style = {
            backgroundColor: "#eee",
            border: "1px solid blue",
            cursor: "pointer"
        };
        const persons = this.state.showPersons ? (

            <div>
                {this.state.persons.map((person) => {
                    return <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        onChange={(event) => this.onChangeHandler(event,person.id)}
                        onDeleteClicked={() => {
                            this.onPersonDelete(person.id)
                        }}
                    />
                })
                }
            </div>
        ) : null;

        return (
            <div className="App">
                <button
                    style={style}
                    onClick={this.togglePersonsList}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
