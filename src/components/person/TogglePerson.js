import React from 'react'
import styles from './TogglePerson.css'
const TogglePerson = (props) => {

    const className = (props.isPersonsShown == false)? styles.TogglePerson : styles.TogglePerson + ' ' + styles.Red;
    return(
        <button
            className={className}
            onClick={props.onToggle}>
            Toggle Personsx
        </button>
    )

};



export default TogglePerson;