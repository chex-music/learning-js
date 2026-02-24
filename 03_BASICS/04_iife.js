
// pronoounce :iffy
//unnamed IIFE
(
    function() {
        console.log('This is an IIFE (Immediately Invoked Function Expression)');
    }
)();
//named IIFE with expression
let result = (function dbConnect() {
        console.log('Connecting to the database...');
})(); // It will print Connecting to the database... because the function dbConnect is an IIFE (Immediately Invoked Function Expression) which means it will be executed immediately after it is defined.

//unnamed IIFE using arrow function
(
    (name)=>{
        console.log(`This is an arrow function ${name} `);
    }
)('IIFE');