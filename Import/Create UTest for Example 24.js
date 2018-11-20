//Unit Testing is a level of software testing where individual units/ components of a software are tested.
// The purpose is to validate that each unit of the software performs as designed. A unit is the smallest testable part of any software
const assert = require('assert')
const functions = require('../src/Example 24');

const First = {
    name: 'Marko',
    age: 45,
    surname: 'Mitrovic'
};

const Second = {
  age: 45,
  name: 'Marko',
    surname: 'Mitrovic'
};
const Third = {
    name: 'Marko',
    age: '45',
    surname: 'Mitrovic',
    eysColor: 'blue'
};

const getPromisfy = (number) => new Promise((resolve) => setTimeout(() => resolve(number), 2000));

assert.equal('1',1);
assert.equal(1,1);
assert.equal(1,'1');
assert.equal('1','1');
assert.notEqual(1,2);


/*Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
Two numbers are strictly equal when they are numerically equal
Two Boolean operands are strictly equal if both are true or both are false.
=== is stric
*/
assert.strictEqual(1,1);
assert.strictEqual('1','1');
assert.strictEqual(false, false);
assert.strictEqual(true, true);
assert.strictEqual(undefined, undefined);
getPromisfy(3).then((variable)=> assert.strictEqual(variable, 3))

assert.notStrictEqual(true, 1);
assert.notStrictEqual(1,'1');
assert.notStrictEqual(First,Second);
/*
Two string are deep equal  when they have  same values
== is deep*/

assert.deepEqual(true,1);
assert.deepEqual(false,0);
assert.deepEqual('1','1');
assert.deepEqual(1,'1');
assert.deepEqual(undefined,null);
assert.deepEqual(First,Second);
assert.notDeepEqual(1,2);
assert.notDeepEqual(First,Third);
//assert.deepEqual(1,2);

assert.deepStrictEqual(1, 1);
assert.deepStrictEqual(First,Second);
assert.deepStrictEqual('1','1');
assert.notDeepStrictEqual(First,Third);

