// Exmaple 6 //
let array1 = [1, 4, 9, 16];

const newarray = array1.map(x => x * 2);

console.log(newarray);

let array2 = [3, 4, 7, 24];

const newarray2 = array2.map(x => x + x);

console.log(newarray2);

let array3 = [3, 5, 7, 32];

console.log(array3.pop());

array3.pop();

console.log(array3);

array3.push(3, 15);

console.log(array3);

array1.slice(0, 2);

console.log(array1.slice(0, 2));


let found = array1.find(function (element) {
  return element > 6;
});

console.log(found);

array1.unshift(4, 5);

console.log(array1);


