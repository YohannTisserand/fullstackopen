import { useState, useEffect } from 'react'
import PersonForm from './components/personForm'
import Content from './components/content'
import Filter from './components/filter'
import axios from 'axios'

const App = ({person}) => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [error, setError] = useState("");

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

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

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.filter((person) => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
    const newObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newObject))
    setNewName('')
  }  
}

  return (
    <div>
      <h2>Phonebook</h2>
      <em>{error}</em>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>Add a New</h2>
      <PersonForm onSubmit={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Content persons={persons} />
    </div>
  )
}

export default App
