// IMPORTANT NOTE: JS IS SINGLE THREADED: executes one statement at a time. 
// console.log("A");
// console.log("B");
// console.log("C");
// cannot execute B before finishing A




// JAVASCRIPT EXECUTION CONTEXT(JEC) -> How JS will execute/run the file?
    // Execution Context = the environment in which JS code runs.

    // There are mainly: 2 types of JEC
    // Global execution context(GEC) ->                     When a JS file starts, a Global Execution Context is created automatically.
    // Function execution context(FEC) 

    // Eval execution context(not that important)  [more of a property of GEC]


// Global Execution Context
    // The Global Execution Context is the default environment in which the entire JS file starts executing.
    // When the GEC is created, JavaScript also sets a value for 'this' keyword,
        // In a Browser
        // console.log(this);
        // prints: window

        // window is the global object provided by the browser.
        // It contains things like:
        // window.alert()
        // window.setTimeout()
        // window.document
        // window.console
        // console.log("Hello") ≡ window.console.log("Hello") // not universally true

// Why mention this while explaining Execution Context?
// Because when JavaScript creates an Execution Context, it stores some information inside it:

// Execution Context
// │
// ├─ Memory Space
// ├─ Execution Thread
// └─ this


// Code Runs in 2 phases:
// 1. Memory creation phase / creation phase
// 2. Execution phase

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
   let total = num1 + num2;
   return total; 
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// Global Execution Context
// │
// ├── Memory Space
// └── Execution Thread


// HOW DOES THE ABOVE CODE GETS EXECUTED?
// 1. Global execution/ environment 
// FIRST CYCLE
    // 2. Memory creation phase
        // val1    = undefined 
        // val2    = undefined 
        // addNum  = function definition
        // result1 = undefined
        // result2 = undefined

// SECOND CYCLE
    // 3. Execution Phase (Now code runs line by line)
        // val1 = 10;
        // val2 = 5;
        // addNum is called by result1
            // IMPORTANT NOTE: Each function, here addNum creates its own FUNCTION EXECUTION CONTEXT which has -> [new variable environment + execution thread]  *************VERY IMP***************
                            //  &  Memory creation and execution phase happens again for each function.
                // Memory Creation Phase
                // num1  -> undefined
                // num2  -> undefined
                // total -> undefined

                // Execution Phase(processing or execution)
                // num1 -> 10
                // num2 -> 5
                // total -> 15(now this is returned to GLOBAL EXECUTION CONTEXT as function is called in global execution context)
                // result1 -> 15

                //******IMP******  Now, the FUNCTION EXECUTION CONTEXT of current function gets DELETED
        
        // result1 = 15
        // result2 = 12(exactly same process happens for this one too)


// Final Global Memory
// val1    -> 10
// val2    -> 5
// addNum  -> function
// result1 -> 15
// result2 -> 12



// CALL STACK(LIFO)
    // THIS ALSO HAS GLOBAL EXECUTION CONTEXT

function one(){
   console.log("One");
   two();
}
function two(){
   console.log("Two");
   three();
}
function three(){
   console.log("Three");
}
 
one();

// pictorical representation of this

// Step 1
// Global EC enters stack.

// ┌────────────┐
// │ Global EC  │
// └────────────┘


// Step 2
// one() called.

// ┌────────────┐
// │ one()      │
// ├────────────┤
// │ Global EC  │
// └────────────┘

// Prints:
// One


// Step 3
// two() called.

// ┌────────────┐
// │ two()      │
// ├────────────┤
// │ one()      │
// ├────────────┤
// │ Global EC  │
// └────────────┘

// Prints:
// Two


// Step 4
// three() called.

// ┌────────────┐
// │ three()    │
// ├────────────┤
// │ two()      │
// ├────────────┤
// │ one()      │
// ├────────────┤
// │ Global EC  │
// └────────────┘

// Prints:
// Three


// Step 5
// three() finishes.

// ┌────────────┐
// │ two()      │
// ├────────────┤
// │ one()      │
// ├────────────┤
// │ Global EC  │
// └────────────┘


// Step 6
// two() finishes.

// ┌────────────┐
// │ one()      │
// ├────────────┤
// │ Global EC  │
// └────────────┘


// Step 7
// one() finishes.

// ┌────────────┐
// │ Global EC  │
// └────────────┘


// Step 8
// Global EC finishes.

// Empty Stack