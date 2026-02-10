//string to number output
// "33" => 33
let score="33";
console.log(typeof(score));
let valueInNumber=Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

//string+num to number output
// "33abc" => NaN
let score2="33abc";
let valueInNumber2=Number(score2);
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

//undefined to number output
// undefined => NaN
let score5=undefined;
let valueInNumber5=Number(score5);
console.log(typeof(valueInNumber5));
console.log(valueInNumber5);

//null to number output
// null => 0
let score3=null;
let valueInNumber3=Number(score3);
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);

//boolean to number output
// true => 1
let score4=true;
let valueInNumber4=Number(score4);
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);

//number to boolean output
// 1 => true
let isLoggedIn=1;
// let isLoggedIn = "abc";// "abc" => true
// let isLoggedIn="";// "" => false
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);


