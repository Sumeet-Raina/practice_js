//Primitive/Value types
let name = 'Sumeet'; //String literal
let age = 32; // Number literal
let isApproved = true; //Boolean literal
let foo; // foo does not exist. It is not defined and has never been initialized
let bar = null; // bar is known to exist but it has no type or value
console.log("Hello World");
console.log(name);
console.log(age);
console.log(isApproved);
console.log(foo);
console.log(bar);

//Reference types
let person = { 
  name: "Sumeet",
  age: 32
}; //object literal
console.log(person);

//how to work with objects
//bracket notation
person['name'] = 'Saru';
console.log(person.name);
// dot notation
person.name = "Yash"; // changing the value of the name property using dot notation
console.log(person.name);

//Array literal
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 4;
console.log(selectedColors);
console.log(selectedColors[2]);
console.log(selectedColors[3]);
console.log(selectedColors.length);

function greeter(){
  console.log('Hello world');
}
greeter();

function greet(name ,lastName){ // name is parameter
  console.log(name + ' ' + lastName);
}
greet('Sumeet', 'Raina');//sumeet is argument