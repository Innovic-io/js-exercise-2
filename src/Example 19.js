// Example 19

console.log('ARA');

setTimeout(function cd () {
  console.log('Maaaa');
}, 1000);

console.log('Mareee');

//

const odd = (number) => new Promise(((resolve, reject) => {
  if (number % 2 !== 0) {
    return resolve('good');
  }
  return reject('not good');
}));

odd(2)
  .catch(val => console.log(2, val));
odd(3)
  .then((val) => console.log('3', val));

//

const odd1 = (a, b) => new Promise((resolve, reject) => {
  if (b % 2 !== 0) {
    return resolve(a / b);
  }
  else {
    return reject(a * b);
  }

});
odd1(1, 7)
  .then((x) => console.log(x));
odd1(3, 24)
  .catch(x => console.log(x));

const name = (name1) => {
  odd1(1, 2);
  return Promise.resolve(name1);
};
const name2 = (name1) => {
  return odd1(1, 2);
};
const name3 = async (name1) => {
  odd1(1, 2);
  return name1;
};
const name4 = async (name1) => {
  return await odd1(1, 2);
};
