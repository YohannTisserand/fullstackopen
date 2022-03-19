const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (request, response) => {
  response.send('hello world')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})