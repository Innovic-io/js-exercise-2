// Example 16
/*
function sayHello(name) {
    return "Hello, " + name;
}
function greeting(helloMessage, name) {
    console.log(helloMessage(name));
}
greeting(sayHello, "JavaScript!");

function add (a, b) {
    return a + b;
}
function sub (a, b) {
    return a - b;
}

function myFunc (func) {
    return func;
}

console.log(myFunc(add(3,5)));

console.log(myFunc(sub(10,7)));
function mul (a, b){
    return a * b;
}
function div (a,b) {
    return a / b;
}
function calculator (a, b, operationFunction) {
    return operationFunction(a,b);
}
console.log(calculator(2,6,add));
console.log(calculator(2,6,mul));
console.log(calculator(2,6,sub));
console.log(calculator(2,6,div));


function myFunction(param){
  console.log('Hi, myFunction here!');
  console.log('I\'ve received a parameter: ', param);
}
function myOtherFunction(passedInFunction) {
  console.log('Hi, other function here!');
  console.log('I even have a parameter:', typeof passedInFunction);
  passedInFunction('Hi myFunction, myOtherFunction here!');
}
myOtherFunction(myFunction);
// Hi, other function here!
// I even have a parameter: function
// Hi, myFunction here!
// I've received a parameter:  Hi myFunction, myOtherFunction here!



function first(value) {
    return (value + 2);
}
function second(value) {
    return (value + 2);
}
function third(value) {
    return (value + 2);
}
function f (number) {
    return number
}
*/
function f1 (value, callback) {
    return callback(value + 2, false)
}
function f2 (value, callback) {
    return callback(value + 2, false)
}
function f3 (value, callback) {
    return callback(value + 2, false)
}



    f1(2, function (firstResult, err) {
        if (!err) {
            console.log(firstResult)
        }
        f2(firstResult, function (secondResult, err) {
            if (!err) {
                console.log(secondResult)
            }
            f3(secondResult, function (thirdResult, err) {
                if (!err) {
                    console.log(thirdResult);
                }
            })
        })
    });

/*
const promise = new Promise((resolve,reject) => {
    resolve(2);
});


promise.then(first).then(second).then(third).then((response) => {
    console.log(response);
});
/*

this.a = 'a';

function Person (name) {
    this.name = name;

    console.log(this.a);
    return (callback, a, b) => {

        return callback(a, b);
    }
}

function dummyCallback(a, b) {
    return a + b
}

const myCopy = dummyCallback;
const a = (a, b) => {
    console.log(this.a);
    return a + b;
}
console.log(a(2,2))
const p = new Person('a')(myCopy, 2, 3);
*/