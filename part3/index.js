require('dotenv').config()
// const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')
const PORT = process.env.PORT

app.use(express.json())

morgan.token('data',(request)=>{
  if(request.method=='POST')
    return ' '+ JSON.stringify(request.body)
  else
    return ' '
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.use(cors())

app.use(express.static('build'))

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/info', (request, response) => {
  const date = new Date().toISOString()
  const person = persons.map(person => person.id)
  response.send(`
  <div>Phonebook has info for ${person.length} people</div>
  <div>${date}</div>
  `)
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.put('/api/persons/:id', (request, response, next) => {
  const { name, number  } = request.body

  Person.findByIdAndUpdate(request.params.id,
    { name, number },
    {new: true, runValidators: true, context: 'query'}
  )
    .then((updatedPerson) => {
      response.json(updatedPerson)
    })
    .catch((error) => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })
  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id'})
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})