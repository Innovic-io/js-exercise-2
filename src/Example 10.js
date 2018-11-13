// Example 10 //
/*
*type let can change their value
*/

let a = 10;
// let a = 15 type let can't be re-defined
a = 5;

console.log(a);
/*
*type var can change their value
*/
var b = 9;

var b = 12

b = 10;

console.log(b);
/*
* Type const cannot change its value
*This is error!

const c = 0;
const c =  12 or
c = 14;

console.log(c);
*/

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);

//if it is declared inside the block, it will be not defined outside the block.
for(let j = 0; j < 10; j++){
    console.log(j);
}
//console.log(j);


