import React from 'react'


const Person = (props) => {
    let person = props.data
    return (

        <div>
            <p>I'am <b>{person.name}</b> and i'am <b>{person.age}</b> years old</p>
            <p>
                {props.children}
            </p>
        </div>
    );

};

export default Person;