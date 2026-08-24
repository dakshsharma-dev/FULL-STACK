const coding = ['java', 'cpp', 'js', 'ruby'];


// forEach doesn't return anything. So, values is always undefined.
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);


// How to do above thing using forEach() 
const newNums3 = [];
myNums.forEach( (num) => {
    if(num > 4) {
        newNums3.push(num);
    }
});
console.log(newNums3);



// filter()
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4);
console.log(newNums);

const newNums1 = myNums.filter( (num) => {
    num > 4;
});
console.log(newNums1);                // [] -> ********VERY IMP POINT********empty because using BRACES without return statement

const newNums2 = myNums.filter( (num) => {
    return num > 4;
});
console.log(newNums2);                // [5, 6, 7, 8, 9, 10]


 