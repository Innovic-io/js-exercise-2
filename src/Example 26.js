// Example 26

/*
* JSON - JavaScript Object Nation
*  is for exchanging and  storing data
*  When exchanging data between a browser and a server, the data can only be text.
*  JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.*/

//Sending date

const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;

//Recieved data

const myJSON = '{"name":"John", "age":31, "city":"New York"}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;

//Storing data

myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
