import React from 'react'
import Radium from 'radium'
import styles from './TogglePerson.css'
const TogglePerson = (props) => {




    if (props.isPersonsShown){
        // style.backgroundColor = "red";
        // style[":hover"] = {
        //     backgroundColor : "salmon",
        //     color:"black"
        // }

    }

    return(
        <button
            className={styles.TogglePerson}
            onClick={props.onToggle}>
            Toggle Persons
        </button>
    )

};



export default Radium(TogglePerson);