                                                    // STRING & ITS METHODS //   
// NOTE: Strings are primitive and immutable in JavaScript.
// String methods do not modify the original string, they just return a new string containing the result.

// Method/Property              Purpose
// length                       String length
// charAt(i)                    Character at index
// indexOf(str)                 First occurrence
// includes(str)                Check existence(true/false)(case sensitive)
// startsWith(str)              Prefix check
// endsWith(str)                Suffix check
// slice(start, end)            Extract substring
// substring(start, end)        Extract substring (no negative indices)
// split(separator)             Convert string → array
// join(separator)              Array → string{THIS IS AN ARRAY PROTOTYPE NOT STRING PROTOTYPE**********}
// replace(old, new)            Replace first match
// replaceAll(old, new)         Replace all matches
// trim()                       Remove surrounding whitespace
// toLowerCase()                Lowercase conversion
// toUpperCase()                Uppercase conversion


// 1. String Interpolation
const name = "Daksh";
const repoCount = 1;
console.log(name + repoCount + "Sharma");      // Discouraged
 
// Prefer template literals(`....`) over string concatenation (+) for constructing strings.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`); // (``) -> called backticks
// Everything between the backticks is a template literal.
// Interpolation means inserting values or expressions into a string. SYNTAX: ${expression}


// ANOTHER WAY OF DECLARING STRINGS
const gameName = new String("DakshSharma");   // rarely used in real code
console.log(gameName);

console.log(gameName[0]);                     // accessing characters 
console.log(gameName.__proto__);              // returns {} -> which doesn't mean the prototype is empty. CONSOLE is just showing a collapsed object. If you expand it, you'll see methods like:
// charAt() // indexOf() // slice() // substring() // toUpperCase() // toLowerCase()


// A prototype is an object from which another object can inherit properties and methods.
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));


// ANOTHER NOTABLE THING 
const branch = "CSE";
console.log(branch.length);                  // works even without creating object String
console.log(branch.toLowerCase());
// JavaScript temporarily wraps the primitive string in a String object behind the scenes, looks up the method on String.prototype, calls it, and then discards the temporary object.


//indexOf()
console.log(gameName.indexOf('a'));
console.log(gameName.indexOf('a', 10));     // starts searching from 10th index


// substring()
const course = "BTech-cse"; 
console.log(course.substring(0, 4));
console.log(course.substring(0));    // extracts till end


// slice() takes both negative and positive indices
console.log(course.slice(-9, -4));   // becomes (0, 5) -> adding length of string in both indices // we can give -ve values too.
console.log(course.slice(-9));       // extracts till end


// trim()
const newStr = "    Daksh  ";
console.log(newStr.trim());
console.log(newStr.trimStart());
console.log(newStr.trimEnd());


// NOTE:
// length is a property, not a method, so it is accessed without ().
// Most string methods are functions. If you omit (), you are referring to the function object itself rather than calling it and you might see something like [Function: function-object]


// replace() and replaceAll()
const url = "https://daksh.com/daksh%20sharma%20group";
console.log(url.replace('%20', '-'));
console.log(url.replaceAll('%20', '-'));


// includes() // case-sensitive search to determine whether a given string may be found within this string, returning true or false
console.log(url.includes('daksh'));


// startsWith() and endsWith()
const str1 = "satSatfriSunsun";
console.log(str1.startsWith("sat"));      // true
console.log(str1.startsWith("sat", 3));   // false    //  index of searchString's first character(Defaults to 0).
console.log(str1.endsWith("sun"));        // true
console.log(str1.endsWith("Sun", 12));    // true     // the index of searchString's last character plus 1(Defaults to str.length)


// split()
const idiom = "The quick brown fox jumps over the lazy dog";
console.log(idiom.split(" "));    // divides into words using separator (" ")
console.log(idiom.split("", 5));  // divides into letters but the size of the array will be 5
console.log(idiom.split());       // returns an array containing the entire string as a single element


// join() {Array.prototype.join()}
const arr = ["Daksh", "Babulal", "Sharma"];
console.log(arr.join("-")); //Daksh-Babulal-Sharma
console.log(arr.join());    // Daksh,Babulal,Sharma           // without separator -> separated using ','
console.log(arr.join(""));  // DakshBabulalSharma

const str = "Daksh,babulal,sharma";
console.log(str.split(",").join(" "));                        // .split returns an array and on array we performed join returning a string



