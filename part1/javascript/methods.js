const person = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Filosofian tohtori',
    greet: function() {
      console.log('hello, my name is', this.name)
    },
    doAddition: function(a, b){
        console.log(a + b)
    }
  }
  
console.log(person.age)
person.growOlder = function(){
    this.age += 1
}
person.growOlder()
console.log(person.age)
const referenceToAddition = person.doAddition
referenceToAddition(10, 15)

// This points to Timeout object, this has been lost
setTimeout(person.greet, 1000)

// if want to use this
setTimeout(person.greet.bind(person), 1000)