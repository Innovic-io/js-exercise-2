// Example 15

/*
* In computer science, functional programming is a programming paradigm or pattern (a style of building the structure and elements of computer programs)
* Functional Programming treats computation as the evaluation of mathematical functions.
* Functional Programming avoids changing-state and mutable data.
*/

let array = [3, 5, 12, 87, 33];

// function map
let x = array.forEach( y => console.log(y)
);
console.log(x);

console.log(array);
// function filter

let u = array.filter(p => p > 11)

console.log(u);

//function reduce

const reducer = (accumulator, currentValue) => accumulator + currentValue




console.log(array.reduce(reducer));


let sum = array.filter( p1 => p1 > 2).map(y1 => y1 + y1).reduce(reducer)/2;

console.log(sum);

// function forEach
let t = array.forEach( (elAr) =>{
    console.log(elAr + elAr);
});

console.log(array);
// function sort
array.sort( (el1,el2) => {
        if (el1 > el2){
            return -1;
        }
        else {
            return 1;
        }
});

console.log(array);

let niz = [2,54,23,5,76,1];
let b = niz.map((x) => x * (-1))
b.sort((el1,el2) => {
    return el1 - el2;
});
console.log(b.map((x) => x * (-1)));