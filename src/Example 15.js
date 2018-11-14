// Example 15

/*
* In computer science, functional programming is a programming paradigm or pattern (a style of building the structure and elements of computer programs)
* Functional Programming treats computation as the evaluation of mathematical functions.
* Functional Programming avoids changing-state and mutable data.
*/

let array = [3, 5, 12, 87, 33];

// function map
let x = array.map( y => y + y);

console.log(x);

// function filter

let u = array.filter(p => p > 11)

console.log(u);

//finction reduce

const reducer = (acumulator, curentValue) => acumulator + curentValue




console.log(array.reduce(reducer));


let sum = array.filter( p1 => p1 > 14).map(y1 => y1 + y1).reduce(reducer);

console.log(sum);
/*
// function forEach
let t = array.forEach(function (elAr){
    console.log(elAr)
});


// function sort
array.sort(function (el1,el2) {
        return el1 - el2;
});

console.log(array);
*/


