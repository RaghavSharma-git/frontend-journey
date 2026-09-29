// Reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval 
// },3)

const myTotal = myNums.reduce((acc,curr) => acc +curr ,0)

console.log(myTotal);


const shoppingCart = [
    {
        itemNmae: 'book',
        price: 9.99,
        quantity: 3
    },
    {
        itemNmae: 'laptop',
        price: 999.99,
        quantity: 1
    },
    {
        itemNmae: 'mouse',
        price: 29.99,
        quantity: 2
    }
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceTopay);
