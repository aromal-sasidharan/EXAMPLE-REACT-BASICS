import React from 'react';
import styles from './Person.css';
import wrapperWithClass from '../hoc/wrapperWithClass'
import Aux from '../hoc/Aux'
class Person extends React.Component{

    render() {
        console.log("Person.js render");
        return (
            <Aux>
                <p>I'am <b onClick={this.props.onDeleteClicked}>{this.props.name}</b> and i'am <b>{this.props.age}</b> years old</p>
                <input type="text" onChange={this.props.onChange} value={this.props.name}/>
            </Aux>
        );
    }

};

export default wrapperWithClass(styles.Person,Person);