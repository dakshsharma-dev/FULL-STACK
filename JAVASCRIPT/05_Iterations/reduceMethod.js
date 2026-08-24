const nums = [1, 2, 3, 4];

const initialVal = 0;

const sum = nums.reduce(function (acc, currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 0);
console.log(sum);

const sum1 = nums.reduce(
    (acc, currVal) => (acc + currVal), initialVal
);

console.log(sum1);


const shoppingCart = [
    {
        itemName: "Java course",
        price: 299
    },
    {
        itemName: "C++ course",
        price: 199
    },
    {
        itemName: "JS course",
        price: 149
    },
    {
        itemName: "Data Science course",
        price: 1499
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);