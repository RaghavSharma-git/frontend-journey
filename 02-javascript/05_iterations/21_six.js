const coding = ["js","cpp","py","rb"]

// const value = coding.forEach((item) => {
//     console.log(item);
    
// })

// console.log(value);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => { 
//     return num > 4 
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {
        title: 'Book One',genre: 'Fiction', author: 'John Doe', read: false
    },
    {
        title: 'Book Two',genre: 'Non-Fiction', author: 'Jane Doe', read: false
    },
    {
        title: 'Book Three',genre: 'Fiction', author: 'John Doe', read: true
    },
    {
        title: 'Book Four',genre: 'Non-Fiction', author: 'Jane Doe', read: true
    }
    
];

// let userBooks = books.filter( (bk) => bk.genre === 'Fiction' )

let userBooks = books.filter( (bk) => bk.read === true && bk.genre === 'Fiction' )

console.log(userBooks);

