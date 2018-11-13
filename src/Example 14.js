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