// Stack(with primitive variables, you get a copy of varible), Heap(non-primitive, you get a reference of variable)

                                        // UNDERSTANDING STACK // 
let myYoutubeName = "DakshSharma";      // stored in STACK
let anotherName = myYoutubeName;        // gets a copy of myYoutubeName
console.log(myYoutubeName);             // DakshSharma
console.log(anotherName);               // DakshSharma   

// update value of anotherName
anotherName = "Daksh";
console.log(myYoutubeName);             // DakshSharma      
console.log(anotherName);               // Daksh
// ABOVE 2 LINES SUGGESTS THAT anotherName GOT COPY OF myYoutubeName NOT A REFERENCE TO IT.

                                        // UNDERSTANDING HEAP //

let userOne = {                         // variable name is in stack and gets a reference to its properties stored in HEAP 
    email: "user@gmail.com",            // properties are stored in HEAP
    upi: "user@hdfc"                    // properties are stored in HEAP
};
console.log(userOne.email);             // user@gmail.com
let userTwo = userOne;                  // variable name is in stack and gets a reference to userOne properties stored in HEAP.
userTwo.email = "user2@gmail.com";      // updated memory at actual memory location
console.log(userOne.email);             // user2@gmail.com
console.log(userTwo.email);             // user2@gmail.com


// MORE ACCURATE DESCRIPTION OF ABOVE CODE
// let userOne = {  
//     // userOne stores a reference to an object

//     email: "user@gmail.com",
//     // property inside the object

//     upi: "user@hdfc"
//     // property inside the object
// };

// let userTwo = userOne;
// // userTwo gets a copy of the same reference

// userTwo.email = "user2@gmail.com";
// // modifies the shared object

// console.log(userOne.email);
// // "user2@gmail.com"




