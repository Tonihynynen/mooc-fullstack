require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const people = require('./models/people')


app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.get("/", (request, response) => {
  response.status(200).send("<div>Hello world!</div>")
})

app.get("/info", (request, response) => {
  const pCount = `Phonebook has info for ${persons.length} people`
  const time = new Date()
  response.send(`<div>${pCount}</div><div>${time}</div>`).end()
})

app.get('/api/persons', (request, response) => {
  people.find({}).then(result => {
    response.status(200).json(result)
  })
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  people.findById(id).then(result => {
    console.log(result)
    if (result) {
      response.status(200).json(result)
    } else {
      response.status(404).end()
    }
  }).catch(error => {
    console.log(error)
    response.status(500).end()
  })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = String(request.params.id)
    people.findByIdAndDelete(id).then(result => {
      response.status(200).json({result})
    })
})

app.post("/api/persons", (request, response) => {
    const body = request.body
    if (!body.name && !body.number) {
      return response.status(400).json({"error":"Content missing!"})
    }
    const newPerson = new people({
      name: body.name,
      number: body.number,
    })
    newPerson.save().then(savedPerson =>{
      response.json(savedPerson)
    })
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001 
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})