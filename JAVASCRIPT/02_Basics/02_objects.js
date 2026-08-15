// ====================================================================
// OBJECTS
// ====================================================================


// --------------------------------------------------------------------
// Singleton Concept
// --------------------------------------------------------------------

// Constructor method → singleton
// Object literals → not singleton


// Object.create() → constructor method


// ====================================================================
// OBJECT LITERALS
// ====================================================================

const mySym = Symbol("key1");
// IMPORTANT:
// mySym is a variable that stores a Symbol.
//
// We use this SAME Symbol variable as the object key:
// [mySym]: "mykey1"
//
// We can also create a Symbol directly while defining the object:
//
// [Symbol("key1")]: "mykey1"
//
// But then we don't have a variable/reference to that Symbol,
// so accessing that specific Symbol-keyed property later becomes
// difficult/inconvenient.
//
// Therefore, we normally create the Symbol first and store it
// in a variable, then use that variable inside [].

const jsUser = {
    name: "Daksh",
    "full name": "Daksh Sharma",

    // Important:
    // [mySym] means: evaluate mySym and use its Symbol value as the key.
    //
    // Without []:
    // mySym: "mykey1"
    //
    // The key would be the String "mySym", NOT the Symbol stored in mySym.
    [mySym]: "mykey1",

    age: 20,
    location: "Gurugram",
    email: "daksh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


// ====================================================================
// ACCESSING OBJECT VALUES
// ====================================================================

// String key:
// ├── Valid identifier → obj.key OR obj["key"]
// │                      e.g. name, age, email, location
// │
// └── Invalid identifier → obj["key"]
//                        e.g. "full name"


console.log(typeof jsUser.name);               // string
console.log(typeof jsUser["name"]);            // string


// console.log(typeof jsUser.full name);       // Error
// "full name" contains a space, so dot notation cannot be used.

console.log(typeof jsUser["full name"]);       // string


// --------------------------------------------------------------------
// Symbol key
// --------------------------------------------------------------------

// jsUser.mySym
// → Looks for the String key "mySym".
// → There is no String key "mySym" in the object.
// → The actual key is a Symbol.
// → Therefore the value is undefined.

console.log(typeof jsUser.mySym);              // undefined


// jsUser[mySym]
// → Evaluate mySym.
// → mySym contains a Symbol.
// → Use that Symbol as the key.
// → Finds: [mySym]: "mykey1"
// → The value is a String.

console.log(typeof jsUser[mySym]);             // string


// jsUser["mySym"]
// → Looks for the String key "mySym".
// → There is no such key.
// → Therefore the value is undefined.

console.log(typeof jsUser["mySym"]);           // undefined


// --------------------------------------------------------------------
// Other values
// --------------------------------------------------------------------

console.log(typeof jsUser.age);                // number
console.log(typeof jsUser["age"]);             // number

console.log(typeof jsUser.location);           // string
console.log(typeof jsUser["location"]);        // string

console.log(typeof jsUser.email);              // string
console.log(typeof jsUser["email"]);           // string

console.log(typeof jsUser.isLoggedIn);         // boolean
console.log(typeof jsUser["isLoggedIn"]);      // boolean

console.log(typeof jsUser.lastLoginDays);      // object
console.log(typeof jsUser["lastLoginDays"]);   // object
// Arrays are objects in JavaScript.


// --------------------------------------------------------------------
// Accessing keys - summary
// --------------------------------------------------------------------

// String key
// ├── valid identifier → obj.key OR obj["key"]
// └── invalid identifier → obj["key"]
//
// Symbol key
// └── obj[symbolVariable]


// CONCLUSION:
// obj["key"] is more universal for String keys.
// It also works when the key contains spaces or other characters.
// For a Symbol key, use obj[symbolVariable].


console.log("========================================");


// ====================================================================
// OBJECT PROPERTY KEYS
// ====================================================================

// An object property key is ultimately either:
// 1. A String
// 2. A Symbol
//
// If the key is not a Symbol, it is converted to a String.


// | What you write as key | Actually stored as | Example             |
// | --------------------- | ------------------ | ------------------- |
// | `"name"`              | String             | `"name"`            |
// | `name`                | String             | `"name"`            |
// | `123`                 | String             | `"123"`             |
// | `true`                | String             | `"true"`            |
// | `false`               | String             | `"false"`           |
// | `null`                | String             | `"null"`            |
// | `undefined`           | String             | `"undefined"`       |
// | `Symbol("id")`        | Symbol             | `Symbol("id")`      |
// | object `{}`           | String             | `"[object Object]"` |
// | array `[]`            | String             | `""`                |


// Core rule:
//
// Property key
//      │
//      ├── Symbol ──→ stays Symbol
//      │
//      └── anything else ──→ converted to String


// ====================================================================
// MODIFYING OBJECT KEY : VALUE PAIRS
// ====================================================================

// Overwriting an existing value

jsUser.email = "dakshSharma@google.com";

console.log(jsUser.email);


// ====================================================================
// OBJECT.FREEZE()
// ====================================================================

// Object.freeze(jsUser);
//
// Once an object is frozen:
// → Existing properties cannot be changed.
// → Existing properties cannot be deleted.
// → New properties cannot be added.


// Currently NOT frozen because the line above is commented out.

jsUser.email = "dakshSh@google.com";

console.log(jsUser.email);
console.log(jsUser);


// ====================================================================
// FUNCTIONS AS OBJECT VALUES
// ====================================================================

// A function can also be stored as an object's value.

jsUser.greeting = function(){                                             // if jsUser object is freeze then this won't happen
    console.log("Hello js user."); 
}


jsUser.greetingTwo = function(){
    // "this" refers to the object through which the function is called.
    // Here, jsUser.greetingTwo() is called,
    // so "this" refers to jsUser.

    console.log(`Hello js user, ${this.name}.`);
}


// Accessing the function without () returns the function itself.
// It does NOT execute the function.

console.log(jsUser.greeting);


// () → executes the function
jsUser.greeting();
jsUser.greetingTwo();

