import React from 'react';
import Person from './Person'


class PersonList extends React.PureComponent {

    constructor(props){
        super(props);
        console.log(`PersonList.js constructor `)
    }
    componentWillMount(){
        console.log("PersonList.js componentWillMount")

    }
    componentDidMount(){
        console.log("PersonList.js componentDidMount")
    }
    componentWillReceiveProps(nextProps){
        console.log("[UPDATE PersonList.js] componentWillReceiveProps")
    }

    componentWillUpdate(nextProps,nextState){
        console.log("[UPDATE PersonList.js] componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("[UPDATE PersonList.js] componentDidUpdate");
    }
    renderPerson = () => {
        return this.props.persons.map((person) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                onChange={(event) => this.props.onChangeHandler(event,person.id)}
                onDeleteClicked={() => {
                    this.props.onPersonDelete(person.id)
                }}
            />
        })
    };
    render(){
        console.log("PersonList.js render");
        return (
            (this.props.showPersons) ? <div>{this.renderPerson()}</div> : null
        );
    }

}

export default PersonList;