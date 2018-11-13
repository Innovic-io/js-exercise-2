// Example 7
let cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
let text = '';
let i;


// for of, for in, array functions


// for of (for array)
/*
* for (variable of iterable) {
  statement
}*/
for( i of cars){
    text += i + ' ';
}
console.log(text);

//for in (for object)
/*
* for (variable in object) { ...
}*/
let cars1 = {a : 'BMW', b : 'Volvo', c : 'Saab', d : 'Ford' };
let text2 = '';
let j;

for(j in cars1){
    text2 += cars1[j] + ' ';
}
console.log(text2);

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
 * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 * start - Index at which to start changing the array
 * deleteCount - An integer indicating the number of old array elements to remove.
 * item1, item2  - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array */
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
 *creates a new array that are drawn from a given string
 */

console.log(Array.from("Marko"));