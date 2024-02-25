const mongoose = require('mongoose')

console.log(process.argv.length)
if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const url =
  `mongodb+srv://toni:${password}@mooc.omupfhz.mongodb.net/?retryWrites=true&w=majority&appName=mooc`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const peopleSchema = new mongoose.Schema({
  name: String,
  number: String,
})
const Person = mongoose.model('people', peopleSchema)

if (process.argv.length === 3){
    console.log("phonebook:")
    const resultArray = []
    Person.find({}).then(persons => {
        const personNames = persons.map(p => p.name)
        const personNumbers = persons.map(p => p.number)
        persons.forEach((person) => console.log(`${person.name} ${person.}`))
        mongoose.connection.close()
  })
} else {
const personName = process.argv[3]
const personNumber = process.argv[4]

const newPerson = new Person({
    name: process.argv[3],
    number: process.argv[4]
})

newPerson.save().then(result => {
    console.log(`Added ${personName} number ${personNumber} to phonebook`)
    mongoose.connection.close()
})
}
