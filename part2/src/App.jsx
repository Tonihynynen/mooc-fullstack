import { useEffect, useState } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
const PersonList = ({list, delFunc}) =>{
  return(
    <ul>
    <ListItem items={list} delFunc={delFunc}/>
    </ul>
  )
}
const ListItem = ({items, delFunc}) =>{
  return(
    <div >{items.map((item, i) =><li key={i}>{item.name} {item.number}<button onClick={() => delFunc(item)} >delete</button></li>)}</div>
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
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorStatus, setErrorStatus] = useState(false)

  const hook = () => {
    personService.getAll()
    .then(response =>{
      setPersons(response)
    }).catch(error =>{
      console.log("from the error",error)
    })
  }
  
  useEffect(hook, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const filterPerson = persons.find(e => e.name === personObject.name)
    console.log(filterPerson)
    if (filterPerson !== undefined) {
      const text = `${newName} is already added to phonebook, replace the old number with a new one?`
      const confirm = window.confirm(text)
      if(confirm === true){
        personService.updatePerson(personObject,filterPerson.id)
        .then(response => {
          const copyPersons = [...persons]
          const updateNumber = copyPersons.findIndex(x => x.id === filterPerson.id)
          copyPersons[updateNumber] = response
          setPersons(copyPersons)
        }).catch(error =>{
          const addedPersonDetails = `Information of ${personObject.name} has already been removed from server`
          setErrorMessage(addedPersonDetails)
          setErrorStatus(true)
          setTimeout(()=>{
            setErrorMessage(null)
            setErrorStatus(false)
          }, 2000)
          return
        })
      }
    }
    else {
      personService.addNew(personObject).then(response =>{
        setPersons(persons.concat(response))
      })
    }
      setNewName('')
      setNewNumber('')
      const addedPersonDetails = `Added new person! ${personObject.name}`
      setErrorMessage(addedPersonDetails)
      setErrorStatus(false)
      setTimeout(()=>{
        setErrorMessage(null)
        setErrorStatus(false)
      }, 2000)
  }
  const deletePeson = (item) => {
    const itemId = item.id
    const confirm = window.confirm(`Delete ${item.name} ?`)
    if (confirm === true){
      personService.deletePerson(itemId).then(response => {
        setPersons(response)
      })
    }
    const deletedPerson = `Deleted person ${item.name}`
    setErrorMessage(deletedPerson)
    setErrorStatus(true)
    setTimeout(()=>{
      setErrorMessage(null)
      setErrorStatus(false)
    }, 2000)
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
      <Notification message={errorMessage} errorType={errorStatus}/>
      <Filter handleFilterChange={handleFilterChange} filterName={filterName}/>
      <PersonForm 
      name={newName} 
      number={newNumber} 
      onSubmit={addPerson} 
      namehandler={handleNameChange} 
      phonehandler={handlePhoneChange}
      addperson={addPerson}/>
      <h2>Numbers</h2>
        <PersonList list={persons.filter(person => person.name.includes(filterName))} delFunc={deletePeson}/>
    </div>
  )
}
export default App 