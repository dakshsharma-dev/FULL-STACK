// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// MAPS        
// ************* Remembers the original insertion order of the keys
// key in the Map may only occur once; it is unique in the Map's collection

const map = new Map();  
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
console.log(map);
map.set('Fr', "French"); // overwrites the previous value of 'Fr' key
console.log(map);


for (const [key, value] of map) {
    console.log(`${key}:- ${value}`);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// NOTE: objects aren't iterable
// for (const [key, value] of myObject) {
//     console.log(`${key}:- ${value}`);
// }