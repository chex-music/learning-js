let heros = ["Batman", "Superman", "Spiderman", "Ironman"];
let heros2 = ["batman", "superman", "spiderman", "ironman"];

// let newArray = heros.concat(heros2);
// console.log(newArray);

// let newArray2 = [...heros,...heros2]; //spread operator
// console.log(newArray2);

let newArray3 = [1,2,3,[4,5,6],7,8,9,[10,11,12,[13,14,15,[16,17,18]]]];
// console.log("depth 1: "+newArray3.flat(1));
// console.log(newArray3.flat(2));
// console.log("depth 3: "+ typeof newArray3.flat(3));
// console.log(newArray3.flat(Infinity));

// console.log(Array.isArray(newArray3));
// console.log(Array.from({name:"Chaitanya"}));// interasting

// console.log(Array.of(10,200,10,50));
// console.log(typeof Array);// Here Array is a function not a class



// *********************Part2***********************


//Singleton

// //Oject literal
// const JsUser = {
//     name:"Chaitanya",
//     age: 24,
//     "email": "chaitanya@example.com",
//     isLoggedIn: true,
//     lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
// };

// console.log(JsUser.name);// Dot notation
// console.log(JsUser["age"]);// Bracket notation
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser.name);

//Symbol
const sym1 = Symbol("This is a symbol");
const sym2 = Symbol("This is a symbol");
console.log(sym1 === sym2);// false because every symbol is unique

//Symbol can be used as a key in an object
const JsUser2 = {
    name:"Chaitanya",
    age: 24,
    [sym1]: "This is a symbol value",
    "email": "chaitanya@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    
};
// console.log(JsUser2.sym1);

// Object.freeze(JsUser2);
// JsUser2.name = "New Name";
// console.log(JsUser2.name);// It will not change because the object is frozen

JsUser2.greeting = function(){
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
}
console.log(JsUser2.greeting);// It will print the function definition [Function: (anonymous)] but not execute the function 
console.log(JsUser2.greeting());// It will execute the function and print the greeting message

