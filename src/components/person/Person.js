import React from 'react';
import PropTypes from 'prop-types'

import styles from './Person.css';
import wrapperWithClass from '../hoc/wrapperWithClass'
import Aux from '../hoc/Aux'
class Person extends React.Component{

    componentDidMount(){
        console.log('[Person.js] componentDidMount');
        if(this.props.position == 0) {
            this.inputElement.focus()
        }
    }

    render() {
        console.log("Person.js render");
        return (
            <Aux>
                <p>
                    I'am <b onClick={this.props.onDeleteClicked}>{this.props.name}</b> and i'am <b>{this.props.age}</b> years old
                </p>
                <input type="text" ref={(pointer) => this.inputElement = pointer } onChange={this.props.onChange} value={this.props.name}/>
            </Aux>
        );
    }

}

Person.propTypes = {

    onDeleteClicked:PropTypes.func,
    onChange:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number
};


export default wrapperWithClass(styles.Person,Person);