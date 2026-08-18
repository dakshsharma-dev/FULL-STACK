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