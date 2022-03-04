console.log("Number: 1")
console.log("Number: 2")
console.log("Number: 3")
console.log("Number: 4")
console.log("Number: 5")
console.log("Number: 6")
console.log("Number: 7")
console.log("Number: 8")
console.log("Number: 9")
console.log("Number: 10")
console.log("Number: 11")

// You see that if we want to count to 1000 it becomes pretty cumbersome

console.log("\n-----------------WHILE LOOP----------------")
let maxNumber = 100
let currentNumber = 1 // we start from 1

while (currentNumber <= maxNumber) { // Any boolean condition is ok, anything that results in true or false
    // This block of code will be repeated as long as the condition is true
    console.log("Number:", currentNumber)
    currentNumber++
    // the same: currentNumber += 1
    // the same: currentNumber = currentNumber + 1
}

console.log("\n---------------------ITERATING OVER A LIST-----------------")

let shoppingList = ["milk", "oranges", "cereals", "eggs", "butter", "sugar"]
//                    0         1           2       3       4           5
// shoppingList[0]
// shoppingList[1]
// shoppingList[2]
// ....

let index = 0

while (index <= shoppingList.length - 1) {
    console.log(shoppingList[index])
    index++
}

// There is another loop that is called for loop
// There is also a do -- while
// There is also for applied to lists (for of)
// There is also list.forEach
// BUT: they just help you do things in an easier way...
// BUT YOU CAN DO EVERYTHING JUST USING A WHILE
