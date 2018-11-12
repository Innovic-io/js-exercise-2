// Example 8 //

let person = [
    {
        firstName :"Joco",
        lastName :"Stijakovic",
        age : 24,
        email : "jocostijakovic@gmail.com"
    },
    {
        firstName : "Rade",
        lastName : "Radic",
        age : 22,
        email : "raderadic@gmail.com"
    },
    {
        firstName : "Nikola",
        lastName :"Nikic",
        age : 27,
        email : "nikolanikic@gmail.com"
    }
]
let sortByAge = person.sort(function (p1, p2) {
    return p1.age - p2.age;
});

console.log(sortByAge);



const people = [
        {
            name: 'Joco',
            age: 23,
            education : {
                primary : 'Os pale',
                highSchool : 'Pale'
            }
        },
        {
            name: 'Pero',
            age: 3,
            education : {
                primary : 'OS Gradiska',
                highSchool : 'Gradiska'
            }
        },
        {
            name: 'Petar',
            age: 8,
            education : {
                primary : 'OS Bijeljina',
                highSchool : 'Bijeljina'
            }
        },
        {
            name: 'Marko',
            age: 14,
            education: {
                primary : 'OS Banjaluka',
                highSchool : 'Banjaluka'
            }
        },
        {
            name: 'Ana',
            age: 37,
            education : {
                primary : 'OS Trebinje',
                highSchool : 'Trebinje'
            }
        }
        ];

let findObj = people.find(obj => obj.age == 14);

console.log(findObj);

 let findSubObj = people.find(edu => edu.education.highSchool == 'Trebinje');

 console.log(findSubObj);


const animal = {
    name : 'Cat',
    color : 'black'
};

const keys = Object.keys(animal);

console.log(keys);

Object.keys(animal).forEach(key => {
    let value1 = animal[key];

    console.log(`${key}: ${value1}`);
});




const Brend = {
    name : 'Samsung',
    year : 2015,
    model : 'S3-Neo',
    proccesor : '1.6 GHz'
};

const values = Object.values(Brend);

console.log(values);

const name = {
    name : 'Joco',
    age : 23
};

const details = {
    job : 'developer',
    employer : 'Innovic'
};

const Multy = Object.assign(name, details);

console.log(Multy);

