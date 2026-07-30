const accountId = 11111;
let accountEmail = "daksh@gmail.com";
var accountPassword = "1234";
accountCity = "Jaipur";                // this is also valid in js but don't declare like this
let accountState;                      // undefined

// accountId = 2                       // not allowed

accountEmail = "afodsfsd.com"
accountPassword = "43424"
accountCity = "Queenstown"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// prefer not to use var
// because of issue in block scope and functional scope



