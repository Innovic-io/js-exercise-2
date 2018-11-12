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



console.log(months);
/**
 * The first number shows wich field we are star (we start from the other)
 and the other shows whether we delete or not and (we delete 2 fields) and string shows what we can put on the array
 */
months.splice(1,2, 'Februar');

console.log(months);

months.splice(4,0, 'May');

console.log(months);


months.splice(6,0, 'September');

console.log(months);

/*
 *filter elements that contain more than 5 letters
 */

const result = months.filter(word => word.length > 5);
console.log(result);


/*
 *creates a new strings that are drawn from a given string
 */

console.log(Array.from("Marko"));
