// Example 19
/*
console.log('ARA');

setTimeout(function cd() {
    console.log('Maaaa');
}, 1000);

console.log('Mareee');

//

 const odd = (number) => new Promise(((resolve, reject) => {
     if (number%2 !== 0) {
         return resolve('good');
     }
     return reject('not good')
 }))

odd(2)
    .catch(val => console.log(2, val));   
odd(3)
    .then((val) => console.log('3', val));

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
    .then((x) => console.log(x));
odd1(3,24)
    .catch(x => console.log(x));
/*

const name = (name1) => {
    odd1(1, 2);
    return Promise.resolve(name1)
}
const name2 = (name1) => {
    return odd1(1, 2);
}
const name3 = async (name1) => {
    odd1(1, 2);
    return name1
}
const name4 = async (name1) => {
    return await odd1(1, 2);
}
*/
let array = [1, 4, 2, 7, 9, 21];

const promise1 = (arr) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Array.isArray(arr)) {
            resolve(arr.map((x) => x * 3));
        } else {
            reject('It is not array');
        }
    }, 2000);
});
const promise2 = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Array.isArray(data)) {
            resolve(data.filter((p) => p > 14));
        } else {
            reject('Again, it is not array');
        }
    }, 4000);
});
const promise3 = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        let reducer = (al, curr) => al + curr;
        if (Array.isArray(data)) {
            resolve(data.reduce(reducer));
        } else {
            reject('Again, you are stupid!');
        }
    }, 5000);
});


promise1(array)
    .then((promise1data) => {
        return promise2(promise1data);
    })
    .then((promise2data) => {
        return promise3(promise2data);
    })
    .then((promise3data) => {
        console.log(promise3data)
    })
    .catch((err) => console.log(err));

const promise4 = (number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (number % 2 === 0) {
            resolve(number / 2);
        } else {
            reject('not divisible by 2');
        }
    }, 1000);
});
const promise5 = (number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (number % 3 === 0) {
            resolve(number / 3);
        } else {
            reject('not divisible by 3');
        }
    }, 2000);
});

promise4(12)
    .then((promise4date) =>{
        return promise5(promise4date);
    })
    .then((promise5data)=> {
        console.log(promise5data);
    })
    .catch((err)=> console.log(err) );

module.exports.promise6 = (number) => promise4(number).then((returned) => promise5(returned));

