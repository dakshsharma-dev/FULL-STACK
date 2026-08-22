// =====================================================
// "this" keyword
// =====================================================

const user = {
    username: "daksh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
};

user.welcomeMessage();
// Since user is calling welcomeMessage(),
// "this" refers to the user object.


user.username = "sam";      // Object's context/value changed
user.welcomeMessage();
// this now refers to the same user object, whose username is "sam"


console.log(this);
// In Node.js (CommonJS), at the top level -> {}             *********************VERY IMP*************************
// In a browser's top-level script -> window                 *********************VERY IMP*************************
// In a Browser
        // console.log(this);
        // prints: window

        // window is the global object provided by the browser.
        // It contains things like:
        // window.alert()
        // window.setTimeout()
        // window.document
        // window.console
        // console.log("Hello"); equivalents to window.console.log("Hello");



// *********************VERY IMP************************* // 
// Node.js (CommonJS) on command console.log(this);

   // Top-level this            -> {}                              [this refers to the module's exports object (effectively module.exports), not the global object]

   // Normal function call      -> global object (non-strict mode) [JavaScript binds this to the global object]
   //                           -> undefined (strict mode)         [strict mode prevents the automatic binding of this to the global object]



// =====================================================
// "this" inside a normal function
// =====================================================

function chai() {
    let username = "daksh";

    console.log(username);          // "daksh"
    console.log(this);              // return a huge object
    console.log(this.username);     // undefined
    // this does NOT refer to the function's local variables.
    // this.username looks for a property named "username"
    // on the object referred to by this.
}
chai();
// Compare:

// user.welcomeMessage();
// Here this is user.

// But:
// chai();
// There is no user/object calling the function.

// In Node.js, the exact value of this for a standalone normal function depends on how the code is executed (and especially whether strict mode is involved). In a typical non-strict CommonJS execution, it can be the global object, which is why you may see a very large object when you console.log(this).



// Function expression behaves the same way as a normal function.
// The difference here is only how the function is defined.

const chai1 = function () {
    let username = "daksh";

    console.log(username);          // "daksh"
    console.log(this);              // return a huge object
    console.log(this.username);     // undefined
};
chai1();


// =====================================================
// Arrow Functions
// =====================================================

// Syntax:
// () => {}

const chai2 = () => {
    let username = "daksh";

    console.log(this);
    console.log(this.username);     // undefined

    // Arrow functions do NOT have their own "this".   // arrow function is defined at the top level of the file
    // They inherit "this" from the surrounding scope. // surrounding scope's this is the top-level this.
};

chai2();

// Important:
// Normal function -> gets its own "this" depending on how it is called.
// Arrow function  -> inherits "this" from its surrounding scope.



// =====================================================
// Arrow Function Return
// =====================================================

const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(3, 4));


// Implicit return
// If the function body contains a single expression,
// the value of that expression is returned automatically.

const addTwo1 = (num1, num2) => num1 + num2;

console.log(addTwo1(5, 6));


// These two are equivalent:

const addTwo2 = (num1, num2) => (num1 + num2);

console.log(addTwo2(4, 8));

// No difference in this case.
// Parentheses are optional around a simple expression.
//
// num1 + num2
// (num1 + num2)
//
// Both return the same value.


// =====================================================
// Returning an Object from an Arrow Function
// =====================================================

// Parentheses are required here because
// { } is otherwise interpreted as the function body.

const name = () => ({ username: "daksh" });

console.log(name());

// Without parentheses:
// const name = () => { username: "daksh" }
//
// This would be treated as a function body,
// not as an object being implicitly returned.


// =====================================================
// Arrow Functions with Array Methods
// =====================================================

const myArr = [2, 3, 4, 5, 6, 7];

myArr.forEach(() => {
    // code to execute for each element
});

