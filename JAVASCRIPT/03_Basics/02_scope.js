// Global Scope vs Block Scope

let a = 300;   // Global variable

if (true) {

    let a = 10;      // Block-scoped (exists only inside this block)
    const b = 20;    // Block-scoped (exists only inside this block)
    var c = 30;      // NOT block-scoped

    console.log("Inner:", a);   // 10
}

console.log(a);      // 300
// The inner 'a' and outer 'a' are different variables.

// console.log(b);
// Error: b is not defined
// 'b' exists only inside the if block.

console.log(c);      // 30
// 'var' does not have block scope.
// It escapes the block and becomes accessible outside.



// Scope Summary
// let   -> block-scoped
// const -> block-scoped
// var   -> function-scoped (or global if declared outside a function)


// Example:
if (true) {
    var x = 100;
    let y = 200;
}

console.log(x);      // 100
// console.log(y);   // Error



// NOTE:
// Avoid using 'var' in modern JavaScript.
// Prefer 'let' when the value can change.
// Prefer 'const' when the value should not change.


// Global scope differs between environments:
// - Node.js (VS Code)
// - Browser Console
// Variables declared globally may behave differently
// because the global object is different in each environment.



// Nested Functions and Scope

function one() {
    const username = "daksh";

    function two() {
        const website = "youtube";

        // Child function can access variables of its parent function.
        // This behaviour is called a closure.
        console.log(username);
    }

    // console.log(website);
    // Error: website is only available inside function two()

    two();
}

one();



// Nested Blocks

if (true) {
    const username = "daksh";

    if (username === "daksh") {
        const website = "youtube";

        // Inner block can access variables of outer block.
        console.log(username + " " + website);
    }

    // console.log(website);
    // Error: website exists only inside the inner if block
}

// console.log(username);
// Error: username exists only inside the outer if block




// ++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++ //

// Function Declaration

console.log(addone(5));      // 6

function addone(num) {
    return num + 1;
}

// Why does this work?
// Function declarations are hoisted.
// During the creation phase, the entire function definition
// is moved to memory before the code executes.



// Function Expression

// console.log(addTwo(5));
// Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5));      // 7

// Why?
// Only the variable declaration is hoisted.
// The function is assigned to the variable later during execution.
// Therefore addTwo cannot be used before its initialization.



// Summary:
// Function Declaration  -> Can be called before its definition (hoisted)
// Function Expression   -> Cannot be called before its initialization
//
// Example:
// function greet() {}      -> Function Declaration
//
// const greet = function() {}
// const greet = () => {}   -> Function Expressions