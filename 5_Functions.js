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

