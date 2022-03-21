const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://yohann:${password}@cluster0.w9ose.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.connect(url)

const PhonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const PhoneBook = mongoose.model('PhoneBook', PhonebookSchema)

const phonebook = new PhoneBook({
  "name": "Arto Hellas",
  "number": "040-123456"
})

phonebook.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
