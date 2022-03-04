function printTitle(titleText) {
  // Here we don't want to store this result somewhere.
  // We just want to print it to the console...
  console.log("\n=========={{{ " + titleText + " }}}==========\n\n")

  // So we don't need any return statement
  // RETURN is OPTIONAL.
}


printTitle("DEFINING OBJECTS")

// Model of a student: the properties of a student we want to consider
// for our program

/*
name: string
surname: string
age: number
hasWebcam: boolean
*/

// This is a VALUE that adheres to that model
let student1 = { // key-value couples, called properties
    name: "John",
    surname: "Doe",
    age: 30,
    hasWebcam: true
}

// We can have more values representing the same kind of entity
let student2 = {
    name: "Goofy",
    surname: "Hello",
    age: 35,
    hasWebcam: false
}

console.log("This is a student:\n", student1)
console.log("This is another student:\n", student2)


printTitle("ACCESSING OBJECT PROPERTIES")

console.log("The name of the first student is", student1.name, "and the surname is", student1.surname)

if ( student1.hasWebcam === true) {

  // CODE BLOCK
  // a code is a sequence of instructions/statements.

  // In JS a code block is just instructions/statements surrounded by curly brackets.
  // Also, they should be indented -- meaning they should have the same amount of spaces before
  console.log(student1.name, "has a webcam, good!")
} else {
  console.log(student1.name, "does not have a webcam -- needs to buy one!")
}


printTitle("EDITING/UPDATING PROPERTIES")
// Suppose now that student1's webcam broke...
// The value we used to model studen1 does not represent the reality anymore
// ...we need to update it!

student1.hasWebcam = false
console.log("Student1 broke their webcam\n", student1)


// Let's suppose that we want to include/add a new property to our model.
// For example: we realize that we need to do something about the city where the studend lives

printTitle("CREATING/ADDING PROPERTY")

// We call the new property "city"
student1.city = "Milan"
student2.city = "Berlin"

console.log("We added 'city' to both students:")
console.log(student1)
console.log(student2)

printTitle("CONSTANTS")
let pi = 3.14 // THIS WILL NEVER CHANGE
// Risky, because it can actually change. So maybe it's better to use const

const piConst = 3.14 // THIS WILL BE IMMUTABLE, FOREVER
// piConst = 3 // This will give you an error

// Can i do the same with objects?
const student3 = {
  name: "Paul",
  surname: "Smith",
  age: 35,
  hasWebcam: false
}

// This will actually give me an error
// student3 = {
//   // Empty object
// }

// This will actually work! Unfortunately
// That's a big issue with javascript and also why TypeScript exists
// To be able to enforce more strict structural types and models
student3.age = 40
console.log(student3)

// Also, nothing is enforcing the fact that a student must have
// the properties we defined. Nothing prevents us from doing it
student3.fruit = "Apple"
// And we have no way in JS to enforce the fact that some object must respect our model.
console.log(student3)

// At the moment we must be careful with objects...
// The only way to enforce these things with pure JS is you remembering to not do it.



/*
WHY DOES THIS HAPPEN?

Because the variable/the constant, when you define an object
it does not actually contain the object, but it contains a POINTER
to the object, a REFENCE -- it's like telling where to find
the object in the memory of your program.

So you cannot modify the refence itself, in case you define it
as a constant - but once you use it to know where the object is,
you can modify its properties.
*/

printTitle("COPYING OBJECTS")

// Let's suppose we have a person
let person = {
  name: "Jonny",
  surname: "Smith",
  age: 45
} // Remember that person, does not contain the object, but a reference to it

console.log("Person:")
console.log(person)

// Then we have a twin brother of the person: same age, same surname
let twinBrotherOfPerson = person // I want to copy the value of person
twinBrotherOfPerson.name = "Eric" // and then change only the name, the rest of the things does not change

console.log("Brother:")
console.log(twinBrotherOfPerson)

console.log("BUT ALSO PERSON CHANGED:")
console.log(person)

// WHY?
// Because when we did
// let twinBrotherOfPerson = person
// We copied the content of person, which is a reference to the object
// And so we have two variables that point to the same object.
// We modify the properties of the same object...

// THIS IS A VERY UNINTUITIVE AND WEIRD BEHAVIOR OF JAVASCRIPT
// YOU HAVE TO BE CAREFUL AND REMEMBER THAT JS WORKS LIKE THIS...

//---------
// Let's see how to really copy an object:
person = {
  name: "Jonny",
  surname: "Smith",
  age: 45
}

twinBrotherOfPerson = {} // In this way you are telling JS: create a new object (empty)
Object.assign(twinBrotherOfPerson, person)
twinBrotherOfPerson.name = "Eric"

console.log("\nWe try using the right approach:")
console.log("Person:")
console.log(person)

console.log("Twin brother:")
console.log(twinBrotherOfPerson)
