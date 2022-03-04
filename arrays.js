console.log("---------------ARRAYS---------------\n")
// Let's suppose we want to note down a shopping list

// So I want a way to say in JS that I need to buy milk, sugar, oranges, cereals
// This is not a key-value stucture, we only a set of values

// Array/list of strings, the elements/items of the list are strings
let shoppingList = ["milk", "oranges", "cereals", "eggs", "butter", "sugar"]
console.log(shoppingList)

// They are not properties
// Doing something like shoppingList.milk does not make sense

let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13] // list of numbers
console.log(fibonacci)



console.log("---------------ACCESSING ELEMENTS---------------\n")

// In objects, the key defines a value --> you get a value by key
// In arrays, the position/the index defines a value --> you get values by index/position

// BEWARE -- YOU ALWAYS START COUNTING FROM ZERO
console.log("The first element in the shopping list is:", shoppingList[0])
let secondElement = shoppingList[1] // SECOND ELEMENT IS ACTUALLY THE ONE WITH INDEX 1
console.log("The second element in the shopping list is:", secondElement)

// Access the last element of the list...
let length = shoppingList.length
let lastElement = shoppingList[length - 1]
console.log("The length of the list is:", length)
console.log("The last element of the list is:", lastElement)

console.log("\n---------------INSERTING AN ITEM AT THE END-----------------------\n")

// I just realized I need also biscuits
shoppingList.push("biscuits") // Insert biscuits at the end of the list
console.log(shoppingList)

// With this pattern, searching for functionalities of lists, with the dot
// you basically do everything you need.
// Or you just Google :)

console.log("\n---------------INSERTING AN ITEM IN THE MIDDLE-----------------------\n")

// I would want a feature like
// shoppingList.insert("something", 2)

shoppingList.splice(2, 0, "juice") // This will go at position 2, remove zero elements, insert "juice"
console.log(shoppingList)

// You can use also to REMOVE AND REPLACE ELEMENTS
// For example, let's replace the element at positon 4
console.log("We want to replace", shoppingList[4])
shoppingList.splice(4, 1, 'water')
console.log(shoppingList)


console.log("\n-----------------EXAMPLE OF MORE COMPLEX LISTS------------")

// Useful every time you need to represent a collection of data.
// Even complex data, even objects...
let students = [
    { name: "John", age: 30 },
    { name: "Paul", age: 30 },
    { name: "Raja", age: 30 },
    { name: "Sarah", age: 30 }
]

// Let's print the name of the 3rd studens
console.log("The name of the third student is:", students[2].name )

// We can modify it
students[2].name = "Rasmus"

students.push({ name: "Max", age: 30 })

console.log(students)
