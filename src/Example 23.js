// Example 23

/*
What is Simbol?
Mostly usful for debugging purposes
Symbol() → return a symbol.
Symbol(description) → return a symbol with description string description.
 */

const id = Symbol();

const id1 = Symbol('id');

console.log(id1);

// Is not equal, Symbol() Return a Unique Symbol, Always

const id2 = Symbol('id');

console.log(id1 === id2);


/*Symbol cannt be used, Symbol is not a constructor

const k1 = new Symbol();
*/
//Using Symbol as Property Key

const x = Symbol();
const obj = {};
obj[x] = 3;

console.log(obj);

const y = Symbol()
obj[y] = 13;

console.log(obj);

const z = Symbol();
obj[z] = 34;

console.log(obj);