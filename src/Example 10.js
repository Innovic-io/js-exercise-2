// Example 10 //
/*
*type let can change their value
*/

let a = 10;

a = 5;

console.log(a);
/*
*type var can change their value
*/
var b = 9;

b = 10;

console.log(b);
/*
*This is error!
* Type const cannot change its value

const c = 0;

c = 14;

console.log(c);
*/

/*
* Type var can be accessible anywhere in function
*/

function f (age) {
    if(age > 18) {
        var status = 'adult';
    }
    console.log(status);
}
f(20);

/*
* Type let cannot be accessible anywhere in function
*  He is accesible outside the block
*  Its not correct

function h (age) {
    if(age > 18) {
        let status = 'adult';
    }
    console.log(status);
}
h(45);
*/

/*
*  Its correct
*/

let status = 'adult';
function h (age) {
    if(age > 18) {

    }
    console.log(status);
}
h(45);
