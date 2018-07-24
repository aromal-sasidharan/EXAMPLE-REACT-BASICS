import React from 'react'
import styles from './TogglePerson.css'
const TogglePerson = (props) => {

    const className = (props.isPersonsShown === false)? styles.TogglePerson : [styles.TogglePerson, styles.Red].join(' ');
    return(

            <button
                className={className}
                onClick={props.onToggle}>
                Toggle Persons
            </button>

    )

};



export default TogglePerson;