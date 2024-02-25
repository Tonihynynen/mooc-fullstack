import axios from 'axios'
const baseUrl = '/api/persons'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addNew = (personObject) => {
    console.log(personObject)
    const request = axios.post(baseUrl, personObject)
    return request.then(response => response.data)
}

const updatePerson = (person, id) => {
    const url = `${baseUrl}/${id}` 
    const request = axios.put(url,person)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const url = `${baseUrl}/${id}`
    const request = axios.delete(url, id)
    return request.then(response=>response.data)
}

export default {getAll, addNew, updatePerson, deletePerson}