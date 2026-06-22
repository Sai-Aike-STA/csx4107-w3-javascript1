# Array

Array is a group of values stored in one variable. To declare an array in JavaScript, simply assigned its initial value within a square brackets ([]).

Example:

```javascript
let a1 = []; //empty array
let a2 = [1, 2, 3]; //array with 3 members
let a3 = [1, "two", 3]; //array with mixed type

console.log("a1", a1);
console.log("a2", a2);
console.log("a3", a3);
```

The result will be:

Array is not a primary data type, it’s actually a class.

You can count its member using ".length" property.

Remember that the index always begin with 0.

So, the first member is at index 0, the second member is at index 1 and so on.

Example:

```javascript
console.log("a1 length", a1.length);
console.log("a2 length", a2.length);
console.log("a3 length", a3.length);
```

The result will be:

You can get it's member value by specify index value within square brackets.

Example:

```javascript
console.log("a1[0]", a1[0]);
console.log("a2[0]", a2[0]);
console.log("a3[0]", a3[0]);
```

The result will be:

You can simply add value into an array using "push" method or assign the value into desired index

Example:

```javascript
a1[2] = 15;
a2[2] = 16;
a3[2] = 17;

console.log("a1", a1);
console.log("a2", a2);
console.log("a3", a3);
```

The result will be

Using "push" method to append the array, for example:

```javascript
a1.push("text1");
a2.push("text2");
a3.push("text3");

console.log("a1", a1);
console.log("a2", a2);
console.log("a3", a3);
```

The result will be:

## Array Traversal

There are several approaches to traverse to an array.

### 1: Basic for loop

Example:

```javascript
for (let i = 0; i < a2.length; i++) {
    console.log(`a2[${i}] = ${a2[i]}`);
}
```

The result will be:

### 2: Using for-of loop

Example:

```javascript
for (let item of a2) {
    console.log(`item = ${item}`);
}
```

Result:

### 3: Using forEach method

Example:

```javascript
a2.forEach((item) => {
    console.log(`item = ${item}`);
})
```

Result:

The code inside forEach is a function, we usually call this kind of function as "callback function" or "anonymous function". This function will be discussed again later.