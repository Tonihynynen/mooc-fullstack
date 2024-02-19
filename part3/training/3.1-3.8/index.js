const express = require('express')
const app = express()
const morgan = require('morgan')
let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-53223523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
      id: 4,
      name: "Mary Poppendick",
      number: "39-23-6423122"
    }
  ]
const requestLogger = (request, response, next) => {
    console.log("Request logger:")
    console.log("--->")
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('<---')
    next()
}
app.use(express.json())
app.use(requestLogger)
morgan.token("body",(request) => JSON.stringify(request.body))
//app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))
app.use(morgan("tiny"))
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.get("/", (request, response) => {
  response.status(200).send("<div>Hello world!</div>")
})

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(n=>n.id)) : 0
  return maxId + 1
}

app.get("/info", (request, response) => {
  const pCount = `Phonebook has info for ${persons.length} people`
  const time = new Date()
  response.send(`<div>${pCount}</div><div>${time}</div>`).end()
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person){
       response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post("/api/persons",morgan(":method :url :status :res[content-length] - :response-time ms :body"),(request, response)=>{
    const body = request.body
    const nameExist = persons.some(person => person.name === body.name)
    if (!body.name && !body.number) {
      return response.status(400).json({"error":"Content missing!"})
    }
    if (nameExist){
      return response.status(400).json({ error: 'name must be unique'})
    }
    const person = {
      id: generateId(),
      name: body.name,
      number: body.number,
    }
    persons = persons.concat(person)
    response.json(person)
})

app.use(unknownEndpoint)

const PORT = 3001
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})