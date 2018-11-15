
//Example 18

//with function keyboard 1
/*

 */
const  elements = [`Miki`, `Maja`, `Vladimir`, `Ivana`];

const  res = elements.map(function (element) {
    return element.length;

});

console.log(res);

// arrow function 1

const res1 = elements.map(x => x.length);

console.log(res1);

// keyboard function 2
function simple1 (a) {
    if (a > 15){
        return 15;
    }
    else{
        return a;
    }
}
console.log(simple1(16));

console.log(simple1(1));
// arrow function 2

const simple = (a) => a > 15 ? 15 : a;

console.log(simple(16));

console.log(simple(1));

// different between arrow func and func

const pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
        return this.names.map(function(pet){
            console.log(`${this.owner}`);
            return `${this.owner} knows an awesome dog named ${pet}.`
        });
    }
};

console.log(pets.description());

const pets1 = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){

        return this.names.map(pet => {
            console.log(`${this.owner}`);
            return `${this.owner} knows an awesome dog named ${pet}.`
        });
    }
};
console.log(pets1.description());

