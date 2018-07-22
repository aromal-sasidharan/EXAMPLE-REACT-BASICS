import React from 'react';
import styles from './Person.css';

class Person extends React.Component{

    render() {
        console.log("Person.js render");
        return (
            <div className={styles.Person}>
                <p>I'am <b onClick={this.props.onDeleteClicked}>{this.props.name}</b> and i'am <b>{this.props.age}</b> years old</p>
                <input type="text" onChange={this.props.onChange} value={this.props.name}/>
            </div>
        );
    }

};

export default Person;