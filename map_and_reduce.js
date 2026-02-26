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

//
const books = [
    { title: "Book A", price: 10,genre:"Fiction" },
    { title: "Book B", price: 15,genre:"Non-Fiction" },
    { title: "Book C", price: 20,genre:"Fiction" },
    { title: "Book D", price: 25,genre:"Science Fiction" },
];

const result = books.filter((book) => {
    return book.genre === "Fiction";
});

console.log(result);