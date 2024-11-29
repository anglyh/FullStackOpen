import React from "react";

const Persons = ({ persons, handleDeletePerson }) => {

  return (
    <ul> 
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDeletePerson(person.id, person.name)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
