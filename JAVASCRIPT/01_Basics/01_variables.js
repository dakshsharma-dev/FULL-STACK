const accountId = 11111;
// accountId = 2                       // not allowed since the variable is const
console.log(accountId);


let accountEmail = "daksh@gmail.com";  // dynamically typed language -> infers the type of data itself
var accountPassword = "1234";
accountCity = "Jaipur";                // this is also valid in js but don't declare like this
let accountState;                      // undefined

// modifications 
accountEmail = "afodsfsd.com"
accountPassword = "43424"
accountCity = "Queenstown"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// prefer not to use var
// because of issue in block scope and functional scope



