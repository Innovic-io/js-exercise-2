// Example 19

console.log('ARA');

setTimeout(function cd() {
    console.log('Maaaa');
}, 0);

console.log('Mareee');

//

 const odd = (number) => new Promise(((resolve, reject) => {
     if (number%2 !== 0) {
         return resolve('good');
     }
     return reject('not good')
 }))

odd(2)
    .then((val) => console.log('1', val))
    .catch(val => console.log(2, val))
odd(3)
    .then((val) => console.log('3', val))
    .catch(val => console.log(4, val))

//

     const odd1 =(a,b) => new Promise((resolve, reject) => {
         if( b % 2 !== 0){
             return resolve (a / b);
         }
         else {
             return reject(a * b);
         }

     });
odd1(1,7)
    .then((x) => console.log(`1 => ${x}`)) 
    .catch(x => console.log(x));
odd1(3,24)
    .then((x) => console.log(`3 => ${x}`) )
    .catch(x => console.log(x));























