// // for of loop can be used to iterate over the values of an iterable object like array, string, map, set etc. It cannot be used to iterate over the properties of an object. For that we can use for in loop.
let arr = [1,2,3,4,5];
let str = "Hellossss";
// for(const num of arr){
//     console.log(num);
// }
// let str = "Hello";
// for(const char of str){
//     console.log(char);
// }

let map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

// for(const [key,value] of map){
//     console.log(`${key}: ${value}`);
// }

// //for in loop can be used to iterate over the properties of an object.
// // It cannot be used to iterate over the values of an iterable object like array, string, map, set etc. For that we can use for of loop.

// let obj = {
//     "namew": "John",
//     "agew": 30,
//     "cityw": "New York"
// }

// for(const key in obj){
//     console.log(`${key}: ${obj[key]}`);
// }

// for(const [key,value] in map){
//     console.log(`${key}: ${value}`); //this will not work because for in loop is not designed to iterate over maps
// }

// for(const num in str){
//     console.log(num); //prints the INDEX of the character in the string
// }

// for(const nums in arr){
//     console.log(nums); //prints the INDEX of the array element
// }

let superHerosArray = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];


// superHerosArray.forEach((heroName) => {
//     console.log(heroName);
// })

superHerosArray.forEach((heroName, index) => {
    console.log(`${index}: ${heroName}`);
})

// // we can also define a separate function and pass it to forEach method
// function printHeroNames(heroName){
//     console.log(heroName);
// }
// superHerosArray.forEach(printHeroNames);

// let objArray = [
//     {name: "John", age: 30},
//     {name: "Jane", age: 25},
//     {name: "Doe", age: 35}
// ];

// objArray.forEach((obj) => {
//     console.log(`Name: ${obj.name}, Age: ${obj.age}`);
// })