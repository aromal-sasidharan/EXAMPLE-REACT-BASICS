import React from 'react';
import styles from './Person.css';

const Person = (props) => {
    if (Math.random() > 0.7)
    {
        throw new Error("Opps something is wrong")
    }
    return (

        <div className={styles.Person}>
            <p>I'am <b onClick={props.onDeleteClicked}>{props.name}</b> and i'am <b>{props.age}</b> years old</p>
            <input type="text" onChange={props.onChange} value={props.name}/>
        </div>
    );

};

export default Person;