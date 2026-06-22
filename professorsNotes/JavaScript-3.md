# Function

function is a block of code designed to perform a particular task. Functions are fundamental to JavaScript programming, enabling code reusability, organization, and modularity.

## Function Declaration

There are mainly two function declaration styles in JavaScript.

### 1: Use "function" keyword

Syntax:

```javascript
function functionName(parameter)
{
    …
}
```

function → a keyword used to declare a function.

functionName → the identifier (name) of the function.

(parameter) → input values passed to the function (can be zero or more).

{ ... } → the block that contains the function’s executable code.

Example:

```javascript
function greeting (name) {
    console.log(`Hello ${name}`);
}
```

You can call it anywhere after or even before the declaration (due to hoisting).

### 2: Use arrow declaration (introduce in ES6)

Syntax:

```javascript
const functionName = (parameter) => {
    …
}
```

Usually declared as a constant (const) to prevent reassignment.

(parameter) → parameters enclosed in parentheses; use empty parentheses if none.

=> → the arrow that separates parameters and the function body.

{ ... } → the code block of the function.

Example

```javascript
const greeting2 = (name) => {
    console.log(`Hi ${name}`);
}
```

Arrow functions are expressions, not declarations — they must be defined before use.

They also do not have their own this context, which is an important difference from normal functions.

Based on its slightly different, I recommend that:

Use keyword function to declare external or normal functions.

Use the arrow function just for anonymous or callback functions.

## Comeback to Array forEach

Now, let's consider the following from previous topic:

```javascript
a2.forEach((item) => {
    console.log(`item = ${item}`);
})
```

The forEach method require a callback function as its parameter otherwise it does nothing.

The callback function we parsed as a callback is:

```javascript
(item) => {
    console.log(`item = ${item}`);
}
```

This is an anonymous arrow function — a function without a name, defined directly inside the method call.

## Alternative Ways to Write the Same Code

Here are a few equivalent ways to achieve the same result:

Example:

```javascript
console.log("use arrow function");

a2.forEach((item) => {
    console.log(`item = ${item}`);
})

const arrayCallback = (item) => {
    console.log(`item = ${item}`);
}

console.log("use named arrow function")

a2.forEach(arrayCallback);

console.log("use normal function");

a2.forEach(printItem);

function printItem (item) {
    console.log(`item = ${item}`);
}
```

Result:

However, it’s important to note that the forEach() method has a specific requirement for its callback function:

the callback must accept at least one parameter, which represents the current element of the array.

This parameter can have any name you like — in our examples we use item, but it could be element, value, or anything else.

When using a named function (either arrow or normal), it must also receive exactly one parameter to match this behavior.

When you assign it as a callback, simply pass the function name without parentheses, so that forEach() can call it automatically for each array element.

## Callback Parameter Requirements

The forEach() method always calls its callback function with exactly one required parameter (the current array item), and optionally two more — the index and the array itself:

```javascript
array.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
```

However, different JavaScript methods have different callback requirements.

For example:

map() and filter() work just like forEach() — they pass (item, index, array).

reduce() passes (accumulator, currentValue, index, array).

setTimeout() and setInterval() expect a callback with no parameters.

Event listeners like addEventListener() pass an event object to the callback.

So, always check the function’s documentation to know what parameters your callback will receive.