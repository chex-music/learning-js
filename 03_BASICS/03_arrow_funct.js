// const add = (a,b) => (a+b)//implicit return
// console.log(add(10,20));

// const addOne = (a,b) => {
//     return a+b;//explicit return
// }
// console.log(addOne(10,20));

// const addTwo = (a,b) => ({name:'John',age:30});//{} It will return an object because we are using implicit return 
// // and we are returning an object literal. If we want to return an object literal we need to wrap it in parentheses otherwise it will be treated as a block of code
// console.log(addTwo(10,20));

// function demo(){
//     console.log(this);// It will print the global object because in a regular function this refers to the global object  
// }
// demo();
// console.log(this);// It will print the global object i.e {} because in the global scope this refers to the global object.
// const demo2 = () => {
//     console.log(this);// It will print {} i.e. an empty object because in an arrow function this refers to the enclosing scope 
//     // which is the global scope in this case and in the global scope this is an empty object.
// }
// demo2();