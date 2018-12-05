// Example 26

/*
* JSON - JavaScript Object Nation
*  is for exchanging and  storing data
*  When exchanging data between a browser and a server, the data can only be text.
*  JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.*/

//Sending date

const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);

//Recieved data

const myJSON2 = '{"name":"John", "age":31, "city":"New York"}';
const myObj2 = JSON.parse(myJSON2);

/*Storing data

myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem = myJSON;
*/

const people = {
    name: 'Maja',
    surname: 'Majic',
    age: 13,
};
const sendToJson = JSON.stringify(people);
// console.log(sendToJson);

let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);
// console.log(obj);
let JSoN = {
    "notifications": {
        "total": 3,
        "enabled": true
    },
    "events": [
        {
            "success": {
                "objectId": "5bdd6de4a9eb430b562c43b3",
                "clientId": "41801257-6d69-42e2-9056-07dc4f1e3d01",
            }
        },
        {
            "fail": {
                "objectId": "5bdd6de16652230b562c43b3",
                "clientId": "3a3720cd-e2a6-4ce5-94c6-6a0164ffbca2"
            }
        },
        {
            "pending": {
                "objectId": "5bd56de4a9eb430b562c43b3",
                "clientId": "009790cf-bcd7-4e2c-bd01-a2f9af5cc180"
            }
        }]
};


/*

const add = (ob) => {

    ob = JSoN.events.forEach((element) => {
        element[Object.keys(element)]["idfa"] = element[Object.keys(element)]["objectId"] + element[Object.keys(element)]["clientId"];

        return element;
    });

    return ob;
};

add(JSoN);
console.log(add());
console.log(JSoN.events);
*/
const deepCopy = (obj)=> JSON.parse(JSON.stringify(obj));

const res = Object.assign({}, JSoN, {
    events: JSoN.events
        .map((element) => Object.assign({}, ...Object.keys(element)
            .map((key) => Object.assign({}, element,
                { [key]: { ...element[key], idfa: element[key].objectId + element[key].clientId } })
            ))
        )
});

console.log('split9');
console.log(res.events);
console.log('split');
console.log(JSoN.events);
console.log('split2');

let object2 = Object.assign({}, JSoN);
JSoN.events.map((value) => {
    let result = value[Object.keys(value)]['objectId'] + value[Object.keys(value)]['clientId'];
    //console.log(s);
    object2.events.forEach(element => {

    })
  //  object2

    /*
    object2.events = Object.assign({'idfa': s}, JSoN.events.map((el)=>{

    }))
    */
   console.log(object2.events)
});


/*
const add = () => {
    let ap = JSoN['events'];
    for (let i in ap) {
        //   console.log(ap[i]);
        for (let j in ap[i]) {
            // console.log(ap[i][j]);
            let obj = ap[i][j];
            Object.assign( obj, { "idfa": obj.objectId + obj.clientId });
            console.log(obj)
        }
    }
};
add();



//Object.assign(JSoN.events[0].success, {"idfa" : JSoN.events[0].success.objectId + JSoN.events[0].success.clientId});
//console.log(JSoN.events);

/*
console.log(JSoN.notifications.total + ' is ' + JSoN.notifications.enabled);
JSoN.notifications.total JSoN.events= 5;
console.log(JSoN);
JSoN.notifications.enabled = false;
console.log(JSoN);
JSoN.events[0].success.objectId = "7u64jh788965jh7e587";
console.log(JSoN.events[0].success.objectId);


for(let i in JSoN.events){
    console.log(JSoN.events);
}
console.log("Total: " + JSoN.notifications.total);
console.log("Enabled : " + JSoN.notifications.enabled);
console.log("Object Id : " + JSoN.events[0].success.objectId);
console.log("Client Id: " + JSoN.events[0].success.clientId);

JSoN.events.pop();
console.log(JSoN);

JSoN.events.push({"id ": '1122'});
JSoN.events.push({"name ": "Marko"});

console.log(JSoN.events);

JSoN = {...JSoN, "color": "red"};

console.log(JSoN);
*/
