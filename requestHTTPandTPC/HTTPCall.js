const requestPromise = require('request-promise');
//const request = require('request');

const options = {
    uri: 'http://www.recipepuppy.com/api/?oi=1&q=milk+cheese+salt&p=1',
    json: true
};
const options2 ={
    url: 'https://jsonplaceholder.typicode.com/todos/',
    json: true
};

requestPromise(options)
    .then((response) => {
        console.log(response)
    });
requestPromise(options2)
    .then((response) => {
        console.log(response);
    });