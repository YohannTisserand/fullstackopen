const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]
const incrementId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(person => person.id))
    : 0
  return maxId + 1
}

app.get('/persons', (request, response) => {
  response.send(persons)
})

app.get('/persons/info', (request, response) => {
  const date = new Date().toISOString()
  const people = persons.map(person => person.id)
  response.send(`
  <div>Phonebook has info for ${people.length} people</div>
  <div>${date}</div>
  `)
})

app.get('/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const people = persons.find(person => person.id === id)
  response.send(people)
})

app.post('/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: incrementId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

app.delete('/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  people = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
