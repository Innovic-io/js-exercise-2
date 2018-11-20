// Example4 //

// TODO when you learn unit tests, refactor this if/else into tests
const assert = require('assert');
class myUnitTest {

}

const  Function3 = (time) => {
    if (time < 10) {
        console.log('G');
       return 'less than 10';
    } else if (time < 20 ) {
        console.log('Good evening');
        return 'between';
    } else {
        console.log('Good night');
        return 'higher';

    }
}
Function3(13);


let t = 20;

if (t > 21){
    t = 'Not good'
}
else{
    t = 'Its good!'
}
console.log(t);


let z = 15;
console.log( z < 21 ? "Not good" : "sada");


assert.equal(Function3(9), 'less than 10');
//assert.equal(Function3(10), );
//assert.equal(Function3(15),'' );