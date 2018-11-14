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
            return `${this.owner} knows an awesome dog named ${pet}.`
        });
    }
};
console.log(pets1.description());

