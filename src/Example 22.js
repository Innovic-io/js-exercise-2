// Example 22

let result = "";
let i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 7);

console.log(result);


let array = [1,2,3,4,5,6,7];
let p =' ';
for(let x of array){
        p += x + ' ';
}
console.log(p);

let array2 = [1,2,3,4,5,6,7];
let p1 = ' ';

for (let y in array2){
    p1 += array2[y];
}
console.log(p1);

let array3 = [1,2,3,4,5,6,7];

array3.forEach((x) =>{
    console.log(x);
});
console.log(array3);

array3.map((x) => {
    console.log(x);
});
