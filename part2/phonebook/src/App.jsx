import { useEffect, useState } from 'react'
import "./App.css"
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from "./services/persons";
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchText, setSearchText] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState(true);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons));
  }, [])
  console.log('length', persons.length);

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleSearchTextChange = (e) => setSearchText(e.target.value);

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const duplicatedPerson = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase());

    setNewName('');
    setNewNumber('');

    if (duplicatedPerson) {
      if (!confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) return;
      console.log('person', duplicatedPerson);

      personService
        .update(duplicatedPerson.id, personObject)
        .then(returnedPerson => setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson)))
        .then(() => {
          setMessageColor(true)
          setMessage(`Number changed ${personObject.name}`)
          setTimeout(() => setMessage(null), 5000);
        })
        .catch((error) => {
          console.log(error);
          setMessageColor(false)
          setMessage(error.message)
          setTimeout(() => setMessage(null), 5000);
        })

    } else {
      personService
        .create(personObject)
        .then(returnedPerson => setPersons(prev => [...prev, returnedPerson]))
        .then(() => {
          setMessageColor(true)
          setMessage(`Added ${personObject.name}`)
          setTimeout(() => setMessage(null), 5000);
        })    
    }
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(searchText.toLowerCase())
  );

  //console.log(filteredPersons);

  const deletePerson = (id, name) => {

    if (!confirm(`Delete ${name} ?`)) return;

    personService
      .deletePerson(id)
      .then(() => setPersons(persons.filter(person => person.id !== id)))
      .catch(error => console.error('Error deleting person', error));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageColor={messageColor} />
      <Filter value={searchText} onChange={handleSearchTextChange}/>
      <PersonForm 
        onSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        handleName={handleNameChange}
        handleNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDeletePerson={deletePerson} />
    </div>
  )
}

export default App;
