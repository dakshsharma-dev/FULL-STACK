// if

const isUserLoggedIn = true;

if(2 == "2"){
    console.log("executed");
}
if(2 === "2"){            // strict checking
    console.log("yes");
}
if(2 !== "2"){            // strict checking
    console.log("no");
}

// switch 

const month = 3;
switch(month){
    case 1:
        console.log("Jan");
        break;                       
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match"); 
        break;
}
// break is necessary because if there were no break,
// then all statements after the matched case would execute(including default)
// until another break or the end of the switch is reached.


