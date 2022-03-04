console.log("-----------------LOGICAL OPERATORS------------------")
let height = 172
let hairColor = "brown"

// When a variable contains a boolean, call it with a question
// Is the user taller than 175?
let isTallerThan175 = height > 175
console.log("\nIs the user taller than 175?", isTallerThan175)
let isShorterOrEqualTo175 = !isTallerThan175

let isTheUserBlonde = hairColor === "blonde"
console.log("Is the user blonde?", isTheUserBlonde)

// AND: true only if all the operands are true
let isBetween170And180 = (height >= 170) && (height <= 180)
console.log("\nIs the user between 170 and 180?", isBetween170And180)

// OR: true only if at least one of the operands it true
// (false only if they are all false)

console.log("Let's suppose that the user can participate to a casting only if:")
console.log("between 170cm and 180cm and has either blond or brown hair.")

let hasTheUserBrownHair = hairColor === "brown"
let hasTheUserBlondeOrBrownHair = hasTheUserBrownHair || isTheUserBlonde


let canParticipate = isBetween170And180 && hasTheUserBlondeOrBrownHair
// The conditon unrolled would be: (height >= 170 && height <= 180) && (hairColor === "blonde" || hairColor === "brown")

console.log("\nCan the user participate to the casting?", canParticipate)
