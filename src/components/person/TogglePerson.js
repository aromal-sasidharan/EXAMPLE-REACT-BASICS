import React from 'react'
import styles from './TogglePerson.css'
const TogglePerson = (props) => {

    const className = (props.isPersonsShown == false)? '' : styles.Red;
    return(
        <div className={styles.TogglePerson}>
            <button
                className={className}
                onClick={props.onToggle}>
                Toggle Personsx
            </button>
        </div>
    )

};



export default TogglePerson;