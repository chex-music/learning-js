// //fasly values
// false
// 0,-0,0n(zero in BigInt)
// ""
// null
// undefined
// NaN
// //truthy values
// true
// "0",
// "false",
// " ",
// ` ` (non-empty string)
// [],{}(empty array and empty object)
// function(){}(empty function)

// //to check if an obj is empty
// if(Object.keys(obj).length === 0){
//     console.log("object is empty");
// }

// //to check if an array is empty
// if(arr.length === 0){
//     console.log("array is empty");
// }

// false == 0 // true
// false == '' // true
// 0 == false // true

//nullish coalescing operator (??) is used to provide a default value when the left-hand side operand is null or undefined. It returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
// val = null ?? 'default value'; // val will be 'default value' because null is nullish
// val = 5 ?? 10; // val will be 5 because 5 is not nullish
// val = null ?? 10 ?? 5;
// console.log(val);

//ternary operator
let age = 18;
let canVote = age >=18 ? 'Yes, you can vote' : 'No, you cannot vote';
console.log(canVote);
