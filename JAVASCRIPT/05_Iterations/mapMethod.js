const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// map
const newNums = nums.map( (num) => num + 10);   
console.log(newNums);


// chaining 
// Method chaining: each operation processes the result of the previous one.
// First multiply each element by 10, then add 1, then keep only values >= 40.
// The final transformed array is stored in newNums1.

const newNums1 = nums
                    .map( (num)  => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40);

console.log(newNums1);

