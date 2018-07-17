import React from 'react';
import Person from './Person'

const renderPerson = (props) => {
    return props.persons.map((person) => {
        return <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onChange={(event) => props.onChangeHandler(event,person.id)}
            onDeleteClicked={() => {
                props.onPersonDelete(person.id)
            }}
        />
    })
};
const PersonList = (props) => {
  return (
      (props.showPersons) ? <div>{renderPerson(props)}</div> : null
  );
};

export default PersonList;