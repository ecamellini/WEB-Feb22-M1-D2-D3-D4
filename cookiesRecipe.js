console.log("Welcome to\nThe Programming Kitchen!") // \n means: go to a newline!!
/*
Let's declare our inputs, the data we have available
in the recipe analogy, the ingredients of our recipe
*/

// The user iserts the amount of sugar, flour, butter into a form
// ...we will receive them as strings.
let userInputForSugar = "120"
let userInputForButter = "80"
let userInputForFlour = "250"

// BUT we want numbers, because we want to sum them
let sugar = parseInt(userInputForSugar) // From now on sugar exists, I will not need to use let anymore
let butter = parseInt(userInputForButter)
let flour = parseInt(userInputForFlour)

// The backslash is used to ignore special effects that a character may have, like closing a string
// What if I want to print a backslash? I just ignore its effect, using the backslash: console.log("\\")
console.log('\nLet\'s setup our ingredients:')
console.log('Sugar:', sugar)
console.log(`Butter:`, butter)
console.log("Flour:", flour)

let mediumBowl = butter + sugar // Take the value of butter and sugar, and sum them
console.log("\nWe mixed butter and sugar into a medium bowl...")
console.log("Content of medium bowl:", mediumBowl)

// If we just write butter + sugar, we execute a sum, but we don't modify any value
// so we need to store the result somewhere (in a new variable for example)

mediumBowl += flour
// The same as writing mediumBowl = mediumBowl + flour
// Syntactic sugar: just a more "sweet" way to write THE SAME THING

// It works because what happens on the right side of the equal
// is executed BEFORE the assignment

console.log("\nWe added also flour. Now the content of medium bowl is", mediumBowl)

// Maybe we want to add vanilla to our cookies
let useVanilla = true

// When the variable is true, we add vanilla...
// We still don't know how to do it
if (useVanilla === true) {
    // Then block, executed if the boolean condition is true
    mediumBowl += 0.5 // adding vanilla
    console.log("\nWe added vanilla to the cookies! Result is", mediumBowl)
} else {
    // Else block, executed if the boolean condition is false
    console.log("\nOk, let's not add any vanilla.")
}
