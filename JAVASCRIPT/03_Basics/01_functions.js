function sayMyName() {
    console.log("D");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
}

// sayMyName   -> reference of function
// sayMyName() -> execution (calling) of function

sayMyName();

function addTwoNumbers(num1, num2) {      // num1, num2 -> parameters
    return num1 + num2;
}

console.log(addTwoNumbers(5, 4));         // 9   // 5, 4 -> arguments
console.log(addTwoNumbers(5, "4"));       // 54  (number + string => string concatenation)
console.log(addTwoNumbers(5, "a"));       // 5a  (number + string => string concatenation)
console.log(addTwoNumbers(5, null));      // 5   (null is converted to 0)

const result = addTwoNumbers(3, 5);
console.log(`Result: ${result}`);


function loginUserMessage(username) {
    if (!username) {                       // "", undefined, null, 0, false, NaN are falsy
        console.log("Please enter a valid username");
        return;                            // returns undefined*****************
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("Daksh"));   // Daksh just logged in

console.log(loginUserMessage(""));
// Output:
// Please enter a valid username
// undefined

// Why?
// The function executes 'return;' which returns undefined.
// Then console.log prints that returned value.


// NOTE:***********IMP************
// Every JavaScript function returns a value.
// If no value is explicitly returned, the return value is undefined.

// So the key point is:*******************
// return; → returns undefined
// No return → returns undefined
// Functions always return something
// undefined only becomes visible when you print or use the returned value.

console.log(loginUserMessage());
// Please enter a valid username
// undefined

// Why?
// No argument is passed, so username = undefined.
// Condition becomes true, 'return;' executes,
// and console.log prints the returned undefined.


function findUser(username = "rohit") {   // default parameter
    return `${username} found`;
}

console.log(findUser("Shreya"));          // Shreya found
// Passed argument overwrites the default value.

console.log(findUser());                  // rohit found
// No argument passed, so default value is used.


// ==============================================================Part2====================================================== //

// Rest Operator (...)
// Collects multiple arguments into a single array

function calculateCardPrice(...num1) {
    return num1;
}

console.log(calculateCardPrice(200, 400, 500, 2000));
// Output: [200, 400, 500, 2000]
// All arguments are collected into the array num1



function calcCardPrice2(val1, val2, ...num1) {
    return num1;
}

console.log(calcCardPrice2(200, 400, 500, 2000));
// Output: [500, 2000]

// val1 = 200
// val2 = 400
// Remaining arguments go into num1
// num1 = [500, 2000]



// Objects
const user = {
    item: "watch",
    price: 1999
};

function handleObject(anyObject) {
    console.log(`Item is ${anyObject.item} and price is ${anyObject.price}`);
}

handleObject(user);
// Passing an object through a variable

handleObject({
    item: "peter-england",
    price: 599
});
// Passing an object directly



// Arrays
const myNewArray = [200, 400, 500, 800];

function returnSecondValue(getArray) {
    return getArray[1];     // Array indexing starts from 0
}

console.log(returnSecondValue(myNewArray));
// 400

console.log(returnSecondValue([10, 20, 30, 40]));
// 20
// Array passed directly as an argument