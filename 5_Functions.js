// Functions in JS


// function keyword style declaration
function greeting(name) {
    console.log(`Hello, ${name}!`);
}

greeting("Sai")

// arrow style declaration
const greeting2 = (name) => {
    console.log(`Hello, ${name}!`);
}

/* I don't quite get what the different is.
Arrow functions are expressions, not declarations, they must be defined before use.

They also do not have their own this context, which is an important difference from normal functions.
 */

console.log("===========")
let a2 = [1, "two", 3, true, "hi", -11]

console.log("using arrow function")
a2.forEach((item) => {
    console.log(`item = ${item}`)
})

console.log("\nusing named arrow function")
const arrayCallback = (item) => {
    console.log(`item = ${item}`)
}
a2.forEach(arrayCallback

)

console.log("\nusing named arrow function")
a2.forEach(printItem);
function printItem (item) {
    console.log(`item = ${item}`);
}
