
if(true){
    let a = 40
    const b = 50;
    // var c = 60;
}
// console.log(a);
// console.log(b);
// console.log(c);// It will print 60 because var is function scoped and it will be hoisted to the top of the function or global scope but let and const are block scoped and they will not be hoisted to the top of the block scope.


//************************Intersting***********************

// console.log(addOne(5));// It will print 6 because function declarations are hoisted to the top of the scope 
// and they can be called before they are defined.
function addOne(num){
    return num + 1;
}
// addTwo(5);// It will throw an error because function expressions are not hoisted to the top of the scope 
// and they cannot be called before they are defined.
const addTwo = function(num){
    return num + 2;
}
