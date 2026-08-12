// +++++++++++++++++++++++++++++++++++++++++DATES++++++++++++++++++++++++++++++++++++


// Current Date & Time
let myDate = new Date();                                         // Date instance/object

console.log(myDate);
console.log(`myDate: ${myDate}`);                                // Internally, its roughly doing: console.log("myDate: " + myDate.toString());
// When you write:
// console.log(obj); → Console receives the actual object.

// When you write:
// console.log(`${obj}`); → JavaScript first converts the object into a string, then prints that string.

console.log(`toString(): ${myDate.toString()}`);                 // Local date & time in readable format
console.log(`toDateString(): ${myDate.toDateString()}`);         // Date portion only
console.log(`toISOString(): ${myDate.toISOString()}`);           // UTC time in ISO 8601 format
console.log(`toJSON(): ${myDate.toJSON()}`);                     // Same as toISOString(), commonly used in APIs/JSON
console.log(`toLocaleDateString(): ${myDate.toLocaleDateString()}`); // Locale-aware date only
console.log(`toLocaleString(): ${myDate.toLocaleString()}`);     // Locale-aware date & time
console.log(`toLocaleTimeString(): ${myDate.toLocaleTimeString()}`); // Locale-aware time only
console.log(`typeof myDate: ${typeof myDate}`);                  // object


console.log("================================================================================");


// Creating Dates using numeric arguments
let myCreatedDate = new Date(2026, 0, 2);   // year, month(0-based), day

console.log(`myCreatedDate: ${myCreatedDate}`);
console.log(`toDateString(): ${myCreatedDate.toDateString()}`);
console.log(`myCreatedDate: ${myCreatedDate.toLocaleString()}`);
console.log(`typeof myCreatedDate: ${typeof myCreatedDate}`);


let myCreatedDate2 = new Date(2026, 0, 23, 5, 3);   // year, month, day, hour, minute

console.log(`myCreatedDate2: ${myCreatedDate2}`);
console.log(`toDateString(): ${myCreatedDate2.toDateString()}`);
console.log(`myCreatedDate2: ${myCreatedDate2.toLocaleString()}`);


console.log("================================================================================");



// Other ways to create Dates
let d1 = new Date("2026-01-14");   // yyyy-mm-dd (ISO format, recommended)
let d2 = new Date("01-14-2026");   // mm-dd-yyyy (works but not recommended)

console.log(`d1: ${d1.toDateString()}`);
console.log(`d2: ${d2.toDateString()}`);


console.log("================================================================================");


// NOTE:
// Date has:
// Static methods    → called directly on Date
// Prototype methods → inherited by every Date object

// Date
// ├── now()          // static
// ├── parse()        // static
// ├── UTC()          // static
// └── prototype
//     ├── getTime()
//     ├── getDate()
//     ├── getMonth()
//     └── toISOString()

// Timestamps
let myTimeStamp = Date.now();   // milliseconds elapsed since 1 Jan 1970 UTC

console.log(`Date.now(): ${myTimeStamp}`);                          // timestamp of the current moment
console.log(`myCreatedDate.getTime(): ${myCreatedDate.getTime()}`); // timestamp of this date in milliseconds
console.log(`Unix timestamp in seconds: ${Math.floor(Date.now() / 1000)}`);


console.log("================================================================================");


// Date Getters
let newD = new Date();

console.log(`Month: ${newD.getMonth() + 1}`); // getMonth() returns 0-11
console.log(`Date of Month: ${newD.getDate()}`); // 1-31

// Day of Week: 0 = Sunday, 1 = Monday, 2 = Tuesday, ..., 6 = Saturday
console.log(`Day of Week: ${newD.getDay()}`);        


// Locale Formatting Options
console.log(
    `Full Date: ${newD.toLocaleString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })}`
); // Wednesday, 12 August 2026

console.log(
    `Short Date: ${newD.toLocaleString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })}`
); // Wed, 12 Aug 2026


console.log("================================================================================");


// Date Comparison
let date1 = new Date("2026-01-01");
let date2 = new Date("2026-02-01");

console.log(`date1 < date2: ${date1 < date2}`); // true
console.log(`date1 > date2: ${date1 > date2}`); // false


console.log("================================================================================");


// Date Arithmetic
let futureDate = new Date();

futureDate.setDate(futureDate.getDate() + 7); // add 7 days

console.log(`Date after 7 days: ${futureDate.toDateString()}`);



// UTC Methods
console.log(`UTC Hours: ${newD.getUTCHours()}`);
console.log(`UTC Date: ${newD.getUTCDate()}`);
console.log(`UTC Month: ${newD.getUTCMonth() + 1}`);


// Note:
// toString()      -> Local time
// toISOString()   -> UTC time (ends with 'Z')