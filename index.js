//what is JS?
//JS is a programming language that is used to make web pages interactive
//JS is used to add functionality to web pages
//JS is used to create web applications
//JS is used to create mobile applications
//JS is used to create desktop applications

//where does JS run?
//JS code can run in any browser (inspect element -> console)
//JS code can run on the server using Node.js( run -> node filename.js)

//difference ecmascript and javascript
//ECMAScript is a standard for scripting languages like JavaScript
//JavaScript is an implementation of the ECMAScript standard

// How to print in JS
console.log('Hello world-js ');

//variables in JS
let name = 'GP'
console.log(name)

//rules for creating variables
//1. cannot start with numbers
//2. can start with _ or $
//3. cannot have spaces in between
//4. cannot use reserved keywords
//5. use camelCase for creating variables
//6. variable names are case sensitive
//7. should be meaningful

//Dclaration of multiple variables in a single line
let firstName = 'Guruprasad', lastName = 'G M';

//another way(best practice)
let fName = 'Guruprasad'
let surName = 'G M'

let interestRate = 0.3;
interestRate = 1; //updated value
console.log(interestRate); //1


const pi = 3.14; //constant value
//pi = 1; //cannot reassign a constant value
console.log(pi); //error: cannot change the value of constant

//primitive types:
// number, string, boolean, undefined, null



//examples of primitive types
let person = 'GP'; //string literal
let age = 22; //number literal
let isApproved = false; //boolean literal
let firstName1 = undefined;
let SelectedColor = null;

//dynamic typing
let myVariable = 10;
console.log(typeof myVariable); //number
myVariable = 'GP';
console.log(typeof myVariable); //string
myVariable = true;
console.log(typeof myVariable); //boolean
myVariable = null;
console.log(typeof myVariable);  //object
myVariable = undefined;
console.log(typeof myVariable);  //undefined - it is a Value and a Type


//reference types:
//object, array, function

//object - is a collection of key-value pairs
let person1 = {
    name: 'GP',
    age: 22
};
console.log(person1); //{ name: 'GP', age: 22 }

//dot notation (best practice)
person1.name = 'Guruprasad';
console.log(person1.name); //Guruprasad

//bracket notation

person1[age] = 23;
console.log(person1.age); //23

//use of bracket notation - at runtime user can decide which property to access
let selection = 'name';
person1[selection] = 'G M';
console.log(person1.name); //G M

//arrays - used to store multiple values in a single variable
let selectedColors = ['red', 'blue'];
console.log(selectedColors); //['red', 'blue']
console.log(selectedColors[0]); //red (index wise access)
console.log(selectedColors.length); //2 (length of the array)
selectedColors[2] = 'green'; //adding new element
console.log(selectedColors); //['red', 'blue', 'green']
selectedColors.push('yellow'); //adding new element at the end
console.log(selectedColors);


//functions - perform a task or calculate a value

//performing a task
function greet() {
    console.log('functions in js');
}
greet(); //function call

function greet1(name, lastName) { //parameters
    console.log('Hello ' + name + ' ' + lastName);
}
greet1('Guruprasad', 'G M'); //arguments
greet1('John', 'Wick'); // hello John Wick
greet1('Mary');// hello Mary undefined

//calculating a value
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number); //store and print
console.log(square(3)); //direct print