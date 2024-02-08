import axios from 'axios'
import { useState, useEffect } from 'react'

const PersonList = ({list}) =>{
  return(
    <ul>
    <ListItem items={list}/>
    </ul>
  )
}
const ListItem = ({items}) =>{
  return(
    <div >{items.map((item, i) =><li key={i}>{item.name} {item.number}</li>)}</div>
  )
}
const PersonForm = ({name, number, namehandler, phonehandler, addperson}) => {
  return(
        <form onSubmit={addperson}>
        <div>name: <input value={name} onChange={namehandler}/></div>
        <div>number: <input value={number} onChange={phonehandler}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}
const Filter = ({handleFilterChange, filterName}) => {
  return(
    <div>
      Filter name with <input onChange={handleFilterChange} value={filterName}/>
    </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notes, setNotes] = useState([])
  const url = "http://localhost:3001/notes"
  
  const hook = () =>{
    console.log("effect")
    axios
      .get(url)
      .then(response=>{
        const notesData = response.data
        setNotes(notesData)
      })
  }

  useEffect(hook, [])
  console.log(notes)
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    persons.find(e => e.name === personObject.name) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} filterName={filterName}/>
      <PersonForm 
      name={newName} 
      number={newNumber} 
      onSubmit={addPerson} 
      namehandler={handleNameChange} 
      phonehandler={handlePhoneChange}
      addperson={addPerson}/>
      <h2>Numbers</h2>
        <PersonList list={persons.filter(person => person.name.includes(filterName))}/>
    </div>
  )
}
export default App 