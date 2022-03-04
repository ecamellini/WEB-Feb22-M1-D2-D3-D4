console.log("Let's declare a variable WITHOUT assigning a value to it, and print it:")
let myVariable
console.log(myVariable)
myVariable = 10
console.log("I put 10 into myVariable, its content is:", myVariable)
console.log("If I want to explicitly empty it is shall use null, not undefined.")
myVariable = null
console.log("I assigned null to it, not the content is:", myVariable)

console.log("\nThose are all values of type number -- one of the primitive data types:")
let integerNumber = 100
let floatNumber = 129.30
console.log(integerNumber)
console.log(floatNumber)


let infinity = +Infinity
let notANumber = 0 / 0
let notANumberAgain = "Hello" / 5
console.log(infinity)
console.log(notANumber)
console.log(notANumberAgain)


console.log("\nA variable can contain values of different data types (JS is loosely typed)!")
console.log("BUT IT'S A BAD PRACTICE! Try to avoid doing it.")
let badPractice = 123
console.log("Number inside a var:", badPractice)
badPractice = "Hello"
console.log("String inside the same var:", badPractice)

// Avoid soring values of different data types in the same variable (except null, that can make sense)
let userStringInput = null // The user still did not do anything
userStringInput = "Hello this is my input"
userStringInput = null
// What if I also want to get a number from the user?
userStringInput = 20 // NO! Let's define a different variable

// This variable will clearly have a different purpose, the name makes it clear as well.
// It will get a number from the user.
let userNumberInput = 200


// Explicit is always better than implicit: use brackets, even if they are not strictly needed
let result = ((userNumberInput * 2) + 3) / 2
/*
BEWARE, the sum operator if applied to anything different from a number
it convert everything to String.
This can be useful sometimes, but can also lead to error. Use it wisely.
*/
console.log("\nHere's the result of a math operation: " + result)

console.log("\nTrying to parse a string that does not contain a number:")
console.log(parseInt("Hello")) // This will return NaN
