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

app.get('/', (request, response) => {
  response.send(persons)
})

app.get('/info', (request, response) => {
  const date = new Date().toISOString()
  const people = persons.map(person => person.id)
  response.send(`
  <div>Phonebook has info for ${people.length} people</div>
  <div>${date}</div>
  `)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
