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
let http =['https','://', 'developer.mozilla.org', '/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join'];

console.log(http.join(''));

let array = ['Marko is there', '" "', 'Pale'];

let array2 = array.map(x => x.split(" "));

console.log(array2);

let months = ['Jan', 'March', 'April', 'June'];

months.sort();

console.log(months);

months.splice(1,0, 'Feb');

console.log(months);

months.splice(4,0, 'May');

console.log(months);

console.log(months.sort());

console.log(Array.from("Marko"));


const result = array1.filter(word => word > 10);

console.log(result);



