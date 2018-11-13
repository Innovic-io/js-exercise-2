// Example 11 //

/* First-class functions are just like primitives and objects.
*functions can be:

Assigned to variables

Returned from functions

Passed as arguments to functions
*/
// Assigned to variables //

const speak = function() {
    console.log("Good mornning");
};
// we call the function //
speak();

// Passed as arguments to function //
function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

// Returned from function //
function Hi() {
    return function() {
        console.log("Hello!");
    }
}
/*
Now, we need to invoke sayHello function and its returned Anonymous Function. To do so, we have two ways:
*Using a variable
 */
const myFunc = Hi();
myFunc();


// or Using double parentheses  //

function Hi() {
    return function () {
        console.log("Hello!");
    }
}
Hi()()
