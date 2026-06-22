let x = 5

if (x === 5) {
    console.log(x)
}

if (x == 10) {
    console.log("1")

} else {
    console.log("2")

}

// if else

if (x == 10) {
    console.log("1")
} else if (x == 20) {
    console.log("3")
} else if (x == 30) {
    console.log("4")
} else {
    console.log ("2")
}

// switch statements
/*
switch (//value//) {
    case <constant 1> :  codes
        break;
    case <constant 2>: codes
        break;
    …
    default:  codes
}
*/
x = 10;

switch (x) {
    case 5:
        console.log("1");
        break;

    case 10:
        console.log("2");
        break;

    case 15:
        console.log("3");
        break;

    default: {

        console.log("4");
        console.log("No matched");

    }

}

console.log("==================")
// Ternary
let z = (x == 10) ? 20 : 30;
console.log(x)

// this is equivalent to
let x;
if (y == 10) { x = 20}
else  {x = 30}
