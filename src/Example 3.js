// Example 3 //
let x = Func(4, 3);

function Func(a, b) {
    return a * b;
}
console.log(x);

function h (a, b) {

    return a + '' + b;
}
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
let a = toCelsius(100);
let text  = 'The temperature is' + ' ' + a + ' ' + 'Celsius';

console.log(text);