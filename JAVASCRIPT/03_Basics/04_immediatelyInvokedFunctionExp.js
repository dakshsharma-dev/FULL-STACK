// Immediately Invoked Function Expressions (IIFE)
    // A function that is defined and executed immediately. 
    // Global scope ke pollution se problem hoti hai kai baar, to us global scope ke jo variables hai ya jo bhi declarations hai, uske pollution ko htane ke liye IIFE ka use krte hai   
    // OR
    // One common use of IIFE is to avoid polluting the global scope.
    // Variables declared inside an IIFE remain private to that IIFE.


// NAMED IIFE

(function chai() {
    console.log(`DB connected 1`);
})();     


// IMPORTANT:
// When writing multiple IIFEs, end each one with ';'
// so that JavaScript knows where the current IIFE ends.
// BECAUSE:
// ';' helps separate one IIFE from the next statement.
// Without it, JavaScript may try to treat the next IIFE as a continuation of the previous expression.

// First ()  -> function definition
// Second () -> immediate execution


// NAMED IIFE
(function aurcode() {
    console.log(`DB connected 2`);
})();


// SIMPLE IIFE USING ARROW FUNCTION: () => {}
( (name) => {                                     
    console.log(`DB connected 3 ${name}`);
} )("daksh");

// First ()  -> function definition
// Second () -> function call (execution)
//
// In a normal function, we would write:
// fn("daksh");                // separate function call
//
// The second () does that call immediately.
