import { useState } from 'react'

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
const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '044-1234567' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <PersonList list={persons}/>
    </div>
  )

}
export default App 