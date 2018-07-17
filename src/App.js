import React, {Component} from 'react';

import PersonList from './components/person/PersonList'
import TogglePerson from './components/person/TogglePerson'
import styles from './App.css';


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


        return (
            <div className={styles.App}>
                <TogglePerson isPersonsShown={this.state.showPersons} onToggle={this.togglePersonsList}/>
                <PersonList
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    onChangeHandler={this.onChangeHandler}
                    onPersonDelete={this.onPersonDelete}/>
            </div>
        );
    }
}

export default App;
