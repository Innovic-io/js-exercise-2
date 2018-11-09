// Example 7 //
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

let i;

for (i = 0; i < cars.length; i++) {
    text += cars[i] + "   ";
}

console.log(text);



let string = ["J","o", "c", "o"];

string.forEach(function (element) {
    console.log(element);
})
