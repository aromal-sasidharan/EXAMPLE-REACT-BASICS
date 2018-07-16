import React, {Component} from 'react';

import Person from './components/person/Person'
import Radium from 'radium'
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
            backgroundColor: "green",
            color:"white",
            border: "1px solid blue",
            padding:"8px",
            cursor: "pointer",
            ':hover':{
                backgroundColor:"lightgreen"
            }
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
        if (persons){
            style.backgroundColor = "red";
            style[':hover'] = {
                backgroundColor:"salmon",
                color:"black"
            };
        }
        let classes  = [];


        if (this.state.persons.length <= 2){
            classes = ['red']
        }
        if (this.state.persons.length <= 1){
            classes = ['red','bold']
        }
        classes = classes.join(' ');
        return (
            <div className="App">
                <p className={classes}> This really works! </p>
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

export default Radium(App);
