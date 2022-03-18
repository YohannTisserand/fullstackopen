import { useState, useEffect } from 'react'
import PersonForm from './components/personForm'
import Content from './components/content'
import Filter from './components/filter'
import phoneBookService from './services/phoneBook'
import axios from 'axios'


const App = ({person}) => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [error, setError] = useState("");

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const regex = new RegExp( newFilter, 'i' );
    const filteredPersons = () => persons.filter(person => person.name.match(regex))
    setPersons(filteredPersons)
  }

  useEffect(() => {
    phoneBookService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personToUpdate = persons[0]
    const updatedPerson = { ...personToUpdate, number: newNumber }
    
    if (window.confirm(`${personToUpdate.name} is a user. Update?`)){
      phoneBookService
        .update(updatedPerson.id, updatedPerson)
        .then(response => {
          setPersons(persons.map(person => person.id !== personToUpdate.id ? person : response.data))
            setNewName('')
            setNewNumber('')
        })
   
    } else if (persons.filter((person) => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
      setTimeout(() => {
        setError("");
      }, 2000);

    const newObject = { name: newName, number: newNumber }
    phoneBookService
      .create(newObject)
      .then(response => {
        setPersons(persons.concat(newObject))
        setNewName('')
      })
    }
  } 

  const deleteUser = (id) => {
    if (window.confirm(`Are you sure?`)) {
      phoneBookService
        .erase(id)
        .then(response => {
          console.log(response.data)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <em>{error}</em>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>Add a New</h2>
      <PersonForm onSubmit={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Content persons={persons} deleteUser={deleteUser}/>
    </div>
  )
}

export default App
