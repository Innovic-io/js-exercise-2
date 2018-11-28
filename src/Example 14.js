// Example 14 spread array
//1

function Func (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c)
}

const array = [1, 2, 3, 4];

console.log(...array)

Func(...array);

//2

function Func2 (a, b, c, d, e, f) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}


array2 = [0, 1, 5];


Func2(-1,...array2,2, 3, 4);

//3

let ar = [1,2];
let at =[0, ...ar, 3];

console.log(at);

//4

function square (a,b,c) {
    let array3 = [...arguments];
    let Square = array3.map(x => x * x)
    console.log('Square is: ' + Square);
}
square(1,2,3);

// spread object operator

//1

let people = {name : 'Joco', age : '24'};

let clonePeople = {...people};

console.log(clonePeople);

//2

let people1 = {firstName : 'Marko', age : '20'};
let people2 = {lastName : 'Mirkovic', height : '201cm'};

let mergePeople = {...people2, ...people1};

console.log(mergePeople);

const phone ={
    name : 'Samsung',
    year : 2015,
    proccesor : '1.6GHz'
};
const {name: first_name,year,proccesor} = phone; //processor = phone.processor
console.log( first_name === "Samsung",  year === 2015, proccesor === "1.6GHz");
//
const a =['Mark', 'George', 'Ivana', 'Maja','Joco'];
let [first, second, ...rest]= a;

console.log(first, second , rest);
//
function g (...args) {
    console.log(args);
}
g(1,3,4,5,7,8,9);
/*

const phone = {
    name : 'Samsung',
    year : 2015,
    model : 'S3-Neo',
    proccesor : '1.6 GHz'
};

const arrayOfNames = ['Mark', 'George', 'Ivana', 'Maja', 'Joco']

I want to get name, year and model inline. How should I do this?
for example I want to do this?
I want to have
const name, year, model
such that  name === 'Samsung', year ==== 2015, model === 'S3-Neo'
HINT:
MAGIC = phone // DO NOT USE dot (phone.name...)

I want to have three constants in such way that
name1 === 'Mark'
name2 === 'George'
names = ['Ivana', 'Maja', 'Joco']

you need to do it inline also
MAGIC = arrayOfNames // DO NOT USE arrayOfNames[0] and such

 */
