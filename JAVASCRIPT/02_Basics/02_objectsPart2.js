// ====================================================================
// OBJECTS PART 2
// ====================================================================


// --------------------------------------------------------------------
// Singleton vs Non-Singleton Objects
// --------------------------------------------------------------------

const user = new Object();              // singleton object
console.log(user);                      // {}

const tinderUser = {};                  // non-singleton object
console.log(tinderUser);                // {}


// Adding properties dynamically

tinderUser.id = "123abc";
tinderUser.name = "Daksh";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


// ====================================================================
// NESTED OBJECTS
// ====================================================================

const regularUser = {
    email: "some@gmail.com",

    fullname: {
        userfullname: {
            firstname: "Daksh",
            lastname: "Sharma"
        }
    }
};

console.log(regularUser);

console.log(regularUser.email);

console.log(regularUser.fullname);

console.log(regularUser.fullname.userfullname.firstname);



// ====================================================================
// CONCATENATING / MERGING OBJECTS
// ====================================================================

console.log("Concatenating Objects");


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};


// --------------------------------------------------------------------
// Method 1: Creates nesting
// --------------------------------------------------------------------

const obj3 = {obj1, obj2};

// Creates nesting.
// obj1 and obj2 become properties inside obj3.

console.log(obj3);
// {
//     obj1: { '1': 'a', '2': 'b' },
//     obj2: { '3': 'a', '4': 'b' }
// }


// --------------------------------------------------------------------
// Method 2: Object.assign(target, source)
// --------------------------------------------------------------------

const obj4 = Object.assign(obj1, obj2);

// Copies properties of obj2 into obj1.
// Modifies obj1.
// Returns the target object (obj1).

console.log(obj1); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Actual syntax:
//
// Object.assign(target, source1, source2, source3...)


// --------------------------------------------------------------------
// Method 3: Object.assign({}, source1, source2)
// --------------------------------------------------------------------

const obj5 = {5: "c", 6: "d"};
const obj6 = {7: "c", 8: "d"};

const obj7 = Object.assign({}, obj5, obj6);

// Create a new empty object {} -> target
// Copy obj5 into target
// Copy obj6 into target
// Return the target object

console.log(obj5); // { '5': 'c', '6': 'd' }

console.log(obj7); // { '5': 'c', '6': 'd', '7': 'c', '8': 'd' }


// --------------------------------------------------------------------
// Method 4: Spread Operator (Modern & Preferred)
// --------------------------------------------------------------------

// Modern shorthand for:
// Object.assign({}, obj5, obj6)

const obj8 = {...obj5, ...obj6};

console.log(obj8); // { '5': 'c', '6': 'd', '7': 'c', '8': 'd' }


// --------------------------------------------------------------------
// Important Difference
// --------------------------------------------------------------------

// obj1 === obj4   // true
// obj5 === obj7   // false
// obj5 === obj8   // false

// Object.assign(obj1, obj2)
// → modifies obj1 and returns the same object

// Object.assign({}, ...)
// → creates a new object

// {...obj}
// → creates a new object



// ====================================================================
// ARRAY OF OBJECTS
// ====================================================================

const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2,
        email: "e@gmail.com"
    },
    {
        id: 3,
        email: "f@gmail.com"
    },
    {
        id: 4,
        email: "g@gmail.com"
    }
];


// Accessing an object inside an array
console.log(users[1].email);



// ====================================================================
// OBJECT METHODS
// ====================================================================

console.log(tinderUser);


// --------------------------------------------------------------------
// Object.keys()
// --------------------------------------------------------------------

console.log(Object.keys(tinderUser));
// Returns an array of keys.
//
// Example:
// ["id", "name", "isLoggedIn"]


// --------------------------------------------------------------------
// Object.values()
// --------------------------------------------------------------------

console.log(Object.values(tinderUser));
// Returns an array of values.
//
// Example:
// ["123abc", "Daksh", false]


// --------------------------------------------------------------------
// Object.entries()
// --------------------------------------------------------------------

console.log(Object.entries(tinderUser));
// Returns an array.
//
// Converts the object into an array of
// [key, value] pairs (nested arrays).
//
// Example:
//
// [
//   ["id", "123abc"],
//   ["name", "Daksh"],
//   ["isLoggedIn", false]
// ]


// --------------------------------------------------------------------
// hasOwnProperty()
// --------------------------------------------------------------------

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// Checks whether the object directly contains
// the specified property.
//
// Returns true or false.

console.log(tinderUser.hasOwnProperty("isLogged"));
// false