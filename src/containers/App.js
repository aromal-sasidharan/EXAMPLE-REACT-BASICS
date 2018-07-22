import React, {PureComponent} from 'react';

import PersonList from '../components/person/PersonList'
import TogglePerson from '../components/person/TogglePerson'
import styles from './App.css';


class App extends PureComponent {
    state = {
        persons: [
            {name: "Aromal", age: 28, id:Math.random()},
            {name: "Adarsh", age: 30, id:Math.random()},
            {name: "Shiju", age: 40,  id:Math.random()},
        ],
        showPersons: false
    };
    constructor(props){
        super(props);
        console.log(`APP.js constructor `)
    }
    componentWillMount(){
        console.log("APP.js componentWillMount")

    }
    componentDidMount(){
        console.log("APP.js componentDidMount")
    }

    componentWillUpdate(nextProps,nextState) {
        console.log("[UPDATE APP.js] componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("[UPDATE APP.js] componentDidUpdate");
    }

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
        console.log("APP.js render");

        return (

                <div className={styles.App}>
                    <h1>{this.props.title}</h1>
                    <button onClick={()=> {this.setState({showPersons:true})}}> Show Always </button>
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
