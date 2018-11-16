// Example 20


const getNumberFunction  = () =>  {
    return Promise.resolve(4);
};
getNumberFunction().then(res => console.log(res));

// async - return Promise
async function getNumber () {
    return 4;
}
getNumber().then(res => console.log(res));

// await operator

async function f () {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve('Branislav'), 2000);
    });
    let res = await promise;
    console.log(res);
}

f();
const resolveAfter2Secund = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('Done'),1000)
    });
}

async function asyncCall () {
    console.log('calling');

    const rest = await resolveAfter2Secund();

    console.log(rest);
}
asyncCall();
