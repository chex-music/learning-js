const progLangs = ["JavaScript", "Python", "Java", "C#", "Ruby"];
const numbers = [1, 2, 3, 4, 5];
// const values  = progLangs.forEach((lang)=>
//     console.log(`I love ${lang}`)
// );

// console.log(values);// outputs `undefined` because forEach does not return a value

// const values = numbers.filter((num) => {
//     return num % 2 === 0; //condition to filter even numbers
// });
// console.log(values); // outputs [2, 4] because filter returns a new array with the filtered values

// const values2 = numbers.filter((num) => num > 3);// implicit return of numbers greater than 3 
// console.log(values2); 

// //using forEach to create a new array of even numbers
// const evenNumbers = [];
// numbers.forEach((num) => {
//     if (num % 2 === 0) {
//         evenNumbers.push(num); // adding even numbers to the new array
//     }
// });
// console.log(evenNumbers); 

// //
const books = [
    { title: "Book A", price: 10,genre:"Fiction" },
    { title: "Book B", price: 15,genre:"Non-Fiction" },
    { title: "Book C", price: 20,genre:"Fiction" },
    { title: "Book D", price: 25,genre:"Science Fiction" },
];

// const result = books.filter((book) => {
//     return book.genre === "Fiction";
// });

// console.log(result);
// const newnumbers = numbers.filter((num) => num * 2);
// console.log(newnumbers); // outputs [1, 2, 3, 4, 5] because filter does not modify the original array and the condition is not filtering any values

// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // outputs [2, 4, 6, 8, 10] because map returns a new array with the modified values
// console.log(numbers);// outputs [1, 2, 3, 4, 5] because map does not modify the original array

//chaining means using multiple array methods together in a single expression. 
// For example, we can use filter and map together to first filter out even numbers and then double them:
// const newnumbers2 = numbers
//                     .filter((num) => num % 2 === 0)
//                     .map((num) => num * 2);
// console.log(newnumbers2); // outputs [4, 8] because we first filter out even numbers (2 and 4) and then double them (4 and 8)

// The reduce method is used to reduce an array to a single value by applying a function to each element of the array.
const myTotal = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);// the second argument (0) is the initial value of the accumulator
console.log(myTotal);

// const totalPrice = books.reduce((total, book) => total + book.price, 0);
// console.log(totalPrice);
