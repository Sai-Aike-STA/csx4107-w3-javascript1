// Arrays in JS

let a1 = []
let a2 = [1, 2, 3]
let a3 = [1, "two", 3]
console.log("a1", a1)
console.log("a2", a2)
console.log("a3", a3)

console.log("==============")

// Array is a class (not a primary data type)
// index begins with 0
console.log("a1 length", a1.length)
console.log("a2 length", a2.length)
console.log("a3 length", a3.length)

console.log("==============")

// Array index specification
console.log("a1[0]", a1[0])
console.log("a2[0]", a2[0])
console.log("a3[0]", a3[0])

console.log("==============")

// Appending to the array
// 2 ways: using "push" method or assign to index
a1[2] = 15
a2[3] = 16
a3[3] = 17
console.log("a1", a1)
console.log("a2", a2)
console.log("a3", a3)

console.log("==============")

// push method
a1.push("text1")
a2.push("text2")
a3.push("text3")
console.log("a1", a1)
console.log("a2", a2)
console.log("a3", a3)

console.log("==============")

// Array Traversal
console.log("array traversal with regular for-loop")
for (let i = 0; i < a2.length; i++) {
    console.log(`a2[${i}] = ${a2[i]}`);
}

console.log("==============")

console.log("\narray traversal with for-of loop")
for (let item of a2){
    console.log(`item = ${item}`)
}
console.log("==============")

// for each method
console.log("\narray traversal with forEach method")
a2.forEach( (nig) => {
    console.log(`item = ${nig}`)
    }
)









