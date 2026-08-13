// +++++++++++++++++++++++++++++++++++++++++ARRAYS++++++++++++++++++++++++++++++++++++


// Array Creation
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Iron-Man", "Spider-Man"];
const myArr2 = new Array(1, 2, 3, 4);                // Array constructor

console.log(`myArr: ${myArr}`);



// NOTE: ******************
// JavaScript array-copy operations create SHALLOW copies.
//
// Shallow Copy:
// - Copies the outer structure only.
// - Nested objects/arrays still share the same references.
// - Changes to nested objects may affect both copies.
// - A shallow copy may contain newly copied values as well as references to existing objects."
// - One refinement: the copy itself is new, while the things it contains are copied according to their type—primitive values are copied as values, whereas object values remain references to the same objects.
// 
// Deep Copy:
// - Creates completely independent copies.
// - Changes in one object do not affect the other.
//
// Most built-in array copy operations (slice, concat, spread, Array.from, etc.) create shallow copies.


// ====================================================================
// Basic Array Methods
// ====================================================================

myArr.push(6);      // add element at end
myArr.push(7);
myArr.pop();        // remove element from end

myArr.unshift(9);   // add element at beginning
myArr.shift();      // remove element from beginning

console.log(`After push/pop/unshift/shift: ${myArr}`);


console.log(`includes(9): ${myArr.includes(9)}`); // true/false
console.log(`indexOf(9): ${myArr.indexOf(9)}`);   // -1 if not found
console.log(`indexOf(3): ${myArr.indexOf(3)}`);


const newArr = myArr.join(); // converts array into comma-separated **STRING**

console.log(`myArr: ${myArr}`);
console.log(`join(): ${newArr}`);
console.log(`typeof newArr: ${typeof newArr}`);             // string******



// ====================================================================
// slice() vs splice()
// ====================================================================

console.log(`Original Array: ${myArr}`);

const myn1 = myArr.slice(1, 3);
// Returns elements from index [1, 3)
// Does NOT modify original array

console.log(`slice(1, 3)       : ${myn1}`);
console.log(`After slice(1, 3) : ${myArr}`);


const myn2 = myArr.splice(1, 3);
// Removes 3 elements starting from index 1
// Modifies original array

console.log(`After splice(1, 3): ${myArr}`);
console.log(`Removed Elements  : ${myn2}`);



// ====================================================================
// Combining Arrays
// ====================================================================

const mcu = ["IronMan", "SpiderMan", "Captain"];
const dc = ["SuperMan", "Flash", "Batman"];


// push() adds entire array as a single element
// mcu.push(dc);
// console.log(mcu);
// console.log(mcu[3][2]);


const allHeros = mcu.concat(dc);
// concat() returns a **NEW array** and does NOT modify the original arrays.
// The new array is a SHALLOW copy: object/array elements are still shared.

console.log(`concat(): ${allHeros}`);
console.log(`concat(): ${mcu}`);


const allNewHeros = [...mcu, ...dc];
// Spread operator (modern and **COMMONLY** used)

console.log(`spread: ${allNewHeros}`);



// ====================================================================
// flat()
// ====================================================================

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let realAnotherArray = anotherArray.flat(1);
// array.flat(depth) → depth tells JavaScript how many levels of nested arrays to flatten.
// flat(1) → flattens only 1 level of nesting.
console.log(realAnotherArray);

realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);
// flat(Infinity) → flattens all levels of nested arrays.



// ====================================================================
// Array Utility Methods
// ====================================================================

console.log(`Array.isArray("Daksh"): ${Array.isArray("Daksh")}`);          

console.log(Array.from("Daksh"));
// Converts iterable object into array

console.log(Array.from({ name: "Daksh" }));
// Interesting case:
// Returns [] because object is neither iterable nor array-like(length missing). So JavaScript has no idea how many elements to create.
//
// To use Array.from() on an object,
// the object must have a length property or be iterable.



let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3));
// Creates an array of provided values

// NOTE:******
// Array.isArray(), Array.from(), and Array.of() are STATIC methods.
//
// They belong to Array itself, not Array.prototype.
//
// Therefore:
//
// Array.isArray(arr);  // ✅
// Array.from("Daksh"); // ✅
// Array.of(1, 2, 3);   // ✅
//
// arr.isArray();       // ❌
// arr.from();          // ❌
// arr.of();            // ❌
//
// Similar to:
// Date.now()           // static method
//
// Unlike:
// arr.push()           // prototype method
// arr.pop()            // prototype method



// ====================================================================
// Useful Extras
// ====================================================================

// Accessing elements
console.log(`First Element: ${myArr[0]}`);
console.log(`Last Element : ${myArr[myArr.length - 1]}`);


// Array length
console.log(`Length: ${myArr.length}`);
