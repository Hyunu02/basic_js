// how to use var, let and const!

// with ES6 version let and const was added

// var - very basic, not much used (used in pre-ES6 versions of JS)
var dogName = 'Hyba';
console.log(dogName);

// let - signals that the variable can be reassinged a different value (preferred way)
let price;
let meal = 'Enchiladas';
console.log(meal);
meal = 'Burrito';
price = 350;
console.log(meal);
console.log(price);

// let (and even var) can be declared without assigning a value (init with undefined)

// const cannot be reassigned and must be assigned a value when declared
const entree = 'Enchiladas';

// there are: += -= *= and /=

// string concatenation
let myPet = 'armadillo';
console.log('I own a pet: ' + myPet + '.'); 

// string interpolation
const myName = 'Andre';
const myCity = 'SaoPaulo';

console.log(`My name is ${myName}. My favorite city is ${myCity}`);

// typeof variables!
let newVariable;
console.log(typeof newVariable);
newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);
newVariable = false;
console.log(typeof newVariable);

console.log('hi!'.length);
console.log('codeacademy'.toUpperCase());