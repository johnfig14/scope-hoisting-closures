//Explain scope, hoisting, and closures

//Local Scope: Local variables only have local scope - meaning, they can only be accessed within the function.
//Example of a local scope function:
function myFunction() {
    var dogName = "Woofy";
}


//Global Scope: Within JavaScript, the global scope is the complete JavaScript environment.1 
//Example of a global scope function:
var catName = "Whiskers";
function myFunction() {   
}


//Hoisting and Code Order Flow: Hoisting is when the variable and the function declarations are put into memory during the compile phase, but stays exactly where you typed it into your coding.
//Example of hoisting in a function.
potato();

function potato() {
    alert("I like potatos!")
}


//JavaSCript Closures: A closure is an inner function that has access to the outer (enclosing) function's variables.
//Example of closure with a private function.
var subtract = (function () {
    var counter = 0;
    return function () {return counter -= 1}
})();

subtract();
subtract();
subtract();