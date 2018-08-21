// This is a vital assignment as you get introduced to iterating over an array that contains Javascript Objects. 
//This is what you're going to do over and over again when you pull information from a database or API in the near future :)

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];


//How would you print/log John's age?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users[1].age);

//How would you print/log the name of the first object?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[0].name);

//How would you print/log the name and age of each user using a for loop?  Your output should look something like this

for (var i=0; i<users.length; ++i) {
    console.log(users[i].name + " - " + users[i].age);
}

//Michael - 37
//John - 30
//David - 27